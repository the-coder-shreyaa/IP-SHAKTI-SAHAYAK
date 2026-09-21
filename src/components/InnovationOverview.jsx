import React, { useState } from "react";
import {
  ArrowRight,
  Beaker,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Languages,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const innovationTypes = [
  "Product",
  "Formulation",
  "Process",
  "Ingredient",
  "Therapeutic Concept",
  "Other",
];

const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिन्दी" },
  { value: "hinglish", label: "Hinglish" },
];

const text = {
  en: {
    kicker: "INNOVATION OVERVIEW",
    title: "Define Your Ayurveda Innovation",
    subtitle:
      "Tell us about your idea. We will help you understand its IP, prior-art, traditional-knowledge and regulatory journey.",
    journey: "Your Innovation Journey",
    journeySub: "Move from your raw idea to evidence-grounded IP intelligence.",
    ready: "READY TO ANALYZE",
    step1: "Define",
    step1Sub: "Describe your idea",
    step2: "Discover",
    step2Sub: "Find related knowledge",
    step3: "Analyze",
    step3Sub: "Check IP & novelty signals",
    step4: "Protect",
    step4Sub: "Plan your IP journey",
    details: "Innovation Details",
    detailsSub: "Start with the basic information about your innovation.",
    name: "Innovation Name",
    namePlaceholder: "e.g. Herbal immunity formulation",
    type: "Innovation Type",
    typePlaceholder: "Select innovation type",
    description: "Describe Your Innovation",
    descriptionPlaceholder:
      "Describe your ingredients, formulation, process, use-case, or what makes your idea different...",
    focus: "Primary Focus",
    focusPlaceholder: "e.g. Immunity, digestion, skin care",
    ingredients: "Key Ingredients",
    ingredientsPlaceholder: "e.g. Ashwagandha, Tulsi, Amla",
    formulation: "Formulation / Process",
    formulationPlaceholder:
      "Briefly explain the formulation or preparation process",
    analyze: "Analyze My Innovation",
    analyzeSub:
      "Check your idea against existing knowledge and identify the next IP steps.",
    signals: "What We Will Check",
    signal1: "Prior Art",
    signal1Sub: "Related patents and existing innovations",
    signal2: "Traditional Knowledge",
    signal2Sub: "Possible overlap with documented Ayurveda knowledge",
    signal3: "IP Readiness",
    signal3Sub: "Initial signals for protection strategy",
    signal4: "Regulatory Path",
    signal4Sub: "Relevant compliance considerations",
    next: "What Happens Next?",
    nextSub: "Your innovation moves through a structured intelligence journey.",
    next1: "Discover",
    next1Sub: "Search related patents, products and knowledge.",
    next2: "Compare",
    next2Sub: "Compare your idea with existing records.",
    next3: "Assess",
    next3Sub: "Identify IP, evidence and regulatory gaps.",
    next4: "Protect",
    next4Sub: "Build a practical IP and commercialization path.",
    continue: "Start Analysis",
  },

  hi: {
    kicker: "इनोवेशन ओवरव्यू",
    title: "अपना आयुर्वेद इनोवेशन बताइए",
    subtitle:
      "अपने आइडिया की जानकारी दें। हम आपको IP, prior-art, traditional knowledge और regulatory journey समझने में मदद करेंगे।",
    journey: "आपकी इनोवेशन जर्नी",
    journeySub: "अपने आइडिया से IP intelligence तक आगे बढ़ें।",
    ready: "ANALYSIS READY",
    step1: "Define",
    step1Sub: "अपना आइडिया बताएं",
    step2: "Discover",
    step2Sub: "संबंधित जानकारी खोजें",
    step3: "Analyze",
    step3Sub: "IP और novelty signals देखें",
    step4: "Protect",
    step4Sub: "IP journey की योजना बनाएं",
    details: "इनोवेशन डिटेल्स",
    detailsSub: "अपने इनोवेशन की बेसिक जानकारी भरें।",
    name: "इनोवेशन नाम",
    namePlaceholder: "जैसे Herbal immunity formulation",
    type: "इनोवेशन प्रकार",
    typePlaceholder: "इनोवेशन प्रकार चुनें",
    description: "अपने इनोवेशन के बारे में बताएं",
    descriptionPlaceholder:
      "Ingredients, formulation, process, use-case या आपके आइडिया की खासियत बताएं...",
    focus: "मुख्य फोकस",
    focusPlaceholder: "जैसे Immunity, digestion, skin care",
    ingredients: "मुख्य Ingredients",
    ingredientsPlaceholder: "जैसे Ashwagandha, Tulsi, Amla",
    formulation: "Formulation / Process",
    formulationPlaceholder: "Formulation या preparation process बताएं",
    analyze: "मेरे Innovation का Analysis करें",
    analyzeSub:
      "Existing knowledge के साथ idea को compare करके अगले IP steps identify करें।",
    signals: "हम क्या Check करेंगे",
    signal1: "Prior Art",
    signal1Sub: "Related patents और existing innovations",
    signal2: "Traditional Knowledge",
    signal2Sub: "Documented Ayurveda knowledge से possible overlap",
    signal3: "IP Readiness",
    signal3Sub: "Protection strategy के initial signals",
    signal4: "Regulatory Path",
    signal4Sub: "Relevant compliance considerations",
    next: "इसके बाद क्या होगा?",
    nextSub: "आपका innovation एक structured intelligence journey से गुजरेगा।",
    next1: "Discover",
    next1Sub: "Related patents, products और knowledge खोजें।",
    next2: "Compare",
    next2Sub: "Existing records के साथ idea compare करें।",
    next3: "Assess",
    next3Sub: "IP, evidence और regulatory gaps identify करें।",
    next4: "Protect",
    next4Sub: "Practical IP और commercialization path बनाएं।",
    continue: "Analysis शुरू करें",
  },

  hinglish: {
    kicker: "INNOVATION OVERVIEW",
    title: "Apna Ayurveda Innovation Define Karo",
    subtitle:
      "Apne idea ke baare mein batao. Hum IP, prior-art, traditional knowledge aur regulatory journey ko samajhne mein help karenge.",
    journey: "Your Innovation Journey",
    journeySub: "Raw idea se evidence-grounded IP intelligence tak.",
    ready: "READY TO ANALYZE",
    step1: "Define",
    step1Sub: "Idea describe karo",
    step2: "Discover",
    step2Sub: "Related knowledge find karo",
    step3: "Analyze",
    step3Sub: "IP aur novelty signals check karo",
    step4: "Protect",
    step4Sub: "IP journey plan karo",
    details: "Innovation Details",
    detailsSub: "Apne innovation ki basic information fill karo.",
    name: "Innovation Name",
    namePlaceholder: "e.g. Herbal immunity formulation",
    type: "Innovation Type",
    typePlaceholder: "Innovation type select karo",
    description: "Describe Your Innovation",
    descriptionPlaceholder:
      "Ingredients, formulation, process, use-case ya idea mein kya different hai...",
    focus: "Primary Focus",
    focusPlaceholder: "e.g. Immunity, digestion, skin care",
    ingredients: "Key Ingredients",
    ingredientsPlaceholder: "e.g. Ashwagandha, Tulsi, Amla",
    formulation: "Formulation / Process",
    formulationPlaceholder:
      "Formulation ya preparation process briefly explain karo",
    analyze: "Analyze My Innovation",
    analyzeSub:
      "Existing knowledge ke against idea check karke next IP steps identify karo.",
    signals: "What We Will Check",
    signal1: "Prior Art",
    signal1Sub: "Related patents aur existing innovations",
    signal2: "Traditional Knowledge",
    signal2Sub: "Documented Ayurveda knowledge ke saath possible overlap",
    signal3: "IP Readiness",
    signal3Sub: "Protection strategy ke initial signals",
    signal4: "Regulatory Path",
    signal4Sub: "Relevant compliance considerations",
    next: "What Happens Next?",
    nextSub: "Innovation ek structured intelligence journey se move karega.",
    next1: "Discover",
    next1Sub: "Related patents, products aur knowledge search karo.",
    next2: "Compare",
    next2Sub: "Existing records ke saath idea compare karo.",
    next3: "Assess",
    next3Sub: "IP, evidence aur regulatory gaps identify karo.",
    next4: "Protect",
    next4Sub: "Practical IP aur commercialization path build karo.",
    continue: "Start Analysis",
  },
};

const steps = [
  ["01", Lightbulb, "step1", "step1Sub"],
  ["02", BookOpen, "step2", "step2Sub"],
  ["03", Target, "step3", "step3Sub"],
  ["04", ShieldCheck, "step4", "step4Sub"],
];

const signals = [
  ["01", BookOpen, "signal1", "signal1Sub"],
  ["02", FlaskConical, "signal2", "signal2Sub"],
  ["03", Target, "signal3", "signal3Sub"],
  ["04", ShieldCheck, "signal4", "signal4Sub"],
];

const nextSteps = [
  ["01", BookOpen, "next1", "next1Sub"],
  ["02", Target, "next2", "next2Sub"],
  ["03", FlaskConical, "next3", "next3Sub"],
  ["04", ShieldCheck, "next4", "next4Sub"],
];

export default function InnovationOverviewPage({
  innovation = {},
  onUpdateInnovation,
  onContinue,
}) {
  const [language, setLanguage] = useState("en");
  const t = text[language];

  const update = (field, value) => {
    onUpdateInnovation?.(field, value);
  };

  const canContinue =
    Boolean(innovation.name?.trim()) &&
    Boolean(innovation.type) &&
    Boolean(innovation.description?.trim());

  return (
    <>
      <style>{`
        .ios-page * {
          box-sizing: border-box;
        }

        .ios-page {
          width: 100%;
          min-height: 100%;
          padding: 28px;
          background: #f3f7f4 !important;
          color: #193d2c !important;
        }

        .ios-header {
          display: flex !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
          gap: 20px !important;
          margin-bottom: 24px !important;
        }

        .ios-kicker {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          color: #39845b !important;
          font-size: 11px !important;
          font-weight: 900 !important;
          letter-spacing: 1.5px !important;
        }

        .ios-kicker-line {
          width: 28px !important;
          height: 3px !important;
          background: #39845b !important;
          border-radius: 4px !important;
        }

        .ios-title {
          margin: 9px 0 7px !important;
          font-size: 32px !important;
          line-height: 1.15 !important;
          font-weight: 900 !important;
          color: #163b29 !important;
        }

        .ios-subtitle {
          margin: 0 !important;
          max-width: 780px !important;
          color: #687970 !important;
          font-size: 14px !important;
          line-height: 1.6 !important;
        }

        .ios-actions {
          display: flex !important;
          gap: 10px !important;
          align-items: center !important;
        }

        .ios-language {
          display: flex !important;
          align-items: center !important;
          gap: 7px !important;
          padding: 10px 13px !important;
          background: #fff !important;
          border: 2px solid #d6e4da !important;
          border-radius: 12px !important;
        }

        .ios-language select {
          border: 0 !important;
          outline: 0 !important;
          background: transparent !important;
          font-weight: 800 !important;
          color: #31533f !important;
        }

        .ios-live {
          padding: 11px 14px !important;
          background: #e5f5ea !important;
          border: 2px solid #c8e5d1 !important;
          border-radius: 12px !important;
          color: #287348 !important;
          font-size: 11px !important;
          font-weight: 900 !important;
        }

        /* MAIN BOX */

        .ios-box {
          background: #ffffff !important;
          border: 2px solid #d3e2d8 !important;
          border-radius: 22px !important;
          box-shadow: 0 8px 0 rgba(48, 105, 70, 0.04), 0 14px 30px rgba(28, 67, 45, 0.08) !important;
        }

        /* JOURNEY */

        .ios-journey {
          padding: 26px !important;
          margin-bottom: 24px !important;
        }

        .ios-section-head {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          gap: 15px !important;
          margin-bottom: 22px !important;
        }

        .ios-eyebrow {
          color: #3b8a5d !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          letter-spacing: 1.5px !important;
        }

        .ios-heading {
          margin: 6px 0 4px !important;
          color: #173d2b !important;
          font-size: 23px !important;
          font-weight: 900 !important;
        }

        .ios-description {
          margin: 0 !important;
          color: #718078 !important;
          font-size: 13px !important;
        }

        .ios-ready {
          padding: 9px 14px !important;
          border: 2px solid #c9e5d2 !important;
          border-radius: 999px !important;
          background: #eaf7ee !important;
          color: #287348 !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          white-space: nowrap !important;
        }

        .ios-step-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 14px !important;
        }

        .ios-step {
          min-height: 155px !important;
          padding: 18px !important;
          background: #f9fcfa !important;
          border: 2px solid #d6e5db !important;
          border-radius: 17px !important;
          box-shadow: 0 5px 0 #edf3ef !important;
        }

        .ios-step:hover {
          border-color: #8dbba0 !important;
          transform: translateY(-2px) !important;
        }

        .ios-step-top {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          margin-bottom: 17px !important;
        }

        .ios-number {
          width: 35px !important;
          height: 35px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #e2f1e7 !important;
          border: 2px solid #c6e1ce !important;
          border-radius: 10px !important;
          color: #287348 !important;
          font-size: 11px !important;
          font-weight: 900 !important;
        }

        .ios-icon {
          width: 43px !important;
          height: 43px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #ffffff !important;
          border: 2px solid #d8e7dd !important;
          border-radius: 12px !important;
          color: #3b895c !important;
        }

        .ios-step-title {
          display: block !important;
          margin-bottom: 6px !important;
          color: #193d2c !important;
          font-size: 16px !important;
          font-weight: 900 !important;
        }

        .ios-step-text {
          color: #718078 !important;
          font-size: 12px !important;
          line-height: 1.5 !important;
        }

        /* TWO COLUMN */

        .ios-columns {
          display: grid !important;
          grid-template-columns: minmax(0, 1.65fr) minmax(300px, .8fr) !important;
          gap: 24px !important;
          align-items: start !important;
        }

        /* DETAILS */

        .ios-details {
          padding: 26px !important;
        }

        .ios-card-head {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          margin-bottom: 23px !important;
        }

        .ios-card-icon {
          width: 45px !important;
          height: 45px !important;
          flex: 0 0 45px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #e5f4ea !important;
          border: 2px solid #c8e4d0 !important;
          border-radius: 12px !important;
          color: #328154 !important;
        }

        .ios-card-title {
          margin: 0 !important;
          color: #193d2c !important;
          font-size: 20px !important;
          font-weight: 900 !important;
        }

        .ios-card-sub {
          margin: 4px 0 0 !important;
          color: #77847c !important;
          font-size: 12px !important;
        }

        .ios-badge {
          margin-left: auto !important;
          padding: 7px 10px !important;
          background: #edf6f0 !important;
          border: 1px solid #d0e5d7 !important;
          border-radius: 999px !important;
          color: #397652 !important;
          font-size: 9px !important;
          font-weight: 900 !important;
        }

        .ios-form {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 16px !important;
        }

        .ios-field {
          padding: 14px !important;
          background: #f9fbfa !important;
          border: 2px solid #dce8e0 !important;
          border-radius: 14px !important;
        }

        .ios-field.full {
          grid-column: 1 / -1 !important;
        }

        .ios-field label {
          display: block !important;
          margin-bottom: 8px !important;
          color: #315741 !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: .5px !important;
        }

        .ios-field input,
        .ios-field select,
        .ios-field textarea {
          width: 100% !important;
          padding: 11px 12px !important;
          border: 2px solid #d6e2da !important;
          border-radius: 10px !important;
          background: #ffffff !important;
          outline: none !important;
          color: #294b38 !important;
          font-size: 13px !important;
          font-family: inherit !important;
        }

        .ios-field textarea {
          resize: vertical !important;
          min-height: 105px !important;
        }

        .ios-field input:focus,
        .ios-field select:focus,
        .ios-field textarea:focus {
          border-color: #62a67d !important;
          box-shadow: 0 0 0 3px #e7f4eb !important;
        }

        .ios-analyze {
          margin-top: 18px !important;
          padding: 17px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          gap: 16px !important;
          background: #eef7f1 !important;
          border: 2px solid #d0e5d7 !important;
          border-radius: 15px !important;
        }

        .ios-analyze strong {
          display: block !important;
          color: #204832 !important;
          font-size: 13px !important;
        }

        .ios-analyze span {
          display: block !important;
          margin-top: 4px !important;
          color: #718078 !important;
          font-size: 11px !important;
        }

        .ios-analyze button {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 12px 17px !important;
          border: 2px solid #276d45 !important;
          border-radius: 11px !important;
          background: #287348 !important;
          color: #ffffff !important;
          font-weight: 900 !important;
          cursor: pointer !important;
          white-space: nowrap !important;
        }

        .ios-analyze button:disabled {
          opacity: .45 !important;
          cursor: not-allowed !important;
        }

        /* SIGNALS */

        .ios-signals {
          padding: 24px !important;
        }

        .ios-signal-intro {
          display: flex !important;
          gap: 10px !important;
          padding: 13px !important;
          margin-bottom: 13px !important;
          background: #f0f7f2 !important;
          border: 2px solid #dbe9df !important;
          border-radius: 12px !important;
          color: #398158 !important;
        }

        .ios-signal-intro p {
          margin: 0 !important;
          color: #68776e !important;
          font-size: 11px !important;
          line-height: 1.5 !important;
        }

        .ios-signal {
          display: grid !important;
          grid-template-columns: 38px 1fr 25px !important;
          gap: 10px !important;
          align-items: center !important;
          padding: 13px !important;
          margin-bottom: 10px !important;
          background: #fbfcfb !important;
          border: 2px solid #dce8e0 !important;
          border-radius: 13px !important;
        }

        .ios-signal-icon {
          width: 36px !important;
          height: 36px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #eaf5ed !important;
          border: 1px solid #d0e6d7 !important;
          border-radius: 9px !important;
          color: #368158 !important;
        }

        .ios-signal strong {
          display: block !important;
          color: #284d38 !important;
          font-size: 12px !important;
        }

        .ios-signal span {
          display: block !important;
          margin-top: 3px !important;
          color: #7b867f !important;
          font-size: 10px !important;
          line-height: 1.35 !important;
        }

        .ios-signal-number {
          color: #9aaa9f !important;
          font-size: 10px !important;
          font-weight: 900 !important;
        }

        /* NEXT */

        .ios-next {
          padding: 26px !important;
          margin-top: 24px !important;
        }

        .ios-next-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 14px !important;
        }

        .ios-next-card {
          min-height: 175px !important;
          padding: 18px !important;
          background: #f9fcfa !important;
          border: 2px solid #d5e4db !important;
          border-radius: 17px !important;
          box-shadow: 0 5px 0 #edf3ef !important;
          display: flex !important;
          flex-direction: column !important;
        }

        .ios-next-top {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          margin-bottom: 15px !important;
        }

        .ios-next-body {
          flex: 1 !important;
        }

        .ios-next-body h3 {
          margin: 0 0 7px !important;
          color: #193d2c !important;
          font-size: 15px !important;
          font-weight: 900 !important;
        }

        .ios-next-body p {
          margin: 0 !important;
          color: #718078 !important;
          font-size: 11px !important;
          line-height: 1.5 !important;
        }

        .ios-next-arrow {
          margin-top: 13px !important;
          color: #39845b !important;
        }

        .ios-road {
          margin-top: 20px !important;
          padding: 14px 20px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 13px !important;
          background: #edf6f0 !important;
          border: 2px solid #d2e5d8 !important;
          border-radius: 13px !important;
          color: #397653 !important;
          font-size: 9px !important;
          font-weight: 900 !important;
          letter-spacing: 1px !important;
        }

        @media (max-width: 1000px) {
          .ios-columns {
            grid-template-columns: 1fr !important;
          }

          .ios-step-grid,
          .ios-next-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .ios-page {
            padding: 15px !important;
          }

          .ios-header {
            flex-direction: column !important;
          }

          .ios-actions {
            width: 100% !important;
          }

          .ios-step-grid,
          .ios-next-grid,
          .ios-form {
            grid-template-columns: 1fr !important;
          }

          .ios-field.full {
            grid-column: auto !important;
          }

          .ios-section-head {
            align-items: flex-start !important;
            flex-direction: column !important;
          }

          .ios-analyze {
            align-items: stretch !important;
            flex-direction: column !important;
          }
        }
      `}</style>

      <div className="ios-page">

        {/* HEADER */}
        <header className="ios-header">
          <div>
            <div className="ios-kicker">
              <span className="ios-kicker-line" />
              {t.kicker}
            </div>

            <h1 className="ios-title">{t.title}</h1>

            <p className="ios-subtitle">{t.subtitle}</p>
          </div>

          <div className="ios-actions">
            <div className="ios-language">
              <Languages size={16} color="#39845b" />

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {languages.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="ios-live">● LIVE INTELLIGENCE</div>
          </div>
        </header>


        {/* JOURNEY BOX */}
        <section className="ios-box ios-journey">
          <div className="ios-section-head">
            <div>
              <div className="ios-eyebrow">INNOVATION PATH</div>
              <h2 className="ios-heading">{t.journey}</h2>
              <p className="ios-description">{t.journeySub}</p>
            </div>

            <div className="ios-ready">● {t.ready}</div>
          </div>

          <div className="ios-step-grid">
            {steps.map(([number, Icon, titleKey, subKey]) => (
              <div className="ios-step" key={number}>
                <div className="ios-step-top">
                  <div className="ios-number">{number}</div>

                  <div className="ios-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <span className="ios-step-title">
                  {t[titleKey]}
                </span>

                <span className="ios-step-text">
                  {t[subKey]}
                </span>
              </div>
            ))}
          </div>
        </section>


        {/* DETAILS + SIGNALS */}
        <div className="ios-columns">

          <section className="ios-box ios-details">
            <div className="ios-card-head">
              <div className="ios-card-icon">
                <Sparkles size={21} />
              </div>

              <div>
                <h2 className="ios-card-title">{t.details}</h2>
                <p className="ios-card-sub">{t.detailsSub}</p>
              </div>

              <div className="ios-badge">STEP 01</div>
            </div>

            <div className="ios-form">

              <div className="ios-field">
                <label>{t.name}</label>
                <input
                  value={innovation.name || ""}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div className="ios-field">
                <label>{t.type}</label>

                <select
                  value={innovation.type || ""}
                  onChange={(e) => update("type", e.target.value)}
                >
                  <option value="">{t.typePlaceholder}</option>

                  {innovationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ios-field full">
                <label>{t.description}</label>

                <textarea
                  rows={5}
                  value={innovation.description || ""}
                  onChange={(e) =>
                    update("description", e.target.value)
                  }
                  placeholder={t.descriptionPlaceholder}
                />
              </div>

              <div className="ios-field">
                <label>{t.focus}</label>

                <input
                  value={innovation.focus || ""}
                  onChange={(e) => update("focus", e.target.value)}
                  placeholder={t.focusPlaceholder}
                />
              </div>

              <div className="ios-field">
                <label>{t.ingredients}</label>

                <input
                  value={innovation.ingredients || ""}
                  onChange={(e) =>
                    update("ingredients", e.target.value)
                  }
                  placeholder={t.ingredientsPlaceholder}
                />
              </div>

              <div className="ios-field full">
                <label>{t.formulation}</label>

                <textarea
                  rows={4}
                  value={innovation.formulation || ""}
                  onChange={(e) =>
                    update("formulation", e.target.value)
                  }
                  placeholder={t.formulationPlaceholder}
                />
              </div>

            </div>

            <div className="ios-analyze">
              <div>
                <strong>{t.analyze}</strong>
                <span>{t.analyzeSub}</span>
              </div>

              <button
                type="button"
                disabled={!canContinue}
                onClick={() => {
                  if (canContinue) onContinue?.();
                }}
              >
                <Sparkles size={17} />
                {t.continue}
                <ArrowRight size={17} />
              </button>
            </div>
          </section>


          {/* SIGNAL BOX */}
          <aside className="ios-box ios-signals">
            <div className="ios-card-head">
              <div className="ios-card-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h2 className="ios-card-title">
                  {t.signals}
                </h2>

                <p className="ios-card-sub">
                  AI-powered intelligence checks
                </p>
              </div>
            </div>

            <div className="ios-signal-intro">
              <Beaker size={18} />

              <p>
                Your innovation will be evaluated against structured
                IP and Ayurveda knowledge signals.
              </p>
            </div>

            {signals.map(
              ([number, Icon, titleKey, subKey]) => (
                <div className="ios-signal" key={number}>
                  <div className="ios-signal-icon">
                    <Icon size={17} />
                  </div>

                  <div>
                    <strong>{t[titleKey]}</strong>
                    <span>{t[subKey]}</span>
                  </div>

                  <div className="ios-signal-number">
                    {number}
                  </div>
                </div>
              )
            )}
          </aside>
        </div>


        {/* NEXT STEPS BOX */}
        <section className="ios-box ios-next">
          <div className="ios-section-head">
            <div>
              <div className="ios-eyebrow">YOUR NEXT MOVE</div>
              <h2 className="ios-heading">{t.next}</h2>
              <p className="ios-description">{t.nextSub}</p>
            </div>

            <div className="ios-ready">4 STEPS</div>
          </div>

          <div className="ios-next-grid">
            {nextSteps.map(
              ([number, Icon, titleKey, subKey]) => (
                <div className="ios-next-card" key={number}>
                  <div className="ios-next-top">
                    <div className="ios-number">
                      {number}
                    </div>

                    <div className="ios-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="ios-next-body">
                    <h3>{t[titleKey]}</h3>
                    <p>{t[subKey]}</p>
                  </div>

                  <div className="ios-next-arrow">
                    <ArrowRight size={18} />
                  </div>
                </div>
              )
            )}
          </div>

          <div className="ios-road">
            <span>IDEA</span>
            <ArrowRight size={15} />
            <span>EVIDENCE</span>
            <ArrowRight size={15} />
            <span>IP STRATEGY</span>
            <ArrowRight size={15} />
            <span>PROTECTION</span>
          </div>
        </section>

      </div>
    </>
  );
}