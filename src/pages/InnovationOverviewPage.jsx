import {
  ArrowRight,
  Beaker,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  FileSearch,
  Search,
  ShieldAlert,
} from "lucide-react";

const innovationTypes = [
  "Herbal formulation",
  "Ayurvedic product",
  "New formulation/process",
  "Nutraceutical/food",
  "Healthcare application",
  "Device/equipment",
  "Value-added AYUSH product",
];

const journeySteps = [
  {
    number: "01",
    title: "Traditional Knowledge",
    description:
      "Discover classical Ayurveda references and traditional knowledge connections.",
    icon: BookOpen,
    tone: "purple",
  },
  {
    number: "02",
    title: "Research Evidence",
    description:
      "Identify supporting research, scientific evidence and evidence gaps.",
    icon: FlaskConical,
    tone: "blue",
  },
  {
    number: "03",
    title: "Prior Art",
    description:
      "Explore similar inventions, patents and possible prior-art signals.",
    icon: Target,
    tone: "orange",
  },
  {
    number: "04",
    title: "IP Readiness",
    description:
      "Build a preliminary view of novelty, readiness and next IP actions.",
    icon: ShieldCheck,
    tone: "green",
  },
];

function InnovationOverviewPage({
  innovation = {},
  onUpdateInnovation,
  onContinue,
  onContinueJourney,
  onKnowledge,
  onResearch,
  onPriorArt,
  onIPReadiness,
  onSimilarity,
  onEvidenceGap,
}) {
  const update = (field, value) => {
    if (onUpdateInnovation) {
      onUpdateInnovation({
        [field]: value,
      });
    }
  };

  const canContinue =
    Boolean(innovation.name?.trim()) &&
    Boolean(innovation.type) &&
    Boolean(innovation.description?.trim());

  const filledFields = [
    innovation.name,
    innovation.type,
    innovation.focus,
    innovation.description,
    innovation.ingredients?.length,
    innovation.formulation,
  ].filter(Boolean).length;

  const completion = Math.round((filledFields / 6) * 100);

  return (
    <div className="iss-overview">

      <style>{`
        .iss-overview {
          width: 100%;
          min-height: 100%;
          padding: 28px 30px 60px;
          color: #eef8f3;
          box-sizing: border-box;
        }

        .iss-overview * {
          box-sizing: border-box;
        }

        .iss-container {
          max-width: 1450px;
          margin: 0 auto;
        }

        .iss-hero {
          position: relative;
          overflow: hidden;
          min-height: 235px;
          padding: 34px;
          border-radius: 26px;
          border: 1px solid rgba(100, 210, 164, .20);
          background:
            radial-gradient(circle at 90% 15%, rgba(49, 190, 130, .18), transparent 32%),
            radial-gradient(circle at 10% 100%, rgba(79, 120, 255, .12), transparent 34%),
            linear-gradient(135deg, #10231e 0%, #0d1816 55%, #101b19 100%);
          box-shadow: 0 24px 70px rgba(0,0,0,.24);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .iss-hero::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          right: -110px;
          bottom: -170px;
          border-radius: 50%;
          border: 1px solid rgba(93, 215, 165, .15);
        }

        .iss-hero-left {
          position: relative;
          z-index: 1;
          max-width: 850px;
          display: flex;
          gap: 22px;
          align-items: flex-start;
        }

        .iss-hero-icon {
          width: 58px;
          height: 58px;
          flex: 0 0 58px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          color: #8ff1c2;
          background: rgba(64, 205, 145, .12);
          border: 1px solid rgba(104, 229, 173, .22);
        }

        .iss-eyebrow {
          color: #78dcae;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .16em;
          margin-bottom: 8px;
        }

        .iss-hero h1 {
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -.035em;
          color: #f5fbf8;
        }

        .iss-hero p {
          max-width: 760px;
          margin: 14px 0 0;
          color: #aabdb5;
          font-size: 14px;
          line-height: 1.75;
        }

        .iss-completion {
          position: relative;
          z-index: 2;
          min-width: 245px;
          padding: 22px;
          border-radius: 20px;
          background: rgba(6, 19, 15, .65);
          border: 1px solid rgba(126, 225, 177, .16);
        }

        .iss-completion-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .iss-completion-top span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
          color: #7f9890;
        }

        .iss-completion-top strong {
          font-size: 28px;
          color: #8ceaba;
        }

        .iss-progress {
          height: 7px;
          border-radius: 999px;
          overflow: hidden;
          background: #1b332b;
        }

        .iss-progress div {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #43c98d, #a0f0c5);
          transition: width .3s ease;
        }

        .iss-completion small {
          display: block;
          margin-top: 10px;
          color: #839a92;
          font-size: 11px;
        }

        .iss-journey-strip {
          margin-top: 18px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-radius: 19px;
          background: #101c19;
          border: 1px solid rgba(130, 173, 157, .13);
        }

        .iss-journey-label {
          color: #6f887f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          white-space: nowrap;
        }

        .iss-flow {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .iss-flow-node {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 11px;
          background: #172622;
          border: 1px solid #253b34;
          color: #93aaa2;
          font-size: 12px;
          font-weight: 700;
        }

        .iss-flow-node.active {
          color: #b6f3d3;
          background: rgba(48, 184, 124, .11);
          border-color: rgba(79, 211, 148, .28);
        }

        .iss-flow-num {
          width: 22px;
          height: 22px;
          border-radius: 7px;
          display: grid;
          place-items: center;
          font-size: 9px;
          background: #213a31;
        }

        .iss-flow-line {
          flex: 1;
          min-width: 20px;
          height: 1px;
          background: #2a4039;
        }

        .iss-section-head {
          margin: 32px 0 16px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .iss-section-kicker {
          color: #6fd6a5;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
        }

        .iss-section-head h2 {
          margin: 5px 0 5px;
          font-size: 24px;
          color: #f1f8f5;
          letter-spacing: -.02em;
        }

        .iss-section-head p {
          margin: 0;
          color: #829790;
          font-size: 12px;
        }

        .iss-required {
          padding: 8px 12px;
          border-radius: 999px;
          color: #9eb3ab;
          background: #14231f;
          border: 1px solid #263a34;
          font-size: 10px;
          font-weight: 700;
        }

        .iss-form-card {
          border-radius: 23px;
          overflow: hidden;
          background: #101b18;
          border: 1px solid rgba(128, 171, 154, .14);
          box-shadow: 0 18px 50px rgba(0,0,0,.16);
        }

        .iss-form-top {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid rgba(128,171,154,.10);
          background: linear-gradient(90deg, rgba(62,192,134,.07), transparent);
        }

        .iss-form-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #80e5b4;
          background: rgba(69, 202, 142, .10);
          border: 1px solid rgba(85, 214, 151, .16);
        }

        .iss-form-top strong {
          display: block;
          color: #eaf5f0;
          font-size: 15px;
        }

        .iss-form-top span {
          display: block;
          margin-top: 3px;
          color: #71877f;
          font-size: 11px;
        }

        .iss-form-body {
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .iss-field {
          padding: 18px;
          border-radius: 17px;
          background: #14211e;
          border: 1px solid #22352f;
          transition: border-color .2s, transform .2s, background .2s;
        }

        .iss-field:focus-within {
          border-color: rgba(86, 211, 150, .42);
          background: #162621;
        }

        .iss-field.full {
          grid-column: 1 / -1;
        }

        .iss-field-label {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .iss-field-label label {
          color: #e0ece7;
          font-size: 12px;
          font-weight: 800;
        }

        .iss-field-label span {
          color: #6e8a80;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .iss-field input,
        .iss-field select,
        .iss-field textarea {
          width: 100%;
          border: 1px solid #2a4038;
          outline: none;
          border-radius: 11px;
          padding: 12px 13px;
          background: #0c1714;
          color: #eaf4f0;
          font: inherit;
          font-size: 12px;
          transition: border .2s, box-shadow .2s;
        }

        .iss-field textarea {
          resize: vertical;
          min-height: 128px;
          line-height: 1.65;
        }

        .iss-field input::placeholder,
        .iss-field textarea::placeholder {
          color: #536b62;
        }

        .iss-field input:focus,
        .iss-field select:focus,
        .iss-field textarea:focus {
          border-color: #45c990;
          box-shadow: 0 0 0 3px rgba(69,201,144,.08);
        }

        .iss-field select option {
          background: #101b18;
          color: #fff;
        }

        .iss-field small {
          display: block;
          margin-top: 9px;
          color: #61776f;
          font-size: 10px;
          line-height: 1.5;
        }

        .iss-form-bottom {
          padding: 18px 24px;
          border-top: 1px solid rgba(128,171,154,.10);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          background: #0e1916;
        }

        .iss-save {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .iss-save-icon {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          color: #68dca4;
          background: rgba(65,199,139,.10);
        }

        .iss-save strong {
          display: block;
          color: #b9cec6;
          font-size: 11px;
        }

        .iss-save span {
          display: block;
          margin-top: 3px;
          color: #5e766d;
          font-size: 9px;
        }

        .iss-continue {
          border: 0;
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          color: #062116;
          background: linear-gradient(135deg, #75e3ae, #45c98f);
          font-weight: 900;
          font-size: 11px;
          box-shadow: 0 10px 28px rgba(55,201,139,.16);
          transition: transform .2s, opacity .2s;
        }

        .iss-continue:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .iss-continue:disabled {
          cursor: not-allowed;
          opacity: .38;
          filter: grayscale(.3);
        }

        .iss-intelligence-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .iss-intel-card {
          position: relative;
          min-height: 205px;
          padding: 19px;
          overflow: hidden;
          border-radius: 19px;
          background: #111e1a;
          border: 1px solid #243831;
          transition: transform .2s, border-color .2s, box-shadow .2s;
          cursor: pointer;
        }

        .iss-intel-card:hover {
          transform: translateY(-5px);
          border-color: #4b7162;
          box-shadow: 0 15px 35px rgba(0,0,0,.25);
        }

        .iss-intel-card:active {
          transform: translateY(-1px);
        }

        .iss-intel-card::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          right: -55px;
          bottom: -55px;
          border-radius: 50%;
          background: rgba(90,220,157,.04);
          pointer-events: none;
        }

        .iss-intel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .iss-intel-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
        }

        .iss-intel-number {
          color: #4d675d;
          font-size: 22px;
          font-weight: 900;
        }

        .iss-intel-card h3 {
          margin: 22px 0 7px;
          font-size: 14px;
          color: #e8f2ee;
        }

        .iss-intel-card p {
          margin: 0;
          color: #71877f;
          font-size: 10px;
          line-height: 1.65;
        }

        .iss-intel-arrow {
          position: absolute;
          left: 19px;
          bottom: 17px;
          color: #607b70;
          transition: transform .2s, color .2s;
        }

        .iss-intel-card:hover .iss-intel-arrow {
          transform: translateX(5px);
          color: #78e1ae;
        }

        .purple .iss-intel-icon {
          color: #c9a7ff;
          background: rgba(165,114,255,.11);
        }

        .blue .iss-intel-icon {
          color: #7fbaff;
          background: rgba(74,145,255,.11);
        }

        .orange .iss-intel-icon {
          color: #ffbd76;
          background: rgba(255,157,65,.11);
        }

        .green .iss-intel-icon {
          color: #78e6ad;
          background: rgba(58,205,134,.11);
        }

        .iss-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 18px;
        }

        .iss-action-card {
          padding: 18px;
          border-radius: 17px;
          background: #111e1a;
          border: 1px solid #243831;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .iss-action-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #80ddb0;
          background: rgba(66,198,139,.09);
        }

        .iss-action-card strong {
          display: block;
          color: #dce9e4;
          font-size: 12px;
        }

        .iss-action-card span {
          display: block;
          margin-top: 4px;
          color: #647c72;
          font-size: 9px;
          line-height: 1.4;
        }

        .iss-bottom {
          margin-top: 18px;
          padding: 19px 22px;
          border-radius: 18px;
          background:
            linear-gradient(100deg, rgba(54,177,123,.09), rgba(18,29,25,.8));
          border: 1px solid rgba(74,194,139,.15);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .iss-bottom-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #7fe2af;
          background: rgba(65,201,139,.10);
        }

        .iss-bottom strong {
          display: block;
          color: #dcebe5;
          font-size: 12px;
        }

        .iss-bottom p {
          margin: 4px 0 0;
          color: #71887e;
          font-size: 10px;
          line-height: 1.5;
        }

        .iss-bottom-pill {
          margin-left: auto;
          padding: 9px 13px;
          white-space: nowrap;
          border-radius: 999px;
          color: #8dddb5;
          background: rgba(54,187,128,.09);
          border: 1px solid rgba(78,198,142,.15);
          font-size: 9px;
          font-weight: 800;
        }

        @media (max-width: 1050px) {
          .iss-intelligence-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .iss-hero {
            align-items: stretch;
            flex-direction: column;
          }

          .iss-completion {
            width: 100%;
          }
        }

        @media (max-width: 760px) {
          .iss-overview {
            padding: 18px 14px 40px;
          }

          .iss-hero {
            padding: 22px;
          }

          .iss-hero-left {
            flex-direction: column;
          }

          .iss-flow {
            overflow-x: auto;
          }

          .iss-flow-line {
            min-width: 12px;
          }

          .iss-journey-label {
            display: none;
          }

          .iss-form-body,
          .iss-intelligence-grid,
          .iss-actions {
            grid-template-columns: 1fr;
          }

          .iss-field.full {
            grid-column: auto;
          }

          .iss-form-bottom {
            align-items: stretch;
            flex-direction: column;
          }

          .iss-continue {
            justify-content: center;
          }

          .iss-bottom {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .iss-bottom-pill {
            margin-left: 57px;
          }
        }
      `}</style>

      <div className="iss-container">

        {/* HERO */}
        <section className="iss-hero">
          <div className="iss-hero-left">
            <div className="iss-hero-icon">
              <Sparkles size={27} />
            </div>

            <div>
              <div className="iss-eyebrow">
                AYURVEDA INNOVATION WORKSPACE
              </div>

              <h1>Innovation Overview</h1>

              <p>
                Define your Ayurveda innovation once and build an
                evidence-grounded path from raw idea to IP intelligence,
                prior-art discovery and protection strategy.
              </p>
            </div>
          </div>

          <div className="iss-completion">
            <div className="iss-completion-top">
              <span>PROFILE COMPLETION</span>
              <strong>{completion}%</strong>
            </div>

            <div className="iss-progress">
              <div style={{ width: `${completion}%` }} />
            </div>

            <small>
              {canContinue
                ? "✓ Profile ready for the next intelligence stage"
                : "Complete the required information to continue"}
            </small>
          </div>
        </section>

        {/* JOURNEY STRIP */}
        <section className="iss-journey-strip">
          <span className="iss-journey-label">
            YOUR IP JOURNEY
          </span>

          <div className="iss-flow">
            <div className="iss-flow-node active">
              <span className="iss-flow-num">01</span>
              Idea
            </div>

            <div className="iss-flow-line" />

            <div className="iss-flow-node">
              <span className="iss-flow-num">02</span>
              Discover
            </div>

            <div className="iss-flow-line" />

            <div className="iss-flow-node">
              <span className="iss-flow-num">03</span>
              Analyze
            </div>

            <div className="iss-flow-line" />

            <div className="iss-flow-node">
              <span className="iss-flow-num">04</span>
              Protect
            </div>
          </div>
        </section>

        {/* SECTION HEADER */}
        <div className="iss-section-head">
          <div>
            <div className="iss-section-kicker">STEP 01</div>

            <h2>Define Your Innovation</h2>

            <p>
              Create the foundation for your IP and regulatory intelligence journey.
            </p>
          </div>

          <div className="iss-required">
            ● Required information
          </div>
        </div>

        {/* FORM */}
        <section className="iss-form-card">

          <div className="iss-form-top">
            <div className="iss-form-icon">
              <Beaker size={20} />
            </div>

            <div>
              <strong>Innovation Profile</strong>

              <span>
                Tell us what you are building and what makes it different.
              </span>
            </div>
          </div>

          <div className="iss-form-body">

            <div className="iss-field full">
              <div className="iss-field-label">
                <label htmlFor="innovation-name">
                  Innovation Name
                </label>

                <span>Required</span>
              </div>

              <input
                id="innovation-name"
                type="text"
                value={innovation.name || ""}
                onChange={(event) =>
                  update("name", event.target.value)
                }
                placeholder="e.g. Herbal formulation for digestive wellness"
              />

              <small>
                Use a clear working name that describes your innovation.
              </small>
            </div>

            <div className="iss-field">
              <div className="iss-field-label">
                <label htmlFor="innovation-type">
                  Innovation Type
                </label>

                <span>Required</span>
              </div>

              <select
                id="innovation-type"
                value={innovation.type || ""}
                onChange={(event) =>
                  update("type", event.target.value)
                }
              >
                <option value="">
                  Select innovation type
                </option>

                {innovationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <small>
                Choose the category that best represents your idea.
              </small>
            </div>

            <div className="iss-field">
              <div className="iss-field-label">
                <label htmlFor="therapeutic-focus">
                  Therapeutic / Application Focus
                </label>

                <span>Optional</span>
              </div>

              <input
                id="therapeutic-focus"
                type="text"
                value={innovation.focus || ""}
                onChange={(event) =>
                  update("focus", event.target.value)
                }
                placeholder="e.g. Digestive health"
              />

              <small>
                Mention the primary health or application area.
              </small>
            </div>

            <div className="iss-field full">
              <div className="iss-field-label">
                <label htmlFor="innovation-description">
                  Innovation Description
                </label>

                <span>Required</span>
              </div>

              <textarea
                id="innovation-description"
                rows="5"
                value={innovation.description || ""}
                onChange={(event) =>
                  update("description", event.target.value)
                }
                placeholder="Describe the problem, proposed solution, Ayurvedic concept, technical approach and what makes the innovation different..."
              />

              <small>
                Include the problem, proposed solution and key technical
                or Ayurvedic concept.
              </small>
            </div>

            <div className="iss-field">
              <div className="iss-field-label">
                <label htmlFor="innovation-ingredients">
                  Key Ingredients / Components
                </label>

                <span>Recommended</span>
              </div>

              <input
                id="innovation-ingredients"
                type="text"
                value={
                  Array.isArray(innovation.ingredients)
                    ? innovation.ingredients.join(", ")
                    : innovation.ingredients || ""
                }
                onChange={(event) => {
                  const ingredients = event.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean);

                  update("ingredients", ingredients);
                }}
                placeholder="e.g. Ashwagandha, Guduchi, Turmeric"
              />

              <small>
                Separate multiple ingredients or components with commas.
              </small>
            </div>

            <div className="iss-field">
              <div className="iss-field-label">
                <label htmlFor="innovation-formulation">
                  Formulation / Process
                </label>

                <span>Recommended</span>
              </div>

              <input
                id="innovation-formulation"
                type="text"
                value={innovation.formulation || ""}
                onChange={(event) =>
                  update("formulation", event.target.value)
                }
                placeholder="e.g. Extract-based formulation"
              />

              <small>
                Add the formulation method, process or technical approach.
              </small>
            </div>

          </div>

          <div className="iss-form-bottom">

            <div className="iss-save">
              <div className="iss-save-icon">
                <CheckCircle2 size={16} />
              </div>

              <div>
                <strong>Auto-saved locally</strong>

                <span>
                  Your innovation details are preserved while you work.
                </span>
              </div>
            </div>

            <button
              type="button"
              className="iss-continue"
              disabled={!canContinue}
              onClick={() => {
                if (onContinue) {
                  onContinue();
                } else if (onContinueJourney) {
                  onContinueJourney();
                }
              }}
            >
              <span>
                {canContinue
                  ? "Continue Journey"
                  : "Complete Required Fields"}
              </span>

              <ArrowRight size={17} />
            </button>

          </div>
        </section>

        {/* =====================================================
            INTELLIGENCE JOURNEY — CLICKABLE
        ====================================================== */}

        <div className="iss-section-head">
          <div>
            <div className="iss-section-kicker">
              INTELLIGENCE PIPELINE
            </div>

            <h2>What Happens Next?</h2>

            <p>
              Your innovation profile becomes the starting point for four
              intelligence stages.
            </p>
          </div>

          <div className="iss-required">
            4 intelligence stages
          </div>
        </div>

        <section className="iss-intelligence-grid">

          {/* 01 TRADITIONAL KNOWLEDGE */}
          <div
            className="iss-intel-card purple"
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onKnowledge) {
                onKnowledge();
              }
            }}
            onKeyDown={(event) => {
              if (
                (event.key === "Enter" || event.key === " ") &&
                onKnowledge
              ) {
                event.preventDefault();
                onKnowledge();
              }
            }}
          >
            <div className="iss-intel-top">
              <div className="iss-intel-icon">
                <BookOpen size={20} />
              </div>

              <span className="iss-intel-number">
                01
              </span>
            </div>

            <h3>Traditional Knowledge</h3>

            <p>
              Discover classical Ayurveda references and traditional
              knowledge connections.
            </p>

            <div className="iss-intel-arrow">
              <ArrowRight size={16} />
            </div>
          </div>


          {/* 02 RESEARCH */}
          <div
            className="iss-intel-card blue"
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onResearch) {
                onResearch();
              }
            }}
            onKeyDown={(event) => {
              if (
                (event.key === "Enter" || event.key === " ") &&
                onResearch
              ) {
                event.preventDefault();
                onResearch();
              }
            }}
          >
            <div className="iss-intel-top">
              <div className="iss-intel-icon">
                <FlaskConical size={20} />
              </div>

              <span className="iss-intel-number">
                02
              </span>
            </div>

            <h3>Research Evidence</h3>

            <p>
              Identify supporting research, scientific evidence and
              evidence gaps.
            </p>

            <div className="iss-intel-arrow">
              <ArrowRight size={16} />
            </div>
          </div>


          {/* 03 PRIOR ART */}
          <div
            className="iss-intel-card orange"
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onPriorArt) {
                onPriorArt();
              }
            }}
            onKeyDown={(event) => {
              if (
                (event.key === "Enter" || event.key === " ") &&
                onPriorArt
              ) {
                event.preventDefault();
                onPriorArt();
              }
            }}
          >
            <div className="iss-intel-top">
              <div className="iss-intel-icon">
                <Target size={20} />
              </div>

              <span className="iss-intel-number">
                03
              </span>
            </div>

            <h3>Prior Art</h3>

            <p>
              Explore similar inventions, patents and possible prior-art
              signals.
            </p>

            <div className="iss-intel-arrow">
              <ArrowRight size={16} />
            </div>
          </div>


          {/* 04 IP READINESS */}
          <div
            className="iss-intel-card green"
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onIPReadiness) {
                onIPReadiness();
              }
            }}
            onKeyDown={(event) => {
              if (
                (event.key === "Enter" || event.key === " ") &&
                onIPReadiness
              ) {
                event.preventDefault();
                onIPReadiness();
              }
            }}
          >
            <div className="iss-intel-top">
              <div className="iss-intel-icon">
                <ShieldCheck size={20} />
              </div>

              <span className="iss-intel-number">
                04
              </span>
            </div>

            <h3>IP Readiness</h3>

            <p>
              Build a preliminary view of novelty, readiness and next
              IP actions.
            </p>

            <div className="iss-intel-arrow">
              <ArrowRight size={16} />
            </div>
          </div>

        </section>

        {/* QUICK INTELLIGENCE PREVIEW */}
        <div className="iss-section-head">
          <div>
            <div className="iss-section-kicker">
              PLATFORM INTELLIGENCE
            </div>

            <h2>What IP Shakti Sahayak Checks</h2>

            <p>
              Multiple signals are brought together before your next action.
            </p>
          </div>
        </div>

        <section className="iss-actions">

          <div className="iss-action-card">
            <div className="iss-action-icon">
              <FileSearch size={19} />
            </div>

            <div>
              <strong>Evidence & Research</strong>

              <span>
                Identify evidence supporting the innovation.
              </span>
            </div>
          </div>

          <div className="iss-action-card">
            <div className="iss-action-icon">
              <Search size={19} />
            </div>

            <div>
              <strong>Prior-Art Discovery</strong>

              <span>
                Explore similar patents and invention signals.
              </span>
            </div>
          </div>

          <div className="iss-action-card">
            <div className="iss-action-icon">
              <ShieldAlert size={19} />
            </div>

            <div>
              <strong>IP Risk & Readiness</strong>

              <span>
                Understand preliminary risks and next IP actions.
              </span>
            </div>
          </div>

        </section>

        {/* BOTTOM */}
        <section className="iss-bottom">

          <div className="iss-bottom-icon">
            <ShieldCheck size={20} />
          </div>

          <div>
            <strong>Evidence-grounded workflow</strong>

            <p>
              Your innovation profile becomes the foundation for discovery,
              comparison, readiness assessment and IP planning.
            </p>
          </div>

          <div className="iss-bottom-pill">
            Discover → Analyze → Protect
          </div>

        </section>

      </div>
    </div>
  );
}

export default InnovationOverviewPage;