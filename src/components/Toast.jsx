import { CheckCircle2, CircleAlert, Info, X } from "lucide-react";

function Toast({
  message,
  type = "success",
  onClose,
}) {
  if (!message) {
    return null;
  }

  const icons = {
    success: CheckCircle2,
    warning: CircleAlert,
    info: Info,
  };

  const Icon = icons[type] || Info;

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-icon">
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <span>{message}</span>

      {onClose && (
        <button
          type="button"
          className="toast-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}

export default Toast;