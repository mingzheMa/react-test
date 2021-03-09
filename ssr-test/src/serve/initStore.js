import { matchRoutes } from "react-router-config";

import routers from "@/routers";

export default async function (req, store) {
  const configs = matchRoutes(routers, req.path);
  const promise = configs.map(
    c => c.route.component.loadData && c.route.component.loadData(store)
  );
  return await Promise.all(promise);
}
