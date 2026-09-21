import { Search, RotateCcw, SlidersHorizontal } from "lucide-react";
import {
  patentSearchFields,
  patentStatuses,
  patentSources,
} from "../data/patentData";

function PatentSearchForm({
  filters = {},
  onChange,
  onSearch,
  onReset,
}) {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({
        ...filters,
        [field]: value,
      });
    }
  };

  return (
    <form
      className="patent-search-form"
      onSubmit={(event) => {
        event.preventDefault();

        if (onSearch) {
          onSearch(filters);
        }
      }}
    >
      <div className="patent-search-header">
        <div>
          <span className="section-eyebrow">
            PRIOR-ART INTELLIGENCE
          </span>

          <h2>Search Existing Patent Records</h2>

          <p>
            Search the available dataset and compare
            potentially related records with your innovation.
          </p>
        </div>

        <SlidersHorizontal
          size={20}
          strokeWidth={1.7}
        />
      </div>

      <div className="patent-search-fields">
        {patentSearchFields.map((field) => (
          <label
            className="search-field"
            key={field.id}
          >
            <span>{field.label}</span>

            <input
              type="text"
              value={filters[field.id] || ""}
              placeholder={field.placeholder}
              onChange={(event) =>
                updateField(
                  field.id,
                  event.target.value
                )
              }
            />
          </label>
        ))}

        <label className="search-field">
          <span>Status</span>

          <select
            value={filters.status || "All"}
            onChange={(event) =>
              updateField("status", event.target.value)
            }
          >
            {patentStatuses.map((status) => (
              <option
                value={status}
                key={status}
              >
                {status}
              </option>
            ))}
          </select>
        </label>

        <label className="search-field">
          <span>Source</span>

          <select
            value={filters.source || "All"}
            onChange={(event) =>
              updateField("source", event.target.value)
            }
          >
            <option value="All">All Sources</option>

            {patentSources.map((source) => (
              <option
                value={source}
                key={source}
              >
                {source}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="patent-search-footer">
        <span className="search-helper">
          Search across title, abstract, keywords,
          classification and application.
        </span>

        <div className="search-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              if (onReset) {
                onReset();
              }
            }}
          >
            <RotateCcw size={15} />
            Reset
          </button>

          <button
            type="submit"
            className="primary-button"
          >
            <Search size={16} />
            Search Prior Art
          </button>
        </div>
      </div>
    </form>
  );
}

export default PatentSearchForm; 