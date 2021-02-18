import express from "express";

import render from "./render";

const app = express();

app.use(express.static("public"));

app.get("*", render);

app.listen(2000, () => {
  console.log("serve start 2000");
});
