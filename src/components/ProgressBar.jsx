function ProgressBar({
  value = 0,
  label,
  showValue = true,
  size = "medium",
}) {
  const safeValue = Math.min(Math.max(Number(value) || 0, 0), 100);

  return (
    <div className={`progress-wrapper progress-${size}`}>
      {(label || showValue) && (
        <div className="progress-header">
          {label && <span>{label}</span>}

          {showValue && (
            <strong>{safeValue}%</strong>
          )}
        </div>
      )}

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
