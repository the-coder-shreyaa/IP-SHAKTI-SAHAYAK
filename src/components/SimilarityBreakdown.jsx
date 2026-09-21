import {
  FlaskConical,
  Layers3,
  SearchCheck,
  Stethoscope,
  Tags,
} from "lucide-react";

const breakdownItems = [
  {
    key: "ingredients",
    label: "Ingredients",
    icon: FlaskConical,
  },
  {
    key: "formulation",
    label: "Formulation",
    icon: Layers3,
  },
  {
    key: "therapeuticUse",
    label: "Therapeutic Use",
    icon: Stethoscope,
  },
  {
    key: "abstract",
    label: "Technical Description",
    icon: SearchCheck,
  },
  {
    key: "classification",
    label: "IPC / CPC Classification",
    icon: Tags,
  },
];

function getScoreClass(score = 0) {
  if (score >= 70) return "high";
  if (score >= 40) return "medium";
  return "low";
}

function SimilarityBreakdown({
  result,
  compact = false,
}) {
  if (!result?.breakdown) {
    return null;
  }

  return (
    <div
      className={`similarity-breakdown ${
        compact ? "compact" : ""
      }`}
    >
      {!compact && (
        <div className="similarity-breakdown-header">
          <div>
            <span className="section-eyebrow">
              WHY IS THIS SIMILAR?
            </span>

            <h3>Similarity Evidence</h3>
          </div>

          <strong className="similarity-total">
            {result.score || 0}%
          </strong>
        </div>
      )}

      <div className="similarity-breakdown-list">
        {breakdownItems.map((item) => {
          const Icon = item.icon;
          const score = result.breakdown[item.key] || 0;

          return (
            <div
              className="similarity-breakdown-item"
              key={item.key}
            >
              <div className="similarity-item-label">
                <div className="similarity-item-icon">
                  <Icon size={15} />
                </div>

                <span>{item.label}</span>
              </div>

              <div className="similarity-item-score">
                <div className="similarity-mini-track">
                  <div
                    className={`similarity-mini-fill ${getScoreClass(
                      score
                    )}`}
                    style={{
                      width: `${Math.min(
                        Math.max(score, 0),
                        100
                      )}%`,
                    }}
                  />
                </div>

                <strong>{score}%</strong>
              </div>
            </div>
          );
        })}
      </div>

      {result.reasons?.length > 0 && !compact && (
        <div className="similarity-reasons">
          <span>Detected signals</span>

          <div>
            {result.reasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>
        </div>
      )}

      {!compact && (
        <p className="similarity-disclaimer">
          Similarity is an automated demo indicator based on
          the available records and transparent matching
          signals. It is not a legal patentability opinion.
        </p>
      )}
    </div>
  );
}

export default SimilarityBreakdown;