import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const evidenceData = [
  {
    id: "clinical",
    title: "Clinical Evidence",
    description: "Clinical studies supporting safety and effectiveness.",
    score: 58,
    status: "Gap Found",
    priority: "High",
    action: "Add clinical study or validated clinical evidence.",
    icon: FlaskConical,
  },
  {
    id: "safety",
    title: "Safety Evidence",
    description: "Safety, toxicity and adverse-effect information.",
    score: 72,
    status: "Partial",
    priority: "Medium",
    action: "Strengthen safety and toxicity documentation.",
    icon: ShieldCheck,
  },
  {
    id: "ingredient",
    title: "Ingredient Evidence",
    description: "Scientific and traditional evidence for key ingredients.",
    score: 84,
    status: "Strong",
    priority: "Low",
    action: "Maintain citations for important ingredients.",
    icon: FileSearch,
  },
  {
    id: "efficacy",
    title: "Efficacy Evidence",
    description: "Evidence supporting the claimed benefit or application.",
    score: 61,
    status: "Gap Found",
    priority: "High",
    action: "Add stronger efficacy studies and supporting references.",
    icon: Target,
  },
  {
    id: "regulatory",
    title: "Regulatory Evidence",
    description: "Evidence required for the intended regulatory pathway.",
    score: 66,
    status: "Partial",
    priority: "Medium",
    action: "Map missing regulatory documents and requirements.",
    icon: ClipboardCheck,
  },
];

const fallbackDetails = {
  clinical: {
    missingEvidence:
      "Clinical validation, human study results and documented safety/efficacy outcomes are currently limited.",
    recommendation:
      "Identify relevant clinical studies and collect validated evidence for the intended use.",
    sources: ["Clinical research records", "AYUSH research evidence"],
  },
  efficacy: {
    missingEvidence:
      "Stronger evidence connecting the formulation or innovation with the claimed benefit is required.",
    recommendation:
      "Collect efficacy studies, outcome measures and relevant published research.",
    sources: ["Efficacy studies", "Research publications"],
  },
  safety: {
    missingEvidence:
      "Safety documentation is partially available but additional toxicity or adverse-effect evidence may be required.",
    recommendation:
      "Strengthen safety documentation with validated studies and relevant references.",
    sources: ["Safety studies", "Toxicity research"],
  },
  ingredient: {
    missingEvidence:
      "No major evidence gap is detected for the current ingredient evidence layer.",
    recommendation:
      "Continue maintaining reliable references for key ingredients.",
    sources: ["Traditional knowledge", "Research literature"],
  },
  regulatory: {
    missingEvidence:
      "Some regulatory supporting documents and pathway-specific evidence may still be required.",
    recommendation:
      "Map the intended regulatory pathway and collect the corresponding documentation.",
    sources: ["Regulatory guidance", "Official requirements"],
  },
};

export default function EvidenceGapAnalysisPage() {
  const [search, setSearch] = useState("");
  const [selectedGap, setSelectedGap] = useState(null);
  const [gapDetails, setGapDetails] = useState(null);
  const [loadingGap, setLoadingGap] = useState(false);

  const filteredData = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return evidenceData;

    return evidenceData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.priority.toLowerCase().includes(query)
    );
  }, [search]);

  const overallScore = Math.round(
    evidenceData.reduce((sum, item) => sum + item.score, 0) /
      evidenceData.length
  );

  const highPriority = evidenceData.filter(
    (item) => item.priority === "High"
  ).length;

  const strongEvidence = evidenceData.filter(
    (item) => item.status === "Strong"
  ).length;

  const openGapDetails = async (item) => {
    setSelectedGap(item);
    setGapDetails(null);
    setLoadingGap(true);

    try {
      const response = await fetch(
        `http://localhost:4000/api/evidence-gap/${item.id}`
      );

      if (!response.ok) {
        throw new Error("Backend response failed");
      }

      const data = await response.json();

      setGapDetails({
        ...item,
        ...data,
      });
    } catch (error) {
      console.warn("Evidence backend unavailable:", error);

      setGapDetails({
        ...item,
        ...(fallbackDetails[item.id] || {}),
      });
    } finally {
      setLoadingGap(false);
    }
  };

  const closeGapDetails = () => {
    setSelectedGap(null);
    setGapDetails(null);
    setLoadingGap(false);
  };

  return (
    <main className="eg-page">

      {/* ================= HEADER ================= */}

      <section className="eg-header">
        <div>
          <span className="eg-eyebrow">
            STAGE 08 • EVIDENCE INTELLIGENCE
          </span>

          <h1>Evidence Gap Analysis</h1>

          <p>
            Identify missing evidence, assess evidence readiness and understand
            what is required before moving toward IP and regulatory decisions.
          </p>
        </div>

        <div className="eg-header-badge">
          <Sparkles size={16} />
          Evidence-Grounded Analysis
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="eg-overview">

        <div className="eg-score-card">
          <div className="eg-score-circle">
            <div>
              <strong>{overallScore}</strong>
              <span>/100</span>
            </div>
          </div>

          <div className="eg-score-content">
            <span className="eg-small-label">
              OVERALL READINESS
            </span>

            <h2>Evidence Readiness</h2>

            <p>
              Your innovation has a developing evidence base, but some
              important evidence gaps should be addressed before final
              decisions.
            </p>

            <div className="eg-progress">
              <span style={{ width: `${overallScore}%` }} />
            </div>
          </div>
        </div>

        <div className="eg-mini-grid">

          <div className="eg-mini-card">
            <AlertTriangle size={20} />
            <strong>{highPriority}</strong>
            <span>High Priority Gaps</span>
          </div>

          <div className="eg-mini-card">
            <CheckCircle2 size={20} />
            <strong>{strongEvidence}</strong>
            <span>Strong Evidence Areas</span>
          </div>

          <div className="eg-mini-card">
            <FileSearch size={20} />
            <strong>{evidenceData.length}</strong>
            <span>Evidence Dimensions</span>
          </div>

        </div>
      </section>

      {/* ================= SEARCH ================= */}

      <section className="eg-search-box">

        <div className="eg-search-title">

          <div className="eg-icon">
            <FileSearch size={20} />
          </div>

          <div>
            <span className="eg-small-label">
              EVIDENCE DISCOVERY
            </span>

            <h2>Check Evidence Gaps</h2>

            <p>
              Search an evidence dimension to quickly identify missing areas.
            </p>
          </div>

        </div>

        <div className="eg-search">
          <FileSearch size={18} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clinical, safety, efficacy, regulatory..."
          />

          {search && (
            <button
              className="eg-clear-search"
              onClick={() => setSearch("")}
            >
              <X size={15} />
            </button>
          )}
        </div>

      </section>

      {/* ================= EVIDENCE MATRIX ================= */}

      <section className="eg-section">

        <div className="eg-section-head">
          <div>
            <span className="eg-small-label">
              EVIDENCE MATRIX
            </span>

            <h2>Evidence Coverage</h2>
          </div>

          <span className="eg-count">
            {filteredData.length} areas
          </span>
        </div>

        <div className="eg-grid">

          {filteredData.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="eg-card"
                key={item.id}
                onClick={() => openGapDetails(item)}
              >

                <div className="eg-card-top">

                  <div className="eg-card-icon">
                    <Icon size={21} />
                  </div>

                  <span
                    className={`eg-priority eg-${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="eg-score-row">
                  <span>Evidence strength</span>
                  <strong>{item.score}%</strong>
                </div>

                <div className="eg-bar">
                  <span style={{ width: `${item.score}%` }} />
                </div>

                <div className="eg-status">

                  {item.status === "Strong" ? (
                    <CheckCircle2 size={15} />
                  ) : (
                    <AlertTriangle size={15} />
                  )}

                  <span>{item.status}</span>

                </div>

                <div className="eg-action">

                  <span>Recommended next step</span>

                  <p>{item.action}</p>

                </div>

                <div className="eg-card-open">
                  View Analysis
                  <ArrowRight size={14} />
                </div>

              </article>
            );
          })}

        </div>
      </section>

      {/* ================= WHAT EVIDENCE IS MISSING ================= */}

      <section className="eg-gap-panel">

        <div className="eg-gap-heading">

          <div className="eg-gap-icon">
            <AlertTriangle size={22} />
          </div>

          <div>
            <span className="eg-small-label">
              GAP INTELLIGENCE
            </span>

            <h2>What Evidence Is Missing?</h2>

            <p>
              Click an evidence gap to open detailed analysis.
            </p>
          </div>

        </div>

        <div className="eg-gap-list">

          {evidenceData
            .filter((item) => item.priority === "High")
            .map((item, index) => (

              <button
                className="eg-gap-item"
                key={item.id}
                onClick={() => openGapDetails(item)}
              >

                <div className="eg-gap-number">
                  0{index + 1}
                </div>

                <div className="eg-gap-text">

                  <strong>{item.title}</strong>

                  <span>
                    {item.action}
                  </span>

                </div>

                <ArrowRight size={18} />

              </button>

            ))}

        </div>

        {/* ================= DETAIL PANEL ================= */}

        {selectedGap && (

          <div className="eg-detail-panel">

            <div className="eg-detail-head">

              <div className="eg-detail-title">

                <div className="eg-detail-icon">
                  {selectedGap.icon && (
                    (() => {
                      const SelectedIcon = selectedGap.icon;
                      return <SelectedIcon size={19} />;
                    })()
                  )}
                </div>

                <div>
                  <span className="eg-small-label">
                    EVIDENCE DETAIL
                  </span>

                  <h3>{selectedGap.title}</h3>
                </div>

              </div>

              <button
                className="eg-close"
                onClick={closeGapDetails}
                aria-label="Close evidence details"
              >
                <X size={17} />
              </button>

            </div>

            {loadingGap ? (

              <div className="eg-loading">

                <Sparkles size={18} />

                <div>
                  <strong>Fetching evidence analysis...</strong>
                  <span>
                    Connecting to evidence intelligence service
                  </span>
                </div>

              </div>

            ) : (

              <div className="eg-detail-content">

                <div className="eg-detail-top">

                  <div className="eg-detail-score">

                    <span>Evidence Strength</span>

                    <strong>
                      {gapDetails?.score ?? selectedGap.score}%
                    </strong>

                    <div className="eg-detail-bar">
                      <span
                        style={{
                          width: `${
                            gapDetails?.score ??
                            selectedGap.score
                          }%`,
                        }}
                      />
                    </div>

                  </div>

                  <div className="eg-detail-priority">

                    <span>Priority</span>

                    <strong>
                      {gapDetails?.priority ??
                        selectedGap.priority}
                    </strong>

                  </div>

                  <div className="eg-detail-status">

                    <span>Status</span>

                    <strong>
                      {gapDetails?.status ??
                        selectedGap.status}
                    </strong>

                  </div>

                </div>

                <div className="eg-detail-grid">

                  <div className="eg-detail-box eg-detail-wide">

                    <span>WHAT IS MISSING?</span>

                    <p>
                      {gapDetails?.missingEvidence ||
                        selectedGap.action}
                    </p>

                  </div>

                  <div className="eg-detail-box eg-detail-wide">

                    <span>RECOMMENDED NEXT STEP</span>

                    <p>
                      {gapDetails?.recommendation ||
                        selectedGap.action}
                    </p>

                  </div>

                  <div className="eg-detail-box">

                    <span>RELEVANT SOURCES</span>

                    <div className="eg-source-list">

                      {(gapDetails?.sources ||
                        fallbackDetails[selectedGap.id]?.sources ||
                        []).map((source, index) => (

                          <div
                            className="eg-source"
                            key={index}
                          >
                            <CheckCircle2 size={13} />
                            {source}
                          </div>

                        ))}

                    </div>

                  </div>

                  <div className="eg-detail-box">

                    <span>ANALYSIS NOTE</span>

                    <p>
                      This analysis identifies evidence areas that may
                      require strengthening. Final scientific, regulatory
                      and legal assessment should use verified sources
                      and expert review.
                    </p>

                  </div>

                </div>

              </div>

            )}

          </div>

        )}

      </section>

      {/* ================= JOURNEY ================= */}

      <section className="eg-journey">

        <div className="eg-journey-title">

          <span className="eg-small-label">
            NEXT STEP
          </span>

          <h2>Evidence Readiness Journey</h2>

        </div>

        <div className="eg-journey-grid">

          <div className="eg-step active">
            <span>01</span>
            <div>
              <strong>Discover</strong>
              <small>Find available evidence</small>
            </div>
          </div>

          <ArrowRight size={18} />

          <div className="eg-step">
            <span>02</span>
            <div>
              <strong>Identify Gaps</strong>
              <small>Detect missing evidence</small>
            </div>
          </div>

          <ArrowRight size={18} />

          <div className="eg-step">
            <span>03</span>
            <div>
              <strong>Strengthen</strong>
              <small>Add supporting studies</small>
            </div>
          </div>

          <ArrowRight size={18} />

          <div className="eg-step">
            <span>04</span>
            <div>
              <strong>Reassess</strong>
              <small>Measure readiness again</small>
            </div>
          </div>

        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}

      <div className="eg-disclaimer">
        <ShieldCheck size={16} />

        Evidence-gap analysis is an informational decision-support
        layer and does not replace scientific, regulatory or legal
        expert review.
      </div>

      {/* ================= CSS ================= */}

      <style>{`

        .eg-page {
          min-height: 100%;
          padding: 28px 32px 42px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(214,232,220,.45),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #f7faf7,
              #eef5f0
            );
          color: #29483a;
        }

        /* HEADER */

        .eg-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          margin-bottom: 24px;
        }

        .eg-eyebrow,
        .eg-small-label {
          display: block;
          color: #658073;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
        }

        .eg-header h1 {
          margin: 7px 0;
          font-size: 28px;
          color: #183f30;
        }

        .eg-header p {
          max-width: 720px;
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
          color: #6b8076;
        }

        .eg-header-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border-radius: 12px;
          background: #e4f0e8;
          color: #35634d;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* OVERVIEW */

        .eg-overview {
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 18px;
          margin-bottom: 24px;
        }

        .eg-score-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            #173f2f,
            #285b46
          );
          color: white;
          box-shadow:
            0 12px 30px rgba(36,76,57,.13);
        }

        .eg-score-circle {
          width: 115px;
          height: 115px;
          flex: 0 0 115px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            conic-gradient(
              #b9ddc8 0deg 260deg,
              rgba(255,255,255,.14) 260deg 360deg
            );
        }

        .eg-score-circle > div {
          width: 88px;
          height: 88px;
          display: grid;
          place-content: center;
          text-align: center;
          border-radius: 50%;
          background: #214e3b;
        }

        .eg-score-circle strong {
          font-size: 27px;
        }

        .eg-score-circle span {
          font-size: 9px;
          opacity: .7;
        }

        .eg-score-content h2 {
          margin: 5px 0 7px;
          font-size: 20px;
        }

        .eg-score-content p {
          max-width: 470px;
          margin: 0 0 14px;
          color: #d4e4db;
          font-size: 11px;
          line-height: 1.6;
        }

        .eg-progress,
        .eg-bar {
          overflow: hidden;
          height: 7px;
          border-radius: 20px;
          background: #dce8e1;
        }

        .eg-progress {
          max-width: 470px;
          background: rgba(255,255,255,.18);
        }

        .eg-progress span,
        .eg-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #a8d6ba;
        }

        .eg-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .eg-mini-card {
          padding: 18px;
          border: 1px solid #dce8e0;
          border-radius: 17px;
          background: rgba(255,255,255,.8);
          box-shadow:
            0 6px 18px rgba(41,72,58,.05);
        }

        .eg-mini-card svg {
          color: #567966;
          margin-bottom: 13px;
        }

        .eg-mini-card strong {
          display: block;
          font-size: 23px;
          color: #214b38;
        }

        .eg-mini-card span {
          font-size: 10px;
          color: #789087;
        }

        /* SEARCH */

        .eg-search-box {
          padding: 22px 24px;
          margin-bottom: 26px;
          border: 1px solid #d9e6df;
          border-radius: 19px;
          background: rgba(255,255,255,.84);
        }

        .eg-search-title {
          display: flex;
          gap: 13px;
          align-items: center;
          margin-bottom: 17px;
        }

        .eg-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #3e7057;
          background: #e5f1e9;
        }

        .eg-search-title h2,
        .eg-section-head h2,
        .eg-gap-heading h2,
        .eg-journey-title h2 {
          margin: 4px 0 0;
          color: #244c3a;
          font-size: 18px;
        }

        .eg-search-title p {
          margin: 4px 0 0;
          color: #7b8e85;
          font-size: 10px;
        }

        .eg-search {
          height: 47px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          border: 1px solid #ceded5;
          border-radius: 12px;
          background: white;
        }

        .eg-search svg {
          color: #759184;
        }

        .eg-search input {
          width: 100%;
          border: 0;
          outline: 0;
          font-size: 12px;
          color: #29483a;
          background: transparent;
        }

        .eg-clear-search {
          border: 0;
          background: transparent;
          color: #82968b;
          cursor: pointer;
        }

        /* MATRIX */

        .eg-section {
          margin-bottom: 25px;
        }

        .eg-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .eg-count {
          padding: 7px 11px;
          border-radius: 9px;
          background: #e5f0e9;
          color: #527563;
          font-size: 10px;
          font-weight: 800;
        }

        .eg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .eg-card {
          position: relative;
          padding: 19px;
          border: 1px solid #dce7e1;
          border-radius: 17px;
          background: rgba(255,255,255,.88);
          box-shadow:
            0 6px 17px rgba(37,70,54,.045);
          cursor: pointer;
          transition: .2s ease;
        }

        .eg-card:hover {
          transform: translateY(-3px);
          border-color: #bfd8c8;
          box-shadow:
            0 11px 24px rgba(37,70,54,.09);
        }

        .eg-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .eg-card-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #3e7057;
          background: #e5f1e9;
        }

        .eg-priority {
          padding: 5px 8px;
          border-radius: 7px;
          font-size: 9px;
          font-weight: 800;
        }

        .eg-high {
          background: #fff0d9;
          color: #a46721;
        }

        .eg-medium {
          background: #edf2df;
          color: #71823f;
        }

        .eg-low {
          background: #e2f1e7;
          color: #427257;
        }

        .eg-card h3 {
          margin: 15px 0 6px;
          font-size: 14px;
          color: #294d3c;
        }

        .eg-card > p {
          min-height: 34px;
          margin: 0 0 17px;
          color: #7a8e84;
          font-size: 10px;
          line-height: 1.6;
        }

        .eg-score-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 7px;
          font-size: 9px;
          color: #71857b;
        }

        .eg-score-row strong {
          color: #37634e;
        }

        .eg-status {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 11px;
          font-size: 9px;
          font-weight: 800;
          color: #527160;
        }

        .eg-action {
          margin-top: 15px;
          padding: 11px;
          border-radius: 10px;
          background: #f5f8f5;
        }

        .eg-action span {
          font-size: 8px;
          color: #82958c;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-weight: 800;
        }

        .eg-action p {
          margin: 5px 0 0;
          color: #486657;
          font-size: 9px;
          line-height: 1.5;
        }

        .eg-card-open {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 5px;
          margin-top: 12px;
          color: #4a745d;
          font-size: 9px;
          font-weight: 800;
        }

        /* GAP PANEL */

        .eg-gap-panel {
          padding: 24px;
          margin-bottom: 23px;
          border-radius: 20px;
          border: 1px solid #eadfc9;
          background:
            linear-gradient(
              135deg,
              #fffdf8,
              #f7f9f3
            );
        }

        .eg-gap-heading {
          display: flex;
          gap: 13px;
          align-items: center;
          margin-bottom: 20px;
        }

        .eg-gap-icon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #a26b28;
          background: #fff0d9;
        }

        .eg-gap-heading p {
          margin: 5px 0 0;
          font-size: 10px;
          color: #7d8b7d;
        }

        .eg-gap-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .eg-gap-item {
          width: 100%;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 14px;
          border: 1px solid #eadfca;
          border-radius: 13px;
          background: rgba(255,255,255,.8);
          text-align: left;
          cursor: pointer;
          transition: .2s ease;
        }

        .eg-gap-item:hover {
          transform: translateY(-2px);
          border-color: #d5c69f;
          background: white;
          box-shadow:
            0 7px 18px rgba(87,75,44,.07);
        }

        .eg-gap-number {
          width: 33px;
          height: 33px;
          flex: 0 0 33px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #f8e8cb;
          color: #a16b2b;
          font-size: 9px;
          font-weight: 900;
        }

        .eg-gap-text {
          flex: 1;
          min-width: 0;
        }

        .eg-gap-text strong {
          display: block;
          color: #4b543f;
          font-size: 11px;
        }

        .eg-gap-text span {
          display: block;
          margin-top: 3px;
          color: #8a9181;
          font-size: 9px;
          line-height: 1.4;
        }

        .eg-gap-item > svg {
          flex: 0 0 auto;
          color: #9a987f;
        }

        /* DETAIL PANEL */

        .eg-detail-panel {
          margin-top: 19px;
          padding: 20px;
          border: 1px solid #d5e4db;
          border-radius: 17px;
          background:
            linear-gradient(
              135deg,
              #ffffff,
              #f5faf7
            );
          animation: egOpen .22s ease;
        }

        @keyframes egOpen {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .eg-detail-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .eg-detail-title {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .eg-detail-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #3e7057;
          background: #e5f1e9;
        }

        .eg-detail-head h3 {
          margin: 5px 0 0;
          color: #294d3c;
          font-size: 16px;
        }

        .eg-close {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 8px;
          background: #e7f0ea;
          color: #4b6d5b;
          cursor: pointer;
        }

        .eg-close:hover {
          background: #dcebe2;
        }

        .eg-loading {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 22px;
          color: #527561;
          border-radius: 11px;
          background: #f3f8f5;
          font-size: 11px;
        }

        .eg-loading strong {
          display: block;
          font-size: 11px;
        }

        .eg-loading span {
          display: block;
          margin-top: 3px;
          color: #84968d;
          font-size: 9px;
        }

        .eg-detail-content {
          width: 100%;
        }

        .eg-detail-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 13px;
        }

        .eg-detail-score,
        .eg-detail-priority,
        .eg-detail-status {
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #e0eae4;
          background: #f8faf9;
        }

        .eg-detail-score span,
        .eg-detail-priority span,
        .eg-detail-status span {
          display: block;
          margin-bottom: 7px;
          color: #80928a;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .eg-detail-score strong,
        .eg-detail-priority strong,
        .eg-detail-status strong {
          color: #315a46;
          font-size: 16px;
        }

        .eg-detail-bar {
          height: 5px;
          overflow: hidden;
          margin-top: 9px;
          border-radius: 20px;
          background: #dce8e1;
        }

        .eg-detail-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #83b798;
        }

        .eg-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .eg-detail-box {
          padding: 15px;
          border-radius: 12px;
          background: #f7faf8;
          border: 1px solid #e1ebe5;
        }

        .eg-detail-wide {
          grid-column: 1 / -1;
        }

        .eg-detail-box > span {
          display: block;
          margin-bottom: 7px;
          color: #7b9085;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .eg-detail-box p {
          margin: 0;
          color: #536c5e;
          font-size: 10px;
          line-height: 1.65;
        }

        .eg-source-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .eg-source {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #536c5e;
          font-size: 9px;
        }

        .eg-source svg {
          color: #57916e;
        }

        /* JOURNEY */

        .eg-journey {
          padding: 23px;
          border-radius: 19px;
          background: #edf5ef;
          border: 1px solid #d9e7dd;
        }

        .eg-journey-grid {
          display: grid;
          grid-template-columns:
            1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 11px;
          margin-top: 18px;
        }

        .eg-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px;
          border-radius: 12px;
          background: white;
          border: 1px solid #dce8e0;
        }

        .eg-step > span {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #e5f0e9;
          color: #47715a;
          font-size: 8px;
          font-weight: 900;
        }

        .eg-step strong {
          display: block;
          font-size: 10px;
          color: #345744;
        }

        .eg-step small {
          display: block;
          margin-top: 3px;
          color: #87978f;
          font-size: 8px;
        }

        .eg-step.active {
          border-color: #b9d6c4;
          box-shadow:
            0 4px 12px rgba(52,91,68,.06);
        }

        .eg-journey-grid > svg {
          color: #779084;
        }

        .eg-disclaimer {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 16px;
          color: #82938b;
          font-size: 9px;
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {

          .eg-overview {
            grid-template-columns: 1fr;
          }

          .eg-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .eg-journey-grid {
            grid-template-columns: 1fr 1fr;
          }

          .eg-journey-grid > svg {
            display: none;
          }

          .eg-detail-top {
            grid-template-columns: 1fr 1fr;
          }

        }

        @media (max-width: 700px) {

          .eg-page {
            padding: 20px 15px;
          }

          .eg-header {
            flex-direction: column;
          }

          .eg-mini-grid,
          .eg-grid,
          .eg-gap-list,
          .eg-journey-grid,
          .eg-detail-grid,
          .eg-detail-top {
            grid-template-columns: 1fr;
          }

          .eg-score-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .eg-detail-wide {
            grid-column: auto;
          }

        }

      `}</style>
    </main>
  );
}