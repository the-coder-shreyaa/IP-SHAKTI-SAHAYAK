import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
  X,
} from "lucide-react";

const experts = [
  {
    id: "ananya",
    name: "Dr. Ananya Mehta",
    role: "IP & Patent Strategy Expert",
    experience: "12+ Years",
    specialty: "Patent Strategy",
    initials: "AM",
    rating: "4.9",
    reviews: 86,
    verified: true,
    about:
      "Specialized in patent strategy, prior-art interpretation and IP protection planning for innovation-led products.",
    expertise: ["Patent Strategy", "Prior Art", "IP Risk", "Claims Review"],
  },
  {
    id: "kavya",
    name: "Dr. Kavya Sharma",
    role: "Ayurveda Research Expert",
    experience: "10+ Years",
    specialty: "Evidence & Research",
    initials: "KS",
    rating: "4.8",
    reviews: 71,
    verified: true,
    about:
      "Focuses on Ayurveda research evidence, formulation documentation and evidence-readiness assessment.",
    expertise: ["Clinical Evidence", "Research", "Formulation", "Evidence Gap"],
  },
  {
    id: "rahul",
    name: "Dr. Rahul Verma",
    role: "AYUSH Regulatory Expert",
    experience: "14+ Years",
    specialty: "Regulatory Compliance",
    initials: "RV",
    rating: "4.9",
    reviews: 94,
    verified: true,
    about:
      "Helps innovators understand regulatory pathways, documentation requirements and jurisdiction-specific compliance.",
    expertise: ["AYUSH", "Compliance", "Regulatory Path", "Documentation"],
  },
];

const reviewAreas = [
  {
    id: "patent",
    title: "Patent Readiness",
    score: 82,
    icon: ShieldCheck,
    color: "green",
    description: "Check whether the innovation is sufficiently prepared for patent-oriented review.",
    points: ["Technical contribution", "Novelty signals", "Claim scope", "Documentation"],
  },
  {
    id: "prior-art",
    title: "Prior Art Review",
    score: 74,
    icon: FileSearchIcon,
    color: "blue",
    description: "Review similarity signals against existing patents and knowledge records.",
    points: ["Similar patents", "Ingredient overlap", "Use-case overlap", "Risk signals"],
  },
  {
    id: "evidence",
    title: "Evidence Review",
    score: 68,
    icon: FileText,
    color: "amber",
    description: "Identify evidence strengths and remaining research gaps.",
    points: ["Clinical evidence", "Safety evidence", "Efficacy", "References"],
  },
  {
    id: "regulatory",
    title: "Regulatory Review",
    score: 76,
    icon: FileCheck2,
    color: "purple",
    description: "Review the preliminary regulatory and documentation pathway.",
    points: ["Product category", "Documents", "Compliance", "Jurisdiction"],
  },
];

function FileSearchIcon(props) {
  return <FileText {...props} />;
}

const fallbackDetails = {
  patent: {
    title: "Patent Readiness Review",
    score: 82,
    summary:
      "Your innovation shows several preparation signals, but professional review is recommended before filing decisions.",
    actions: [
      "Review novelty and inventive contribution",
      "Validate prior-art findings",
      "Refine claim boundaries",
      "Prepare supporting technical documentation",
    ],
  },
  "prior-art": {
    title: "Prior Art Review",
    score: 74,
    summary:
      "Similarity signals should be reviewed against the cited records before drawing conclusions about novelty.",
    actions: [
      "Inspect closest matching records",
      "Compare ingredients and applications",
      "Review classification overlap",
      "Document distinguishing features",
    ],
  },
  evidence: {
    title: "Evidence Review",
    score: 68,
    summary:
      "Some evidence areas require additional documentation before the innovation can be considered evidence-ready.",
    actions: [
      "Identify missing clinical evidence",
      "Strengthen efficacy documentation",
      "Organize research references",
      "Track evidence gaps",
    ],
  },
  regulatory: {
    title: "Regulatory Review",
    score: 76,
    summary:
      "The preliminary pathway is visible, but final requirements depend on product category and jurisdiction.",
    actions: [
      "Confirm product classification",
      "Prepare required documents",
      "Check applicable AYUSH pathway",
      "Review jurisdiction-specific requirements",
    ],
  },
};

export default function ExpertReviewPage({ onContinue }) {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [activeArea, setActiveArea] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");

  const innovationTitle = "Ayurvedic Herbal Wellness Formulation";

  async function openExpert(expert) {
    setLoading(true);
    setSelectedExpert(expert);

    try {
      const response = await fetch(
        `http://localhost:4000/api/expert-review/${expert.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            expertId: expert.id,
            innovationTitle,
          }),
        }
      );

      if (!response.ok) throw new Error("Backend unavailable");

      const data = await response.json();
      setBackendConnected(true);

      if (data) {
        setDetail(data);
      }
    } catch {
      setBackendConnected(false);
      setDetail(null);
    } finally {
      setLoading(false);
    }
  }

  function openArea(area) {
    setActiveArea(area);
    setDetail(fallbackDetails[area.id]);
  }

  function backToMain() {
    setSelectedExpert(null);
    setActiveArea(null);
    setDetail(null);
    setShowBooking(false);
  }

  function confirmBooking() {
    setBooked(true);

    setTimeout(() => {
      setBooked(false);
      setShowBooking(false);
    }, 2600);
  }

  if (selectedExpert) {
    return (
      <div className="expert-page">
        <div className="expert-container">
          <button className="back-button" onClick={backToMain}>
            <ArrowLeft size={18} />
            Back to Expert Review
          </button>

          <section className="expert-profile-hero">
            <div className="profile-left">
              <div className="expert-avatar large">
                {selectedExpert.initials}
              </div>

              <div>
                <div className="verified-pill">
                  <CheckCircle2 size={14} />
                  Verified Expert
                </div>

                <h1>{selectedExpert.name}</h1>
                <p>{selectedExpert.role}</p>

                <div className="profile-meta">
                  <span>{selectedExpert.experience}</span>
                  <span>★ {selectedExpert.rating}</span>
                  <span>{selectedExpert.reviews} Reviews</span>
                </div>
              </div>
            </div>

            <button
              className="consult-button"
              onClick={() => setShowBooking(true)}
            >
              <Calendar size={18} />
              Request Consultation
            </button>
          </section>

          <div className="connection-strip">
            <div>
              <span
                className={`status-dot ${
                  backendConnected ? "online" : ""
                }`}
              />
              {backendConnected
                ? "Expert analysis connected to backend"
                : "Local expert workspace active"}
            </div>

            <span className="innovation-tag">
              {innovationTitle}
            </span>
          </div>

          <div className="workspace-grid">
            <main>
              <section className="green-panel">
                <div className="panel-heading">
                  <div>
                    <span className="eyebrow">EXPERT PROFILE</span>
                    <h2>About the Expert</h2>
                  </div>
                  <UserRound size={24} />
                </div>

                <p className="about-text">
                  {selectedExpert.about}
                </p>

                <div className="expertise-grid">
                  {selectedExpert.expertise.map((item) => (
                    <div className="expertise-card" key={item}>
                      <div className="mini-check">
                        <CheckCircle2 size={15} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="section-block">
                <div className="section-title">
                  <div>
                    <span className="eyebrow">REVIEW WORKSPACE</span>
                    <h2>What should be reviewed?</h2>
                  </div>
                  <Sparkles size={22} />
                </div>

                <div className="review-grid">
                  {reviewAreas.map((area) => {
                    const Icon = area.icon;
                    const active = activeArea?.id === area.id;

                    return (
                      <button
                        key={area.id}
                        className={`review-card ${active ? "active" : ""}`}
                        onClick={() => openArea(area)}
                      >
                        <div className="review-card-top">
                          <div className={`area-icon ${area.color}`}>
                            <Icon size={21} />
                          </div>

                          <div className="score-badge">
                            {area.score}%
                          </div>
                        </div>

                        <h3>{area.title}</h3>
                        <p>{area.description}</p>

                        <div className="card-bottom">
                          <span>Open review</span>
                          <ArrowRight size={17} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {detail && (
                <section className="analysis-panel">
                  <div className="analysis-header">
                    <div>
                      <span className="eyebrow">EXPERT ANALYSIS</span>
                      <h2>{detail.title}</h2>
                    </div>

                    <button
                      className="close-small"
                      onClick={() => setDetail(null)}
                    >
                      <X size={17} />
                    </button>
                  </div>

                  <div className="analysis-content">
                    <div className="score-circle">
                      <strong>{detail.score ?? 76}%</strong>
                      <span>Readiness</span>
                    </div>

                    <div className="analysis-summary">
                      <p>
                        {detail.summary ||
                          "Expert review information is ready for discussion."}
                      </p>

                      <h4>Recommended Actions</h4>

                      <div className="action-list">
                        {(detail.actions || []).map((action, index) => (
                          <div className="action-row" key={index}>
                            <CheckCircle2 size={17} />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    className="green-action"
                    onClick={() => setShowBooking(true)}
                  >
                    <MessageCircle size={18} />
                    Discuss This With Expert
                    <ArrowRight size={18} />
                  </button>
                </section>
              )}
            </main>

            <aside className="side-column">
              <div className="consult-card">
                <div className="consult-icon">
                  <Calendar size={24} />
                </div>

                <span className="eyebrow light">
                  PROFESSIONAL REVIEW
                </span>

                <h2>Need an expert opinion?</h2>

                <p>
                  Connect your innovation with a domain expert for
                  structured review and discussion.
                </p>

                <div className="consult-points">
                  <div>
                    <CheckCircle2 size={16} />
                    Patent & IP guidance
                  </div>
                  <div>
                    <CheckCircle2 size={16} />
                    Evidence review
                  </div>
                  <div>
                    <CheckCircle2 size={16} />
                    Regulatory discussion
                  </div>
                </div>

                <button
                  className="white-action"
                  onClick={() => setShowBooking(true)}
                >
                  Request Consultation
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="journey-card">
                <span className="eyebrow">NEXT IN JOURNEY</span>

                <div className="journey-icon">
                  <FileCheck2 size={21} />
                </div>

                <h3>Professional Validation</h3>
                <p>
                  Review your preparation before moving toward
                  patent filing or commercialization.
                </p>

                <button onClick={() => onContinue?.()}>
                  Continue Journey
                  <ArrowRight size={16} />
                </button>
              </div>
            </aside>
          </div>
        </div>

        {showBooking && (
          <BookingModal
            expert={selectedExpert}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
            onClose={() => setShowBooking(false)}
            onConfirm={confirmBooking}
            booked={booked}
          />
        )}

        <style>{styles}</style>
      </div>
    );
  }

  return (
    <div className="expert-page">
      <div className="expert-container">
        <section className="page-hero">
          <div>
            <span className="hero-kicker">
              <ShieldCheck size={16} />
              PROFESSIONAL EXPERT REVIEW
            </span>

            <h1>Expert Review</h1>

            <p>
              Connect your Ayurveda innovation with domain experts
              for IP, evidence and regulatory review.
            </p>
          </div>

          <div className="hero-stat">
            <strong>03</strong>
            <span>Domain Experts</span>
          </div>
        </section>

        <section className="innovation-strip">
          <div className="innovation-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <span>Your Current Innovation</span>
            <strong>{innovationTitle}</strong>
          </div>

          <div className="status-chip">
            <CheckCircle2 size={15} />
            Ready for Review
          </div>
        </section>

        <div className="section-title main-title">
          <div>
            <span className="eyebrow">DOMAIN EXPERTS</span>
            <h2>Choose an expert</h2>
            <p>Get specialized guidance for your innovation journey.</p>
          </div>
        </div>

        <div className="expert-grid">
          {experts.map((expert) => (
            <div className="expert-card" key={expert.id}>
              <div className="expert-card-top">
                <div className="expert-avatar">
                  {expert.initials}
                </div>

                {expert.verified && (
                  <span className="verified-small">
                    <CheckCircle2 size={13} />
                    Verified
                  </span>
                )}
              </div>

              <h3>{expert.name}</h3>
              <span className="expert-role">{expert.role}</span>

              <div className="expert-stats">
                <div>
                  <strong>{expert.experience}</strong>
                  <span>Experience</span>
                </div>

                <div>
                  <strong>★ {expert.rating}</strong>
                  <span>Rating</span>
                </div>
              </div>

              <div className="specialty-box">
                <Sparkles size={15} />
                {expert.specialty}
              </div>

              <button
                className="view-expert"
                onClick={() => openExpert(expert)}
              >
                {loading && selectedExpert?.id === expert.id
                  ? "Opening..."
                  : "View Expert"}
                <ArrowRight size={17} />
              </button>
            </div>
          ))}
        </div>

        <section className="review-overview">
          <div className="section-title">
            <div>
              <span className="eyebrow">REVIEW COVERAGE</span>
              <h2>Areas your expert can review</h2>
            </div>

            <FileCheck2 size={24} />
          </div>

          <div className="overview-grid">
            {reviewAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div className="overview-card" key={area.id}>
                  <div className={`area-icon ${area.color}`}>
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>

                  <span className="overview-score">
                    {area.score}%
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <span className="eyebrow light">READY TO MOVE FORWARD?</span>
            <h2>Get your innovation professionally reviewed.</h2>
            <p>
              Discuss your IP, evidence or regulatory questions
              directly with a relevant expert.
            </p>
          </div>

          <button onClick={() => openExpert(experts[0])}>
            <Calendar size={18} />
            Request Expert Review
            <ArrowRight size={18} />
          </button>
        </section>
      </div>

      <style>{styles}</style>
    </div>
  );
}

function BookingModal({
  expert,
  selectedSlot,
  setSelectedSlot,
  onClose,
  onConfirm,
  booked,
}) {
  return (
    <div className="modal-overlay">
      <div className="booking-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={19} />
        </button>

        {!booked ? (
          <>
            <div className="booking-head">
              <div className="booking-avatar">
                {expert.initials}
              </div>

              <div>
                <span className="eyebrow">REQUEST CONSULTATION</span>
                <h2>{expert.name}</h2>
                <p>{expert.role}</p>
              </div>
            </div>

            <div className="booking-section">
              <label>Consultation Mode</label>

              <div className="mode-grid">
                <button className="mode-card active">
                  <Video size={19} />
                  <span>Video Call</span>
                  <small>30 minutes</small>
                </button>

                <button className="mode-card">
                  <MessageCircle size={19} />
                  <span>Chat Review</span>
                  <small>Async discussion</small>
                </button>
              </div>
            </div>

            <div className="booking-section">
              <label>
                <Clock3 size={16} />
                Available Time
              </label>

              <div className="slots">
                {["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"].map(
                  (slot) => (
                    <button
                      key={slot}
                      className={selectedSlot === slot ? "selected" : ""}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="booking-summary">
              <span>Expert</span>
              <strong>{expert.name}</strong>

              <span>Time</span>
              <strong>{selectedSlot}</strong>
            </div>

            <button className="confirm-button" onClick={onConfirm}>
              Confirm Consultation
              <ArrowRight size={18} />
            </button>
          </>
        ) : (
          <div className="success-screen">
            <div className="success-icon">
              <CheckCircle2 size={38} />
            </div>

            <h2>Consultation Requested</h2>
            <p>
              Your request for a consultation with {expert.name} has
              been prepared successfully.
            </p>

            <div className="success-time">
              <Calendar size={17} />
              {selectedSlot} · Video Call
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = `
.expert-page {
  min-height: 100%;
  padding: 30px;
  background:
    radial-gradient(circle at 10% 0%, rgba(35,112,76,.08), transparent 28%),
    linear-gradient(135deg,#f6faf7 0%,#edf5ef 100%);
  color:#193326;
}

.expert-container {
  width:100%;
  max-width:1450px;
  margin:auto;
}

.page-hero {
  min-height:190px;
  padding:34px 38px;
  border-radius:25px;
  background:linear-gradient(135deg,#174c35,#236b4b);
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:30px;
  box-shadow:0 16px 40px rgba(23,76,53,.16);
}

.hero-kicker,.eyebrow {
  display:inline-flex;
  align-items:center;
  gap:7px;
  font-size:11px;
  font-weight:800;
  letter-spacing:1.4px;
  color:#347955;
}

.hero-kicker {
  color:#ccebd8;
  margin-bottom:10px;
}

.eyebrow.light {
  color:#bfe7cf;
}

.page-hero h1 {
  margin:0;
  font-size:40px;
  letter-spacing:-1px;
}

.page-hero p {
  max-width:680px;
  margin:10px 0 0;
  color:#d5ebdc;
  line-height:1.65;
  font-size:15px;
}

.hero-stat {
  min-width:145px;
  padding:20px;
  border:1px solid rgba(255,255,255,.2);
  background:rgba(255,255,255,.09);
  border-radius:18px;
  text-align:center;
}

.hero-stat strong {
  display:block;
  font-size:34px;
}

.hero-stat span {
  color:#d2ebdc;
  font-size:12px;
}

.innovation-strip {
  margin-top:20px;
  padding:18px 22px;
  border-radius:18px;
  background:#e2f2e7;
  border:1px solid #c8e4d1;
  display:flex;
  align-items:center;
  gap:15px;
}

.innovation-icon {
  width:46px;
  height:46px;
  border-radius:14px;
  background:#1f6847;
  color:white;
  display:grid;
  place-items:center;
}

.innovation-strip span {
  display:block;
  color:#638170;
  font-size:11px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.8px;
}

.innovation-strip strong {
  display:block;
  margin-top:4px;
  font-size:16px;
}

.status-chip {
  margin-left:auto;
  display:flex;
  align-items:center;
  gap:7px;
  padding:9px 13px;
  background:#fff;
  border:1px solid #cde1d4;
  color:#26704b;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
}

.main-title {
  margin:34px 0 17px;
}

.section-title {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;
}

.section-title h2 {
  margin:4px 0 5px;
  font-size:24px;
}

.section-title p {
  margin:0;
  color:#6c8276;
  font-size:13px;
}

.expert-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.expert-card {
  background:#fff;
  border:1px solid #d7e7dc;
  border-radius:22px;
  padding:23px;
  box-shadow:0 7px 24px rgba(31,73,51,.055);
  transition:.2s ease;
}

.expert-card:hover {
  transform:translateY(-3px);
  border-color:#a9ceb8;
  box-shadow:0 12px 30px rgba(31,73,51,.10);
}

.expert-card-top {
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
}

.expert-avatar {
  width:58px;
  height:58px;
  border-radius:17px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#2b8157,#164b34);
  color:white;
  font-size:18px;
  font-weight:800;
}

.expert-avatar.large {
  width:80px;
  height:80px;
  border-radius:23px;
  font-size:25px;
}

.verified-small,.verified-pill {
  display:flex;
  align-items:center;
  gap:5px;
  color:#24714a;
  background:#e8f6ed;
  border:1px solid #cbe6d4;
  border-radius:999px;
  padding:6px 9px;
  font-size:10px;
  font-weight:800;
}

.expert-card h3 {
  margin:19px 0 5px;
  font-size:19px;
}

.expert-role {
  color:#6a8175;
  font-size:12px;
}

.expert-stats {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
  margin-top:18px;
}

.expert-stats div {
  padding:12px;
  background:#f3f8f4;
  border-radius:12px;
}

.expert-stats strong,
.expert-stats span {
  display:block;
}

.expert-stats strong {
  font-size:13px;
}

.expert-stats span {
  color:#7a8e83;
  font-size:10px;
  margin-top:3px;
}

.specialty-box {
  display:flex;
  align-items:center;
  gap:7px;
  margin-top:12px;
  padding:11px 12px;
  border-radius:12px;
  background:#e7f5eb;
  color:#26704b;
  font-size:12px;
  font-weight:700;
}

.view-expert,
.green-action,
.confirm-button {
  border:0;
  cursor:pointer;
}

.view-expert {
  width:100%;
  margin-top:15px;
  padding:13px;
  border-radius:12px;
  background:#19573b;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  font-weight:700;
}

.review-overview {
  margin-top:25px;
  padding:25px;
  border-radius:22px;
  background:#e7f3ea;
  border:1px solid #c9dfd0;
}

.overview-grid {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
  margin-top:20px;
}

.overview-card {
  position:relative;
  min-height:130px;
  padding:18px;
  background:#fff;
  border:1px solid #d6e6da;
  border-radius:17px;
}

.area-icon {
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  border-radius:12px;
  margin-bottom:13px;
}

.area-icon.green { background:#e0f2e7;color:#237149; }
.area-icon.blue { background:#e5eff8;color:#34719e; }
.area-icon.amber { background:#f9efdb;color:#9b6c24; }
.area-icon.purple { background:#eee8f7;color:#7653a0; }

.overview-card h3 {
  margin:0;
  font-size:14px;
}

.overview-card p {
  margin:6px 0 0;
  color:#718479;
  font-size:11px;
  line-height:1.5;
}

.overview-score {
  position:absolute;
  right:15px;
  top:17px;
  font-size:12px;
  color:#24704a;
  font-weight:800;
}

.bottom-cta {
  margin-top:25px;
  padding:27px 30px;
  border-radius:22px;
  background:linear-gradient(135deg,#174c35,#246b4b);
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:25px;
}

.bottom-cta h2 {
  margin:5px 0 7px;
  font-size:24px;
}

.bottom-cta p {
  margin:0;
  color:#c9e5d3;
  font-size:13px;
}

.bottom-cta button {
  border:0;
  padding:14px 18px;
  border-radius:13px;
  background:white;
  color:#19583c;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:800;
  cursor:pointer;
  white-space:nowrap;
}

.back-button {
  border:0;
  background:transparent;
  color:#42715b;
  display:flex;
  align-items:center;
  gap:7px;
  cursor:pointer;
  font-weight:700;
  margin-bottom:18px;
}

.expert-profile-hero {
  padding:28px;
  border-radius:24px;
  background:linear-gradient(135deg,#174c35,#266d4d);
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:25px;
}

.profile-left {
  display:flex;
  align-items:center;
  gap:18px;
}

.expert-profile-hero h1 {
  margin:7px 0 4px;
  font-size:29px;
}

.expert-profile-hero p {
  margin:0;
  color:#cfe7d8;
}

.profile-meta {
  display:flex;
  gap:17px;
  margin-top:11px;
  color:#d5eadc;
  font-size:11px;
}

.consult-button {
  border:0;
  background:#fff;
  color:#18583c;
  padding:13px 17px;
  border-radius:12px;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:800;
  cursor:pointer;
}

.connection-strip {
  margin:15px 0;
  padding:11px 15px;
  border-radius:12px;
  background:#fff;
  border:1px solid #d8e7dc;
  display:flex;
  justify-content:space-between;
  color:#60776b;
  font-size:11px;
}

.status-dot {
  display:inline-block;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#d5a337;
  margin-right:7px;
}

.status-dot.online {
  background:#32a568;
}

.innovation-tag {
  color:#26704b;
  font-weight:700;
}

.workspace-grid {
  display:grid;
  grid-template-columns:minmax(0,1fr) 320px;
  gap:20px;
}

.green-panel {
  padding:25px;
  border-radius:21px;
  background:#e5f3e9;
  border:1px solid #c9e1d0;
}

.panel-heading {
  display:flex;
  justify-content:space-between;
  color:#27704a;
}

.panel-heading h2 {
  margin:4px 0 0;
  color:#193326;
  font-size:21px;
}

.about-text {
  color:#62786c;
  line-height:1.7;
  font-size:13px;
  max-width:850px;
}

.expertise-grid {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
}

.expertise-card {
  background:white;
  border:1px solid #d6e7db;
  padding:13px;
  border-radius:13px;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:11px;
  font-weight:700;
}

.mini-check {
  color:#278052;
}

.section-block {
  margin-top:21px;
  padding:25px;
  border-radius:21px;
  background:white;
  border:1px solid #d8e7dc;
}

.review-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:13px;
  margin-top:20px;
}

.review-card {
  text-align:left;
  border:1px solid #d8e7dc;
  background:#f9fcfa;
  padding:18px;
  border-radius:17px;
  cursor:pointer;
  transition:.2s;
}

.review-card:hover,
.review-card.active {
  border-color:#67a47f;
  background:#eef8f1;
}

.review-card-top {
  display:flex;
  justify-content:space-between;
}

.score-badge {
  color:#24734b;
  background:#e2f2e7;
  padding:6px 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:800;
}

.review-card h3 {
  margin:12px 0 5px;
  font-size:15px;
}

.review-card p {
  margin:0;
  color:#708378;
  font-size:11px;
  line-height:1.55;
}

.card-bottom {
  margin-top:14px;
  color:#26704b;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:11px;
  font-weight:800;
}

.analysis-panel {
  margin-top:20px;
  padding:25px;
  border-radius:21px;
  background:#e5f3e9;
  border:1px solid #c8dfcf;
}

.analysis-header {
  display:flex;
  justify-content:space-between;
}

.analysis-header h2 {
  margin:5px 0 0;
  font-size:22px;
}

.close-small,.modal-close {
  width:35px;
  height:35px;
  border:1px solid #c9ddd0;
  background:white;
  color:#426956;
  border-radius:10px;
  display:grid;
  place-items:center;
  cursor:pointer;
}

.analysis-content {
  margin-top:20px;
  display:flex;
  gap:25px;
  align-items:center;
}

.score-circle {
  width:115px;
  height:115px;
  flex:none;
  border-radius:50%;
  background:conic-gradient(#26764e 0 76%,#d6e6da 76% 100%);
  display:grid;
  place-items:center;
  position:relative;
}

.score-circle:after {
  content:"";
  position:absolute;
  inset:9px;
  background:#e5f3e9;
  border-radius:50%;
}

.score-circle strong,
.score-circle span {
  position:relative;
  z-index:1;
}

.score-circle strong {
  font-size:24px;
}

.score-circle span {
  margin-top:42px;
  font-size:9px;
  color:#6e8477;
}

.analysis-summary {
  flex:1;
}

.analysis-summary p {
  color:#62796c;
  font-size:13px;
  line-height:1.6;
}

.analysis-summary h4 {
  margin:15px 0 9px;
}

.action-list {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
}

.action-row {
  background:white;
  padding:10px;
  border-radius:10px;
  display:flex;
  gap:7px;
  color:#397458;
  font-size:11px;
}

.green-action {
  margin-top:20px;
  padding:13px 17px;
  border-radius:12px;
  background:#195a3d;
  color:white;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:800;
}

.consult-card {
  padding:24px;
  border-radius:21px;
  background:linear-gradient(145deg,#164b34,#246c4c);
  color:white;
}

.consult-icon {
  width:48px;
  height:48px;
  border-radius:14px;
  background:rgba(255,255,255,.12);
  display:grid;
  place-items:center;
  margin-bottom:20px;
}

.consult-card h2 {
  margin:6px 0;
  font-size:21px;
}

.consult-card p {
  color:#c9e4d2;
  font-size:12px;
  line-height:1.6;
}

.consult-points {
  margin:20px 0;
  display:grid;
  gap:10px;
}

.consult-points div {
  display:flex;
  gap:8px;
  align-items:center;
  font-size:11px;
  color:#d9ece0;
}

.white-action {
  width:100%;
  border:0;
  padding:13px;
  border-radius:12px;
  background:white;
  color:#195a3d;
  font-weight:800;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:7px;
}

.journey-card {
  margin-top:15px;
  padding:21px;
  border-radius:21px;
  background:#fff;
  border:1px solid #d7e7dc;
}

.journey-icon {
  width:42px;
  height:42px;
  margin:14px 0 10px;
  display:grid;
  place-items:center;
  color:#26714b;
  background:#e3f3e8;
  border-radius:12px;
}

.journey-card h3 {
  margin:0;
  font-size:16px;
}

.journey-card p {
  color:#708378;
  font-size:11px;
  line-height:1.6;
}

.journey-card button {
  border:0;
  background:transparent;
  color:#26704b;
  display:flex;
  align-items:center;
  gap:6px;
  font-weight:800;
  cursor:pointer;
  padding:0;
}

.modal-overlay {
  position:fixed;
  inset:0;
  z-index:1000;
  background:rgba(10,30,20,.52);
  display:grid;
  place-items:center;
  padding:20px;
}

.booking-modal {
  width:min(560px,100%);
  max-height:90vh;
  overflow:auto;
  padding:27px;
  border-radius:24px;
  background:white;
  box-shadow:0 25px 70px rgba(0,0,0,.2);
  position:relative;
}

.modal-close {
  position:absolute;
  right:18px;
  top:18px;
}

.booking-head {
  display:flex;
  align-items:center;
  gap:14px;
  padding-right:35px;
}

.booking-avatar {
  width:55px;
  height:55px;
  display:grid;
  place-items:center;
  border-radius:16px;
  background:#1d6545;
  color:white;
  font-weight:800;
}

.booking-head h2 {
  margin:5px 0 2px;
  font-size:20px;
}

.booking-head p {
  margin:0;
  color:#74877d;
  font-size:11px;
}

.booking-section {
  margin-top:23px;
}

.booking-section label {
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:10px;
  font-size:12px;
  font-weight:800;
}

.mode-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.mode-card {
  border:1px solid #d9e7dd;
  background:#f8fbf9;
  border-radius:13px;
  padding:13px;
  text-align:left;
  cursor:pointer;
  color:#3e6250;
}

.mode-card.active {
  border-color:#6da583;
  background:#e8f5ec;
}

.mode-card span,
.mode-card small {
  display:block;
  margin-top:5px;
}

.mode-card span {
  font-weight:800;
  font-size:12px;
}

.mode-card small {
  color:#7b8d83;
}

.slots {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
}

.slots button {
  padding:11px;
  border:1px solid #d8e6dc;
  background:white;
  border-radius:10px;
  cursor:pointer;
  font-size:12px;
}

.slots button.selected {
  background:#195a3d;
  color:white;
  border-color:#195a3d;
}

.booking-summary {
  margin-top:20px;
  padding:14px;
  background:#eef7f1;
  border-radius:13px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:7px;
  font-size:11px;
}

.booking-summary span {
  color:#718479;
}

.confirm-button {
  width:100%;
  margin-top:15px;
  padding:14px;
  border-radius:12px;
  background:#195a3d;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  font-weight:800;
}

.success-screen {
  text-align:center;
  padding:35px 15px 20px;
}

.success-icon {
  width:72px;
  height:72px;
  border-radius:50%;
  background:#e3f5e9;
  color:#28794e;
  display:grid;
  place-items:center;
  margin:0 auto 17px;
}

.success-screen h2 {
  margin:0 0 7px;
}

.success-screen p {
  color:#718278;
  font-size:13px;
  line-height:1.6;
}

.success-time {
  margin:18px auto 0;
  width:max-content;
  max-width:100%;
  padding:10px 14px;
  border-radius:10px;
  background:#e8f5ec;
  color:#286f4a;
  display:flex;
  align-items:center;
  gap:7px;
  font-size:11px;
  font-weight:800;
}

@media(max-width:1050px) {
  .expert-grid,
  .overview-grid {
    grid-template-columns:1fr 1fr;
  }

  .workspace-grid {
    grid-template-columns:1fr;
  }

  .expertise-grid {
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:700px) {
  .expert-page {
    padding:15px;
  }

  .page-hero,
  .bottom-cta,
  .expert-profile-hero {
    flex-direction:column;
    align-items:flex-start;
  }

  .expert-grid,
  .overview-grid,
  .review-grid,
  .action-list {
    grid-template-columns:1fr;
  }

  .hero-stat {
    width:100%;
  }

  .status-chip {
    margin-left:0;
  }

  .innovation-strip {
    flex-wrap:wrap;
  }

  .expertise-grid {
    grid-template-columns:1fr 1fr;
  }

  .profile-left {
    align-items:flex-start;
  }

  .consult-button {
    width:100%;
    justify-content:center;
  }
}
`;