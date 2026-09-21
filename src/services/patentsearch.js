import { patentRecords } from "../data/patentData";
import {
  findSimilarPatents,
  getSimilarityLevel,
  getSimilarityReasons,
} from "./similarityEngine";

function normalize(value = "") {
  return String(value).toLowerCase().trim();
}

function matchesText(value, query) {
  if (!query) return true;
  return normalize(value).includes(normalize(query));
}

export function searchPatents(filters = {}) {
  const {
    keyword = "",
    ingredient = "",
    application = "",
    ipc = "",
    status = "All",
    source = "All",
  } = filters;

  return patentRecords.filter((patent) => {
    const keywordMatch =
      !keyword ||
      matchesText(patent.title, keyword) ||
      matchesText(patent.abstract, keyword) ||
      patent.keywords?.some((item) => matchesText(item, keyword));

    const ingredientMatch =
      !ingredient ||
      patent.keywords?.some((item) => matchesText(item, ingredient)) ||
      matchesText(patent.title, ingredient);

    const applicationMatch =
      !application ||
      matchesText(patent.title, application) ||
      matchesText(patent.abstract, application) ||
      patent.keywords?.some((item) => matchesText(item, application));

    const ipcMatch =
      !ipc ||
      patent.ipcCodes?.some((code) => matchesText(code, ipc));

    const statusMatch = status === "All" || patent.status === status;

    const sourceMatch = source === "All" || patent.source === source;

    return (
      keywordMatch &&
      ingredientMatch &&
      applicationMatch &&
      ipcMatch &&
      statusMatch &&
      sourceMatch
    );
  });
}

export function searchAndComparePatents(innovation, filters = {}) {
  const filteredPatents = searchPatents(filters);

  const similarityResults = findSimilarPatents(
    innovation,
    filteredPatents
  );

  return similarityResults.map((result) => ({
    ...result,
    similarityLevel: getSimilarityLevel(result.score),
    reasons: getSimilarityReasons(result),
  }));
}

export function getPatentById(id) {
  return patentRecords.find((patent) => patent.id === id) || null;
}

export function getPatentStats(records = patentRecords) {
  return {
    total: records.length,

    published: records.filter(
      (patent) => patent.status === "Published"
    ).length,

    granted: records.filter(
      (patent) => patent.status === "Granted"
    ).length,

    pending: records.filter(
      (patent) => patent.status === "Pending"
    ).length,

    india: records.filter(
      (patent) => patent.jurisdiction === "India"
    ).length,
  };
}