import React, { createElement, useEffect, useState } from "react";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

import { unified } from "unified";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import { useSelector, useDispatch } from "react-redux";
import {
  changeText,
  changeTitle,
  saveText,
  updateText,
  getTexts,
  selectText,
} from "../../features/textSlice";

import { AiOutlineClose } from "react-icons/ai";

import "./highlightTheme/github.scss";

import "./github/github.scss";

import "./editor.css";

export const transparentTheme = EditorView.theme({
  "&": {
    backgroundColor: "transparent !important",
    height: "100%",
    width: "100%",
  },
});

const Editor = (props) => {
  const {
    theme,
    preview,
    setPreview,
    mode,
    setMode,
    openFiles,
    setOpenFiles,
    activeFile,
    setActiveFile,
  } = props;

  const textItem = useSelector((state) => state.text);
  const dispatch = useDispatch();

  console.log("editor rendering");
  console.log(textItem.text);

  const [md, setMd] = useState("");

  useEffect(() => {
    try {
      const re = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeReact, {
          createElement,
        })
        .processSync(textItem.text.text).result;
      setMd(re);
    } catch (error) {
      console.log(error);
    }
  }, [textItem]);

  const removeFile = (item) => {
    setOpenFiles(openFiles.filter((file) => file._id !== item._id));
  };

  return (
    <div className="editor-container">
      {openFiles.length !== 0 ? (
        <>
          <div className="toolbar">
            <Button
              colorScheme="blue"
              // css={{ marginRight: "2rem", marginLeft: "auto" }}
              onClick={() => setPreview(!preview)}
            >
              preview
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                if (mode === "create") {
                  dispatch(saveText(textItem.text));
                } else {
                  console.log(textItem.text);
                  dispatch(updateText(textItem.text));
                }
              }}
            >
              save
            </Button>
          </div>
          <div>
            <Input
              placeholder="title"
              aria-label="title"
              value={textItem.text.title}
              onChange={(e) => {
                dispatch(changeTitle(e.target.value));
              }}
            />
          </div>
          {preview ? (
            <div
              style={{
                height: "100%",
                paddingLeft: 5,
                background: "transparent",
              }}
              className="markdown-body"
            >
              {md}
            </div>
          ) : (
            <div>
              <CodeMirror
                value={textItem.text.text}
                theme={theme === "dark" ? oneDark : "light"}
                extensions={[
                  javascript({ jsx: true }),
                  markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                    addKeymap: true,
                  }),
                  transparentTheme,
                ]}
                onChange={(value, newValue) => {
                  dispatch(changeText(value));
                }}
              />
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Editor;
