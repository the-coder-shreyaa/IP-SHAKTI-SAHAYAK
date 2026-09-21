import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  FileCheck2,
  FlaskConical,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const roadmapSteps = [
  {
    id: 1,
    title: "Innovation Idea",
    short: "Define",
    icon: Lightbulb,
    status: "Completed",
    color: "green",
    desc: "Capture your Ayurveda innovation idea and define its core purpose.",
    actions: [
      "Define innovation title",
      "Identify problem being solved",
      "Describe core innovation",
      "Select Ayurveda domain",
    ],
  },
  {
    id: 2,
    title: "Innovation Profile",
    short: "Profile",
    icon: Target,
    status: "Completed",
    color: "green",
    desc: "Create a structured profile containing technical and application details.",
    actions: [
      "Technical field",
      "Ingredients / components",
      "Application or use",
      "Innovation stage",
    ],
  },
  {
    id: 3,
    title: "Prior Art Discovery",
    short: "Search",
    icon: Search,
    status: "In Progress",
    color: "gold",
    desc: "Compare the innovation against existing patents, knowledge and similar records.",
    actions: [
      "Search existing patents",
      "Find similar innovations",
      "Compare technical features",
      "Review similarity signals",
    ],
  },
  {
    id: 4,
    title: "Evidence & Research",
    short: "Validate",
    icon: FlaskConical,
    status: "Next",
    color: "blue",
    desc: "Identify research evidence required to support the innovation.",
    actions: [
      "Clinical evidence",
      "Safety evidence",
      "Efficacy evidence",
      "Research references",
    ],
  },
  {
    id: 5,
    title: "IP Risk Assessment",
    short: "Assess",
    icon: ShieldCheck,
    status: "Next",
    color: "purple",
    desc: "Review preliminary IP risks and protection signals.",
    actions: [
      "Novelty signals",
      "Prior-art overlap",
      "Traditional knowledge check",
      "IP risk indicators",
    ],
  },
  {
    id: 6,
    title: "IP Strategy",
    short: "Protect",
    icon: FileCheck2,
    status: "Next",
    color: "green",
    desc: "Choose an appropriate protection and documentation pathway.",
    actions: [
      "Patent pathway",
      "Trade secret pathway",
      "Documentation",
      "International strategy",
    ],
  },
];

export default function InnovationRoadmapPage({ onContinue }) {
  const [selected, setSelected] = useState(1);

  const activeStep = roadmapSteps.find(
    (step) => step.id === selected
  );

  return (
    <div className="roadmap-page">

      {/* HERO */}
      <section className="roadmap-hero">
        <div>
          <div className="roadmap-eyebrow">
            <Sparkles size={15} />
            IP SHAKTI SAHAYAK · INNOVATION JOURNEY
          </div>

          <h1>Innovation Roadmap</h1>

          <p>
            From your initial Ayurveda idea to evidence, IP assessment
            and protection strategy — follow the complete innovation journey.
          </p>
        </div>

        <div className="progress-card">
          <span>Journey Progress</span>
          <strong>3 / 6</strong>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <small>50% journey completed</small>
        </div>
      </section>

      {/* VISUAL ROADMAP */}
      <section className="roadmap-card">

        <div className="roadmap-top">
          <div>
            <h2>Your Innovation Journey</h2>
            <p>
              Click any stage to explore what happens next.
            </p>
          </div>

          <div className="legend">
            <span>
              <i className="dot completed" />
              Completed
            </span>

            <span>
              <i className="dot current" />
              Current
            </span>

            <span>
              <i className="dot upcoming" />
              Upcoming
            </span>
          </div>
        </div>

        <div className="timeline">

          <div className="timeline-line">
            <div className="timeline-progress" />
          </div>

          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = selected === step.id;
            const completed = step.id < 3;
            const current = step.id === 3;

            return (
              <button
                key={step.id}
                className={`timeline-step ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => setSelected(step.id)}
              >

                <div
                  className={`step-node ${
                    completed
                      ? "completed"
                      : current
                      ? "current"
                      : "upcoming"
                  }`}
                >
                  {completed ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Icon size={21} />
                  )}
                </div>

                <span className="step-number">
                  0{step.id}
                </span>

                <strong>{step.title}</strong>

                <span className="step-short">
                  {step.short}
                </span>

              </button>
            );
          })}

        </div>
      </section>

      {/* SELECTED STAGE */}
      {activeStep && (
        <section className="stage-section">

          <div className="stage-main">

            <div className="stage-heading">
              <div className="stage-icon">
                <activeStep.icon size={25} />
              </div>

              <div>
                <span>STAGE 0{activeStep.id}</span>
                <h2>{activeStep.title}</h2>
              </div>

              <div
                className={`stage-status ${
                  activeStep.status === "In Progress"
                    ? "progress"
                    : activeStep.status === "Completed"
                    ? "done"
                    : ""
                }`}
              >
                {activeStep.status}
              </div>
            </div>

            <p className="stage-description">
              {activeStep.desc}
            </p>

            <div className="action-grid">

              {activeStep.actions.map((action, index) => (
                <div className="action-box" key={action}>
                  <div className="action-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <strong>{action}</strong>
                    <span>
                      Review this component in your innovation workspace.
                    </span>
                  </div>

                  <ArrowRight size={17} />
                </div>
              ))}

            </div>

          </div>

          <aside className="stage-side">

            <div className="side-title">
              <span>WHAT HAPPENS NEXT?</span>
              <Target size={18} />
            </div>

            <h3>
              {activeStep.id < roadmapSteps.length
                ? roadmapSteps[activeStep.id].title
                : "Innovation Protection"}
            </h3>

            <p>
              Continue your journey after reviewing this stage.
              Your collected information can be carried forward.
            </p>

            <button
              className="next-stage-button"
              onClick={() => {
                if (activeStep.id < roadmapSteps.length) {
                  setSelected(activeStep.id + 1);
                } else if (onContinue) {
                  onContinue();
                }
              }}
            >
              {activeStep.id < roadmapSteps.length
                ? "View Next Stage"
                : "Continue Journey"}
              <ArrowRight size={18} />
            </button>

          </aside>

        </section>
      )}

      {/* JOURNEY STRIP */}
      <section className="journey-strip">

        <div className="strip-icon">
          <Sparkles size={21} />
        </div>

        <div>
          <strong>
            One connected innovation journey
          </strong>

          <p>
            Your innovation profile, prior-art findings, evidence,
            risk signals and IP strategy can be carried forward
            through the workflow.
          </p>
        </div>

        <div className="strip-pill">
          Idea → Evidence → IP
        </div>

      </section>

      <div className="roadmap-note">
        Preliminary intelligence only. Patentability, novelty and
        regulatory conclusions should be verified with appropriate
        professional or official sources.
      </div>

      <style>{`

        .roadmap-page {
          min-height: 100%;
          padding: 28px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(53, 118, 77, .09),
              transparent 30%
            ),
            #f4f8f5;
          color: #203c2b;
        }

        .roadmap-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding: 32px;
          border-radius: 25px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #153b27,
              #286744
            );
          box-shadow:
            0 14px 35px rgba(30, 73, 48, .17);
        }

        .roadmap-eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
          opacity: .8;
          margin-bottom: 12px;
        }

        .roadmap-hero h1 {
          margin: 0;
          font-size: 32px;
        }

        .roadmap-hero p {
          max-width: 680px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.76);
          line-height: 1.6;
          font-size: 14px;
        }

        .progress-card {
          min-width: 210px;
          padding: 18px;
          border-radius: 17px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.15);
        }

        .progress-card span,
        .progress-card small {
          display: block;
          font-size: 10px;
          color: rgba(255,255,255,.7);
        }

        .progress-card strong {
          display: block;
          font-size: 27px;
          margin: 5px 0 9px;
        }

        .progress-track {
          height: 6px;
          overflow: hidden;
          border-radius: 10px;
          background: rgba(255,255,255,.18);
        }

        .progress-fill {
          width: 50%;
          height: 100%;
          border-radius: 10px;
          background: #dcefe2;
        }

        .progress-card small {
          margin-top: 7px;
        }

        .roadmap-card {
          margin-top: 20px;
          padding: 26px;
          border-radius: 21px;
          background: white;
          border: 1px solid #dce8df;
          box-shadow: 0 8px 24px rgba(34,73,49,.05);
        }

        .roadmap-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 35px;
        }

        .roadmap-top h2 {
          margin: 0;
          font-size: 20px;
          color: #214b31;
        }

        .roadmap-top p {
          margin: 5px 0 0;
          font-size: 12px;
          color: #7a887f;
        }

        .legend {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 10px;
          color: #758279;
        }

        .legend span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.completed {
          background: #3d8958;
        }

        .dot.current {
          background: #c99236;
        }

        .dot.upcoming {
          background: #cbd7cf;
        }

        .timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 8px;
        }

        .timeline-line {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 27px;
          height: 4px;
          border-radius: 10px;
          background: #dce6df;
          z-index: 0;
        }

        .timeline-progress {
          width: 42%;
          height: 100%;
          border-radius: 10px;
          background: #4b8c61;
        }

        .timeline-step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
          color: #294936;
        }

        .step-node {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: white;
          border: 4px solid #dce6df;
          color: #9aa69e;
          transition: .2s;
        }

        .step-node.completed {
          color: white;
          background: #378252;
          border-color: #378252;
        }

        .step-node.current {
          color: #95641c;
          background: #fff8ea;
          border-color: #d8ad64;
          box-shadow: 0 0 0 6px rgba(216,173,100,.12);
        }

        .timeline-step.selected .step-node {
          transform: scale(1.08);
          box-shadow: 0 0 0 6px rgba(55,130,82,.1);
        }

        .step-number {
          font-size: 9px;
          color: #96a198;
          font-weight: 800;
        }

        .timeline-step strong {
          font-size: 12px;
          text-align: center;
          max-width: 125px;
        }

        .step-short {
          color: #849088;
          font-size: 10px;
        }

        .stage-section {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(280px, .65fr);
          gap: 20px;
          margin-top: 20px;
        }

        .stage-main,
        .stage-side {
          border-radius: 21px;
          background: white;
          border: 1px solid #dce8df;
          box-shadow: 0 8px 24px rgba(34,73,49,.05);
        }

        .stage-main {
          padding: 26px;
        }

        .stage-heading {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .stage-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #e5f3e9;
          color: #287047;
        }

        .stage-heading > div:nth-child(2) {
          flex: 1;
        }

        .stage-heading span:first-child {
          color: #8b978f;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .stage-heading h2 {
          margin: 3px 0 0;
          color: #214b31;
          font-size: 21px;
        }

        .stage-status {
          padding: 7px 10px;
          border-radius: 20px;
          background: #edf2ee;
          color: #6f7d74;
          font-size: 10px;
          font-weight: 800;
        }

        .stage-status.done {
          background: #e6f4ea;
          color: #287047;
        }

        .stage-status.progress {
          background: #fff2dd;
          color: #96631c;
        }

        .stage-description {
          margin: 18px 0 20px;
          color: #748178;
          font-size: 13px;
          line-height: 1.6;
        }

        .action-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }

        .action-box {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px;
          border-radius: 14px;
          background: #f8fbf9;
          border: 1px solid #e0eae3;
          transition: .2s;
        }

        .action-box:hover {
          transform: translateY(-2px);
          border-color: #b9d5c3;
          background: #f2faf5;
        }

        .action-number {
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #e3f2e8;
          color: #287047;
          font-size: 9px;
          font-weight: 900;
        }

        .action-box div:nth-child(2) {
          flex: 1;
        }

        .action-box strong {
          display: block;
          font-size: 12px;
          color: #31543e;
        }

        .action-box span {
          display: block;
          margin-top: 3px;
          color: #89948d;
          font-size: 9px;
          line-height: 1.4;
        }

        .action-box > svg {
          color: #9aa79f;
        }

        .stage-side {
          padding: 25px;
          background: linear-gradient(145deg,#f0f8f2,#ffffff);
        }

        .side-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #6e8977;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .side-title svg {
          color: #43845a;
        }

        .stage-side h3 {
          margin: 22px 0 8px;
          font-size: 19px;
          color: #214b31;
        }

        .stage-side p {
          margin: 0;
          color: #758279;
          font-size: 12px;
          line-height: 1.65;
        }

        .next-stage-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
          padding: 12px;
          border: 0;
          border-radius: 11px;
          background: #286744;
          color: white;
          font-weight: 800;
          cursor: pointer;
        }

        .journey-strip {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
          padding: 18px 20px;
          border-radius: 17px;
          background: #e9f5ed;
          border: 1px solid #d1e5d7;
        }

        .strip-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: white;
          color: #287047;
        }

        .journey-strip strong {
          display: block;
          color: #285039;
          font-size: 13px;
        }

        .journey-strip p {
          margin: 4px 0 0;
          color: #718078;
          font-size: 11px;
          line-height: 1.5;
        }

        .strip-pill {
          margin-left: auto;
          padding: 8px 12px;
          border-radius: 20px;
          background: white;
          color: #3c7350;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .roadmap-note {
          margin-top: 15px;
          padding: 12px 14px;
          border-radius: 11px;
          background: #fffaf0;
          border: 1px solid #eee2c8;
          color: #7d7159;
          font-size: 10px;
          line-height: 1.5;
        }

        @media (max-width: 1000px) {
          .stage-section {
            grid-template-columns: 1fr;
          }

          .timeline {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px 8px;
          }

          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 700px) {
          .roadmap-page {
            padding: 15px;
          }

          .roadmap-hero {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }

          .progress-card {
            width: 100%;
          }

          .roadmap-top,
          .journey-strip {
            flex-direction: column;
            align-items: flex-start;
          }

          .legend {
            flex-wrap: wrap;
          }

          .timeline {
            grid-template-columns: repeat(2, 1fr);
          }

          .action-grid {
            grid-template-columns: 1fr;
          }

          .strip-pill {
            margin-left: 0;
          }
        }

      `}</style>
    </div>
  );
}