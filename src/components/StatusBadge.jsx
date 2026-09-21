function StatusBadge({ status = "Pending", tone }) {
  const normalizedStatus = String(status).toLowerCase();

  const getTone = () => {
    if (tone) return tone;

    if (
      ["completed", "found", "granted", "ready", "active"].includes(
        normalizedStatus
      )
    ) {
      return "success";
    }

    if (
      ["partial", "in progress", "published", "moderate"].includes(
        normalizedStatus
      )
    ) {
      return "warning";
    }

    if (
      ["missing", "locked", "high", "risk"].includes(normalizedStatus)
    ) {
      return "danger";
    }

    return "neutral";
  };

  return (
    <span className={`status-badge status-${getTone()}`}>
      <span className="status-badge-dot" />
      {status}
    </span>
  );
}

export default StatusBadge;