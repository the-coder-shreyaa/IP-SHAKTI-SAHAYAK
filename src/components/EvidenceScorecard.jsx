import {
  CheckCircle2,
  CircleAlert,
  CircleX,
  FileCheck2,
} from "lucide-react";
import { evidenceCategories } from "../data/evidenceData";
import { getEvidenceStatus } from "../services/readinessEngine";

function EvidenceScorecard({
  evidence = {},
  onStatusChange,
}) {
  const getIcon = (status) => {
    if (status === "Found") {
      return <CheckCircle2 size={17} />;
    }

    if (status === "Partial") {
      return <CircleAlert size={17} />;
    }

    return <CircleX size={17} />;
  };

  return (
    <section className="evidence-scorecard">
      <div className="evidence-scorecard-header">
        <div className="evidence-scorecard-title">
          <div className="section-icon">
            <FileCheck2 size={18} />
          </div>

          <div>
            <span className="section-eyebrow">
              EVIDENCE READINESS
            </span>

            <h2>Evidence Scorecard</h2>

            <p>
              Track the evidence required to move your
              innovation through the journey.
            </p>
          </div>
        </div>
      </div>

      <div className="evidence-list">
        {evidenceCategories.map((category) => {
          const currentStatus =
            evidence[category.id] || "Missing";

          const status = getEvidenceStatus(
            currentStatus
          );

          return (
            <div
              className="evidence-row"
              key={category.id}
            >
              <div className="evidence-row-icon">
                {getIcon(currentStatus)}
              </div>

              <div className="evidence-row-content">
                <div className="evidence-row-title">
                  <h3>{category.title}</h3>

                  <span className="evidence-source">
                    {category.sourceType}
                  </span>
                </div>

                <p>{category.description}</p>
              </div>

              <div className="evidence-row-status">
                <select
                  value={currentStatus}
                  onChange={(event) =>
                    onStatusChange &&
                    onStatusChange(
                      category.id,
                      event.target.value
                    )
                  }
                  className={`evidence-select evidence-${status.type}`}
                >
                  <option value="Found">Found</option>
                  <option value="Partial">Partial</option>
                  <option value="Missing">Missing</option>
                </select>

                <span className="evidence-score">
                  {status.score}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="evidence-scorecard-footer">
        <span>
          <CircleAlert size={14} />
          Keep evidence records updated as your innovation
          progresses.
        </span>

        <span>
          <Circle size={13} />
          Missing evidence should be reviewed before
          professional filing.
        </span>
      </div>
    </section>
  );
}

export default EvidenceScorecard;