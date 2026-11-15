# markdown-app

ブラウザで動くMarkdownエディタを作りかけたもの。編集にCodeMirror 6、プレビューにunified（remark / rehype）を使い、文書はExpress経由でMongoDBに保存する。エディタ部分は [craftzdog/electron-markdown-editor-tutorial](https://github.com/craftzdog/electron-markdown-editor-tutorial) を参考にした（`frontend/memo.txt`）。

コミットは1回だけで、未完成のまま止まっている。動くのは、MongoDBに入っている文書をサイドバーから開き、タイトルと本文を編集して保存すること、プレビュー（GFMの表やチェックリスト、コードのハイライト）に切り替えることまで。新規作成のダイアログと、サイドバーの一部（仮の見出しと仮の文言が残っている）は作りかけ。

## 動かし方

ローカルでMongoDBを起動しておく（接続先は `mongodb://localhost/markdown-editor` に固定）。

```sh
# API サーバ（http://localhost:5000）
cd server
npm install
npm start        # nodemon index.js

# 画面（http://localhost:3000）
cd frontend
npm install
npm start
```

## 使った技術

- 画面: React 18（Create React App）、Redux Toolkit（`createAsyncThunk` でAPIを呼ぶ）、Chakra UI、`@uiw/react-codemirror`（`@codemirror/lang-markdown`）、unified / remark-gfm / rehype-highlight / rehype-react、github-markdown-css
- サーバ: Express、Mongoose。`GET /` で一覧、`POST /` で作成、`PUT /` で更新する

## 学んだこと

- Markdown文字列をremarkで構文木にし、rehypeでHTMLの木に変えてからReact要素として描画する、unifiedのプラグインの組み立て方
