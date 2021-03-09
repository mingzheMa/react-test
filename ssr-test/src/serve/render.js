import initStore from "./initStore";
import getTemplate from "./getTemplate";
import { getStore } from "@/store";

export default async (req, res) => {
  const store = getStore();
  await initStore(req, store);

  const context = {};
  const template = getTemplate(req, context, store);

  if (context.statusCode) {
    res.status(context.statusCode);
  }

  if (context.action == "REPLACE") {
    res.status(301);
  }

  res.send(template);
};
