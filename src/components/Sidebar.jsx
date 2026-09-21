import {
  Activity,
  BookOpen,
  BrainCircuit,
  ChevronRight,
  ClipboardCheck,
  FileText,
  FolderKanban,
  FlaskConical,
  Home,
  Leaf,
  Lightbulb,
  Map,
  Route,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const workspaceNavigation = [
  {
    key: "innovationOverview",
    label: "Innovation Overview",
    path: "/innovation",
    icon: Lightbulb,
  },
  {
    key: "knowledge",
    label: "Traditional Knowledge (TKDL)",
    path: "/knowledge",
    icon: BookOpen,
  },
  {
    key: "research",
    label: "Research & Evidence",
    path: "/research",
    icon: FlaskConical,
  },
  {
    key: "priorArt",
    label: "Prior-Art Search",
    path: "/prior-art",
    icon: Search,
  },
  {
    key: "similarity",
    label: "Similarity Analysis",
    path: "/similarity",
    icon: BrainCircuit,
  },
  {
    key: "evidenceGap",
    label: "Evidence Gap",
    path: "/evidence-gap",
    icon: ClipboardCheck,
  },
  {
    key: "ipReadiness",
    label: "IP Readiness",
    path: "/ip-readiness",
    icon: ShieldCheck,
  },
  {
    key: "ipStrategy",
    label: "IP Strategy",
    path: "/innovation/ip-strategy",
    icon: BrainCircuit,
  },
  {
    key: "patentPreparation",
    label: "Patent Preparation",
    path: "/patent-preparation",
    icon: FileText,
  },
  {
    key: "expertReview",
    label: "Expert Connect",
    path: "/expert-connect",
    icon: Users,
  },
  {
    key: "dossier",
    label: "Innovation Dossier",
    path: "/dossier",
    icon: FolderKanban,
  },
  {
    key: "preFiling",
    label: "Pre-Filing Checklist",
    path: "/pre-filing",
    icon: ClipboardCheck,
  },
  {
    key: "roadmap",
    label: "Innovation Roadmap",
    path: "/innovation/roadmap",
    icon: Map,
  },
];

const journeyNavigation = [
  {
    key: "innovationJourney",
    label: "Innovation Journey",
    path: "/innovation/journey",
    icon: Route,
  },
];

function SidebarNavItem({ item, t }) {
  const Icon = item.icon;

  const translatedLabel =
    item.key === "knowledge"
      ? "Traditional Knowledge (TKDL)"
      : item.key === "expertReview"
        ? "Expert Connect"
        : t(item.key) || item.label;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? "active" : ""}`
      }
      title={translatedLabel}
    >
      <span className="sidebar-link-icon">
        <Icon size={16} strokeWidth={2} />
      </span>

      <span className="sidebar-link-text">
        {translatedLabel}
      </span>

      <ChevronRight
        size={13}
        strokeWidth={2}
        className="sidebar-link-arrow"
        aria-hidden="true"
      />
    </NavLink>
  );
}

function Sidebar() {
  const { t } = useLanguage();

  return (
    <aside className="sidebar">
      {/* BRAND */}
      <div className="sidebar-brand">
        <div
          className="brand-mark"
          style={{
            color: "#3f7d4a",
            background: "rgba(63, 125, 74, 0.12)",
          }}
        >
          <Leaf size={20} strokeWidth={2.2} />
        </div>

        <div className="brand-text">
          <strong>IP SHAKTI</strong>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            सहायक
          </span>
        </div>
      </div>

      {/* ACTIVE WORKSPACE */}
      <div className="sidebar-innovation-card">
        <div className="innovation-card-icon">
          <Activity size={16} strokeWidth={2} />
        </div>

        <div className="innovation-card-text">
          <span>{t("activeWorkspace")}</span>
          <strong>Innovation Engine</strong>
        </div>

        <span className="workspace-status-dot" />
      </div>

      {/* NAVIGATION */}
      <nav
        className="sidebar-nav"
        aria-label="Primary navigation"
      >
        {/* WORKSPACE */}
        <div className="sidebar-section">
          <div className="sidebar-section-label">
            <span>{t("workspace")}</span>

            <span className="sidebar-section-count">
              {workspaceNavigation.length}
            </span>
          </div>

          <div className="sidebar-nav-list">
            {workspaceNavigation.map((item) => (
              <SidebarNavItem
                key={item.path}
                item={item}
                t={t}
              />
            ))}
          </div>
        </div>

        {/* JOURNEY */}
        <div className="sidebar-section sidebar-journey-section">
          <div className="sidebar-section-label">
            <span>{t("journey")}</span>
          </div>

          <div className="sidebar-nav-list">
            {journeyNavigation.map((item) => (
              <SidebarNavItem
                key={item.path}
                item={item}
                t={t}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* BOTTOM */}
      <div className="sidebar-bottom">
        {/* JOURNEY PROGRESS */}
        <div className="sidebar-progress-card">
          <div className="sidebar-progress-top">
            <div>
              <span>{t("journeyProgress")}</span>

              <strong>
                {t("innovationPipeline")}
              </strong>
            </div>

            <span className="sidebar-progress-count">
              13
            </span>
          </div>

          <div className="sidebar-progress-track">
            <div className="sidebar-progress-fill" />
          </div>

          <p>
            {t("journeyProgressDescription")}
          </p>
        </div>

        {/* DASHBOARD */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `sidebar-home-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-home-icon">
            <Home size={16} strokeWidth={2} />
          </span>

          <span>{t("dashboard")}</span>

          <ChevronRight
            size={13}
            strokeWidth={2}
            className="sidebar-link-arrow"
            aria-hidden="true"
          />
        </NavLink>

        {/* FOOTER */}
        <div className="sidebar-footer">
          <FileText size={13} strokeWidth={1.8} />

          <span>
            {t("platformName")}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;