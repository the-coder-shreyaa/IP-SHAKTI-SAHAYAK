export const patentRecords = [
  {
    id: "PAT-001",
    publicationNumber: "IN-DEMO-001",
    title: "Herbal formulation for digestive wellness",
    applicant: "Demo Innovation Labs",
    inventors: ["Research Team"],
    jurisdiction: "India",
    filingDate: "2021-04-18",
    publicationDate: "2022-10-27",
    status: "Published",
    source: "Demo Dataset",
    ipcCodes: ["A61K 36/00"],
    keywords: [
      "herbal formulation",
      "digestive",
      "ayurveda",
    ],
    abstract:
      "Illustrative patent record representing a plant-based formulation and its preparation process for digestive wellness applications.",
  },

  {
    id: "PAT-002",
    publicationNumber: "IN-DEMO-002",
    title: "Polyherbal composition and preparation method",
    applicant: "Traditional Health Research Group",
    inventors: ["R&D Division"],
    jurisdiction: "India",
    filingDate: "2020-08-11",
    publicationDate: "2022-02-17",
    status: "Published",
    source: "Demo Dataset",
    ipcCodes: ["A61K 36/00", "A61P 1/00"],
    keywords: [
      "polyherbal",
      "composition",
      "preparation",
      "plant extract",
    ],
    abstract:
      "Illustrative patent record describing a multi-herb composition and a preparation process for a defined healthcare application.",
  },

  {
    id: "PAT-003",
    publicationNumber: "IN-DEMO-003",
    title: "Standardised botanical extract formulation",
    applicant: "Herbal Research Institute",
    inventors: ["Innovation Unit"],
    jurisdiction: "India",
    filingDate: "2019-06-04",
    publicationDate: "2021-12-09",
    status: "Granted",
    source: "Demo Dataset",
    ipcCodes: ["A61K 36/00"],
    keywords: [
      "botanical extract",
      "standardisation",
      "herbal",
    ],
    abstract:
      "Illustrative patent record concerning standardisation of a botanical extract and its use in a formulated product.",
  },

  {
    id: "PAT-004",
    publicationNumber: "IN-DEMO-004",
    title: "Ayurvedic topical herbal composition",
    applicant: "Ayurveda Product Research Centre",
    inventors: ["Product Development Team"],
    jurisdiction: "India",
    filingDate: "2022-01-22",
    publicationDate: "2023-08-03",
    status: "Published",
    source: "Demo Dataset",
    ipcCodes: ["A61K 36/00", "A61Q 19/00"],
    keywords: [
      "topical",
      "herbal composition",
      "ayurvedic",
      "skin",
    ],
    abstract:
      "Illustrative patent record for a topical plant-based composition and its intended application.",
  },

  {
    id: "PAT-005",
    publicationNumber: "IN-DEMO-005",
    title: "Process for preparing a plant-based therapeutic formulation",
    applicant: "Natural Products Innovation Centre",
    inventors: ["Process Research Team"],
    jurisdiction: "India",
    filingDate: "2018-11-14",
    publicationDate: "2020-05-21",
    status: "Granted",
    source: "Demo Dataset",
    ipcCodes: ["A61K 36/00", "A61K 9/00"],
    keywords: [
      "plant based",
      "therapeutic",
      "formulation process",
      "extraction",
    ],
    abstract:
      "Illustrative patent record describing a preparation process involving plant-derived materials.",
  },
];

export const patentSearchFields = [
  {
    id: "keyword",
    label: "Keyword",
    placeholder: "e.g. Ashwagandha formulation",
  },
  {
    id: "ingredient",
    label: "Ingredient",
    placeholder: "e.g. Ashwagandha",
  },
  {
    id: "application",
    label: "Application / Use",
    placeholder: "e.g. digestive wellness",
  },
  {
    id: "ipc",
    label: "IPC / CPC",
    placeholder: "e.g. A61K",
  },
];

export const patentStatuses = [
  "All",
  "Published",
  "Granted",
  "Pending",
];

export const patentSources = [
  "Demo Dataset",
  "IP India",
  "EPO",
  "Authorized API",
];

export const similarityWeights = {
  ingredients: 30,
  formulation: 25,
  therapeuticUse: 20,
  abstract: 15,
  classification: 10,
};
