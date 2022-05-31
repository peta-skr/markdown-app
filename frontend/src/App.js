import { useCallback, useState, useEffect } from "react";
import Editor from "./components/editor/Editor";
import Sidebar from "./components/sidebar/Sidebar";

import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";

import "./app.css";

export default function App() {
  console.log("app rendering");

  const [openFiles, setOpenFiles] = useState([]);

  const [theme, setTheme] = useState("dark");

  const [mode, setMode] = useState("create");
  const [preview, setPreview] = useState(true);
  const [activeFile, setActiveFile] = useState({ id: "", title: "", text: "" });

  return (
    <ChakraProvider>
      <div className="container">
        <div className="sidebar">
          <Sidebar
            setMode={setMode}
            openFiles={openFiles}
            setOpenFiles={setOpenFiles}
          />
        </div>
        <div className="editor">
          <Editor
            theme={theme}
            preview={preview}
            setPreview={setPreview}
            mode={mode}
            setMode={setMode}
            openFiles={openFiles}
            setOpenFiles={setOpenFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
        </div>
      </div>
    </ChakraProvider>
  );
}
