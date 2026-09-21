import { Search, X } from "lucide-react";

function SearchInput({
  value = "",
  onChange,
  placeholder = "Search...",
  onClear,
  size = "medium",
}) {
  const hasValue = String(value).length > 0;

  return (
    <div className={`search-input search-input-${size}`}>
      <Search
        className="search-input-icon"
        size={17}
        strokeWidth={1.8}
      />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange && onChange(event.target.value)
        }
        aria-label={placeholder}
      />

      {hasValue && onClear && (
        <button
          type="button"
          className="search-input-clear"
          onClick={onClear}
          aria-label="Clear search"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}

export default SearchInput;