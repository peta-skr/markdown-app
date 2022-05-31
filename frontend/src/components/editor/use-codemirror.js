import { EditorView } from "@codemirror/basic-setup";

const lightTheme = EditorView.theme({
  ".cm-s-base16-light.CodeMirror": {
    background: "#f5f5f5",
    color: "#202020",
  },
});

export { lightTheme };
