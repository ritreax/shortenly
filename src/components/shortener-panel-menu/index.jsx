import React from "react";

import { Button } from "@Components";
import { MENU } from "./constants";

function ShortenerPanelMenu({ setSelectedSection, selectedSection }) {
  return (
    <div className="flex items-center gap-2">
      {MENU.map((item) => (
        <Button
          key={item.id}
          onClick={() => setSelectedSection(item.title)}
          variant={
            selectedSection === item.title ? "active_menu_btn" : "menu_btn"
          }
          size="sm"
          icon={item.icon}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
}

export { ShortenerPanelMenu };
