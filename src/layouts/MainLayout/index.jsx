import React from "react";

import { Main } from "@Components";
import { Header } from "@Components/layout";
import { Footer } from "@Components/layout";

function MainLayout() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

export { MainLayout };
