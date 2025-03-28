import React from "react";
import { Url, Text, Image, Video, File } from "@Components/dashboard-section";

function DashboardContent({ selectedSection }) {
  return (
    <>
      {selectedSection === "URL" && <Url />}
      {selectedSection === "Text" && <Text />}
      {selectedSection === "Image" && <Image />}
      {selectedSection === "Video" && <Video />}
      {selectedSection === "File" && <File />}
    </>
  );
}

export { DashboardContent };
