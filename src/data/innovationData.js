export const emptyInnovation = {
  id: null,
  title: "",
  category: "",
  focus: "",
  description: "",
  problemStatement: "",
  therapeuticUse: "",
  ingredients: "",
  formulation: "",
  process: "",
  advantages: "",
  evidence: [],
  ipcCodes: [],
  status: "Draft",
  createdAt: null,
  updatedAt: null,
};

export const sampleInnovation = {
  id: "INN-001",
  title: "Herbal Digestive Wellness Formulation",
  category: "Herbal Formulation",
  focus: "New Formulation / Process",
  description:
    "A plant-based formulation concept focused on digestive wellness using selected herbal ingredients.",
  problemStatement:
    "Develop a standardised herbal formulation concept for digestive wellness with clearly documented ingredients and preparation methodology.",
  therapeuticUse: "Digestive wellness",
  ingredients: "Ashwagandha, botanical extracts, selected herbal ingredients",
  formulation:
    "Polyherbal formulation with defined ingredient proportions and preparation steps.",
  process:
    "Ingredient selection, cleaning, processing, extraction and formulation.",
  advantages:
    "Focus on standardisation, reproducibility and structured technical documentation.",
  evidence: [],
  ipcCodes: ["A61K 36/00"],
  status: "In Progress",
  createdAt: "2026-09-19",
  updatedAt: "2026-09-19",
};

export const innovationFocusOptions = [
  {
    value: "Discovery",
    label: "Knowledge Discovery",
    description:
      "Explore traditional knowledge and existing Ayurveda references.",
  },
  {
    value: "Research",
    label: "Research & Evidence",
    description:
      "Build scientific and experimental evidence around the innovation.",
  },
  {
    value: "IP",
    label: "IP & Patent Preparation",
    description:
      "Focus on prior art, similarity and preliminary IP readiness.",
  },
  {
    value: "Product",
    label: "Product Development",
    description:
      "Track formulation, quality, regulatory and commercialization work.",
  },
];

export const innovationStatuses = [
  "Draft",
  "In Progress",
  "Under Review",
  "Ready for Professional Review",
  "Completed",
];

export function createInnovation(overrides = {}) {
  const now = new Date().toISOString();

  return {
    ...emptyInnovation,
    ...overrides,
    id:
      overrides.id ||
      `INN-${Date.now().toString().slice(-6)}`,
    createdAt: overrides.createdAt || now,
    updatedAt: now,
  };
}

export function updateInnovation(innovation, changes = {}) {
  return {
    ...innovation,
    ...changes,
    updatedAt: new Date().toISOString(),
  };
}