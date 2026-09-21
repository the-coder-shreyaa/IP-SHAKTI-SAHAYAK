import { useMemo } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FileText,
  ShieldCheck,
  Sparkles,
  Target,
  AlertTriangle,
  Database,
  FlaskConical,
  Layers3,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import ReadinessCard from "../components/ReadinessCard";
import ProgressBar from "../components/ProgressBar";

import { sampleInnovation } from "../data/innovationData";
import { defaultEvidence } from "../data/evidenceData";
import {
  calculatePatentReadiness,
  getReadinessStatus,
} from "../services/readinessEngine";
import { getSavedEvidence } from "../services/storage";

function IPReadinessPage({
  innovation = sampleInnovation,
  similarityResults = [],
  evidence,
  onContinue,
}) {
  const currentEvidence =
    evidence || getSavedEvidence(defaultEvidence);

  const readiness = useMemo(() => {
    const result = calculatePatentReadiness({
      innovation: innovation || sampleInnovation,
      evidence: currentEvidence,
      similarityResults,
    });

    return {
      ...result,
      nextStep:
        result.score < 60
          ? "Strengthen the innovation description, supporting evidence and technical documentation."
          : "Review the preparation record with a qualified IP professional before filing.",
    };
  }, [innovation, currentEvidence, similarityResults]);

  const readinessStatus = getReadinessStatus(readiness.score);

  const factors = [
    {
      label: "Evidence Readiness",
      value: readiness.evidenceScore,
      description:
        "Traditional knowledge, research, safety, quality and regulatory documentation.",
      icon: FileCheck2,
    },
    {
      label: "Prior-Art Position",
      value: readiness.priorArtScore,
      description:
        "Indicator based on the highest similarity found in the available dataset.",
      icon: Database,
    },
    {
      label: "Documentation Completeness",
      value: readiness.completenessScore,
      description:
        "Completeness of the current innovation description and technical details.",
      icon: FileText,
    },
  ];

  const checklist = [
    "Innovation description documented",
    "Traditional knowledge references reviewed",
    "Relevant prior-art records identified",
    "Scientific evidence organised",
    "Safety and quality evidence reviewed",
    "Technical documentation prepared",
  ];

  return (
    <main className="page-content ipr-page">
      <SectionHeader
        eyebrow="STAGE 07 • IP READINESS"
        title="Preliminary IP Readiness"
        description="Review your innovation's evidence, prior-art position and documentation before moving into IP protection strategy."
        icon={ShieldCheck}
      />

      {/* HERO */}
      <section className="ipr-hero">
        <div className="ipr-hero-left">
          <div className="ipr-hero-icon">
            <Sparkles size={24} />
          </div>

          <div>
            <span className="ipr-eyebrow">
              PRELIMINARY IP ASSESSMENT
            </span>

            <h2>
              {innovation?.title || "Current Innovation"}
            </h2>

            <p>
              A transparent preparation indicator based on your
              innovation details, evidence and available prior-art
              similarity results.
            </p>
          </div>
        </div>

        <div className="ipr-stage">
          <span>Current Stage</span>
          <strong>{readinessStatus}</strong>
        </div>
      </section>

      {/* SCORE + BREAKDOWN */}
      <section className="ipr-score-layout">
        <div className="ipr-score-card">
          <div className="ipr-score-top">
            <div>
              <span className="ipr-eyebrow">
                IP READINESS SCORE
              </span>

              <h2>Preparation Readiness</h2>

              <p>
                Overall indicator generated from the current project
                records.
              </p>
            </div>

            <div className="ipr-score-circle">
              <div
                className="ipr-score-ring"
                style={{
                  "--score-angle": `${Math.max(
                    0,
                    Math.min(100, readiness.score)
                  ) * 3.6}deg`,
                }}
              >
                <div className="ipr-score-inner">
                  <strong>{readiness.score}%</strong>
                  <span>READY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ipr-score-status">
            <div className="ipr-status-dot" />
            <span>{readinessStatus}</span>
          </div>

          <div className="ipr-score-message">
            <Target size={18} />
            <p>{readiness.nextStep}</p>
          </div>
        </div>

        <section className="ipr-factor-panel">
          <div className="ipr-panel-heading">
            <div>
              <span className="ipr-eyebrow">
                READINESS BREAKDOWN
              </span>
              <h2>Preparation Factors</h2>
            </div>

            <ShieldCheck size={20} />
          </div>

          <div className="ipr-factor-list">
            {factors.map((factor) => {
              const Icon = factor.icon;

              return (
                <article
                  className="ipr-factor"
                  key={factor.label}
                >
                  <div className="ipr-factor-icon">
                    <Icon size={19} />
                  </div>

                  <div className="ipr-factor-body">
                    <div className="ipr-factor-title">
                      <h3>{factor.label}</h3>
                      <strong>{factor.value}%</strong>
                    </div>

                    <ProgressBar
                      value={factor.value}
                      showValue={false}
                      size="small"
                    />

                    <p>{factor.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>

      {/* JOURNEY */}
      <section className="ipr-journey">
        <div className="ipr-section-head">
          <div>
            <span className="ipr-eyebrow">
              IP PREPARATION JOURNEY
            </span>
            <h2>From Innovation to IP Protection</h2>
            <p>
              Complete the important preparation layers before moving
              towards professional IP strategy.
            </p>
          </div>
        </div>

        <div className="ipr-journey-grid">
          <div className="ipr-journey-card active">
            <div className="ipr-step">01</div>
            <div className="ipr-journey-icon">
              <Sparkles size={21} />
            </div>
            <h3>Innovation</h3>
            <p>
              Define the idea, formulation, process and technical
              characteristics.
            </p>
          </div>

          <div className="ipr-arrow">
            <ArrowRight size={18} />
          </div>

          <div className="ipr-journey-card">
            <div className="ipr-step">02</div>
            <div className="ipr-journey-icon">
              <Database size={21} />
            </div>
            <h3>Prior Art</h3>
            <p>
              Review potentially relevant existing patent and knowledge
              records.
            </p>
          </div>

          <div className="ipr-arrow">
            <ArrowRight size={18} />
          </div>

          <div className="ipr-journey-card">
            <div className="ipr-step">03</div>
            <div className="ipr-journey-icon">
              <FlaskConical size={21} />
            </div>
            <h3>Evidence</h3>
            <p>
              Organise research, safety, efficacy and supporting evidence.
            </p>
          </div>

          <div className="ipr-arrow">
            <ArrowRight size={18} />
          </div>

          <div className="ipr-journey-card">
            <div className="ipr-step">04</div>
            <div className="ipr-journey-icon">
              <FileCheck2 size={21} />
            </div>
            <h3>IP Strategy</h3>
            <p>
              Prepare the innovation record for professional IP review.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="ipr-check-section">
        <div className="ipr-section-head">
          <div>
            <span className="ipr-eyebrow">
              PREPARATION CHECK
            </span>

            <h2>Before Moving to IP Strategy</h2>

            <p>
              Review these preparation areas before discussing filing or
              protection options with an IP professional.
            </p>
          </div>

          <div className="ipr-check-badge">
            <CheckCircle2 size={17} />
            <span>6 Preparation Areas</span>
          </div>
        </div>

        <div className="ipr-check-grid">
          {checklist.map((item, index) => (
            <div className="ipr-check-item" key={item}>
              <div className="ipr-check-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <CheckCircle2 size={18} />

              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNALS */}
      <section className="ipr-signals">
        <div className="ipr-section-head">
          <div>
            <span className="ipr-eyebrow">
              READINESS SIGNALS
            </span>
            <h2>What Your Score Represents</h2>
          </div>
        </div>

        <div className="ipr-signal-grid">
          <div className="ipr-signal-card">
            <div className="ipr-signal-icon">
              <Layers3 size={20} />
            </div>

            <h3>Evidence Strength</h3>

            <p>
              Checks how much supporting research and documentation is
              currently available.
            </p>

            <span>Research • Safety • Quality</span>
          </div>

          <div className="ipr-signal-card">
            <div className="ipr-signal-icon">
              <Database size={20} />
            </div>

            <h3>Prior-Art Position</h3>

            <p>
              Uses available similarity results to indicate areas that
              may need deeper prior-art review.
            </p>

            <span>Search • Compare • Analyse</span>
          </div>

          <div className="ipr-signal-card">
            <div className="ipr-signal-icon">
              <FileText size={20} />
            </div>

            <h3>Documentation</h3>

            <p>
              Measures whether the current innovation record contains
              useful technical information.
            </p>

            <span>Idea • Formulation • Process</span>
          </div>
        </div>
      </section>

      {/* CONTINUE */}
      <section className="ipr-next">
        <div className="ipr-next-icon">
          <ShieldCheck size={23} />
        </div>

        <div className="ipr-next-content">
          <span className="ipr-eyebrow">
            NEXT STAGE
          </span>

          <h2>Build Your IP Protection Strategy</h2>

          <p>
            Explore possible protection pathways and identify what
            technical information should be documented for professional
            review.
          </p>
        </div>

        {onContinue && (
          <button
            type="button"
            className="ipr-primary-button"
            onClick={onContinue}
          >
            Continue to IP Strategy
            <ArrowRight size={17} />
          </button>
        )}
      </section>

      {/* DISCLAIMER */}
      <section className="ipr-disclaimer">
        <AlertTriangle size={18} />

        <div>
          <strong>Important</strong>
          <p>
            This is a preliminary preparation indicator generated from
            prototype data. It is not a legal opinion, patentability
            determination, novelty assessment or guarantee of patent
            grant. Consult a qualified patent professional before making
            filing decisions.
          </p>
        </div>
      </section>

      {/* ALL PAGE CSS */}
      <style>{`
        .ipr-page {
          padding-bottom: 40px;
        }

        .ipr-eyebrow {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
          color: #6b8577;
          margin-bottom: 7px;
        }

        /* HERO */

        .ipr-hero {
          margin-top: 24px;
          padding: 24px 26px;
          border-radius: 22px;
          background:
            radial-gradient(circle at 90% 20%, rgba(193,220,205,.38), transparent 28%),
            linear-gradient(135deg, #173d2d, #285843);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          box-shadow: 0 14px 30px rgba(35, 72, 55, .13);
        }

        .ipr-hero-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .ipr-hero-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.15);
          flex-shrink: 0;
        }

        .ipr-hero .ipr-eyebrow {
          color: #c8ddcf;
        }

        .ipr-hero h2 {
          margin: 0;
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -.3px;
        }

        .ipr-hero p {
          margin: 8px 0 0;
          max-width: 690px;
          color: #dceae2;
          font-size: 12px;
          line-height: 1.65;
        }

        .ipr-stage {
          min-width: 145px;
          padding: 15px 18px;
          border-radius: 15px;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.14);
          text-align: center;
        }

        .ipr-stage span {
          display: block;
          font-size: 10px;
          color: #c8ddcf;
          margin-bottom: 6px;
        }

        .ipr-stage strong {
          font-size: 13px;
          color: white;
        }

        /* SCORE LAYOUT */

        .ipr-score-layout {
          display: grid;
          grid-template-columns: .95fr 1.35fr;
          gap: 22px;
          margin-top: 22px;
        }

        .ipr-score-card,
        .ipr-factor-panel {
          border: 1px solid #dce8e1;
          border-radius: 21px;
          background: linear-gradient(145deg, #fffefa, #f7fbf8);
          box-shadow: 0 7px 22px rgba(41, 75, 58, .055);
        }

        .ipr-score-card {
          padding: 25px;
        }

        .ipr-score-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .ipr-score-top h2 {
          margin: 0;
          font-size: 19px;
          color: #294a3b;
        }

        .ipr-score-top p {
          margin: 7px 0 0;
          color: #73877d;
          font-size: 11px;
          line-height: 1.55;
          max-width: 260px;
        }

        .ipr-score-circle {
          flex-shrink: 0;
        }

        .ipr-score-ring {
          width: 116px;
          height: 116px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background:
            conic-gradient(
              #4c8064 var(--score-angle),
              #e2ebe5 var(--score-angle)
            );
          position: relative;
        }

        .ipr-score-ring::before {
          content: "";
          position: absolute;
          inset: 8px;
          background: #fbfdfb;
          border-radius: 50%;
        }

        .ipr-score-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .ipr-score-inner strong {
          display: block;
          font-size: 24px;
          color: #254b39;
          line-height: 1;
        }

        .ipr-score-inner span {
          display: block;
          margin-top: 5px;
          font-size: 8px;
          letter-spacing: 1px;
          color: #779082;
          font-weight: 800;
        }

        .ipr-score-status {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding: 10px 12px;
          border-radius: 11px;
          background: #edf6ef;
          color: #3d6c50;
          font-size: 11px;
          font-weight: 700;
        }

        .ipr-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5a936d;
        }

        .ipr-score-message {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-top: 15px;
          padding: 13px;
          border-radius: 13px;
          background: #f3f7f4;
          border: 1px solid #e0e9e3;
          color: #547064;
        }

        .ipr-score-message svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ipr-score-message p {
          margin: 0;
          font-size: 10px;
          line-height: 1.6;
        }

        /* FACTORS */

        .ipr-factor-panel {
          padding: 24px;
        }

        .ipr-panel-heading,
        .ipr-section-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
        }

        .ipr-panel-heading h2,
        .ipr-section-head h2 {
          margin: 0;
          color: #294a3b;
          font-size: 18px;
        }

        .ipr-panel-heading > svg {
          color: #658777;
        }

        .ipr-factor-list {
          margin-top: 19px;
          display: grid;
          gap: 13px;
        }

        .ipr-factor {
          display: flex;
          gap: 13px;
          padding: 14px;
          border: 1px solid #e0e9e3;
          background: white;
          border-radius: 14px;
        }

        .ipr-factor-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          color: #4d7d63;
          background: #edf5ef;
          flex-shrink: 0;
        }

        .ipr-factor-body {
          flex: 1;
          min-width: 0;
        }

        .ipr-factor-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .ipr-factor-title h3 {
          margin: 0;
          color: #365548;
          font-size: 12px;
        }

        .ipr-factor-title strong {
          color: #47735b;
          font-size: 12px;
        }

        .ipr-factor-body p {
          margin: 7px 0 0;
          color: #819188;
          font-size: 9px;
          line-height: 1.5;
        }

        /* JOURNEY */

        .ipr-journey {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          background: #f3f8f4;
          border: 1px solid #dce8e0;
        }

        .ipr-section-head p {
          margin: 6px 0 0;
          color: #788c82;
          font-size: 10px;
          line-height: 1.5;
        }

        .ipr-journey-grid {
          margin-top: 21px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 10px;
        }

        .ipr-journey-card {
          min-height: 155px;
          padding: 17px;
          border-radius: 16px;
          background: white;
          border: 1px solid #dce8e1;
          position: relative;
          box-shadow: 0 4px 12px rgba(40, 76, 57, .04);
        }

        .ipr-journey-card.active {
          background: linear-gradient(145deg, #ffffff, #eef7f0);
          border-color: #bcd4c4;
        }

        .ipr-step {
          position: absolute;
          top: 12px;
          right: 13px;
          font-size: 9px;
          font-weight: 800;
          color: #a1b3a9;
        }

        .ipr-journey-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4e7d63;
          background: #eaf4ed;
          margin-bottom: 14px;
        }

        .ipr-journey-card h3 {
          margin: 0;
          color: #355546;
          font-size: 13px;
        }

        .ipr-journey-card p {
          margin: 7px 0 0;
          color: #7b8e84;
          font-size: 9px;
          line-height: 1.55;
        }

        .ipr-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #e0ece4;
          color: #638271;
        }

        /* CHECKLIST */

        .ipr-check-section {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          background: linear-gradient(145deg, #fffefa, #f7faf8);
          border: 1px solid #dce8e1;
        }

        .ipr-check-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 11px;
          background: #edf6ef;
          color: #4d765d;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        .ipr-check-grid {
          margin-top: 21px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .ipr-check-item {
          min-height: 58px;
          padding: 12px 14px;
          border-radius: 13px;
          border: 1px solid #e0e9e3;
          background: white;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ipr-check-item > svg {
          color: #5a8a6c;
          flex-shrink: 0;
        }

        .ipr-check-item span {
          color: #50695d;
          font-size: 10px;
          line-height: 1.4;
        }

        .ipr-check-number {
          color: #a4b4aa;
          font-size: 9px;
          font-weight: 800;
        }

        /* SIGNALS */

        .ipr-signals {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          background: #eef6f0;
          border: 1px solid #d9e7dd;
        }

        .ipr-signal-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .ipr-signal-card {
          padding: 20px;
          min-height: 155px;
          border-radius: 16px;
          background: rgba(255,255,255,.94);
          border: 1px solid #dce8e1;
          box-shadow: 0 5px 14px rgba(43, 76, 58, .04);
        }

        .ipr-signal-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4d7e63;
          background: #eaf4ed;
          margin-bottom: 13px;
        }

        .ipr-signal-card h3 {
          margin: 0;
          font-size: 13px;
          color: #365548;
        }

        .ipr-signal-card p {
          margin: 7px 0 12px;
          color: #7b8e84;
          font-size: 9px;
          line-height: 1.6;
        }

        .ipr-signal-card span {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .4px;
          color: #789083;
        }

        /* NEXT */

        .ipr-next {
          margin-top: 22px;
          padding: 23px 25px;
          border-radius: 21px;
          background: linear-gradient(135deg, #173d2d, #2c5c45);
          color: white;
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .ipr-next-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(255,255,255,.12);
          flex-shrink: 0;
        }

        .ipr-next-content {
          flex: 1;
        }

        .ipr-next .ipr-eyebrow {
          color: #bdd5c6;
        }

        .ipr-next h2 {
          margin: 0;
          font-size: 17px;
        }

        .ipr-next p {
          margin: 5px 0 0;
          color: #d2e3d9;
          font-size: 10px;
          line-height: 1.5;
        }

        .ipr-primary-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border: 0;
          border-radius: 11px;
          background: white;
          color: #315d46;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .ipr-primary-button:hover {
          transform: translateY(-1px);
        }

        /* DISCLAIMER */

        .ipr-disclaimer {
          margin-top: 17px;
          padding: 14px 16px;
          border-radius: 13px;
          border: 1px solid #eadfbe;
          background: #fffaf0;
          color: #806f43;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .ipr-disclaimer svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ipr-disclaimer strong {
          display: block;
          font-size: 10px;
          margin-bottom: 3px;
        }

        .ipr-disclaimer p {
          margin: 0;
          font-size: 9px;
          line-height: 1.55;
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .ipr-score-layout {
            grid-template-columns: 1fr;
          }

          .ipr-journey-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ipr-arrow {
            display: none;
          }
        }

        @media (max-width: 760px) {
          .ipr-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .ipr-stage {
            width: 100%;
            box-sizing: border-box;
          }

          .ipr-check-grid,
          .ipr-signal-grid {
            grid-template-columns: 1fr;
          }

          .ipr-journey-grid {
            grid-template-columns: 1fr;
          }

          .ipr-next {
            flex-direction: column;
            align-items: flex-start;
          }

          .ipr-primary-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}

export default IPReadinessPage;