import React from "react";
import ReactDOM from "react-dom/server";

import fs from "fs";
import App from "@/serve/App";

export default (req, res) => {
  const script = fs
    .readdirSync("./public/js")
    .filter(file => file.endsWith(".js"))
    .map(file => `<script src="/js/${file}"></script>`)
    .join("\n");

  const link = fs
    .readdirSync("./public/css")
    .filter(file => file.endsWith(".css"))
    .map(file => `<link rel="stylesheet" href="/css/${file}"></link>`)
    .join("\n");

  const template = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="ssr test" />
          <title>React SSR</title>
          ${link}
      </head>
      <body>
          <div id="root">${ReactDOM.renderToString(<App location={req.path} context={{}} />)}</div>
          ${script}
      </body>
      </html>
    `;
  res.send(template);
};
