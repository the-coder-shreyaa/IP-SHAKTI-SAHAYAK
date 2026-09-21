const STORAGE_KEYS = {
  innovation: "ayurveda_discover_innovation",
  innovations: "ayurveda_discover_innovations",
  evidence: "ayurveda_discover_evidence",
  bookmarks: "ayurveda_discover_bookmarks",
  searchHistory: "ayurveda_discover_search_history",
};

function read(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    return JSON.parse(value);
  } catch (error) {
    console.error(`Storage read failed for ${key}:`, error);
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Storage write failed for ${key}:`, error);
    return false;
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Storage removal failed for ${key}:`, error);
    return false;
  }
}

/* ---------------- Innovation ---------------- */

export function saveInnovation(innovation) {
  return write(STORAGE_KEYS.innovation, innovation);
}

export function getSavedInnovation() {
  return read(STORAGE_KEYS.innovation, null);
}

export function clearSavedInnovation() {
  return remove(STORAGE_KEYS.innovation);
}

/* ---------------- Innovation History ---------------- */

export function saveInnovationToHistory(innovation) {
  const existing = read(STORAGE_KEYS.innovations, []);

  const updated = [
    innovation,
    ...existing.filter((item) => item.id !== innovation.id),
  ];

  return write(STORAGE_KEYS.innovations, updated);
}

export function getInnovationHistory() {
  return read(STORAGE_KEYS.innovations, []);
}

/* ---------------- Evidence ---------------- */

export function saveEvidence(evidence) {
  return write(STORAGE_KEYS.evidence, evidence);
}

export function getSavedEvidence(defaultValue = {}) {
  return read(STORAGE_KEYS.evidence, defaultValue);
}

/* ---------------- Bookmarks ---------------- */

export function saveBookmarks(bookmarks = []) {
  return write(STORAGE_KEYS.bookmarks, bookmarks);
}

export function getBookmarks() {
  return read(STORAGE_KEYS.bookmarks, []);
}

export function toggleBookmark(patentId) {
  const bookmarks = getBookmarks();

  const exists = bookmarks.includes(patentId);

  const updated = exists
    ? bookmarks.filter((id) => id !== patentId)
    : [...bookmarks, patentId];

  saveBookmarks(updated);

  return updated;
}

/* ---------------- Search History ---------------- */

export function saveSearchHistory(search) {
  const history = read(STORAGE_KEYS.searchHistory, []);

  const newEntry = {
    ...search,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };

  const updated = [newEntry, ...history].slice(0, 20);

  return write(STORAGE_KEYS.searchHistory, updated);
}

export function getSearchHistory() {
  return read(STORAGE_KEYS.searchHistory, []);
}

export function clearSearchHistory() {
  return remove(STORAGE_KEYS.searchHistory);
}

/* ---------------- Utility ---------------- */

export function clearAllLocalData() {
  Object.values(STORAGE_KEYS).forEach((key) => {
    remove(key);
  });
}

export { STORAGE_KEYS };