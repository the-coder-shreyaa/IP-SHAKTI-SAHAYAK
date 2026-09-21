import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock3,
  FileSearch,
  FlaskConical,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import api from "../services/api";

function Dashboard({
  innovation = {},
  journey = {},
  onStartJourney,
}) {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadSummary() {
      try {
        const data = await api.getDashboardSummary();

        if (mounted) {
          setSummary(data);
        }
      } catch (error) {
        console.error("Dashboard summary failed:", error);
      }
    }

    loadSummary();

    return () => {
      mounted = false;
    };
  }, []);

  const innovationName =
    innovation.name ||
    innovation.title ||
    "Your Ayurveda Innovation";

  const totalInnovations =
    summary?.total_innovations ?? 0;

  const analyzedInnovations =
    summary?.analyzed_innovations ?? 0;

  const novelty =
    summary?.average_novelty_score ?? 0;

  const readiness =
    summary?.average_ip_readiness_score ?? 0;

  const progress =
    totalInnovations > 0
      ? Math.min(
          100,
          Math.round(
            (analyzedInnovations / totalInnovations) * 100
          )
        )
      : 0;

  return (
    <div className="dashboard prototype-dashboard">

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <section className="dashboard-welcome">
        <div>
          <div className="dashboard-kicker">
            <Sparkles size={13} />
            IP SHAKTI SAHAYAK · INNOVATION INTELLIGENCE
          </div>

          <h1>
            Welcome to your
            <span> Innovation Workspace</span>
          </h1>

          <p>
            Discover, analyse and prepare your Ayurveda innovation
            for intellectual-property protection.
          </p>
        </div>

        <button
          className="dashboard-start-btn"
          onClick={onStartJourney}
        >
          <Sparkles size={16} />
          Continue Journey
          <ArrowRight size={16} />
        </button>
      </section>


      {/* =====================================================
          MAIN STATUS AREA
      ===================================================== */}

      <section className="dashboard-main-grid">

        {/* Innovation Card */}

        <div className="innovation-status-card">

          <div className="status-card-header">
            <div>
              <span className="card-kicker">
                CURRENT INNOVATION
              </span>

              <h2>{innovationName}</h2>
            </div>

            <div className="status-live">
              <span />
              ACTIVE
            </div>
          </div>

          <div className="innovation-description">
            {innovation.description ||
              "Define your innovation to begin knowledge discovery, prior-art analysis and IP readiness assessment."}
          </div>

          <div className="innovation-meta">

            <div>
              <span>TYPE</span>
              <strong>
                {innovation.type || "Not defined"}
              </strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>
                {innovation.focus || "Not defined"}
              </strong>
            </div>

            <div>
              <span>INGREDIENTS</span>
              <strong>
                {Array.isArray(innovation.ingredients)
                  ? innovation.ingredients.length
                  : innovation.ingredients
                    ? innovation.ingredients.split(",").length
                    : 0}
              </strong>
            </div>

          </div>
        </div>


        {/* Progress Circle */}

        <div className="dashboard-progress-card">

          <div className="card-kicker">
            JOURNEY PROGRESS
          </div>

          <div className="dashboard-progress-body">

            <div
              className="progress-ring"
              style={{
                "--progress":
                  `${progress * 3.6}deg`,
              }}
            >
              <div className="progress-ring-inner">
                <strong>{progress}%</strong>
                <span>PROGRESS</span>
              </div>
            </div>

            <div className="progress-info">
              <h3>
                Innovation Journey
              </h3>

              <p>
                Move through each intelligence stage
                to build your complete IP profile.
              </p>

              <button
                className="small-outline-btn"
                onClick={onStartJourney}
              >
                Open Journey
                <ChevronRight size={14} />
              </button>
            </div>

          </div>
        </div>

      </section>


      {/* =====================================================
          INTELLIGENCE METRICS
      ===================================================== */}

      <section className="dashboard-section-title">

        <div>
          <span className="card-kicker">
            INTELLIGENCE SNAPSHOT
          </span>

          <h2>
            Your Innovation at a Glance
          </h2>
        </div>

        <div className="section-line" />
      </section>


      <section className="intelligence-grid">

        <div className="intelligence-card green-card">
          <div className="intelligence-icon">
            <Lightbulb size={19} />
          </div>

          <div>
            <span>ACTIVE INNOVATIONS</span>
            <strong>{totalInnovations}</strong>
            <small>
              Stored in workspace
            </small>
          </div>
        </div>


        <div className="intelligence-card cyan-card">
          <div className="intelligence-icon">
            <FileSearch size={19} />
          </div>

          <div>
            <span>ANALYSED</span>
            <strong>{analyzedInnovations}</strong>
            <small>
              Innovation analyses
            </small>
          </div>
        </div>


        <div className="intelligence-card yellow-card">
          <div className="intelligence-icon">
            <Target size={19} />
          </div>

          <div>
            <span>AVERAGE NOVELTY</span>
            <strong>{novelty}%</strong>
            <small>
              Preliminary screening
            </small>
          </div>
        </div>


        <div className="intelligence-card purple-card">
          <div className="intelligence-icon">
            <ShieldCheck size={19} />
          </div>

          <div>
            <span>IP READINESS</span>
            <strong>{readiness}%</strong>
            <small>
              Preliminary readiness
            </small>
          </div>
        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="dashboard-section-title journey-title">

        <div>
          <span className="card-kicker">
            CONNECTED WORKFLOW
          </span>

          <h2>
            From Ayurveda Idea to IP Readiness
          </h2>
        </div>

        <button
          className="text-action"
          onClick={onStartJourney}
        >
          View Journey
          <ArrowRight size={14} />
        </button>

      </section>


      <section className="dashboard-journey-grid">

        <JourneyBox
          number="01"
          icon={<BookOpen size={19} />}
          title="Knowledge Discovery"
          description="Explore classical Ayurveda and traditional knowledge."
          color="green"
          status="READY"
        />

        <JourneyBox
          number="02"
          icon={<FlaskConical size={19} />}
          title="Research & Evidence"
          description="Identify scientific evidence and supporting literature."
          color="cyan"
          status="READY"
        />

        <JourneyBox
          number="03"
          icon={<FileSearch size={19} />}
          title="Prior-Art Search"
          description="Compare your innovation with existing patent records."
          color="yellow"
          status="NEXT"
        />

        <JourneyBox
          number="04"
          icon={<ShieldCheck size={19} />}
          title="IP Readiness"
          description="Evaluate novelty, evidence and documentation gaps."
          color="purple"
          status="LOCKED"
        />

      </section>


      {/* =====================================================
          LOWER INTELLIGENCE PANELS
      ===================================================== */}

      <section className="dashboard-lower-grid">

        {/* What next */}

        <div className="dashboard-panel">

          <div className="panel-heading">

            <div>
              <span className="card-kicker">
                RECOMMENDED ACTION
              </span>

              <h2>
                What should you do next?
              </h2>
            </div>

            <Target size={20} />

          </div>


          <div className="next-action-card">

            <div className="next-action-icon">
              <FileSearch size={20} />
            </div>

            <div className="next-action-content">

              <span className="action-tag">
                NEXT RECOMMENDED STEP
              </span>

              <h3>
                Run a Prior-Art Search
              </h3>

              <p>
                Compare your innovation with existing
                patents and related formulations before
                moving towards an IP strategy.
              </p>

            </div>

            <button
              className="round-action"
              onClick={onStartJourney}
            >
              <ArrowRight size={16} />
            </button>

          </div>


          <div className="next-action-card">

            <div className="next-action-icon cyan">
              <FlaskConical size={20} />
            </div>

            <div className="next-action-content">

              <span className="action-tag">
                EVIDENCE
              </span>

              <h3>
                Strengthen Your Evidence Profile
              </h3>

              <p>
                Add research, experimental results and
                supporting evidence to your innovation dossier.
              </p>

            </div>

            <button
              className="round-action"
              onClick={onStartJourney}
            >
              <ArrowRight size={16} />
            </button>

          </div>

        </div>


        {/* Workspace activity */}

        <div className="dashboard-panel">

          <div className="panel-heading">

            <div>
              <span className="card-kicker">
                WORKSPACE
              </span>

              <h2>
                Recent Activity
              </h2>
            </div>

            <Clock3 size={19} />

          </div>


          <Activity
            icon={<Lightbulb size={15} />}
            title="Innovation workspace active"
            text="Your innovation profile is available."
          />

          <Activity
            icon={<BookOpen size={15} />}
            title="Knowledge discovery"
            text="Explore Ayurveda and traditional knowledge."
          />

          <Activity
            icon={<FileSearch size={15} />}
            title="Prior-art intelligence"
            text="Search and compare existing records."
          />

          <Activity
            icon={<TrendingUp size={15} />}
            title="IP readiness"
            text="Build towards a complete innovation dossier."
          />

        </div>

      </section>


      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}

      <div className="dashboard-disclaimer">
        <ShieldCheck size={14} />

        <span>
          IP readiness indicators are preliminary screening
          insights and should not be treated as legal advice.
        </span>
      </div>

    </div>
  );
}


/* =========================================================
   JOURNEY BOX
   ========================================================= */

function JourneyBox({
  number,
  icon,
  title,
  description,
  color,
  status,
}) {
  return (
    <article
      className={`dashboard-journey-box ${color}`}
    >

      <div className="journey-box-top">

        <span className="journey-box-number">
          {number}
        </span>

        <div className="journey-box-icon">
          {icon}
        </div>

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="journey-box-bottom">

        <span className="journey-status">
          {status}
        </span>

        <ChevronRight size={15} />

      </div>

    </article>
  );
}


/* =========================================================
   ACTIVITY
   ========================================================= */

function Activity({
  icon,
  title,
  text,
}) {
  return (
    <div className="dashboard-activity">

      <div className="activity-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <ChevronRight size={14} />

    </div>
  );
}

export default Dashboard;