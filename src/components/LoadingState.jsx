import { LoaderCircle } from "lucide-react";

function LoadingState({
  label = "Loading...",
  fullPage = false,
}) {
  return (
    <div
      className={`loading-state ${
        fullPage ? "loading-full-page" : ""
      }`}
    >
      <div className="loading-spinner">
        <LoaderCircle size={22} />
      </div>

      <span>{label}</span>
    </div>
  );
}

export default LoadingState;