import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ProgressBar from "./ProgressBar";

function ReadinessCard({
  readiness,
  onContinue,
}) {
  if (!readiness) {
    return null;
  }

  const score = readiness.score || 0;

  return (
    <section className="readiness-card">
      <div className="readiness-card-glow" />

      <div className="readiness-card-header">
        <div className="readiness-icon">
          <ShieldCheck size={22} strokeWidth={1.7} />
        </div>

        <div>
          <span className="section-eyebrow">
            PRELIMINARY IP ASSESSMENT
          </span>

          <h2>Innovation Readiness</h2>
        </div>

        <Sparkles
          className="readiness-sparkle"
          size={18}
        />
      </div>

      <div className="readiness-score-area">
        <div className="readiness-score">
          <strong>{score}</strong>
          <span>/100</span>
        </div>

        <div className="readiness-level">
          <span>Current Stage</span>
          <strong>{readiness.level}</strong>
        </div>
      </div>

      <ProgressBar
        value={score}
        label="Overall preparation"
      />

      <div className="readiness-factors">
        <div>
          <span>Evidence</span>
          <strong>{readiness.evidenceScore}%</strong>
        </div>

        <div>
          <span>Prior-Art Position</span>
          <strong>{readiness.priorArtScore}%</strong>
        </div>

        <div>
          <span>Documentation</span>
          <strong>
            {readiness.completenessScore}%
          </strong>
        </div>
      </div>

      <div className="readiness-message">
        <CheckCircle2 size={16} />

        <p>
          {readiness.nextStep ||
            "Continue completing your innovation journey and supporting evidence."}
        </p>
      </div>

      <div className="readiness-footer">
        <small>
          Preliminary indicator only — not a legal opinion
          or guarantee of patent grant.
        </small>

        {onContinue && (
          <button
            type="button"
            className="card-link"
            onClick={onContinue}
          >
            Continue Journey
            <ArrowRight size={15} />
          </button>
        )}
      </div>
    </section>
  );
}

export default ReadinessCard;