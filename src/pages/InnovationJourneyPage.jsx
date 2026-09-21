import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  FileCheck2,
  FolderKanban,
  Lightbulb,
  Loader2,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import ProgressBar from "../components/ProgressBar";
import StatusBadge from "../components/StatusBadge";
import { innovationJourney } from "../data/journeyData";

const iconMap = {
  Lightbulb,
  BookOpen: Sparkles,
  FlaskConical: Sparkles,
  Search: FolderKanban,
  GitCompare: FolderKanban,
  AlertTriangle: ShieldCheck,
  ShieldCheck,
  LockKeyhole: ShieldCheck,
  FileText: FileCheck2,
  Users: Sparkles,
  FolderKanban,
  ClipboardCheck: FileCheck2,
  Route,
};

const stageActions = {
  1: [
    "Define your Ayurveda innovation",
    "Describe the problem being solved",
    "Identify the core innovation",
  ],
  2: [
    "Build your innovation profile",
    "Add ingredients and technical details",
    "Define application and use",
  ],
  3: [
    "Search existing knowledge",
    "Check Ayurveda research records",
    "Review supporting evidence",
  ],
  4: [
    "Search existing patents",
    "Compare similar inventions",
    "Review prior-art signals",
  ],
  5: [
    "Compare technical features",
    "Review similarity indicators",
    "Identify possible overlap",
  ],
  6: [
    "Assess preliminary IP risks",
    "Check novelty signals",
    "Review traditional knowledge overlap",
  ],
  7: [
    "Identify missing evidence",
    "Review clinical evidence",
    "Review safety and efficacy evidence",
  ],
  8: [
    "Check relevant regulatory pathway",
    "Review AYUSH requirements",
    "Identify compliance information",
  ],
  9: [
    "Select possible IP protection",
    "Review patent pathway",
    "Consider documentation strategy",
  ],
  10: [
    "Prepare innovation dossier",
    "Organize technical information",
    "Compile supporting records",
  ],
  11: [
    "Prepare patent information",
    "Draft technical sections",
    "Review draft claims",
  ],
  12: [
    "Connect with relevant experts",
    "Request professional review",
    "Prepare consultation information",
  ],
  13: [
    "Review commercialization readiness",
    "Track innovation development",
    "Plan future actions",
  ],
};

function InnovationJourneyPage({
  innovation,
  currentStep = 1,
  completedSteps = [],
  onContinue,
}) {
  const [selectedStep, setSelectedStep] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);

  const completedSet = useMemo(
    () => new Set(completedSteps),
    [completedSteps]
  );

  const completedCount = innovationJourney.filter((step) =>
    completedSet.has(step.id)
  ).length;

  const progress = Math.round(
    (completedCount / innovationJourney.length) * 100
  );

  const activeStep =
    innovationJourney.find((step) => step.id === currentStep) ||
    innovationJourney[0];

  const displayStep =
    innovationJourney.find((step) => step.id === selectedStep) ||
    activeStep;

  const ActiveIcon =
    iconMap[displayStep?.icon] || Sparkles;

  const openStage = async (step) => {
    setSelectedStep(step.id);
    setDetail(null);
    setLoading(true);

    const fallback = {
      id: step.id,
      number: step.number,
      title: step.title,
      description: step.description,
      status: completedSet.has(step.id)
        ? "Completed"
        : step.id === currentStep
        ? "Current Stage"
        : "Upcoming",
      actions:
        stageActions[step.id] || [
          "Review this stage",
          "Add relevant information",
          "Continue to the next stage",
        ],
      innovationTitle:
        innovation?.title || "Your Ayurveda Innovation",
      source: "Local Journey Workspace",
    };

    try {
      const response = await fetch(
        `http://localhost:4000/api/innovation-journey/${step.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stepId: step.id,
            stepNumber: step.number,
            title: step.title,
            innovation: innovation || {},
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Backend route unavailable");
      }

      const data = await response.json();

      setBackendConnected(true);

      setDetail({
        ...fallback,
        ...data,
        actions:
          data.actions ||
          fallback.actions,
      });
    } catch (error) {
      setBackendConnected(false);
      setDetail(fallback);
    } finally {
      setLoading(false);
    }
  };

  const closeStage = () => {
    setSelectedStep(null);
    setDetail(null);
  };

  const continueFromStage = () => {
    if (displayStep?.id < innovationJourney.length) {
      const next =
        innovationJourney.find(
          (step) => step.id === displayStep.id + 1
        );

      if (next) {
        openStage(next);
        return;
      }
    }

    if (onContinue) {
      onContinue();
    }
  };

  if (selectedStep && detail) {
    const DetailIcon =
      iconMap[displayStep?.icon] || Sparkles;

    return (
      <main className="page-content">

        <button
          type="button"
          className="secondary-btn"
          onClick={closeStage}
          style={{
            marginBottom: "18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <ArrowLeft size={17} />
          Back to Innovation Journey
        </button>

        <section className="journey-command-center">
          <div className="journey-command-content">
            <div className="module-kicker">
              <DetailIcon size={16} />
              STAGE {detail.number}
            </div>

            <h1>{detail.title}</h1>

            <p>
              {detail.description ||
                "Review and complete this stage of your innovation journey."}
            </p>

            <div
              className="journey-command-meta"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <StatusBadge
                status={
                  detail.status ||
                  "Innovation Workspace"
                }
              />

              <span>
                {backendConnected ? (
                  <>
                    <CheckCircle2 size={15} />
                    Backend Connected
                  </>
                ) : (
                  <>
                    <Sparkles size={15} />
                    Local Workspace
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="journey-command-score">
            <div className="journey-score-ring">
              <div>
                <strong>
                  {String(detail.number).padStart(2, "0")}
                </strong>
                <span>Stage</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-panel" style={{ marginTop: "20px" }}>

          <div className="panel-heading">
            <div>
              <span className="section-eyebrow">
                STAGE WORKSPACE
              </span>

              <h2>
                {detail.title}
              </h2>
            </div>

            {loading && (
              <Loader2
                size={20}
                className="journey-spin"
              />
            )}
          </div>

          <div
            style={{
              marginTop: "18px",
              padding: "18px",
              borderRadius: "15px",
              background: "#f5faf6",
              border: "1px solid #dce9df",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "10px",
                fontWeight: 800,
                color: "#718078",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "6px",
              }}
            >
              Innovation
            </span>

            <strong
              style={{
                color: "#214b31",
                fontSize: "15px",
              }}
            >
              {detail.innovationTitle ||
                innovation?.title ||
                "Your Ayurveda Innovation"}
            </strong>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "13px",
              marginTop: "18px",
            }}
          >
            {(detail.actions || []).map(
              (action, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    if (onContinue) {
                      onContinue({
                        step: detail.id,
                        action,
                      });
                    }
                  }}
                  style={{
                    textAlign: "left",
                    padding: "17px",
                    borderRadius: "15px",
                    border: "1px solid #dce8df",
                    background: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      background: "#e5f3e9",
                      color: "#287047",
                      fontWeight: 800,
                      fontSize: "11px",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    style={{
                      flex: 1,
                      color: "#31543e",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {action}
                  </span>

                  <ArrowRight
                    size={16}
                    color="#849088"
                  />
                </button>
              )
            )}
          </div>

          <div
            style={{
              marginTop: "22px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className="secondary-btn"
              onClick={closeStage}
            >
              Back
            </button>

            <button
              type="button"
              className="primary-btn"
              onClick={continueFromStage}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {displayStep.id <
              innovationJourney.length
                ? "Open Next Stage"
                : "Continue Journey"}
              <ArrowRight size={17} />
            </button>
          </div>

        </section>

        <style>{`
          .journey-spin {
            animation: journeySpin 1s linear infinite;
          }

          @keyframes journeySpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="page-content">

      <SectionHeader
        eyebrow="INNOVATION JOURNEY"
        title="My Ayurveda Innovation Journey"
        description="A connected path from your first innovation idea to evidence discovery, prior-art analysis, IP preparation and future development."
      />

      <section className="journey-command-center">
        <div className="journey-command-content">
          <div className="module-kicker">
            <Route size={16} />
            YOUR INNOVATION COMMAND CENTER
          </div>

          <h1>
            From <span>idea</span> to a structured innovation journey.
          </h1>

          <p>
            {innovation?.title
              ? `You are building: ${innovation.title}`
              : "Start by defining your Ayurveda innovation and then move through each stage step by step."}
          </p>

          <div className="journey-command-meta">
            <StatusBadge
              status={
                progress === 100
                  ? "Journey Complete"
                  : "In Progress"
              }
            />

            <span>
              <CheckCircle2 size={15} />
              {completedCount} / {innovationJourney.length} stages completed
            </span>

            <span>
              <Sparkles size={15} />
              {backendConnected
                ? "Backend Connected"
                : "Click a stage to connect"}
            </span>
          </div>
        </div>

        <div className="journey-command-score">
          <div className="journey-score-ring">
            <div>
              <strong>{progress}%</strong>
              <span>Progress</span>
            </div>
          </div>
        </div>
      </section>

      <section className="progress-panel journey-progress-panel">
        <div className="progress-panel-header">
          <div>
            <span className="section-eyebrow">
              JOURNEY PROGRESS
            </span>

            <h3>Innovation Development Path</h3>
          </div>

          <strong>{progress}%</strong>
        </div>

        <ProgressBar value={progress} />

        <div className="progress-panel-footer">
          <span>
            Current stage: {activeStep.number} ·{" "}
            {activeStep.shortTitle}
          </span>

          <span>
            {innovationJourney.length - completedCount} stages remaining
          </span>
        </div>
      </section>

      <section className="active-journey-stage">
        <div className="active-stage-icon">
          <ActiveIcon size={30} />
        </div>

        <div className="active-stage-content">
          <span className="section-eyebrow">
            CURRENT STAGE · {activeStep.number}
          </span>

          <h2>{activeStep.title}</h2>

          <p>{activeStep.description}</p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => openStage(activeStep)}
        >
          Open Stage
          <ArrowRight size={17} />
        </button>
      </section>

      <section className="journey-timeline-panel content-panel">

        <div className="panel-heading">
          <div>
            <span className="section-eyebrow">
              {innovationJourney.length}-STAGE WORKFLOW
            </span>

            <h2>Your Innovation Path</h2>
          </div>

          <div className="journey-legend">
            <span>
              <i className="legend-dot completed" />
              Completed
            </span>

            <span>
              <i className="legend-dot active" />
              Current
            </span>

            <span>
              <i className="legend-dot upcoming" />
              Upcoming
            </span>
          </div>
        </div>

        <div className="full-journey-timeline">

          {innovationJourney.map((step, index) => {
            const Icon =
              iconMap[step.icon] || Sparkles;

            const completed =
              completedSet.has(step.id);

            const active =
              step.id === currentStep;

            const upcoming =
              !completed && !active;

            return (
              <button
                type="button"
                className={`full-journey-step ${
                  completed ? "completed" : ""
                } ${active ? "active" : ""} ${
                  upcoming ? "upcoming" : ""
                }`}
                key={step.id}
                onClick={() => openStage(step)}
                style={{
                  width: "100%",
                  border: 0,
                  background: "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  padding: 0,
                }}
              >

                <div className="full-journey-rail">

                  <div className="full-journey-node">

                    {completed ? (
                      <CheckCircle2 size={18} />
                    ) : active ? (
                      <Icon size={18} />
                    ) : (
                      <Circle size={17} />
                    )}

                  </div>

                  {index <
                    innovationJourney.length - 1 && (
                    <div className="full-journey-connector" />
                  )}

                </div>

                <div className="full-journey-card">

                  <div className="full-journey-card-top">

                    <span className="journey-number">
                      {step.number}
                    </span>

                    <span
                      className={`journey-stage-status ${
                        completed
                          ? "completed"
                          : active
                          ? "active"
                          : "upcoming"
                      }`}
                    >
                      {completed
                        ? "Completed"
                        : active
                        ? "Current Stage"
                        : "Upcoming"}
                    </span>

                  </div>

                  <div className="full-journey-card-body">

                    <div className="full-journey-icon">
                      <Icon size={20} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h3>{step.title}</h3>

                      <p>
                        {step.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      style={{
                        marginLeft: "auto",
                        flexShrink: 0,
                        color: "#8b9890",
                      }}
                    />

                  </div>

                </div>

              </button>
            );
          })}

        </div>
      </section>

      <section className="journey-final-grid">

        <div className="content-panel journey-next-panel">

          <div className="panel-heading">

            <div>
              <span className="section-eyebrow">
                NEXT ACTION
              </span>

              <h2>What should happen now?</h2>
            </div>

            <ArrowRight size={20} />

          </div>

          <div className="next-action-card">

            <div className="next-action-icon">
              <ActiveIcon size={23} />
            </div>

            <div>
              <span>
                Stage {activeStep.number}
              </span>

              <h3>
                {activeStep.title}
              </h3>

              <p>
                {activeStep.description}
              </p>
            </div>

          </div>

          <button
            type="button"
            className="primary-btn full-width-btn"
            onClick={() => openStage(activeStep)}
          >
            Open Current Stage
            <ArrowRight size={17} />
          </button>

        </div>

        <div className="content-panel journey-principles-panel">

          <div className="panel-heading">

            <div>
              <span className="section-eyebrow">
                JOURNEY PRINCIPLES
              </span>

              <h2>
                Keep the innovation traceable
              </h2>
            </div>

            <ShieldCheck size={20} />

          </div>

          <div className="journey-principle-list">

            <div>
              <CheckCircle2 size={17} />
              <span>
                Save evidence and source references at every stage.
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Record differences from existing knowledge and prior art.
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Keep draft IP material separate from official filing.
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Use qualified professionals for legal and regulatory decisions.
              </span>
            </div>

          </div>

        </div>

      </section>

      <section className="journey-end-banner">

        <div className="journey-end-icon">
          <Lightbulb size={25} />
        </div>

        <div>

          <span className="section-eyebrow">
            YOUR INNOVATION STORY
          </span>

          <h2>
            Discover → Validate → Compare → Protect → Develop
          </h2>

          <p>
            Every stage contributes to one connected innovation record
            instead of isolated screens.
          </p>

        </div>

        <button
          type="button"
          className="secondary-btn"
          onClick={() => openStage(activeStep)}
        >
          Continue
          <ArrowRight size={17} />
        </button>

      </section>

      <div className="module-disclaimer">
        <ShieldCheck size={16} />

        <span>
          Journey progress is a planning and documentation aid. It does not
          represent legal approval, patentability confirmation or regulatory
          clearance.
        </span>
      </div>

      <style>{`
        .full-journey-step:hover .full-journey-card {
          border-color: #a9cdb5 !important;
          background: #f5faf6 !important;
          transform: translateX(3px);
          box-shadow: 0 8px 20px rgba(40, 103, 68, .07);
        }

        .full-journey-step:hover .full-journey-icon {
          background: #dff0e4 !important;
          color: #24683f !important;
        }

        .full-journey-step {
          transition: .2s ease;
        }

        .journey-spin {
          animation: journeySpin 1s linear infinite;
        }

        @keyframes journeySpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-spin {
            animation: none;
          }

          .full-journey-step:hover .full-journey-card {
            transform: none;
          }
        }
      `}</style>

    </main>
  );
}

export default InnovationJourneyPage;