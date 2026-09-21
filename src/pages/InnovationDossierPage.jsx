import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  FileCheck2,
  FileText,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    number: "01",
    title: "Innovation Overview",
    icon: Sparkles,
    desc: "Core idea, purpose and innovation summary.",
    status: "Ready",
    content: [
      ["Innovation Name", "Ayurvedic Herbal Wellness Formulation"],
      ["Domain", "Ayurveda / Herbal Wellness"],
      ["Primary Purpose", "Wellness-focused herbal formulation"],
      ["Innovation Stage", "Prototype / Early Validation"],
    ],
  },
  {
    id: "technical",
    number: "02",
    title: "Technical Description",
    icon: FlaskConical,
    desc: "Technical concept, ingredients and working principle.",
    status: "Review",
    content: [
      ["Technical Field", "Ayurvedic formulation and herbal wellness"],
      ["Core Concept", "Combination of selected herbal ingredients"],
      ["Process", "Formulation → Testing → Validation"],
      ["Technical Effect", "Defined through evidence and comparative analysis"],
    ],
  },
  {
    id: "ip",
    number: "03",
    title: "IP & Prior Art Intelligence",
    icon: ShieldCheck,
    desc: "IP signals, prior-art findings and protection considerations.",
    status: "Analyzed",
    content: [
      ["IP Route", "Patent / Documentation review"],
      ["Prior Art Signal", "Moderate similarity detected"],
      ["Novelty Signal", "Requires expert validation"],
      ["Risk", "Medium — further comparison recommended"],
    ],
  },
  {
    id: "evidence",
    number: "04",
    title: "Evidence & Research",
    icon: FileCheck2,
    desc: "Research evidence, gaps and supporting documentation.",
    status: "Partial",
    content: [
      ["Clinical Evidence", "Additional evidence recommended"],
      ["Safety Evidence", "Documentation required"],
      ["Efficacy", "Further validation recommended"],
      ["References", "Research sources available for review"],
    ],
  },
  {
    id: "regulatory",
    number: "05",
    title: "Regulatory Pathway",
    icon: FileText,
    desc: "Preliminary regulatory and compliance information.",
    status: "Review",
    content: [
      ["Product Category", "Ayurveda / Herbal product"],
      ["Jurisdiction", "India — preliminary pathway"],
      ["Documents", "Product and evidence documentation"],
      ["Next Step", "Professional regulatory review"],
    ],
  },
];

export default function InnovationDossierPage({ onContinue }) {
  const [selected, setSelected] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [toast, setToast] = useState("");
  const [backendConnected, setBackendConnected] = useState(false);

  const innovation = {
    title: "Ayurvedic Herbal Wellness Formulation",
    domain: "Ayurveda / Herbal Wellness",
    stage: "Prototype / Early Validation",
  };

  async function openSection(section) {
    try {
      const response = await fetch(
        `http://localhost:4000/api/dossier/${section.id}`
      );

      if (response.ok) {
        const data = await response.json();
        setBackendConnected(true);

        setSelected({
          ...section,
          backendData: data,
        });

        return;
      }
    } catch {
      setBackendConnected(false);
    }

    setSelected(section);
  }

  async function exportDossier() {
    setExporting(true);
    setToast("");

    try {
      const response = await fetch(
        "http://localhost:4000/api/dossier/export-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            innovation,
            sections,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("PDF export unavailable");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "IP_Shakti_Sahayak_Innovation_Dossier.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

      setToast("Innovation Dossier PDF downloaded successfully.");
    } catch {
      setToast(
        "PDF export backend is not connected. Please start the backend and try again."
      );
    } finally {
      setExporting(false);

      setTimeout(() => {
        setToast("");
      }, 3500);
    }
  }

  if (selected) {
    return (
      <div className="dossier-page">
        <div className="dossier-container">

          <button className="back-btn" onClick={() => setSelected(null)}>
            <ArrowLeft size={18} />
            Back to Innovation Dossier
          </button>

          <section className="detail-hero">
            <div className="detail-number">{selected.number}</div>

            <div>
              <span>INNOVATION DOSSIER</span>
              <h1>{selected.title}</h1>
              <p>{selected.desc}</p>
            </div>
          </section>

          <section className="detail-card">
            <div className="detail-header">
              <div>
                <small>SECTION ANALYSIS</small>
                <h2>{selected.title}</h2>
              </div>

              <button
                className="close-btn"
                onClick={() => setSelected(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="detail-grid">
              {selected.content.map(([label, value]) => (
                <div className="detail-box" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="analysis-note">
              <div className="note-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <strong>Intelligence Note</strong>
                <p>
                  This section provides a preliminary intelligence view.
                  Final IP, regulatory and legal conclusions should be
                  validated with the relevant professional.
                </p>
              </div>
            </div>

            <button
              className="detail-action"
              onClick={() => setSelected(null)}
            >
              Return to Dossier
              <ArrowRight size={17} />
            </button>
          </section>

        </div>

        <style>{styles}</style>
      </div>
    );
  }

  return (
    <div className="dossier-page">
      <div className="dossier-container">

        <section className="dossier-hero">
          <div>
            <span className="hero-label">
              <FileCheck2 size={15} />
              INNOVATION INTELLIGENCE
            </span>

            <h1>Innovation Dossier</h1>

            <p>
              A structured intelligence file combining your innovation,
              IP signals, evidence and regulatory pathway.
            </p>
          </div>

          <button
            className="export-btn"
            onClick={exportDossier}
            disabled={exporting}
          >
            <Download size={18} />
            {exporting ? "Preparing PDF..." : "Export Dossier PDF"}
          </button>
        </section>

        <section className="innovation-card">
          <div className="innovation-icon">
            <Sparkles size={23} />
          </div>

          <div className="innovation-info">
            <span>CURRENT INNOVATION</span>
            <h2>{innovation.title}</h2>
            <p>{innovation.domain}</p>
          </div>

          <div className="readiness-pill">
            <CheckCircle2 size={15} />
            {innovation.stage}
          </div>
        </section>

        <div className="status-row">
          <div>
            <span
              className={`status-dot ${
                backendConnected ? "connected" : ""
              }`}
            />
            {backendConnected
              ? "Backend intelligence connected"
              : "Local dossier intelligence active"}
          </div>

          <span>5 dossier sections</span>
        </div>

        <section className="section-heading">
          <div>
            <span>DOSSIER STRUCTURE</span>
            <h2>Explore your innovation file</h2>
          </div>

          <FileText size={24} />
        </section>

        <div className="dossier-grid">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <button
                key={section.id}
                className="dossier-box"
                onClick={() => openSection(section)}
              >
                <div className="box-top">
                  <div className="section-icon">
                    <Icon size={21} />
                  </div>

                  <span className="section-number">
                    {section.number}
                  </span>
                </div>

                <div className="box-content">
                  <h3>{section.title}</h3>
                  <p>{section.desc}</p>
                </div>

                <div className="box-footer">
                  <span className="status-label">
                    <CheckCircle2 size={14} />
                    {section.status}
                  </span>

                  <span className="open-label">
                    Open
                    <ArrowRight size={16} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <section className="dossier-summary">
          <div className="summary-title">
            <div>
              <span>DOSSIER SUMMARY</span>
              <h2>Innovation intelligence at a glance</h2>
            </div>

            <ShieldCheck size={24} />
          </div>

          <div className="summary-grid">
            <div>
              <strong>82%</strong>
              <span>IP Readiness</span>
            </div>

            <div>
              <strong>74%</strong>
              <span>Prior Art Review</span>
            </div>

            <div>
              <strong>68%</strong>
              <span>Evidence Strength</span>
            </div>

            <div>
              <strong>76%</strong>
              <span>Regulatory Readiness</span>
            </div>
          </div>
        </section>

        <section className="export-card">
          <div className="export-card-icon">
            <Download size={24} />
          </div>

          <div>
            <span>FINAL DOCUMENT</span>
            <h2>Export your Innovation Dossier</h2>
            <p>
              Generate a structured PDF containing your innovation
              overview, technical details, IP intelligence, evidence
              and regulatory information.
            </p>
          </div>

          <button
            onClick={exportDossier}
            disabled={exporting}
          >
            <Download size={17} />
            {exporting ? "Generating..." : "Export PDF"}
          </button>
        </section>

        <section className="next-card">
          <div>
            <span>NEXT STEP</span>
            <h2>Move from dossier to IP preparation</h2>
            <p>
              Continue your journey toward professional IP strategy
              and patent preparation.
            </p>
          </div>

          <button onClick={() => onContinue?.()}>
            Continue Journey
            <ArrowRight size={18} />
          </button>
        </section>

        {toast && (
          <div className="toast">
            <CheckCircle2 size={19} />
            {toast}
          </div>
        )}

      </div>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
.dossier-page{
  min-height:100%;
  padding:30px;
  background:
    radial-gradient(circle at 10% 0%,rgba(42,117,77,.08),transparent 28%),
    linear-gradient(135deg,#f5faf6,#edf5ef);
  color:#193326;
}

.dossier-container{
  max-width:1450px;
  margin:auto;
}

.dossier-hero{
  padding:32px 36px;
  min-height:185px;
  border-radius:25px;
  background:linear-gradient(135deg,#164c34,#276e4d);
  color:#fff;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:25px;
  box-shadow:0 15px 40px rgba(27,82,54,.15);
}

.hero-label{
  display:flex;
  align-items:center;
  gap:7px;
  color:#c7e7d2;
  font-size:11px;
  font-weight:800;
  letter-spacing:1.3px;
}

.dossier-hero h1{
  margin:9px 0 7px;
  font-size:38px;
}

.dossier-hero p{
  margin:0;
  color:#d2e9da;
  max-width:700px;
  font-size:14px;
  line-height:1.6;
}

.export-btn{
  border:0;
  border-radius:13px;
  padding:14px 18px;
  background:#fff;
  color:#18583c;
  font-weight:800;
  display:flex;
  align-items:center;
  gap:8px;
  cursor:pointer;
  white-space:nowrap;
}

.export-btn:disabled{
  opacity:.65;
  cursor:wait;
}

.innovation-card{
  margin-top:18px;
  padding:19px 22px;
  background:#e3f3e8;
  border:1px solid #c8e2d0;
  border-radius:19px;
  display:flex;
  align-items:center;
  gap:15px;
}

.innovation-icon{
  width:49px;
  height:49px;
  border-radius:15px;
  display:grid;
  place-items:center;
  color:white;
  background:#216b48;
}

.innovation-info span,
.section-heading span,
.summary-title span,
.export-card span,
.next-card span{
  color:#39805b;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.2px;
}

.innovation-info h2{
  margin:4px 0;
  font-size:17px;
}

.innovation-info p{
  margin:0;
  color:#6b8175;
  font-size:11px;
}

.readiness-pill{
  margin-left:auto;
  display:flex;
  align-items:center;
  gap:6px;
  padding:9px 12px;
  border-radius:999px;
  background:#fff;
  color:#27734d;
  font-size:11px;
  font-weight:800;
}

.status-row{
  margin:12px 2px 28px;
  display:flex;
  justify-content:space-between;
  color:#708378;
  font-size:11px;
}

.status-dot{
  width:8px;
  height:8px;
  display:inline-block;
  border-radius:50%;
  background:#d2a036;
  margin-right:7px;
}

.status-dot.connected{
  background:#32a567;
}

.section-heading{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-bottom:16px;
}

.section-heading h2,
.summary-title h2{
  margin:5px 0 0;
  font-size:23px;
}

.dossier-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:17px;
}

.dossier-box{
  min-height:220px;
  padding:21px;
  border:1px solid #d5e6da;
  border-radius:21px;
  background:#fff;
  text-align:left;
  cursor:pointer;
  transition:.2s;
  box-shadow:0 6px 20px rgba(30,74,50,.045);
}

.dossier-box:hover{
  transform:translateY(-3px);
  border-color:#75a98a;
  background:#f4faf6;
  box-shadow:0 12px 30px rgba(30,74,50,.09);
}

.box-top{
  display:flex;
  justify-content:space-between;
}

.section-icon{
  width:45px;
  height:45px;
  border-radius:13px;
  display:grid;
  place-items:center;
  color:#27754d;
  background:#e2f2e7;
}

.section-number{
  color:#8aa093;
  font-size:12px;
  font-weight:800;
}

.box-content h3{
  margin:22px 0 6px;
  font-size:17px;
}

.box-content p{
  margin:0;
  color:#708379;
  font-size:12px;
  line-height:1.6;
}

.box-footer{
  margin-top:23px;
  padding-top:13px;
  border-top:1px solid #e5eee8;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.status-label{
  display:flex;
  align-items:center;
  gap:5px;
  color:#3b7858;
  font-size:10px;
  font-weight:800;
}

.open-label{
  color:#216b48;
  display:flex;
  align-items:center;
  gap:5px;
  font-size:11px;
  font-weight:800;
}

.dossier-summary{
  margin-top:23px;
  padding:25px;
  border-radius:22px;
  background:#e5f3e9;
  border:1px solid #c8dfcf;
}

.summary-title{
  display:flex;
  justify-content:space-between;
}

.summary-grid{
  margin-top:19px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:13px;
}

.summary-grid div{
  padding:17px;
  background:#fff;
  border:1px solid #d7e6dc;
  border-radius:15px;
}

.summary-grid strong,
.summary-grid span{
  display:block;
}

.summary-grid strong{
  font-size:25px;
  color:#236e4a;
}

.summary-grid span{
  margin-top:4px;
  color:#718479;
  font-size:11px;
}

.export-card{
  margin-top:22px;
  padding:23px;
  border-radius:21px;
  background:#fff;
  border:1px solid #d6e6db;
  display:flex;
  align-items:center;
  gap:17px;
}

.export-card-icon{
  width:51px;
  height:51px;
  border-radius:15px;
  background:#e1f2e7;
  color:#27754d;
  display:grid;
  place-items:center;
}

.export-card h2{
  margin:5px 0;
  font-size:18px;
}

.export-card p{
  margin:0;
  max-width:750px;
  color:#718378;
  font-size:11px;
  line-height:1.6;
}

.export-card button,
.next-card button{
  margin-left:auto;
  border:0;
  padding:13px 17px;
  border-radius:12px;
  background:#195a3d;
  color:white;
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  cursor:pointer;
  white-space:nowrap;
}

.next-card{
  margin-top:17px;
  padding:24px 27px;
  border-radius:21px;
  background:linear-gradient(135deg,#174c35,#276e4d);
  color:#fff;
  display:flex;
  align-items:center;
  gap:20px;
}

.next-card span{
  color:#bfe4cd;
}

.next-card h2{
  margin:5px 0;
  font-size:20px;
}

.next-card p{
  margin:0;
  color:#c9e4d2;
  font-size:12px;
}

.next-card button{
  background:#fff;
  color:#195a3d;
}

.back-btn{
  border:0;
  background:transparent;
  color:#3b7057;
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  cursor:pointer;
  margin-bottom:17px;
}

.detail-hero{
  padding:27px;
  border-radius:23px;
  background:linear-gradient(135deg,#174c35,#286f4e);
  color:#fff;
  display:flex;
  align-items:center;
  gap:18px;
}

.detail-number{
  width:61px;
  height:61px;
  border-radius:18px;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.13);
  font-size:20px;
  font-weight:800;
}

.detail-hero span{
  color:#bfe3cc;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.2px;
}

.detail-hero h1{
  margin:5px 0;
  font-size:27px;
}

.detail-hero p{
  margin:0;
  color:#cde5d5;
  font-size:12px;
}

.detail-card{
  margin-top:19px;
  padding:26px;
  border-radius:22px;
  background:#fff;
  border:1px solid #d5e5da;
}

.detail-header{
  display:flex;
  justify-content:space-between;
}

.detail-header small{
  color:#39805b;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.1px;
}

.detail-header h2{
  margin:5px 0 0;
  font-size:22px;
}

.close-btn{
  width:35px;
  height:35px;
  border:1px solid #d5e4da;
  background:#f5faf6;
  border-radius:10px;
  color:#4d715d;
  display:grid;
  place-items:center;
  cursor:pointer;
}

.detail-grid{
  margin-top:22px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:13px;
}

.detail-box{
  padding:17px;
  border-radius:15px;
  background:#eaf6ee;
  border:1px solid #d1e7d8;
}

.detail-box span,
.detail-box strong{
  display:block;
}

.detail-box span{
  color:#6e8578;
  font-size:10px;
  font-weight:700;
}

.detail-box strong{
  margin-top:7px;
  color:#214a36;
  font-size:13px;
  line-height:1.5;
}

.analysis-note{
  margin-top:20px;
  padding:16px;
  border-radius:15px;
  background:#f3f8f4;
  display:flex;
  gap:11px;
}

.note-icon{
  width:36px;
  height:36px;
  border-radius:10px;
  background:#dcefe3;
  color:#27744d;
  display:grid;
  place-items:center;
  flex:none;
}

.analysis-note strong{
  font-size:12px;
}

.analysis-note p{
  margin:4px 0 0;
  color:#708479;
  font-size:11px;
  line-height:1.6;
}

.detail-action{
  margin-top:19px;
  border:0;
  padding:13px 17px;
  border-radius:12px;
  background:#195a3d;
  color:#fff;
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  cursor:pointer;
}

.toast{
  position:fixed;
  right:25px;
  bottom:25px;
  z-index:2000;
  padding:14px 17px;
  border-radius:13px;
  background:#174c35;
  color:#fff;
  box-shadow:0 15px 35px rgba(0,0,0,.2);
  display:flex;
  align-items:center;
  gap:8px;
  font-size:12px;
  font-weight:700;
}

@media(max-width:1000px){
  .dossier-grid{
    grid-template-columns:1fr 1fr;
  }

  .summary-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:700px){
  .dossier-page{
    padding:15px;
  }

  .dossier-hero,
  .export-card,
  .next-card{
    flex-direction:column;
    align-items:flex-start;
  }

  .dossier-grid,
  .summary-grid,
  .detail-grid{
    grid-template-columns:1fr;
  }

  .export-btn,
  .export-card button,
  .next-card button{
    margin-left:0;
  }

  .readiness-pill{
    margin-left:0;
  }
}
`;