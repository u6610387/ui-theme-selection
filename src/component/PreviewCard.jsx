import React from "react";
import { useSettings } from "../context/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  const message =
    language === "th"
      ? "นี่คือหน้าตัวอย่างการตั้งค่า"
      : "This is your preference preview.";

  return (
    <section className="card">
      <h2 className="sectionTitle">
        {language === "th" ? "ตัวอย่างการตั้งค่า" : "Preference Preview"}
      </h2>

      <div className="kv">
        <div className="k">Current Theme</div>
        <div className="v">{theme}</div>

        <div className="k">Current Language</div>
        <div className="v">{language}</div>
      </div>

      <div className="previewBox">
        {message}
      </div>
    </section>
  );
}