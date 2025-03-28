import React from "react";
import { Header } from "@Components/layout";
import { Dashboard, TableSection } from "@Components";

function DashboardLayout() {
  return (
    <main className="px-8">
      <Header />
      <Dashboard />
      <TableSection />
    </main>
  );
}

export { DashboardLayout };
