import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import render from "./render";
import config from "@/config";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({ target: config.backendSeverURL, changeOrigin: true })
);

app.use(express.static("public"));

app.get("*", render);

app.listen(2000, () => {
  console.log("serve start 2000");
});
