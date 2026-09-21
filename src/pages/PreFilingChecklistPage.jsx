import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FileText,
  ShieldCheck,
} from "lucide-react";

const checklistItems = [
  {
    id: "title",
    number: "01",
    title: "Innovation Title",
    description: "Basic identity of your innovation",
    value: "Ayurvedic Herbal Wellness Formulation",
    status: "Ready",
  },
  {
    id: "technical",
    number: "02",
    title: "Technical Field",
    description: "Technical domain and innovation area",
    value: "Ayurveda / Herbal Formulation",
    status: "Ready",
  },
  {
    id: "problem",
    number: "03",
    title: "Problem Statement",
    description: "Problem addressed by the innovation",
    value: "Problem statement available from Innovation Profile",
    status: "Ready",
  },
  {
    id: "summary",
    number: "04",
    title: "Innovation Summary",
    description: "Short description of the proposed solution",
    value: "Innovation summary available",
    status: "Ready",
  },
  {
    id: "prior-art",
    number: "05",
    title: "Prior Art Information",
    description: "Existing patents and similar knowledge",
    value: "Prior-art signals available for review",
    status: "Available",
  },
  {
    id: "evidence",
    number: "06",
    title: "Evidence & Research",
    description: "Research and supporting evidence",
    value: "Evidence records available",
    status: "Available",
  },
  {
    id: "regulatory",
    number: "07",
    title: "Regulatory Information",
    description: "Relevant Ayurveda / AYUSH pathway",
    value: "Regulatory information available",
    status: "Available",
  },
  {
    id: "claims",
    number: "08",
    title: "Patent Claims",
    description: "Draft claims for patent preparation",
    value: "Professional review recommended",
    status: "Review",
  },
];

export default function PreFilingChecklistPage({ onContinue }) {
  const [selected, setSelected] = useState(null);

  const selectedItem = checklistItems.find(
    (item) => item.id === selected
  );

  return (
    <div className="prefiling-page">

      {/* HERO */}
      <section className="prefiling-hero">
        <div>
          <div className="eyebrow">
            <ShieldCheck size={16} />
            IP SHAKTI SAHAYAK
          </div>

          <h1>Pre-Filing Checklist</h1>

          <p>
            Review the information collected from your Innovation Journey
            before moving towards patent preparation.
          </p>
        </div>

        <div className="hero-status">
          <CheckCircle2 size={18} />
          <span>Preparation Ready</span>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="summary-grid">

        <div className="summary-card">
          <div className="summary-icon">
            <FileCheck2 size={21} />
          </div>

          <div>
            <strong>{checklistItems.length}</strong>
            <span>Checklist Items</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>7</strong>
            <span>Information Ready</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">
            <FileText size={21} />
          </div>

          <div>
            <strong>1</strong>
            <span>Needs Review</span>
          </div>
        </div>

      </section>

      {/* MAIN */}
      <section className="prefiling-layout">

        {/* CHECKLIST */}
        <div className="checklist-panel">

          <div className="panel-header">
            <div>
              <h2>Information Checklist</h2>
              <p>
                These details can be carried forward into your patent
                preparation workflow.
              </p>
            </div>

            <span className="ready-badge">
              87% Ready
            </span>
          </div>

          <div className="checklist-list">

            {checklistItems.map((item) => (
              <button
                key={item.id}
                className={`checklist-item ${
                  selected === item.id ? "active" : ""
                }`}
                onClick={() => setSelected(item.id)}
              >

                <div className="number-box">
                  {item.number}
                </div>

                <div className="check-icon">
                  {item.status === "Review" ? (
                    <FileText size={18} />
                  ) : (
                    <CheckCircle2 size={18} />
                  )}
                </div>

                <div className="item-content">
                  <div className="item-title-row">
                    <strong>{item.title}</strong>

                    <span
                      className={
                        item.status === "Review"
                          ? "status review"
                          : "status"
                      }
                    >
                      {item.status}
                    </span>
                  </div>

                  <p>{item.description}</p>

                  <span className="item-value">
                    {item.value}
                  </span>
                </div>

                <ArrowRight size={18} className="item-arrow" />

              </button>
            ))}

          </div>
        </div>

        {/* DETAIL */}
        <aside className="detail-panel">

          {selectedItem ? (
            <>
              <div className="detail-number">
                {selectedItem.number}
              </div>

              <h2>{selectedItem.title}</h2>

              <p className="detail-description">
                {selectedItem.description}
              </p>

              <div className="detail-box">
                <span>Current Information</span>
                <strong>{selectedItem.value}</strong>
              </div>

              <div className="detail-status">
                {selectedItem.status === "Review" ? (
                  <>
                    <FileText size={18} />
                    <div>
                      <strong>Professional Review</strong>
                      <p>
                        This section should be reviewed before
                        any formal patent filing.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={18} />
                    <div>
                      <strong>Information Available</strong>
                      <p>
                        This information is ready to be carried
                        into the next preparation stage.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <button
                className="back-button"
                onClick={() => setSelected(null)}
              >
                Back to Checklist
              </button>
            </>
          ) : (
            <div className="empty-detail">

              <div className="large-icon">
                <FileCheck2 size={30} />
              </div>

              <h2>Review Before Filing</h2>

              <p>
                Select any checklist item to review the information
                available for your innovation.
              </p>

              <div className="tip-box">
                <CheckCircle2 size={18} />
                <span>
                  Complete the checklist before moving to Patent
                  Preparation.
                </span>
              </div>

            </div>
          )}

        </aside>

      </section>

      {/* NEXT STEP */}
      <section className="next-section">

        <div>
          <span className="next-label">
            NEXT STEP
          </span>

          <h2>
            Continue to Patent Preparation
          </h2>

          <p>
            Use the reviewed information to prepare your
            patent-preparation document.
          </p>
        </div>

        <button
          className="continue-button"
          onClick={() => {
            if (onContinue) {
              onContinue();
            }
          }}
        >
          Continue
          <ArrowRight size={18} />
        </button>

      </section>

      <div className="disclaimer">
        This checklist is an information-preparation aid and does not
        constitute legal or patent advice. Professional review is
        recommended before filing.
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .prefiling-page {
          min-height: 100%;
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(75, 135, 94, 0.08), transparent 30%),
            #f4f8f5;
          color: #203b2b;
        }

        .prefiling-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 32px;
          border-radius: 24px;
          background: linear-gradient(135deg, #173f29, #286744);
          color: white;
          box-shadow: 0 12px 30px rgba(30, 73, 48, 0.16);
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          opacity: 0.8;
          margin-bottom: 12px;
        }

        .prefiling-hero h1 {
          margin: 0;
          font-size: 32px;
          line-height: 1.15;
        }

        .prefiling-hero p {
          max-width: 650px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.78);
          line-height: 1.6;
          font-size: 14px;
        }

        .hero-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border-radius: 30px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          white-space: nowrap;
          font-size: 12px;
          font-weight: 700;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 20px 0;
        }

        .summary-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px;
          background: white;
          border: 1px solid #dce8df;
          border-radius: 17px;
          box-shadow: 0 6px 18px rgba(34, 73, 49, .05);
        }

        .summary-icon {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5f3e9;
          color: #287047;
        }

        .summary-card strong {
          display: block;
          font-size: 22px;
          color: #214b31;
        }

        .summary-card span {
          color: #78857d;
          font-size: 12px;
        }

        .prefiling-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(300px, .75fr);
          gap: 20px;
          align-items: start;
        }

        .checklist-panel,
        .detail-panel {
          background: white;
          border: 1px solid #dce8df;
          border-radius: 21px;
          box-shadow: 0 7px 22px rgba(34, 73, 49, .055);
        }

        .checklist-panel {
          padding: 24px;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 18px;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 20px;
          color: #214b31;
        }

        .panel-header p {
          margin: 5px 0 0;
          font-size: 12px;
          color: #78857d;
        }

        .ready-badge {
          padding: 7px 11px;
          border-radius: 20px;
          background: #e7f4eb;
          color: #287047;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        .checklist-list {
          display: grid;
          gap: 10px;
        }

        .checklist-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          padding: 15px;
          border-radius: 15px;
          background: #fbfdfb;
          border: 1px solid #e1ebe4;
          cursor: pointer;
          transition: .2s ease;
          color: inherit;
        }

        .checklist-item:hover,
        .checklist-item.active {
          border-color: #a9cdb5;
          background: #f3faf5;
          transform: translateY(-1px);
        }

        .number-box {
          width: 32px;
          flex-shrink: 0;
          font-size: 11px;
          font-weight: 800;
          color: #8a9890;
        }

        .check-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #e7f5eb;
          color: #2d7549;
        }

        .item-content {
          flex: 1;
          min-width: 0;
        }

        .item-title-row {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .item-title-row strong {
          font-size: 14px;
          color: #294a36;
        }

        .status {
          padding: 4px 7px;
          border-radius: 10px;
          background: #e8f5ec;
          color: #287047;
          font-size: 9px;
          font-weight: 800;
        }

        .status.review {
          background: #fff1dc;
          color: #9a641b;
        }

        .item-content p {
          margin: 3px 0;
          color: #849088;
          font-size: 11px;
        }

        .item-value {
          color: #53665a;
          font-size: 11px;
        }

        .item-arrow {
          color: #9aa79f;
          flex-shrink: 0;
        }

        .detail-panel {
          padding: 25px;
          min-height: 450px;
          position: sticky;
          top: 20px;
        }

        .detail-number {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #e5f3e9;
          color: #287047;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .detail-panel h2 {
          margin: 0;
          color: #214b31;
          font-size: 21px;
        }

        .detail-description {
          color: #78857d;
          font-size: 13px;
          line-height: 1.6;
        }

        .detail-box {
          padding: 16px;
          margin-top: 20px;
          border-radius: 14px;
          background: #f5faf6;
          border: 1px solid #dce9df;
        }

        .detail-box span {
          display: block;
          color: #87938b;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .7px;
          margin-bottom: 7px;
        }

        .detail-box strong {
          font-size: 13px;
          color: #2b5038;
          line-height: 1.5;
        }

        .detail-status {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          padding: 14px;
          border-radius: 14px;
          background: #f8fbf9;
        }

        .detail-status svg {
          color: #287047;
          flex-shrink: 0;
        }

        .detail-status strong {
          font-size: 12px;
          color: #31553e;
        }

        .detail-status p {
          margin: 4px 0 0;
          color: #7d8981;
          font-size: 11px;
          line-height: 1.5;
        }

        .back-button {
          margin-top: 18px;
          width: 100%;
          padding: 11px;
          border-radius: 11px;
          border: 1px solid #d5e3da;
          background: white;
          color: #31553e;
          font-weight: 700;
          cursor: pointer;
        }

        .empty-detail {
          height: 100%;
          min-height: 390px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .large-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #e7f4eb;
          color: #287047;
          margin-bottom: 18px;
        }

        .empty-detail h2 {
          font-size: 19px;
        }

        .empty-detail p {
          max-width: 280px;
          color: #7c8981;
          font-size: 12px;
          line-height: 1.6;
        }

        .tip-box {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 12px;
          padding: 11px 13px;
          border-radius: 12px;
          background: #f4faf6;
          color: #287047;
          font-size: 11px;
          text-align: left;
        }

        .next-section {
          margin-top: 20px;
          padding: 23px 25px;
          border-radius: 19px;
          background: #eaf5ed;
          border: 1px solid #d1e4d7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .next-label {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.2px;
          color: #568064;
        }

        .next-section h2 {
          margin: 5px 0;
          font-size: 18px;
          color: #214b31;
        }

        .next-section p {
          margin: 0;
          font-size: 12px;
          color: #718078;
        }

        .continue-button {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 0;
          border-radius: 11px;
          padding: 12px 17px;
          background: #286744;
          color: white;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .disclaimer {
          margin-top: 18px;
          padding: 13px 15px;
          border-radius: 12px;
          background: #fffaf0;
          border: 1px solid #eee2c8;
          color: #7d7159;
          font-size: 10px;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .prefiling-layout {
            grid-template-columns: 1fr;
          }

          .detail-panel {
            position: static;
          }
        }

        @media (max-width: 700px) {
          .prefiling-page {
            padding: 15px;
          }

          .prefiling-hero {
            padding: 23px;
            flex-direction: column;
            align-items: flex-start;
          }

          .prefiling-hero h1 {
            font-size: 27px;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }

          .panel-header,
          .next-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .checklist-item {
            padding: 12px;
          }

          .number-box {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}