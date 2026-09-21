import {
  Check,
  Lock,
  Circle,
  ArrowRight,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

function JourneyTimeline({
  steps = [],
  activeStepId,
  onStepClick,
}) {
  return (
    <div className="journey-timeline">
      {steps.map((step, index) => {
        const isCompleted = step.status === "completed";
        const isActive =
          step.status === "active" ||
          step.id === activeStepId;
        const isLocked = step.status === "locked";

        return (
          <div
            key={step.id}
            className={`timeline-item ${
              isCompleted ? "completed" : ""
            } ${isActive ? "active" : ""} ${
              isLocked ? "locked" : ""
            }`}
          >
            <div className="timeline-connector">
              {index > 0 && (
                <span
                  className={
                    isCompleted || isActive
                      ? "connector-filled"
                      : ""
                  }
                />
              )}
            </div>

            <button
              type="button"
              className="timeline-node"
              disabled={isLocked}
              onClick={() =>
                onStepClick && onStepClick(step)
              }
              aria-label={`Open ${step.title}`}
            >
              {isCompleted ? (
                <Check size={16} />
              ) : isLocked ? (
                <Lock size={14} />
              ) : isActive ? (
                <Circle size={10} fill="currentColor" />
              ) : (
                <span>{step.number}</span>
              )}
            </button>

            <div className="timeline-content">
              <div className="timeline-step-top">
                <span className="timeline-number">
                  {step.number}
                </span>

                <StatusBadge
                  status={
                    isCompleted
                      ? "Completed"
                      : isActive
                        ? "In Progress"
                        : isLocked
                          ? "Locked"
                          : "Next"
                  }
                />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {!isLocked && onStepClick && (
                <button
                  type="button"
                  className="timeline-link"
                  onClick={() => onStepClick(step)}
                >
                  Open Stage
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JourneyTimeline;