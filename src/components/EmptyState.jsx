import { SearchX } from "lucide-react";

function EmptyState({
  title = "No results found",
  description = "Try changing your search or filters.",
  icon: Icon = SearchX,
  action,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Icon size={24} strokeWidth={1.7} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {action && (
        <div className="empty-state-action">
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;