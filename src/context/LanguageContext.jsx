import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  English: {
    dashboard: "Dashboard",
    home: "Home",
    innovationOverview: "Innovation Overview",
    innovationJourney: "Innovation Journey",
    innovationProfile: "Innovation Profile",
    priorArt: "Prior-Art Search",
    knowledge: "Knowledge Discovery",
    research: "Research & Evidence",
    similarity: "Similarity Analysis",
    evidenceGap: "Evidence Gap",
    ipReadiness: "IP Readiness",
    ipStrategy: "IP Strategy",
    patentPreparation: "Patent Preparation",
    preFiling: "Pre-Filing Checklist",
    dossier: "Innovation Dossier",
    expertReview: "Expert Review",
    roadmap: "Innovation Roadmap",
    monitoring: "Monitoring",

    aiInsights: "AI Insights",
    language: "Language",
    jurisdiction: "Jurisdiction",

    searchPlaceholder: "Search innovations, patents, evidence...",

    openStage: "Open Stage",
    continue: "Continue",
    currentStage: "Current Stage",
    completed: "Completed",
    upcoming: "Upcoming",

    activeWorkspace: "ACTIVE WORKSPACE",
    workspace: "WORKSPACE",
    journey: "JOURNEY",
    journeyProgress: "JOURNEY PROGRESS",
    innovationPipeline: "Innovation Pipeline",

    journeyProgressDescription:
      "From knowledge discovery to innovation protection and development.",

    platformName: "Ayurveda IP Discovery Platform",
  },

  "हिन्दी": {
    dashboard: "डैशबोर्ड",
    home: "होम",
    innovationOverview: "इनोवेशन ओवरव्यू",
    innovationJourney: "इनोवेशन जर्नी",
    innovationProfile: "इनोवेशन प्रोफाइल",
    priorArt: "पूर्व-कला खोज",
    knowledge: "ज्ञान खोज",
    research: "अनुसंधान और साक्ष्य",
    similarity: "समानता विश्लेषण",
    evidenceGap: "साक्ष्य अंतर",
    ipReadiness: "आईपी तैयारी",
    ipStrategy: "आईपी रणनीति",
    patentPreparation: "पेटेंट तैयारी",
    preFiling: "प्री-फाइलिंग चेकलिस्ट",
    dossier: "इनोवेशन डोजियर",
    expertReview: "विशेषज्ञ समीक्षा",
    roadmap: "इनोवेशन रोडमैप",
    monitoring: "निगरानी",

    aiInsights: "एआई इनसाइट्स",
    language: "भाषा",
    jurisdiction: "क्षेत्राधिकार",

    searchPlaceholder:
      "इनोवेशन, पेटेंट और साक्ष्य खोजें...",

    openStage: "स्टेज खोलें",
    continue: "आगे बढ़ें",
    currentStage: "वर्तमान स्टेज",
    completed: "पूर्ण",
    upcoming: "आगामी",

    activeWorkspace: "सक्रिय कार्यक्षेत्र",
    workspace: "वर्कस्पेस",
    journey: "जर्नी",
    journeyProgress: "जर्नी प्रोग्रेस",
    innovationPipeline: "इनोवेशन पाइपलाइन",

    journeyProgressDescription:
      "ज्ञान खोज से लेकर इनोवेशन सुरक्षा और विकास तक।",

    platformName:
      "आयुर्वेद आईपी डिस्कवरी प्लेटफॉर्म",
  },

  Hinglish: {
    dashboard: "Dashboard",
    home: "Home",
    innovationOverview: "Innovation Overview",
    innovationJourney: "Innovation Journey",
    innovationProfile: "Innovation Profile",
    priorArt: "Prior-Art Search",
    knowledge: "Knowledge Discovery",
    research: "Research & Evidence",
    similarity: "Similarity Analysis",
    evidenceGap: "Evidence Gap",
    ipReadiness: "IP Readiness",
    ipStrategy: "IP Strategy",
    patentPreparation: "Patent Preparation",
    preFiling: "Pre-Filing Checklist",
    dossier: "Innovation Dossier",
    expertReview: "Expert Review",
    roadmap: "Innovation Roadmap",
    monitoring: "Monitoring",

    aiInsights: "AI Insights",
    language: "Language",
    jurisdiction: "Jurisdiction",

    searchPlaceholder:
      "Innovation, patent, evidence search karo...",

    openStage: "Stage Open Karo",
    continue: "Aage Badho",
    currentStage: "Current Stage",
    completed: "Complete",
    upcoming: "Aane Wala",

    activeWorkspace: "ACTIVE WORKSPACE",
    workspace: "WORKSPACE",
    journey: "JOURNEY",
    journeyProgress: "JOURNEY PROGRESS",
    innovationPipeline: "Innovation Pipeline",

    journeyProgressDescription:
      "Knowledge discovery se innovation protection aur development tak.",

    platformName:
      "Ayurveda IP Discovery Platform",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("ip_language") || "English"
  );

  const changeLanguage = (value) => {
    setLanguage(value);
    localStorage.setItem("ip_language", value);

    window.dispatchEvent(
      new CustomEvent("ip-language-change", {
        detail: value,
      })
    );
  };

  const t = (key) => {
    return (
      translations[language]?.[key] ??
      translations.English?.[key] ??
      key
    );
  };

  useEffect(() => {
    localStorage.setItem("ip_language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}