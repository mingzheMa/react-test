import React from "react";

import { renderRoutes } from "react-router-config";
import AdminNav from "@/components/AdminNav";

export default function Admin({ route }) {
  return (
    <div>
      <AdminNav />
      {renderRoutes(route.routes)}
    </div>
  );
}
