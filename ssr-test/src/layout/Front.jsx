import React from "react";

import { renderRoutes } from "react-router-config";
import FrontNav from "@/components/FrontNav";

export default function Front({ route }) {
  return (
    <div>
      <FrontNav />
      {renderRoutes(route.routes)}
    </div>
  );
}
