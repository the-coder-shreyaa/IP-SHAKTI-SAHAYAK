import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Lightbulb,
} from "lucide-react";
import StatusBadge from "./StatusBadge";
import ProgressBar from "./ProgressBar";

function InnovationCard({
  innovation,
  progress = 0,
  onOpen,
}) {
  if (!innovation) {
    return null;
  }

  return (
    <article className="innovation-card">
      <div className="innovation-card-top">
        <div className="innovation-card-icon">
          <Lightbulb size={20} strokeWidth={1.7} />
        </div>

        <StatusBadge status={innovation.status || "Draft"} />
      </div>

      <div className="innovation-card-content">
        <span className="innovation-card-category">
          {innovation.category || "Ayurveda Innovation"}
        </span>

        <h3>
          {innovation.title || "Untitled Innovation"}
        </h3>

        <p>
          {innovation.description ||
            "Define your innovation and begin the Ayurveda discovery journey."}
        </p>
      </div>

      <div className="innovation-card-meta">
        <div>
          <FileText size={14} />
          <span>
            {innovation.focus || "Innovation Focus"}
          </span>
        </div>

        <div>
          <Clock3 size={14} />
          <span>
            {innovation.updatedAt
              ? "Recently updated"
              : "Not started"}
          </span>
        </div>
      </div>

      <ProgressBar
        value={progress}
        label="Journey Progress"
        size="small"
      />

      <div className="innovation-card-footer">
        {progress >= 100 ? (
          <span className="innovation-complete">
            <CheckCircle2 size={15} />
            Journey Complete
          </span>
        ) : (
          <span>
            {progress}% journey completed
          </span>
        )}

        {onOpen && (
          <button
            type="button"
            className="card-link"
            onClick={() => onOpen(innovation)}
          >
            Open Journey
            <ArrowRight size={15} />
          </button>
        )}
      </div>
    </article>
  );
}

export default InnovationCard;