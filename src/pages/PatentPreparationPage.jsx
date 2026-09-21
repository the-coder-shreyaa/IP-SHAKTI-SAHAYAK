import { useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileCheck2,
  FileText,
  Loader2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import ProgressBar from "../components/ProgressBar";
import StatusBadge from "../components/StatusBadge";

import { sampleInnovation } from "../data/innovationData";
import { saveInnovation, saveInnovationToHistory } from "../services/storage";

const preparationFields = [
  {
    id: "title",
    number: "01",
    label: "Invention / Innovation Title",
    short: "Define a clear technical title for the innovation.",
    placeholder: "Enter the technical title of the innovation",
    type: "input",
  },
  {
    id: "technicalField",
    number: "02",
    label: "Technical Field",
    short: "Identify the technical domain and application area.",
    placeholder:
      "Example: Herbal formulation, pharmaceutical preparation...",
    type: "input",
  },
  {
    id: "background",
    number: "03",
    label: "Background",
    short: "Describe existing approaches, context and limitations.",
    placeholder:
      "Describe the existing situation, known approaches and relevant background...",
    type: "textarea",
  },
  {
    id: "problemStatement",
    number: "04",
    label: "Problem Statement",
    short: "Clearly define the technical problem being addressed.",
    placeholder:
      "Clearly describe the technical problem addressed by the innovation...",
    type: "textarea",
  },
  {
    id: "summary",
    number: "05",
    label: "Summary of Innovation",
    short: "Give a concise technical overview of the invention.",
    placeholder:
      "Provide a concise technical summary of the innovation...",
    type: "textarea",
  },
  {
    id: "detailedDescription",
    number: "06",
    label: "Detailed Description",
    short: "Document ingredients, components, formulation and process.",
    placeholder:
      "Describe the ingredients, components, formulation, process and technical implementation...",
    type: "textarea",
  },
  {
    id: "advantages",
    number: "07",
    label: "Advantages / Technical Effect",
    short: "Record measurable or technically relevant effects.",
    placeholder:
      "Describe measurable or technically relevant advantages...",
    type: "textarea",
  },
  {
    id: "experimentalEvidence",
    number: "08",
    label: "Experimental Evidence",
    short: "Add experiments, observations and supporting evidence.",
    placeholder:
      "Record experiments, observations, testing or supporting evidence...",
    type: "textarea",
  },
  {
    id: "drawings",
    number: "09",
    label: "Drawings / Flowchart Notes",
    short: "Describe figures, diagrams and process flowcharts.",
    placeholder:
      "Describe diagrams, process flowcharts or figures that should accompany the preparation...",
    type: "textarea",
  },
  {
    id: "claims",
    number: "10",
    label: "Claims — DRAFT",
    short: "Organise possible claim concepts for professional review.",
    placeholder:
      "Organise possible claim concepts here for professional review...",
    type: "textarea",
  },
  {
    id: "references",
    number: "11",
    label: "References",
    short: "Add research, patent and supporting references.",
    placeholder:
      "Add research, traditional knowledge, patent or other supporting references...",
    type: "textarea",
  },
];

const initialPreparation = {
  title: "",
  technicalField: "",
  background: "",
  problemStatement: "",
  summary: "",
  detailedDescription: "",
  advantages: "",
  experimentalEvidence: "",
  drawings: "",
  claims: "",
  references: "",
};

function PatentPreparationPage({
  innovation = sampleInnovation,
  onContinue,
}) {
  const [form, setForm] = useState({
    ...initialPreparation,
    title: innovation?.title || "",
    problemStatement: innovation?.problemStatement || "",
    detailedDescription: innovation?.description || "",
    advantages: innovation?.advantages || "",
  });

  const [activeSection, setActiveSection] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState("");

  const completedFields = useMemo(() => {
    return preparationFields.filter(
      (field) => String(form[field.id] || "").trim().length > 0
    ).length;
  }, [form]);

  const progress = Math.round(
    (completedFields / preparationFields.length) * 100
  );

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  /*
   * Keep the existing innovation locally updated.
   * No visible Save button is required anymore.
   */
  const prepareInnovationPayload = () => {
    const updatedInnovation = {
      ...innovation,
      ...form,
      patentPreparation: form,
      updatedAt: new Date().toISOString(),
    };

    saveInnovation(updatedInnovation);
    saveInnovationToHistory(updatedInnovation);

    return updatedInnovation;
  };

  const handleExportPDF = async () => {
    setExporting(true);
    setDownloadMessage("");

    const payload = prepareInnovationPayload();

    try {
      const response = await fetch(
        "http://localhost:4000/api/patent-preparation/export-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            innovation: payload,
            preparation: form,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("PDF export failed");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${(
        form.title ||
        "Patent_Preparation"
      )
        .replace(/[^a-z0-9]+/gi, "_")
        .replace(/^_+|_+$/g, "")}.pdf`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      window.URL.revokeObjectURL(url);

      setDownloadMessage(
        "Your Patent Preparation PDF has been downloaded."
      );
    } catch (error) {
      console.error(error);

      setDownloadMessage(
        "PDF export could not connect to the backend. Please start the backend and try again."
      );
    } finally {
      setExporting(false);

      setTimeout(() => {
        setDownloadMessage("");
      }, 5000);
    }
  };

  const toggleSection = (id) => {
    setActiveSection((current) =>
      current === id ? null : id
    );
  };

  return (
    <main className="page-content patent-page">

      {/* HEADER */}
      <SectionHeader
        eyebrow="STAGE 09 • PATENT PREPARATION"
        title="Patent Preparation Workspace"
        description="Transform your innovation record into a structured patent-preparation document for professional review."
        icon={FileText}
        action={
          <button
            type="button"
            className="export-pdf-button"
            onClick={handleExportPDF}
            disabled={exporting}
          >
            {exporting ? (
              <>
                <Loader2 className="download-spinner" size={17} />
                Preparing PDF...
              </>
            ) : (
              <>
                <Download size={17} />
                Export Patent PDF
              </>
            )}
          </button>
        }
      />

      {/* DOWNLOAD MESSAGE */}
      {downloadMessage && (
        <div
          className={`download-toast ${
            downloadMessage.includes("downloaded")
              ? "success"
              : "error"
          }`}
        >
          {downloadMessage.includes("downloaded") ? (
            <CheckCircle2 size={18} />
          ) : (
            <AlertCircle size={18} />
          )}

          <span>{downloadMessage}</span>
        </div>
      )}

      {/* HERO */}
      <section className="pp-main-hero">
        <div className="pp-hero-left">
          <div className="pp-hero-icon">
            <FileCheck2 size={25} />
          </div>

          <div>
            <span className="pp-eyebrow">
              PATENT DOCUMENT BUILDER
            </span>

            <h1>
              {form.title || "Untitled Innovation"}
            </h1>

            <p>
              Prepare your technical disclosure section by section.
              Your completed information will be compiled into a
              downloadable patent-preparation PDF.
            </p>
          </div>
        </div>

        <div className="pp-hero-progress">
          <div className="pp-progress-top">
            <span>Preparation Readiness</span>
            <strong>{progress}%</strong>
          </div>

          <ProgressBar
            value={progress}
            showValue={false}
            size="small"
          />

          <small>
            {completedFields} of {preparationFields.length} sections
            completed
          </small>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="pp-content-grid">

        {/* LEFT */}
        <section className="pp-sections">

          <div className="pp-section-heading">
            <div>
              <span className="pp-eyebrow dark">
                TECHNICAL DISCLOSURE
              </span>

              <h2>Innovation Description</h2>

              <p>
                Select a section to edit its information. Each section
                remains independent so your preparation record stays
                organised.
              </p>
            </div>

            <StatusBadge
              status={
                progress === 100
                  ? "Completed"
                  : progress > 0
                  ? "In Progress"
                  : "Draft"
              }
            />
          </div>

          <div className="pp-section-list">
            {preparationFields.map((field) => {
              const isComplete =
                String(form[field.id] || "").trim().length > 0;

              const isActive =
                activeSection === field.id;

              return (
                <article
                  className={`pp-section-card ${
                    isActive ? "active" : ""
                  } ${isComplete ? "complete" : ""}`}
                  key={field.id}
                >
                  <button
                    type="button"
                    className="pp-section-card-header"
                    onClick={() => toggleSection(field.id)}
                  >
                    <div className="pp-number">
                      {field.number}
                    </div>

                    <div className="pp-section-info">
                      <div className="pp-title-line">
                        <h3>{field.label}</h3>

                        {isComplete && (
                          <span className="complete-label">
                            <CheckCircle2 size={13} />
                            Complete
                          </span>
                        )}
                      </div>

                      <p>{field.short}</p>
                    </div>

                    <ArrowRight
                      className={`pp-arrow ${
                        isActive ? "rotated" : ""
                      }`}
                      size={19}
                    />
                  </button>

                  {isActive && (
                    <div className="pp-editor">
                      <div className="pp-editor-label">
                        <span>Your Information</span>

                        <small>
                          {isComplete
                            ? "Information added"
                            : "Not completed yet"}
                        </small>
                      </div>

                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          rows={7}
                          value={form[field.id]}
                          placeholder={field.placeholder}
                          onChange={(event) =>
                            updateField(
                              field.id,
                              event.target.value
                            )
                          }
                        />
                      ) : (
                        <input
                          id={field.id}
                          type="text"
                          value={form[field.id]}
                          placeholder={field.placeholder}
                          onChange={(event) =>
                            updateField(
                              field.id,
                              event.target.value
                            )
                          }
                        />
                      )}

                      <div className="pp-editor-footer">
                        <span>
                          {String(form[field.id] || "").length}{" "}
                          characters
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveSection(null)
                          }
                        >
                          Done
                          <CheckCircle2 size={15} />
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="pp-sidebar">

          <div className="pp-side-card readiness-card">
            <div className="pp-side-icon">
              <ClipboardCheck size={19} />
            </div>

            <span className="pp-eyebrow dark">
              PREPARATION STATUS
            </span>

            <h3>
              {progress === 100
                ? "Ready for Review"
                : "Preparation in Progress"}
            </h3>

            <p>
              Complete the relevant sections before generating the
              final preparation document.
            </p>

            <div className="pp-mini-progress">
              <div>
                <span>Completion</span>
                <strong>{progress}%</strong>
              </div>

              <ProgressBar
                value={progress}
                showValue={false}
                size="small"
              />
            </div>
          </div>

          <div className="pp-side-card checklist-card">
            <div className="pp-side-title">
              <ShieldCheck size={18} />
              <h3>Before Export</h3>
            </div>

            <div className="pp-check">
              <CheckCircle2 size={15} />
              <span>Technical field identified</span>
            </div>

            <div className="pp-check">
              <CheckCircle2 size={15} />
              <span>Problem statement documented</span>
            </div>

            <div className="pp-check">
              <CheckCircle2 size={15} />
              <span>Technical description prepared</span>
            </div>

            <div className="pp-check">
              <CheckCircle2 size={15} />
              <span>Evidence recorded</span>
            </div>

            <div className="pp-check">
              <CheckCircle2 size={15} />
              <span>Draft claims reviewed</span>
            </div>
          </div>

          <div className="pp-side-card export-card">
            <div className="export-card-icon">
              <Download size={21} />
            </div>

            <span className="pp-eyebrow dark">
              FINAL DOCUMENT
            </span>

            <h3>Export Your Preparation</h3>

            <p>
              Generate a structured PDF containing your complete
              patent-preparation record.
            </p>

            <button
              type="button"
              className="side-export-button"
              onClick={handleExportPDF}
              disabled={exporting}
            >
              {exporting ? (
                <>
                  <Loader2
                    className="download-spinner"
                    size={16}
                  />
                  Generating...
                </>
              ) : (
                <>
                  <Download size={16} />
                  Download PDF
                </>
              )}
            </button>
          </div>

          <div className="pp-side-warning">
            <AlertCircle size={18} />

            <div>
              <strong>Professional Review</strong>

              <p>
                This document is a preparation draft. It is not an
                official patent application. Final drafting and filing
                should be reviewed by a qualified patent professional.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* BOTTOM ACTION */}
      {onContinue && (
        <section className="pp-bottom-action">
          <div>
            <span className="pp-eyebrow dark">
              NEXT STAGE
            </span>

            <h3>Ready for Professional Review?</h3>

            <p>
              Continue to the expert review stage after preparing
              the relevant sections.
            </p>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() => {
              prepareInnovationPayload();
              onContinue();
            }}
          >
            Continue to Expert Review
            <ArrowRight size={17} />
          </button>
        </section>
      )}

      <section className="pp-disclaimer">
        <ShieldCheck size={17} />

        <p>
          The Claims — DRAFT section is provided only for organising
          claim concepts. Automatically generated or user-entered
          content should not be treated as legally sufficient patent
          claims.
        </p>
      </section>

      <style>{`
        .patent-page {
          padding-bottom: 45px;
        }

        .export-pdf-button {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          border:0;
          border-radius:11px;
          padding:11px 17px;
          background:#1f6545;
          color:#fff;
          font-size:13px;
          font-weight:800;
          cursor:pointer;
          box-shadow:0 7px 17px rgba(31,101,69,.16);
          transition:.18s ease;
        }

        .export-pdf-button:hover:not(:disabled) {
          background:#174b34;
          transform:translateY(-1px);
        }

        .export-pdf-button:disabled {
          opacity:.7;
          cursor:wait;
        }

        .download-spinner {
          animation:ppSpin 1s linear infinite;
        }

        @keyframes ppSpin {
          to {
            transform:rotate(360deg);
          }
        }

        .download-toast {
          position:relative;
          display:flex;
          align-items:center;
          gap:10px;
          padding:13px 17px;
          margin:0 0 18px;
          border-radius:13px;
          font-size:13px;
          font-weight:700;
        }

        .download-toast.success {
          color:#246142;
          background:#edf8f1;
          border:1px solid #cbe6d4;
        }

        .download-toast.error {
          color:#8a5b35;
          background:#fff7ed;
          border:1px solid #ecd7bc;
        }

        .pp-main-hero {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:30px;
          padding:28px 31px;
          margin-top:22px;
          border-radius:22px;
          background:linear-gradient(
            135deg,
            #153f2d 0%,
            #245c41 55%,
            #397053 100%
          );
          color:white;
          box-shadow:0 14px 32px rgba(29,72,51,.13);
        }

        .pp-hero-left {
          display:flex;
          align-items:center;
          gap:18px;
        }

        .pp-hero-icon {
          width:55px;
          height:55px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:16px;
          background:rgba(255,255,255,.11);
          border:1px solid rgba(255,255,255,.17);
          flex-shrink:0;
        }

        .pp-eyebrow {
          display:block;
          font-size:10px;
          font-weight:900;
          letter-spacing:1.1px;
          color:#b8d8c5;
        }

        .pp-eyebrow.dark {
          color:#568067;
        }

        .pp-main-hero h1 {
          margin:5px 0 7px;
          font-size:25px;
          letter-spacing:-.4px;
        }

        .pp-main-hero p {
          max-width:700px;
          margin:0;
          color:#d5e8dc;
          line-height:1.6;
          font-size:13px;
        }

        .pp-hero-progress {
          width:245px;
          flex-shrink:0;
        }

        .pp-progress-top {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:10px;
          font-size:12px;
          font-weight:700;
          color:#dcebe3;
        }

        .pp-progress-top strong {
          color:white;
          font-size:20px;
        }

        .pp-hero-progress small {
          display:block;
          margin-top:8px;
          color:#c4dccd;
          font-size:11px;
        }

        .pp-content-grid {
          display:grid;
          grid-template-columns:minmax(0,1fr) 305px;
          gap:22px;
          margin-top:24px;
          align-items:start;
        }

        .pp-sections {
          min-width:0;
        }

        .pp-section-heading {
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:20px;
          margin-bottom:15px;
        }

        .pp-section-heading h2 {
          margin:5px 0 5px;
          color:#1b3f30;
          font-size:22px;
        }

        .pp-section-heading p {
          margin:0;
          max-width:700px;
          color:#74857b;
          font-size:13px;
          line-height:1.55;
        }

        .pp-section-list {
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        .pp-section-card {
          border:1px solid #dbe7df;
          border-radius:17px;
          background:#fff;
          overflow:hidden;
          transition:.2s ease;
          box-shadow:0 3px 10px rgba(35,72,54,.025);
        }

        .pp-section-card:hover {
          border-color:#bdd6c6;
          box-shadow:0 8px 20px rgba(35,72,54,.06);
          transform:translateY(-1px);
        }

        .pp-section-card.active {
          border-color:#74a887;
          box-shadow:0 9px 24px rgba(36,91,63,.09);
        }

        .pp-section-card.complete {
          background:#fcfefc;
        }

        .pp-section-card-header {
          width:100%;
          min-height:84px;
          display:grid;
          grid-template-columns:46px 1fr auto;
          align-items:center;
          gap:15px;
          padding:15px 18px;
          border:0;
          background:transparent;
          text-align:left;
          cursor:pointer;
        }

        .pp-number {
          width:43px;
          height:43px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:13px;
          background:#edf5f0;
          color:#32664b;
          font-size:12px;
          font-weight:900;
          letter-spacing:.5px;
        }

        .pp-section-card.complete .pp-number {
          background:#dff0e5;
          color:#276443;
        }

        .pp-section-info {
          min-width:0;
        }

        .pp-title-line {
          display:flex;
          align-items:center;
          gap:10px;
          flex-wrap:wrap;
        }

        .pp-title-line h3 {
          margin:0;
          color:#284536;
          font-size:14px;
          font-weight:850;
        }

        .pp-section-info p {
          margin:5px 0 0;
          color:#89968f;
          font-size:12px;
          line-height:1.45;
        }

        .complete-label {
          display:inline-flex;
          align-items:center;
          gap:4px;
          color:#3d7d59;
          background:#eaf6ee;
          border-radius:999px;
          padding:4px 7px;
          font-size:9px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:.4px;
        }

        .pp-arrow {
          color:#6f887a;
          transition:.2s ease;
        }

        .pp-arrow.rotated {
          transform:rotate(90deg);
          color:#286247;
        }

        .pp-editor {
          margin:0 18px 18px;
          padding:18px;
          border-radius:14px;
          background:#f6faf7;
          border:1px solid #dce9e1;
        }

        .pp-editor-label {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:9px;
        }

        .pp-editor-label span {
          color:#365746;
          font-size:11px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:.7px;
        }

        .pp-editor-label small {
          color:#84938b;
          font-size:10px;
        }

        .pp-editor input,
        .pp-editor textarea {
          width:100%;
          box-sizing:border-box;
          border:1px solid #d2e0d8;
          border-radius:11px;
          background:white;
          padding:12px 13px;
          outline:none;
          color:#30483c;
          font:inherit;
          font-size:13px;
          resize:vertical;
        }

        .pp-editor input:focus,
        .pp-editor textarea:focus {
          border-color:#69a080;
          box-shadow:0 0 0 3px rgba(82,142,108,.08);
        }

        .pp-editor-footer {
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:9px;
        }

        .pp-editor-footer span {
          color:#89978f;
          font-size:10px;
        }

        .pp-editor-footer button {
          display:flex;
          align-items:center;
          gap:5px;
          border:0;
          border-radius:8px;
          padding:7px 10px;
          background:#e3f0e7;
          color:#286247;
          font-size:11px;
          font-weight:800;
          cursor:pointer;
        }

        .pp-sidebar {
          display:flex;
          flex-direction:column;
          gap:14px;
          position:sticky;
          top:16px;
        }

        .pp-side-card {
          padding:20px;
          border:1px solid #dce8e1;
          border-radius:18px;
          background:white;
          box-shadow:0 5px 15px rgba(36,75,55,.045);
        }

        .pp-side-icon,
        .export-card-icon {
          width:40px;
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:12px;
          background:#eaf4ee;
          color:#316c4e;
          margin-bottom:13px;
        }

        .pp-side-card h3 {
          margin:5px 0 7px;
          color:#294638;
          font-size:16px;
        }

        .pp-side-card p {
          margin:0;
          color:#78887f;
          line-height:1.55;
          font-size:12px;
        }

        .pp-mini-progress {
          margin-top:18px;
        }

        .pp-mini-progress > div {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:9px;
          color:#718278;
          font-size:11px;
          font-weight:700;
        }

        .pp-mini-progress strong {
          color:#2d6749;
          font-size:16px;
        }

        .pp-side-title {
          display:flex;
          align-items:center;
          gap:8px;
          margin-bottom:16px;
          color:#32684b;
        }

        .pp-side-title h3 {
          margin:0;
        }

        .pp-check {
          display:flex;
          align-items:center;
          gap:8px;
          padding:8px 0;
          color:#64766c;
          font-size:11px;
          border-bottom:1px solid #edf1ee;
        }

        .pp-check:last-child {
          border-bottom:0;
        }

        .pp-check svg {
          color:#4c8a65;
          flex-shrink:0;
        }

        .export-card {
          background:linear-gradient(145deg,#f0f8f3,#fff);
        }

        .side-export-button {
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:7px;
          margin-top:16px;
          padding:11px 13px;
          border:0;
          border-radius:10px;
          background:#286247;
          color:white;
          font-size:12px;
          font-weight:850;
          cursor:pointer;
        }

        .side-export-button:hover:not(:disabled) {
          background:#1d4d36;
        }

        .side-export-button:disabled {
          opacity:.65;
          cursor:wait;
        }

        .pp-side-warning {
          display:flex;
          gap:10px;
          padding:16px;
          border-radius:16px;
          border:1px solid #eadfcf;
          background:#fffaf1;
          color:#866d3e;
        }

        .pp-side-warning svg {
          flex-shrink:0;
          margin-top:1px;
        }

        .pp-side-warning strong {
          color:#71592e;
          font-size:12px;
        }

        .pp-side-warning p {
          margin:4px 0 0;
          color:#8b7a59;
          font-size:10px;
          line-height:1.55;
        }

        .pp-bottom-action {
          margin-top:23px;
          padding:21px 24px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          border:1px solid #d8e6de;
          border-radius:18px;
          background:#f5faf7;
        }

        .pp-bottom-action h3 {
          margin:5px 0 4px;
          color:#254936;
          font-size:17px;
        }

        .pp-bottom-action p {
          margin:0;
          color:#75867d;
          font-size:12px;
        }

        .pp-disclaimer {
          margin-top:18px;
          display:flex;
          gap:10px;
          padding:15px 17px;
          border-radius:13px;
          border:1px solid #dce8e1;
          background:#f8faf9;
          color:#718178;
        }

        .pp-disclaimer svg {
          color:#4a8062;
          flex-shrink:0;
        }

        .pp-disclaimer p {
          margin:0;
          font-size:11px;
          line-height:1.55;
        }

        @media(max-width:1000px) {
          .pp-content-grid {
            grid-template-columns:1fr;
          }

          .pp-sidebar {
            position:static;
          }

          .pp-main-hero {
            flex-direction:column;
            align-items:flex-start;
          }

          .pp-hero-progress {
            width:100%;
          }
        }

        @media(max-width:650px) {
          .pp-section-card-header {
            grid-template-columns:40px 1fr auto;
            padding:13px;
          }

          .pp-number {
            width:38px;
            height:38px;
          }

          .pp-bottom-action {
            flex-direction:column;
            align-items:flex-start;
          }
        }
      `}</style>
    </main>
  );
}

export default PatentPreparationPage;