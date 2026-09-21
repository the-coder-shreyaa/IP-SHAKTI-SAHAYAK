export const evidenceCategories = [
  {
    id: "traditionalKnowledge",
    title: "Traditional Knowledge Reference",
    description:
      "Classical Ayurveda or traditional knowledge references related to the innovation.",
    sourceType: "Knowledge",
  },
  {
    id: "priorArt",
    title: "Patent Prior Art",
    description:
      "Existing patent records and prior-art references identified during the search.",
    sourceType: "IP",
  },
  {
    id: "scientificEvidence",
    title: "Scientific Literature",
    description:
      "Research papers, clinical studies and scientific evidence supporting the innovation.",
    sourceType: "Research",
  },
  {
    id: "safetyEvidence",
    title: "Safety Evidence",
    description:
      "Available safety, toxicity, dosage or related supporting documentation.",
    sourceType: "Safety",
  },
  {
    id: "qualityStandardisation",
    title: "Quality / Standardisation",
    description:
      "Quality-control, standardisation, testing and manufacturing evidence.",
    sourceType: "Quality",
  },
  {
    id: "regulatoryInformation",
    title: "Regulatory Information",
    description:
      "Applicable AYUSH, product, manufacturing or regulatory information.",
    sourceType: "Compliance",
  },
  {
    id: "ipDocumentation",
    title: "IP Documentation",
    description:
      "Innovation records, inventor information, technical documentation and IP preparation.",
    sourceType: "IP",
  },
];

export const defaultEvidence = {
  traditionalKnowledge: "Found",
  priorArt: "Partial",
  scientificEvidence: "Partial",
  safetyEvidence: "Missing",
  qualityStandardisation: "Missing",
  regulatoryInformation: "Partial",
  ipDocumentation: "Partial",
};

export const evidenceStatusOptions = [
  {
    value: "Found",
    label: "Found",
    description: "Relevant evidence has been documented.",
  },
  {
    value: "Partial",
    label: "Partial",
    description: "Some supporting evidence is available.",
  },
  {
    value: "Missing",
    label: "Missing",
    description: "Evidence has not yet been added.",
  },
];

export const evidenceRecommendations = {
  traditionalKnowledge:
    "Add classical Ayurveda references, formulations or traditional knowledge sources.",
  priorArt:
    "Review the identified patent records and document relevant prior-art findings.",
  scientificEvidence:
    "Add relevant research papers, studies or experimental evidence.",
  safetyEvidence:
    "Add available safety, toxicity, dosage or related supporting documentation.",
  qualityStandardisation:
    "Document quality parameters, standardisation methods and testing information.",
  regulatoryInformation:
    "Review applicable AYUSH and product-specific regulatory requirements.",
  ipDocumentation:
    "Complete inventor, technical description and supporting IP documentation.",
};