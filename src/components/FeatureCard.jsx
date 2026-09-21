import { ArrowRight, Sparkles } from "lucide-react";
import StatusBadge from "./StatusBadge";

function FeatureCard({
  feature,
  onOpen,
}) {
  if (!feature) {
    return null;
  }

  return (
    <article className="feature-card">
      <div className="feature-card-top">
        <div className="feature-card-icon">
          <Sparkles size={19} strokeWidth={1.7} />
        </div>

        <StatusBadge
          status={feature.status || "Active"}
        />
      </div>

      <div className="feature-card-body">
        {feature.category && (
          <span className="feature-category">
            {feature.category}
          </span>
        )}

        <h3>{feature.title}</h3>

        <p>
          {feature.description ||
            "Explore this Ayurveda innovation platform module."}
        </p>
      </div>

      <div className="feature-card-footer">
        <span>
          {feature.number
            ? `Module ${feature.number}`
            : "Platform Module"}
        </span>

        {onOpen && (
          <button
            type="button"
            className="card-link"
            onClick={() => onOpen(feature)}
          >
            Explore
            <ArrowRight size={15} />
          </button>
        )}
      </div>
    </article>
  );
}

export default FeatureCard;