function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  icon: Icon,
}) {
  return (
    <div className="section-header">
      <div className="section-header-content">
        {eyebrow && (
          <span className="section-eyebrow">
            {eyebrow}
          </span>
        )}

        <div className="section-title-row">
          {Icon && (
            <div className="section-icon">
              <Icon size={18} strokeWidth={1.8} />
            </div>
          )}

          <h2>{title}</h2>
        </div>

        {description && (
          <p className="section-description">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="section-header-action">
          {action}
        </div>
      )}
    </div>
  );
}

export default SectionHeader;
