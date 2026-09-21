import { similarityWeights } from "../data/patentData";

/*
  Transparent demo similarity engine.

  This is intentionally deterministic and explainable.
  Later, this can be replaced or extended with:
  - TF-IDF / cosine similarity
  - embeddings
  - authorized patent APIs
  - larger patent datasets

  It is NOT a legal patentability opinion.
*/

function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value = "") {
  return normalizeText(value)
    .split(" ")
    .filter((word) => word.length > 2);
}

function uniqueTokens(value = "") {
  return [...new Set(tokenize(value))];
}

function overlapScore(sourceTokens, targetTokens) {
  if (!sourceTokens.length || !targetTokens.length) {
    return 0;
  }

  const targetSet = new Set(targetTokens);

  const matches = sourceTokens.filter((token) => targetSet.has(token));

  return Math.round(
    (new Set(matches).size / new Set(sourceTokens).size) * 100
  );
}

function keywordScore(inputKeywords = [], patentKeywords = []) {
  const source = inputKeywords.map(normalizeText).filter(Boolean);
  const target = patentKeywords.map(normalizeText).filter(Boolean);

  if (!source.length || !target.length) {
    return 0;
  }

  let matches = 0;

  source.forEach((keyword) => {
    if (
      target.some(
        (targetKeyword) =>
          targetKeyword.includes(keyword) || keyword.includes(targetKeyword)
      )
    ) {
      matches += 1;
    }
  });

  return Math.round((matches / source.length) * 100);
}

function classificationScore(inputCodes = [], patentCodes = []) {
  if (!inputCodes.length || !patentCodes.length) {
    return 0;
  }

  const normalizedInput = inputCodes.map(normalizeText);

  const matches = patentCodes.filter((patentCode) =>
    normalizedInput.some(
      (inputCode) =>
        normalizeText(patentCode).startsWith(inputCode) ||
        inputCode.startsWith(normalizeText(patentCode))
    )
  );

  return Math.round(
    (new Set(matches.map(normalizeText)).size /
      new Set(patentCodes.map(normalizeText)).size) *
      100
  );
}

function buildSimilarityBreakdown(innovation, patent) {
  const ingredients = overlapScore(
    uniqueTokens(innovation.ingredients),
    patent.keywords || []
  );

  const formulation = keywordScore(
    [innovation.formulation],
    patent.keywords || []
  );

  const therapeuticUse = keywordScore(
    [innovation.therapeuticUse],
    patent.keywords || []
  );

  const abstract = overlapScore(
    uniqueTokens(
      `${innovation.title || ""} ${innovation.description || ""} ${
        innovation.formulation || ""
      }`
    ),
    tokenize(patent.abstract)
  );

  const classification = classificationScore(
    innovation.ipcCodes || [],
    patent.ipcCodes || []
  );

  return {
    ingredients,
    formulation,
    therapeuticUse,
    abstract,
    classification,
  };
}

export function calculatePatentSimilarity(innovation, patent) {
  const breakdown = buildSimilarityBreakdown(innovation, patent);

  const weightedScore = Math.round(
    (breakdown.ingredients * similarityWeights.ingredients +
      breakdown.formulation * similarityWeights.formulation +
      breakdown.therapeuticUse * similarityWeights.therapeuticUse +
      breakdown.abstract * similarityWeights.abstract +
      breakdown.classification * similarityWeights.classification) /
      100
  );

  return {
    patentId: patent.id,
    publicationNumber: patent.publicationNumber,
    title: patent.title,
    score: Math.min(weightedScore, 100),
    breakdown,
    source: patent.source,
  };
}

export function findSimilarPatents(innovation, patents = []) {
  return patents
    .map((patent) => calculatePatentSimilarity(innovation, patent))
    .sort((a, b) => b.score - a.score);
}

export function getSimilarityLevel(score) {
  if (score >= 80) {
    return "High Similarity";
  }

  if (score >= 60) {
    return "Moderate Similarity";
  }

  if (score >= 40) {
    return "Potential Similarity";
  }

  return "Low Similarity";
}

export function getSimilarityReasons(result) {
  const reasons = [];

  if (result.breakdown.ingredients >= 50) {
    reasons.push("Ingredient / keyword overlap detected");
  }

  if (result.breakdown.formulation >= 50) {
    reasons.push("Formulation-related terms overlap");
  }

  if (result.breakdown.therapeuticUse >= 50) {
    reasons.push("Application / use appears related");
  }

  if (result.breakdown.abstract >= 50) {
    reasons.push("Technical description contains related terms");
  }

  if (result.breakdown.classification >= 50) {
    reasons.push("Related patent classification detected");
  }

  if (!reasons.length) {
    reasons.push("Limited overlap detected in the current demo dataset");
  }

  return reasons;
}