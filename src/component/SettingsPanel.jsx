import React from "react";
import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <section className="card">
      <h2 className="sectionTitle">Settings Panel</h2>

      <div className="row">
        <div>
          <div className="label">Theme</div>
          <div className="btnGroup">
            <button
              className={theme === "light" ? "btn active" : "btn"}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              className={theme === "dark" ? "btn active" : "btn"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>

        <div>
          <div className="label">Language</div>
          <div className="btnGroup">
            <button
              className={language === "en" ? "btn active" : "btn"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              className={language === "th" ? "btn active" : "btn"}
              onClick={() => setLanguage("th")}
            >
              TH
            </button>
          </div>
        </div>
      </div>

      <div className="divider" />

      <button className="btn danger" onClick={resetSettings}>
        Reset (defaults)
      </button>

      <p className="muted small">
        Saved to <code>localStorage</code> key: <code>app-settings</code>
      </p>
    </section>
  );
}