import { ArrowUpRight } from "lucide-react";

function MetricCard({
  label,
  value,
  description,
  icon: Icon,
  trend,
  trendLabel,
}) {
  return (
    <div className="metric-card">
      <div className="metric-card-top">
        <div className="metric-icon">
          {Icon && <Icon size={19} strokeWidth={1.8} />}
        </div>

        {trend && (
          <span className="metric-trend">
            <ArrowUpRight size={13} />
            {trend}
          </span>
        )}
      </div>

      <div className="metric-value">{value}</div>

      <div className="metric-label">{label}</div>

      {(description || trendLabel) && (
        <div className="metric-description">
          {description || trendLabel}
        </div>
      )}
    </div>
  );
}

export default MetricCard;