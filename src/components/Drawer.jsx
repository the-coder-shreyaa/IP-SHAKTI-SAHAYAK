import { X } from "lucide-react";

function Drawer({
  open = false,
  title,
  description,
  children,
  onClose,
  side = "right",
  footer,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="drawer-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && onClose) {
          onClose();
        }
      }}
    >
      <aside
        className={`drawer drawer-${side}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="drawer-header">
          <div>
            {title && <h2 id="drawer-title">{title}</h2>}
            {description && <p>{description}</p>}
          </div>

          {onClose && (
            <button
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="drawer-body">
          {children}
        </div>

        {footer && (
          <div className="drawer-footer">
            {footer}
          </div>
        )}
      </aside>
    </div>
  );
}

export default Drawer;