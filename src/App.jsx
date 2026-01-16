import React from "react";
import Header from "/Users/him/Desktop/webdev/week10/ui-theme-selection/src/component/Header.jsx";
import SettingsPanel from "/Users/him/Desktop/webdev/week10/ui-theme-selection/src/component/SettingsPanel.jsx";
import PreviewCard from "/Users/him/Desktop/webdev/week10/ui-theme-selection/src/component/PreviewCard.jsx";
import { useSettings } from "/Users/him/Desktop/webdev/week10/ui-theme-selection/src/context/SettingsContext.jsx";

function AppShell() {
  const { theme } = useSettings();

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <Header />
        <div className="grid">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}

export default AppShell;