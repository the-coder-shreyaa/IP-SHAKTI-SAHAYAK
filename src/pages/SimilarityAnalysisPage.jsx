import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  FlaskConical,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";

function SimilarityBreakdown({ result, patent }) {
  const score = Number(result?.score ?? 68);

  const signals = [
    {
      icon: FlaskConical,
      title: "Ingredient Overlap",
      value: result?.ingredientScore ?? 72,
      text: "Similarity in ingredients",
    },
    {
      icon: Target,
      title: "Application Overlap",
      value: result?.applicationScore ?? 64,
      text: "Similarity in intended use",
    },
    {
      icon: Layers3,
      title: "Classification Match",
      value: result?.classificationScore ?? 58,
      text: "IPC / CPC signal",
    },
    {
      icon: FileText,
      title: "Concept Similarity",
      value: result?.conceptScore ?? score,
      text: "Overall technical concept",
    },
  ];

  return (
    <div className="similarity-analysis">

      {/* SCORE */}

      <div className="sim-main-score">

        <div>
          <span>OVERALL SIMILARITY</span>

          <div className="sim-score-line">
            <strong>{score}%</strong>

            <div>
              <b>
                {score >= 75
                  ? "High Similarity"
                  : score >= 50
                  ? "Moderate Similarity"
                  : "Lower Similarity"}
              </b>

              <small>
                Preliminary comparison signal
              </small>
            </div>
          </div>
        </div>

        <div
          className="sim-circle"
          style={{
            "--score": `${score * 3.6}deg`,
          }}
        >
          <div>
            <b>{score}</b>
            <small>%</small>
          </div>
        </div>

      </div>


      {/* RECORD */}

      <div className="sim-record-box">

        <div className="sim-record-icon">
          <FileText size={18} />
        </div>

        <div>
          <span>REFERENCE PATENT</span>

          <h4>
            {patent?.title ||
              result?.title ||
              "Ayurvedic Formulation / Herbal Innovation"}
          </h4>

          <small>
            {patent?.patentId ||
              result?.patentId ||
              "Prior-art reference record"}
          </small>
        </div>

      </div>


      {/* SIGNAL TITLE */}

      <div className="sim-title">
        <Sparkles size={16} />
        <span>SIMILARITY SIGNALS</span>
      </div>


      {/* SIGNAL CARDS */}

      <div className="sim-signal-list">

        {signals.map((signal) => {

          const Icon = signal.icon;

          return (
            <div
              className="sim-signal-card"
              key={signal.title}
            >

              <div className="sim-signal-header">

                <div className="sim-signal-left">

                  <div className="sim-icon">
                    <Icon size={15} />
                  </div>

                  <div>
                    <strong>
                      {signal.title}
                    </strong>

                    <small>
                      {signal.text}
                    </small>
                  </div>

                </div>

                <b>
                  {signal.value}%
                </b>

              </div>

              <div className="sim-bar">
                <div
                  style={{
                    width: `${Math.min(
                      Math.max(signal.value, 0),
                      100
                    )}%`,
                  }}
                />
              </div>

            </div>
          );
        })}

      </div>


      {/* INTERPRETATION */}

      <div className="sim-analysis-box">

        {score >= 70 ? (
          <AlertTriangle size={18} />
        ) : (
          <CheckCircle2 size={18} />
        )}

        <div>

          <strong>
            Preliminary Interpretation
          </strong>

          <p>
            {score >= 70
              ? "The record shows notable similarity signals. Review the patent claims, technical features and publication details carefully."
              : "The available record shows comparatively lower similarity signals, but additional prior-art searching may still be useful."}
          </p>

        </div>

      </div>


      {/* NEXT STEP */}

      <div className="sim-next-step">

        <div className="sim-next-icon">
          <Target size={16} />
        </div>

        <div>
          <span>NEXT STEP</span>

          <strong>
            Review patent claims & technical features
          </strong>

          <p>
            Compare ingredients, application,
            classification and claim-level information
            before drawing conclusions.
          </p>
        </div>

      </div>


      <style>{`

        .similarity-analysis {
          width: 100%;
        }

        /* SCORE */

        .sim-main-score {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #e8f6ed,
            #f8fbf9
          );
          border: 1px solid #d5e7dc;
          margin-bottom: 15px;
        }

        .sim-main-score > div:first-child > span {
          display: block;
          color: #698879;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.1px;
          margin-bottom: 9px;
        }

        .sim-score-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sim-score-line > strong {
          color: #197653;
          font-size: 29px;
          line-height: 1;
        }

        .sim-score-line b {
          display: block;
          color: #3d6251;
          font-size: 10px;
        }

        .sim-score-line small {
          display: block;
          color: #8b9d94;
          font-size: 8px;
          margin-top: 3px;
        }


        /* CIRCLE */

        .sim-circle {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          background:
            conic-gradient(
              #29936a var(--score),
              #dbe9e1 0deg
            );
        }

        .sim-circle > div {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #34745b;
        }

        .sim-circle b {
          font-size: 12px;
        }

        .sim-circle small {
          font-size: 7px;
          margin-left: 1px;
        }


        /* RECORD */

        .sim-record-box {
          display: flex;
          gap: 11px;
          align-items: center;
          padding: 14px;
          border-radius: 13px;
          background: white;
          border: 1px solid #dce8e1;
          margin-bottom: 18px;
        }

        .sim-record-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #eaf5ee;
          color: #308c65;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sim-record-box span {
          display: block;
          color: #8a9b93;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .sim-record-box h4 {
          margin: 4px 0 3px;
          color: #365747;
          font-size: 10px;
          line-height: 1.4;
        }

        .sim-record-box small {
          color: #96a49e;
          font-size: 8px;
        }


        /* TITLE */

        .sim-title {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #557768;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 11px;
        }

        .sim-title svg {
          color: #3b9a70;
        }


        /* SIGNALS */

        .sim-signal-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sim-signal-card {
          padding: 12px;
          border-radius: 12px;
          background: white;
          border: 1px solid #e0eae4;
        }

        .sim-signal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .sim-signal-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sim-icon {
          width: 27px;
          height: 27px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf7f1;
          color: #348d67;
          flex-shrink: 0;
        }

        .sim-signal-left strong {
          display: block;
          color: #466455;
          font-size: 9px;
        }

        .sim-signal-left small {
          display: block;
          margin-top: 2px;
          color: #99a8a1;
          font-size: 7px;
        }

        .sim-signal-header > b {
          color: #287e5d;
          font-size: 10px;
        }

        .sim-bar {
          width: 100%;
          height: 5px;
          border-radius: 10px;
          background: #e6eee9;
          overflow: hidden;
        }

        .sim-bar > div {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #72bd94,
            #27865f
          );
        }


        /* ANALYSIS */

        .sim-analysis-box {
          display: flex;
          gap: 9px;
          margin-top: 17px;
          padding: 13px;
          border-radius: 12px;
          background: #fffaf0;
          border: 1px solid #eee1c8;
          color: #8b7755;
        }

        .sim-analysis-box svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .sim-analysis-box strong {
          display: block;
          color: #806b4c;
          font-size: 9px;
        }

        .sim-analysis-box p {
          margin: 4px 0 0;
          color: #917e60;
          font-size: 8px;
          line-height: 1.6;
        }


        /* NEXT STEP */

        .sim-next-step {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          padding: 13px;
          border-radius: 12px;
          background: #f3faf6;
          border: 1px solid #dceae1;
        }

        .sim-next-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: #e4f3e9;
          color: #328d67;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sim-next-step span {
          display: block;
          color: #8c9e95;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .sim-next-step strong {
          display: block;
          margin-top: 4px;
          color: #456556;
          font-size: 9px;
        }

        .sim-next-step p {
          margin: 3px 0 0;
          color: #899991;
          font-size: 8px;
          line-height: 1.5;
        }

      `}</style>

    </div>
  );
}

export default SimilarityBreakdown;