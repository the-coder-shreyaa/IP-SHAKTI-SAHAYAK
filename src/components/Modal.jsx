import { X } from "lucide-react";

function Modal({
  open = false,
  title,
  description,
  children,
  onClose,
  size = "medium",
  footer,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && onClose) {
          onClose();
        }
      }}
    >
      <div
        className={`modal modal-${size}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <div>
            {title && <h2 id="modal-title">{title}</h2>}
            {description && <p>{description}</p>}
          </div>

          {onClose && (
            <button
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;