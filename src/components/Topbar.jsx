import {
  Bell,
  Search,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const jurisdictions = [
  "🇮🇳 India",
  "🇺🇸 USA",
  "🇬🇧 UK",
  "🇪🇺 European Union",
  "🇨🇦 Canada",
  "🇦🇺 Australia",
  "🌐 Other",
];

function Topbar() {
  const { language, setLanguage, t } = useLanguage();

  const jurisdiction =
    localStorage.getItem("ip_jurisdiction") ||
    "🇮🇳 India";

  const changeJurisdiction = (value) => {
    localStorage.setItem("ip_jurisdiction", value);

    window.dispatchEvent(
      new CustomEvent("ip-jurisdiction-change", {
        detail: value,
      })
    );
  };

  return (
    <header className="topbar">

      {/* SEARCH */}
      <div className="topbar-search">
        <Search size={18} />

        <input
          type="text"
          placeholder={t("searchPlaceholder")}
        />

        <span className="search-shortcut">
          ⌘ K
        </span>
      </div>

      <div className="topbar-actions">

        {/* LANGUAGE */}
        <div className="topbar-select">
          <span>{t("language")}</span>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            aria-label="Select language"
          >
            <option value="English">
              English
            </option>

            <option value="हिन्दी">
              हिन्दी
            </option>

            <option value="Hinglish">
              Hinglish
            </option>
          </select>
        </div>

        {/* JURISDICTION */}
        <div className="topbar-select jurisdiction-select">
          <span>{t("jurisdiction")}</span>

          <select
            value={jurisdiction}
            onChange={(e) =>
              changeJurisdiction(e.target.value)
            }
            aria-label="Select jurisdiction"
          >
            {jurisdictions.map((country) => (
              <option
                key={country}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* AI INSIGHTS */}
        <button
          type="button"
          className="ai-button"
        >
          <Sparkles size={16} />
          <span>{t("aiInsights")}</span>
        </button>

        {/* NOTIFICATION */}
        <button
          type="button"
          className="icon-button"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        {/* PROFILE */}
        <div className="profile-menu">
          <div className="profile-avatar">
            SM
          </div>

          <div className="profile-info">
            <strong>Innovation User</strong>
            <span>Researcher</span>
          </div>

          <ChevronDown size={16} />
        </div>

      </div>

      <style>{`
        .topbar-select {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .topbar-select > span {
          font-size: 9px;
          font-weight: 800;
          color: #718078;
          text-transform: uppercase;
          letter-spacing: .6px;
        }

        .topbar-select select {
          appearance: auto;
          border: 1px solid #d7e4db;
          border-radius: 8px;
          padding: 7px 8px;
          background: #f8fbf9;
          color: #244d33;
          font-size: 11px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          max-width: 125px;
        }

        .topbar-select select:hover {
          border-color: #9fbea9;
        }

        .topbar-select select:focus {
          border-color: #79a88a;
          box-shadow:
            0 0 0 3px rgba(64, 119, 78, .08);
        }

        .jurisdiction-select select {
          max-width: 145px;
        }

        @media (max-width: 1100px) {
          .topbar-select > span {
            display: none;
          }

          .topbar-select select {
            max-width: 110px;
          }

          .jurisdiction-select select {
            max-width: 125px;
          }
        }

        @media (max-width: 850px) {
          .topbar-select {
            display: none;
          }
        }
      `}</style>

    </header>
  );
}

export default Topbar;