import { createElement, useEffect, useState } from "react";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import { Container, Card, Row, Text, Button, Grid } from "@nextui-org/react";

import "./preview.css";

import "./highlightTheme/github.scss";

import "./github/github.scss";

const Preview = (props) => {
  const { text, theme } = props;
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
        .processSync(text.text).result;
      setMd(re);
    } catch (error) {
      console.log(error);
    }
  }, [text]);

  return (
    <Container className={theme} fluid css={{ m: 0, p: 0, overflow: "auto" }}>
      <Grid xs={12}>
        <div
          style={{ height: "100%", paddingLeft: 5, background: "transparent" }}
          className="markdown-body"
        >
          {md}
        </div>
      </Grid>
    </Container>
  );
};

export default Preview;
