import { AlertTriangle, X } from "lucide-react";

function ConfirmDialog({
  open = false,
  title = "Confirm Action",
  description = "Are you sure you want to continue?",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  danger = false,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && onCancel) {
          onCancel();
        }
      }}
    >
      <div
        className="confirm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
      >
        <div className={`confirm-dialog-icon ${danger ? "danger" : ""}`}>
          <AlertTriangle size={22} strokeWidth={1.8} />
        </div>

        <button
          type="button"
          className="confirm-dialog-close"
          onClick={onCancel}
          aria-label="Close dialog"
        >
          <X size={17} />
        </button>

        <div className="confirm-dialog-content">
          <h2 id="confirm-dialog-title">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="confirm-dialog-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>

          <button
            type="button"
            className={`primary-button ${
              danger ? "danger-button" : ""
            }`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;