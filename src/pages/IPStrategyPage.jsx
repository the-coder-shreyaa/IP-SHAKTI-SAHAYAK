import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  Lightbulb,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Target,
  Loader2,
  FlaskConical,
  Globe2,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import StatusBadge from "../components/StatusBadge";

const protectionPaths = [
  {
    id: "patent",
    title: "Patent Protection",
    icon: ShieldCheck,
    status: "Explore",
    description:
      "Consider patent protection where the innovation may involve a patentable technical feature, process or formulation subject to applicable law.",
    areas: [
      "Novel technical features",
      "Formulation or process details",
      "Technical effect or advantage",
      "Experimental support",
    ],
  },
  {
    id: "trade-secret",
    title: "Confidential Know-How",
    icon: LockKeyhole,
    status: "Explore",
    description:
      "Identify information that may need controlled access and confidentiality while development or professional assessment is ongoing.",
    areas: [
      "Undisclosed preparation details",
      "Process parameters",
      "Proprietary methods",
      "Internal technical records",
    ],
  },
  {
    id: "documentation",
    title: "Documentation & Evidence",
    icon: FileText,
    status: "Recommended",
    description:
      "Maintain structured records of development, research, inventorship, experiments and supporting evidence.",
    areas: [
      "Inventor records",
      "Research evidence",
      "Experiment history",
      "Versioned technical documentation",
    ],
  },
  {
    id: "international",
    title: "International Protection",
    icon: Globe2,
    status: "Explore",
    description:
      "Review whether international markets or jurisdictions may require additional IP planning.",
    areas: [
      "Target countries",
      "Filing timeline",
      "Jurisdiction review",
      "International strategy",
    ],
  },
];

const strategySteps = [
  {
    number: "01",
    id: "feature",
    title: "Define the protectable feature",
    description:
      "Identify what is technically different or newly developed in the innovation.",
    icon: Target,
  },
  {
    number: "02",
    id: "prior-art",
    title: "Review existing knowledge and prior art",
    description:
      "Use previous journey stages to understand traditional knowledge and potentially relevant patent records.",
    icon: Database,
  },
  {
    number: "03",
    id: "evidence",
    title: "Document technical evidence",
    description:
      "Record formulation, process, experiments, advantages and supporting evidence.",
    icon: FlaskConical,
  },
  {
    number: "04",
    id: "professional-review",
    title: "Seek professional IP review",
    description:
      "Discuss the innovation and supporting records with a qualified patent professional.",
    icon: ShieldCheck,
  },
];

const fallbackDetails = {
  patent: {
    title: "Patent Protection Strategy",
    summary:
      "Review the technical features of the innovation and identify which aspects require deeper patentability and prior-art review.",
    actions: [
      "Document the technical problem being solved.",
      "Describe the formulation, process or technical mechanism.",
      "Compare the feature against relevant prior-art records.",
      "Organise supporting experimental evidence.",
    ],
    next:
      "Move the structured technical information into the patent preparation workspace.",
  },

  "trade-secret": {
    title: "Confidential Know-How Strategy",
    summary:
      "Identify technical information that may be commercially sensitive and should be controlled while professional IP assessment is ongoing.",
    actions: [
      "Identify confidential formulation or process parameters.",
      "Separate public information from confidential information.",
      "Maintain controlled technical records.",
      "Review confidentiality requirements before disclosure.",
    ],
    next:
      "Prepare a confidential technical record and review disclosure requirements.",
  },

  documentation: {
    title: "Documentation & Evidence Strategy",
    summary:
      "Build a structured record containing the development history, evidence and technical information behind the innovation.",
    actions: [
      "Record inventors and contributors.",
      "Organise experiments and research evidence.",
      "Maintain dated versions of technical documents.",
      "Link evidence to specific innovation features.",
    ],
    next:
      "Complete the evidence and technical documentation workspace.",
  },

  international: {
    title: "International Protection Strategy",
    summary:
      "Identify the countries or markets relevant to the innovation before considering international IP planning.",
    actions: [
      "Identify target markets.",
      "Review jurisdiction-specific requirements.",
      "Consider relevant filing timelines.",
      "Coordinate international strategy with professional advice.",
    ],
    next:
      "Create a jurisdiction and target-market review before filing decisions.",
  },

  feature: {
    title: "Define the Protectable Feature",
    summary:
      "The first strategy step is to clearly identify what is technically different about the innovation.",
    actions: [
      "Describe the core technical feature.",
      "Explain the technical problem.",
      "Document the proposed technical solution.",
      "Record measurable technical advantages where available.",
    ],
    next:
      "Use the innovation profile and evidence records to strengthen the technical description.",
  },

  "prior-art": {
    title: "Prior-Art Review",
    summary:
      "Review potentially relevant patent and knowledge records before making protection decisions.",
    actions: [
      "Search relevant patent records.",
      "Review traditional knowledge overlap.",
      "Compare technical features.",
      "Record similarity signals for professional review.",
    ],
    next:
      "Return to Prior-Art Search for deeper record-level analysis.",
  },

  evidence: {
    title: "Technical Evidence",
    summary:
      "Organise research, safety, efficacy and experimental evidence supporting the innovation.",
    actions: [
      "Collect relevant research records.",
      "Identify evidence gaps.",
      "Link evidence to technical features.",
      "Maintain dated supporting documentation.",
    ],
    next:
      "Review the Evidence Gap module and complete missing evidence areas.",
  },

  "professional-review": {
    title: "Professional IP Review",
    summary:
      "The final preparation stage is to organise the innovation record for review by a qualified IP professional.",
    actions: [
      "Prepare innovation documentation.",
      "Include relevant prior-art results.",
      "Organise supporting evidence.",
      "Prepare questions for professional review.",
    ],
    next:
      "Open the patent preparation workspace.",
  },
};

function IPStrategyPage({
  innovation,
  onContinue,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);

  const innovationTitle =
    innovation?.title || "Your Ayurveda Innovation";

  const openStrategy = async (id, type = "path") => {
    setSelectedItem(id);
    setLoading(true);
    setDetail(null);
    setBackendConnected(false);

    const fallback = fallbackDetails[id] || {
      title: "IP Strategy Analysis",
      summary:
        "Review the available innovation information and prepare the relevant IP documentation.",
      actions: [
        "Review the innovation description.",
        "Review prior-art information.",
        "Organise supporting evidence.",
        "Prepare professional IP review.",
      ],
      next: "Continue with the relevant IP preparation stage.",
    };

    try {
      const response = await fetch(
        `http://localhost:4000/api/ip-strategy/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            strategyId: id,
            innovation,
            innovationTitle,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Backend response failed");
      }

      const data = await response.json();

      setDetail({
        ...fallback,
        ...data,
        actions:
          data.actions?.length > 0
            ? data.actions
            : fallback.actions,
      });

      setBackendConnected(true);
    } catch (error) {
      console.warn(
        "IP Strategy backend unavailable. Showing local strategy fallback.",
        error
      );

      setDetail(fallback);
    } finally {
      setLoading(false);
    }
  };

  const closeStrategy = () => {
    setSelectedItem(null);
    setDetail(null);
    setLoading(false);
  };

  return (
    <main className="page-content ips-page">
      <SectionHeader
        eyebrow="STAGE 08 • IP STRATEGY"
        title="IP Protection Strategy"
        description="Explore protection pathways, review strategy signals and prepare your innovation for professional IP assessment."
        icon={Lightbulb}
      />

      {/* HERO */}
      <section className="ips-hero">
        <div className="ips-hero-main">
          <div className="ips-hero-icon">
            <Sparkles size={23} />
          </div>

          <div>
            <span className="ips-eyebrow">
              INNOVATION UNDER REVIEW
            </span>

            <h2>{innovationTitle}</h2>

            <p>
              Your protection strategy should be based on the actual
              technical features, evidence, prior art and applicable
              intellectual-property requirements.
            </p>
          </div>
        </div>

        <div className="ips-hero-badge">
          <ShieldCheck size={16} />
          <span>Interactive Strategy Workspace</span>
        </div>
      </section>

      {/* BACKEND DETAIL PANEL */}
      {selectedItem && (
        <section className="ips-detail-panel">
          <button
            type="button"
            className="ips-back-button"
            onClick={closeStrategy}
          >
            <ArrowLeft size={16} />
            Back to IP Strategy
          </button>

          {loading ? (
            <div className="ips-loading">
              <div className="ips-loading-icon">
                <Loader2 size={25} />
              </div>

              <h2>Analysing Strategy...</h2>

              <p>
                Connecting with the IP Strategy backend and preparing
                the relevant analysis.
              </p>
            </div>
          ) : (
            detail && (
              <>
                <div className="ips-detail-header">
                  <div className="ips-detail-icon">
                    <ShieldCheck size={23} />
                  </div>

                  <div>
                    <span className="ips-eyebrow">
                      STRATEGY ANALYSIS
                    </span>

                    <h2>{detail.title}</h2>

                    <p>{detail.summary}</p>
                  </div>

                  <div className="ips-connection">
                    <span
                      className={
                        backendConnected
                          ? "ips-dot connected"
                          : "ips-dot"
                      }
                    />
                    {backendConnected
                      ? "Backend Analysis"
                      : "Local Preparation"}
                  </div>
                </div>

                <div className="ips-detail-grid">
                  <div className="ips-detail-card">
                    <div className="ips-detail-card-head">
                      <CheckCircle2 size={18} />
                      <h3>Recommended Actions</h3>
                    </div>

                    <div className="ips-action-list">
                      {detail.actions?.map((action, index) => (
                        <div
                          className="ips-action-item"
                          key={`${action}-${index}`}
                        >
                          <span>{index + 1}</span>
                          <p>{action}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ips-next-card">
                    <div className="ips-next-icon">
                      <ArrowRight size={19} />
                    </div>

                    <span className="ips-eyebrow">
                      NEXT ACTION
                    </span>

                    <h3>What should you do next?</h3>

                    <p>{detail.next}</p>

                    {onContinue && (
                      <button
                        type="button"
                        onClick={onContinue}
                        className="ips-detail-button"
                      >
                        Open Next Workspace
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </>
            )
          )}
        </section>
      )}

      {/* MAIN STRATEGY VIEW */}
      {!selectedItem && (
        <>
          <section className="ips-paths">
            <div className="ips-section-head">
              <div>
                <span className="ips-eyebrow">
                  PROTECTION PATHWAYS
                </span>

                <h2>Explore Your IP Options</h2>

                <p>
                  Click any pathway to open its detailed strategy
                  analysis.
                </p>
              </div>
            </div>

            <div className="ips-path-grid">
              {protectionPaths.map((path) => {
                const Icon = path.icon;

                return (
                  <button
                    type="button"
                    className="ips-path-card"
                    key={path.id}
                    onClick={() =>
                      openStrategy(path.id, "protection-path")
                    }
                  >
                    <div className="ips-path-top">
                      <div className="ips-path-icon">
                        <Icon size={21} />
                      </div>

                      <StatusBadge
                        status={path.status}
                        tone={
                          path.status === "Recommended"
                            ? "success"
                            : "warning"
                        }
                      />
                    </div>

                    <h3>{path.title}</h3>

                    <p>{path.description}</p>

                    <div className="ips-area-list">
                      {path.areas.map((area) => (
                        <span key={area}>{area}</span>
                      ))}
                    </div>

                    <div className="ips-card-action">
                      Explore Strategy
                      <ArrowRight size={14} />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* WORKFLOW */}
          <section className="ips-workflow">
            <div className="ips-section-head">
              <div>
                <span className="ips-eyebrow">
                  STRATEGY WORKFLOW
                </span>

                <h2>From Discovery to Professional Review</h2>

                <p>
                  Click a step to open its detailed preparation guidance.
                </p>
              </div>

              <LockKeyhole size={20} />
            </div>

            <div className="ips-workflow-grid">
              {strategySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <button
                    type="button"
                    className="ips-workflow-card"
                    key={step.id}
                    onClick={() =>
                      openStrategy(step.id, "workflow-step")
                    }
                  >
                    <div className="ips-workflow-number">
                      {step.number}
                    </div>

                    <div className="ips-workflow-icon">
                      <Icon size={19} />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <span>
                      View Details
                      <ArrowRight size={13} />
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* DOCUMENTATION */}
          <section className="ips-documentation">
            <div className="ips-doc-icon">
              <FileText size={20} />
            </div>

            <div>
              <span className="ips-eyebrow">
                DOCUMENTATION NOTE
              </span>

              <h3>
                Protect the record of how the innovation was developed
              </h3>

              <p>
                Keep dated technical descriptions, inventor information,
                experiments, evidence sources, formulation or process
                details and relevant development history.
              </p>
            </div>
          </section>

          {/* NEXT */}
          <section className="ips-next">
            <div className="ips-next-main-icon">
              <FileText size={22} />
            </div>

            <div>
              <span className="ips-eyebrow">
                NEXT STAGE
              </span>

              <h2>Prepare Your Patent Workspace</h2>

              <p>
                Move the structured innovation information into a
                dedicated preparation workspace.
              </p>
            </div>

            {onContinue && (
              <button
                type="button"
                className="ips-primary-button"
                onClick={onContinue}
              >
                Open Patent Workspace
                <ArrowRight size={16} />
              </button>
            )}
          </section>

          {/* DISCLAIMER */}
          <section className="ips-disclaimer">
            <ShieldCheck size={17} />

            <p>
              This module provides an organisational framework for
              exploring IP protection. It does not determine
              patentability, legal ownership, infringement or the
              appropriate filing strategy.
            </p>
          </section>
        </>
      )}

      <style>{`
        .ips-page {
          padding-bottom: 40px;
        }

        .ips-eyebrow {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: #70887b;
          margin-bottom: 7px;
        }

        /* HERO */

        .ips-hero {
          margin-top: 23px;
          padding: 24px 26px;
          border-radius: 22px;
          background:
            radial-gradient(circle at 90% 20%, rgba(192,220,204,.35), transparent 28%),
            linear-gradient(135deg, #173d2d, #2b5b44);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          box-shadow: 0 14px 30px rgba(35,72,55,.12);
        }

        .ips-hero-main {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .ips-hero-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.11);
          border: 1px solid rgba(255,255,255,.14);
          flex-shrink: 0;
        }

        .ips-hero .ips-eyebrow {
          color: #c4dacb;
        }

        .ips-hero h2 {
          margin: 0;
          font-size: 21px;
        }

        .ips-hero p {
          margin: 7px 0 0;
          max-width: 720px;
          color: #d9e8df;
          font-size: 11px;
          line-height: 1.6;
        }

        .ips-hero-badge {
          padding: 11px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.13);
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* SECTION */

        .ips-paths,
        .ips-workflow {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          border: 1px solid #dce8e1;
          background: linear-gradient(145deg,#fffefa,#f7fbf8);
        }

        .ips-section-head h2 {
          margin: 0;
          color: #294a3b;
          font-size: 18px;
        }

        .ips-section-head p {
          margin: 6px 0 0;
          color: #7a8d83;
          font-size: 10px;
          line-height: 1.5;
        }

        /* PATH CARDS */

        .ips-path-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 17px;
        }

        .ips-path-card {
          min-height: 255px;
          padding: 18px;
          border-radius: 17px;
          background: white;
          border: 1px solid #dce8e1;
          text-align: left;
          cursor: pointer;
          transition: .2s ease;
          box-shadow: 0 4px 13px rgba(40,75,57,.035);
        }

        .ips-path-card:hover {
          transform: translateY(-4px);
          border-color: #aecbb8;
          box-shadow: 0 12px 24px rgba(40,75,57,.09);
        }

        .ips-path-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .ips-path-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4c7d62;
          background: #eaf4ed;
        }

        .ips-path-card h3 {
          margin: 16px 0 7px;
          color: #355546;
          font-size: 13px;
        }

        .ips-path-card > p {
          margin: 0;
          color: #7d9086;
          font-size: 9px;
          line-height: 1.6;
        }

        .ips-area-list {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 13px;
        }

        .ips-area-list span {
          padding: 5px 7px;
          border-radius: 6px;
          background: #f1f6f2;
          color: #637c6e;
          font-size: 7.5px;
          font-weight: 700;
        }

        .ips-card-action {
          margin-top: 15px;
          padding-top: 11px;
          border-top: 1px solid #edf1ee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #47755b;
          font-size: 9px;
          font-weight: 800;
        }

        /* WORKFLOW */

        .ips-workflow {
          background: #f1f7f3;
        }

        .ips-workflow-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .ips-workflow-card {
          min-height: 185px;
          position: relative;
          padding: 19px;
          text-align: left;
          background: white;
          border: 1px solid #dce8e1;
          border-radius: 16px;
          cursor: pointer;
          transition: .2s ease;
        }

        .ips-workflow-card:hover {
          transform: translateY(-3px);
          border-color: #b5cebd;
          box-shadow: 0 10px 20px rgba(40,75,57,.07);
        }

        .ips-workflow-number {
          position: absolute;
          top: 13px;
          right: 14px;
          font-size: 9px;
          font-weight: 900;
          color: #a7b6ad;
        }

        .ips-workflow-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4d7e63;
          background: #eaf4ed;
          margin-bottom: 14px;
        }

        .ips-workflow-card h3 {
          margin: 0;
          color: #365548;
          font-size: 12px;
          line-height: 1.4;
        }

        .ips-workflow-card p {
          margin: 7px 0 12px;
          color: #7d9086;
          font-size: 9px;
          line-height: 1.55;
        }

        .ips-workflow-card > span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #4d7c60;
          font-size: 8px;
          font-weight: 800;
        }

        /* DOCUMENTATION */

        .ips-documentation {
          margin-top: 22px;
          padding: 20px 23px;
          border: 1px solid #dce8e1;
          border-radius: 18px;
          background: #fffefa;
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .ips-doc-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4c7d62;
          background: #eaf4ed;
          flex-shrink: 0;
        }

        .ips-documentation h3 {
          margin: 0;
          color: #365548;
          font-size: 13px;
        }

        .ips-documentation p {
          margin: 6px 0 0;
          color: #7c8e85;
          font-size: 10px;
          line-height: 1.6;
        }

        /* NEXT */

        .ips-next {
          margin-top: 22px;
          padding: 22px 24px;
          border-radius: 21px;
          background: linear-gradient(135deg,#173d2d,#2c5c45);
          color: white;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ips-next-main-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.11);
          flex-shrink: 0;
        }

        .ips-next > div:nth-child(2) {
          flex: 1;
        }

        .ips-next .ips-eyebrow {
          color: #bdd5c6;
        }

        .ips-next h2 {
          margin: 0;
          font-size: 17px;
        }

        .ips-next p {
          margin: 5px 0 0;
          color: #d1e3d8;
          font-size: 10px;
        }

        .ips-primary-button,
        .ips-detail-button {
          border: 0;
          border-radius: 11px;
          padding: 11px 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          font-size: 9px;
          font-weight: 800;
        }

        .ips-primary-button {
          background: white;
          color: #315d46;
        }

        .ips-detail-button {
          margin-top: 17px;
          background: #315f48;
          color: white;
        }

        /* DETAIL */

        .ips-detail-panel {
          margin-top: 22px;
          padding: 24px;
          border-radius: 21px;
          background: linear-gradient(145deg,#fffefa,#f5faf7);
          border: 1px solid #d5e4da;
          box-shadow: 0 10px 25px rgba(40,75,57,.07);
        }

        .ips-back-button {
          border: 0;
          background: #edf5ef;
          color: #4b735c;
          border-radius: 10px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 9px;
          font-weight: 800;
        }

        .ips-detail-header {
          margin-top: 22px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ips-detail-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #eaf4ed;
          color: #4b7d62;
          flex-shrink: 0;
        }

        .ips-detail-header h2 {
          margin: 0;
          color: #294a3b;
          font-size: 19px;
        }

        .ips-detail-header p {
          margin: 5px 0 0;
          color: #778c81;
          font-size: 10px;
          line-height: 1.5;
        }

        .ips-connection {
          margin-left: auto;
          padding: 8px 11px;
          border-radius: 9px;
          background: #f0f5f2;
          color: #637b6e;
          font-size: 8px;
          font-weight: 800;
          white-space: nowrap;
        }

        .ips-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b1bdb6;
          margin-right: 5px;
        }

        .ips-dot.connected {
          background: #4c9565;
        }

        .ips-detail-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1.35fr .8fr;
          gap: 18px;
        }

        .ips-detail-card,
        .ips-next-card {
          padding: 20px;
          border-radius: 16px;
          border: 1px solid #dce8e1;
          background: white;
        }

        .ips-detail-card-head {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4b7c61;
        }

        .ips-detail-card-head h3 {
          margin: 0;
          color: #365548;
          font-size: 13px;
        }

        .ips-action-list {
          margin-top: 15px;
          display: grid;
          gap: 9px;
        }

        .ips-action-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px;
          border-radius: 10px;
          background: #f5f8f6;
        }

        .ips-action-item span {
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          background: #e3efe7;
          color: #4b785f;
          font-size: 8px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .ips-action-item p {
          margin: 3px 0 0;
          color: #62796d;
          font-size: 9px;
          line-height: 1.5;
        }

        .ips-next-card {
          background: linear-gradient(145deg,#edf6ef,#f8fbf8);
        }

        .ips-next-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #dcece1;
          color: #47755a;
          margin-bottom: 15px;
        }

        .ips-next-card h3 {
          margin: 0;
          color: #365548;
          font-size: 14px;
        }

        .ips-next-card p {
          margin: 7px 0 0;
          color: #71877b;
          font-size: 9px;
          line-height: 1.6;
        }

        /* LOADING */

        .ips-loading {
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .ips-loading-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          color: #4d7e63;
          background: #eaf4ed;
          animation: ipsSpin 1.2s linear infinite;
        }

        .ips-loading h2 {
          margin: 15px 0 5px;
          color: #365548;
          font-size: 17px;
        }

        .ips-loading p {
          margin: 0;
          color: #819188;
          font-size: 10px;
        }

        @keyframes ipsSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .ips-disclaimer {
          margin-top: 17px;
          padding: 14px 16px;
          border-radius: 13px;
          border: 1px solid #eadfbe;
          background: #fffaf0;
          color: #806f43;
          display: flex;
          gap: 9px;
          align-items: flex-start;
        }

        .ips-disclaimer p {
          margin: 0;
          font-size: 9px;
          line-height: 1.55;
        }

        @media (max-width: 1050px) {
          .ips-path-grid,
          .ips-workflow-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .ips-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .ips-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .ips-path-grid,
          .ips-workflow-grid {
            grid-template-columns: 1fr;
          }

          .ips-next {
            flex-direction: column;
            align-items: flex-start;
          }

          .ips-primary-button {
            width: 100%;
            justify-content: center;
          }

          .ips-detail-header {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .ips-connection {
            margin-left: 0;
          }
        }
      `}</style>
    </main>
  );
}

export default IPStrategyPage;