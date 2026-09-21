import { useState } from "react";

const jurisdictions = [
  { value: "India", label: "🇮🇳 India" },
  { value: "USA", label: "🇺🇸 USA" },
  { value: "UK", label: "🇬🇧 UK" },
  { value: "European Union", label: "🇪🇺 European Union" },
  { value: "Canada", label: "🇨🇦 Canada" },
  { value: "Australia", label: "🇦🇺 Australia" },
  { value: "Other", label: "🌐 Other Country" },
];

export default function LanguageJurisdictionBar() {
  const [language, setLanguage] = useState(
    localStorage.getItem("ip_language") || "English"
  );

  const [jurisdiction, setJurisdiction] = useState(
    localStorage.getItem("ip_jurisdiction") || "India"
  );

  const changeLanguage = (value) => {
    setLanguage(value);
    localStorage.setItem("ip_language", value);
    window.dispatchEvent(
      new CustomEvent("ip-language-change", {
        detail: value,
      })
    );
  };

  const changeJurisdiction = (value) => {
    setJurisdiction(value);
    localStorage.setItem("ip_jurisdiction", value);
    window.dispatchEvent(
      new CustomEvent("ip-jurisdiction-change", {
        detail: value,
      })
    );
  };

  return (
    <section className="lj-bar">

      <div className="lj-control">
        <span className="lj-label">LANGUAGE</span>

        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option>English</option>
          <option>हिन्दी</option>
          <option>Hinglish</option>
        </select>
      </div>

      <div className="lj-divider" />

      <div className="lj-control">
        <span className="lj-label">JURISDICTION</span>

        <select
          value={jurisdiction}
          onChange={(e) => changeJurisdiction(e.target.value)}
        >
          {jurisdictions.map((item) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <style>{`
        .lj-bar {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 12px 16px;
          margin: 0 0 16px;
          background: rgba(255,255,255,.92);
          border: 1px solid #dce8df;
          border-radius: 14px;
          box-shadow: 0 5px 16px rgba(37,75,52,.045);
        }

        .lj-control {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 180px;
        }

        .lj-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #718078;
          white-space: nowrap;
        }

        .lj-control select {
          border: 1px solid #d5e2d9;
          background: #f7faf8;
          color: #244d33;
          border-radius: 9px;
          padding: 7px 10px;
          font-size: 12px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
        }

        .lj-control select:focus {
          border-color: #77a889;
          box-shadow: 0 0 0 3px rgba(78,130,91,.08);
        }

        .lj-divider {
          width: 1px;
          height: 28px;
          background: #dfe8e2;
        }

        @media (max-width: 700px) {
          .lj-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }

          .lj-divider {
            width: 100%;
            height: 1px;
          }

          .lj-control {
            justify-content: space-between;
          }
        }
      `}</style>

    </section>
  );
}