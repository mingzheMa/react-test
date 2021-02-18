import React from "react";
import reactDom from "react-dom/server";

import App from "@/App";

export default (req, res) => {
  const app = reactDom.renderToString(<App />);
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
          <div id="root">${app}</div>
      </body>
      </html>
    `;
  res.send(template);
};
