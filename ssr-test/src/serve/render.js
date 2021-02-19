import React from "react";
import ReactDOM from "react-dom/server";

import fs from "fs";
import App from "@/serve/App";

export default (req, res) => {
  const result = fs
    .readdirSync("./public/js")
    .filter(file => file.endsWith(".js"))
    .map(file => `<script src="./js/${file}"></script>`)
    .join("\n");

  const template = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="ssr test" />
          <title>React SSR</title>
      </head>
      <body>
          <div id="root">${ReactDOM.renderToString(<App />)}</div>
          ${result}
      </body>
      </html>
    `;
  res.send(template);
};
