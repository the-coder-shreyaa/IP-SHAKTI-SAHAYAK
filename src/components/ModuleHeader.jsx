import { ArrowLeft, ChevronRight } from "lucide-react";

function ModuleHeader({
  eyebrow = "AYURVEDA DISCOVER",
  title,
  description,
  icon: Icon,
  breadcrumbs = [],
  onBack,
  actions,
}) {
  return (
    <div className="module-header">
      {breadcrumbs.length > 0 && (
        <div className="breadcrumbs">
          {breadcrumbs.map((item, index) => (
            <div
              className="breadcrumb-item"
              key={`${item}-${index}`}
            >
              <span>{item}</span>

              {index < breadcrumbs.length - 1 && (
                <ChevronRight size={13} />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="module-header-main">
        <div className="module-header-left">
          {onBack && (
            <button
              type="button"
              className="back-button"
              onClick={onBack}
              aria-label="Go back"
            >
              <ArrowLeft size={17} />
            </button>
          )}

          {Icon && (
            <div className="module-header-icon">
              <Icon size={22} strokeWidth={1.7} />
            </div>
          )}

          <div>
            {eyebrow && (
              <span className="section-eyebrow">
                {eyebrow}
              </span>
            )}

            <h1>{title}</h1>

            {description && (
              <p>{description}</p>
            )}
          </div>
        </div>

        {actions && (
          <div className="module-header-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

export default ModuleHeader;