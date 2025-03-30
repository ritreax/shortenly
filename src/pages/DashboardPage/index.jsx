import React, { useState } from "react";
import { ShortenerPanelMenu } from "@Components";
import { ShortenerPanel } from "@Components";

function DashboardPage() {
  const [selectedSection, setSelectedSection] = useState("URL");
  return (
    <>
      <section className="bg-background roundeBd-xl px-6 py-8 flex flex-col items-center justify-center gap-6">
        <ShortenerPanelMenu
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <ShortenerPanel selectedSection={selectedSection} />
      </section>
    </>
  );
}

export { DashboardPage };
