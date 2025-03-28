import React, { useState } from "react";
import { DashboardMenu } from "@Components";
import { DashboardContent } from "@Components";

function DashboardPage() {
  const [selectedSection, setSelectedSection] = useState("URL");
  return (
    <>
      <section className="bg-background roundeBd-xl px-6 py-8 flex flex-col items-center justify-center gap-6">
        <DashboardMenu
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <DashboardContent selectedSection={selectedSection} />
      </section>
    </>
  );
}

export { DashboardPage };
