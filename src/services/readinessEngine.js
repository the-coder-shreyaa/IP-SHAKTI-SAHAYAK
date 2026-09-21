const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

function normalize(value = "") {
  return String(value).trim();
}

export function calculateEvidenceScore(evidence = {}) {
  const categories = [
    "traditionalKnowledge",
    "priorArt",
    "scientificEvidence",
    "safetyEvidence",
    "qualityStandardisation",
    "regulatoryInformation",
    "ipDocumentation",
  ];

  let total = 0;

  categories.forEach((category) => {
    const status = normalize(evidence[category]);

    if (status === "Found") {
      total += 100;
    } else if (status === "Partial") {
      total += 50;
    }
  });

  return categories.length
    ? Math.round(total / categories.length)
    : 0;
}

export function calculatePatentReadiness({
  innovation = {},
  evidence = {},
  similarityResults = [],
} = {}) {
  const evidenceScore = calculateEvidenceScore(evidence);

  const highestSimilarity =
    similarityResults.length > 0
      ? Math.max(...similarityResults.map((item) => item.score || 0))
      : 0;

  const innovationCompleteness = [
    innovation.title,
    innovation.description,
    innovation.ingredients,
    innovation.formulation,
    innovation.therapeuticUse,
    innovation.ipcCodes?.length,
  ].filter(Boolean).length;

  const completenessScore = Math.round(
    (innovationCompleteness / 6) * 100
  );

  const priorArtScore = clamp(100 - highestSimilarity);

  const readinessScore = Math.round(
    evidenceScore * 0.4 +
      priorArtScore * 0.3 +
      completenessScore * 0.3
  );

  let level = "Early Stage";

  if (readinessScore >= 80) {
    level = "Strong Preparation";
  } else if (readinessScore >= 60) {
    level = "Moderate Preparation";
  } else if (readinessScore >= 40) {
    level = "Developing";
  }

  return {
    score: clamp(readinessScore),
    level,
    evidenceScore,
    priorArtScore,
    completenessScore,
    highestSimilarity,
    disclaimer:
      "Preliminary readiness indicator based on the available demo data. It is not a legal opinion or a guarantee of patent grant.",
  };
}

export function getReadinessStatus(score = 0) {
  if (score >= 80) return "Ready for Professional Review";
  if (score >= 60) return "Needs Some Evidence";
  if (score >= 40) return "Needs Development";

  return "Early Stage";
}

export function getEvidenceStatus(value) {
  if (value === "Found") {
    return {
      label: "Found",
      score: 100,
      type: "success",
    };
  }

  if (value === "Partial") {
    return {
      label: "Partial",
      score: 50,
      type: "warning",
    };
  }

  return {
    label: "Missing",
    score: 0,
    type: "danger",
  };
}

export function getNextRecommendedStep({
  readinessScore = 0,
  evidence = {},
  similarityResults = [],
} = {}) {
  const missingEvidence = Object.entries(evidence)
    .filter(([, value]) => value === "Missing")
    .map(([key]) => key);

  if (missingEvidence.length > 0) {
    return "Complete the missing evidence and documentation.";
  }

  if (similarityResults.some((item) => item.score >= 70)) {
    return "Review high-similarity prior-art records with a patent professional.";
  }

  if (readinessScore < 60) {
    return "Strengthen the innovation description, evidence and technical documentation.";
  }

  return "Prepare the innovation dossier for professional IP review.";
}