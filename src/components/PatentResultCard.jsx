import {
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  ExternalLink,
  FileSearch,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

function PatentResultCard({
  patent,
  similarity,
  bookmarked = false,
  onBookmark,
  onOpen,
}) {
  if (!patent) {
    return null;
  }

  const score = similarity?.score ?? 0;

  const safeScore = Math.min(
    Math.max(Number(score) || 0, 0),
    100
  );

  return (
    <article className="patent-result-card">
      <div className="patent-result-top">
        <div className="patent-result-icon">
          <FileSearch size={20} strokeWidth={1.7} />
        </div>

        <div className="patent-result-actions">
          <StatusBadge status={patent.status} />

          <button
            type="button"
            className={`icon-button ${
              bookmarked ? "is-bookmarked" : ""
            }`}
            onClick={() => {
              if (onBookmark) {
                onBookmark(patent.id);
              }
            }}
            aria-label={
              bookmarked
                ? "Remove bookmark"
                : "Bookmark patent"
            }
          >
            <Bookmark
              size={17}
              fill={bookmarked ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      <div className="patent-result-content">
        <span className="patent-number">
          {patent.publicationNumber}
        </span>

        <h3>{patent.title}</h3>

        <p>{patent.abstract}</p>

        <div className="patent-meta">
          <span>
            <strong>Applicant:</strong>{" "}
            {patent.applicant || "Not available"}
          </span>

          <span>
            <CalendarDays size={14} />
            {patent.publicationDate || "Not available"}
          </span>

          <span>
            <strong>Jurisdiction:</strong>{" "}
            {patent.jurisdiction || "Not available"}
          </span>
        </div>

        <div className="patent-tags">
          {patent.ipcCodes?.map((code) => (
            <span key={code}>{code}</span>
          ))}

          {patent.keywords?.slice(0, 3).map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>

      {similarity && (
        <div className="patent-similarity">
          <div className="similarity-score">
            <span>Similarity</span>
            <strong>{safeScore}%</strong>
          </div>

          <div className="similarity-track">
            <div
              className="similarity-fill"
              style={{
                width: `${safeScore}%`,
              }}
            />
          </div>

          {similarity.similarityLevel && (
            <span className="similarity-level">
              {similarity.similarityLevel}
            </span>
          )}
        </div>
      )}

      <div className="patent-result-footer">
        <span>
          Source: {patent.source || "Demo dataset"}
        </span>

        <div className="patent-footer-actions">
          {onOpen && (
            <button
              type="button"
              className="card-link"
              onClick={() => onOpen(patent)}
            >
              View Analysis
              <ArrowUpRight size={15} />
            </button>
          )}

          {patent.sourceUrl && (
            <a
              href={patent.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              Source
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default PatentResultCard;