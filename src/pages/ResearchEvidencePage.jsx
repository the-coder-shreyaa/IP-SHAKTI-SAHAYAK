import { useState } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  FileText,
  FlaskConical,
  Activity,
  Microscope,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Database,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import StatusBadge from "../components/StatusBadge";

const researchRecords = [
  {
    id: "RE-001",
    title: "Clinical Evaluation of an Ayurvedic Herbal Formulation",
    source: "AYUSH Research Portal",
    type: "Clinical Research",
    evidence: "Clinical",
    level: "High",
    description:
      "Research record describing clinical evaluation of an Ayurvedic herbal intervention and its reported outcomes.",
    keywords: ["clinical", "herbal", "formulation", "ayurveda"],
  },
  {
    id: "RE-002",
    title: "Preclinical Evaluation of Botanical Extract",
    source: "AYUSH Research Record",
    type: "Pre-Clinical Research",
    evidence: "Pre-Clinical",
    level: "Moderate",
    description:
      "Preclinical research reference involving evaluation of a botanical extract and related experimental observations.",
    keywords: ["preclinical", "botanical", "extract", "herbal"],
  },
  {
    id: "RE-003",
    title: "Pharmacological Study of Herbal Ingredients",
    source: "Research Publication",
    type: "Drug Research",
    evidence: "Drug Research",
    level: "Moderate",
    description:
      "Research reference examining pharmacological properties and experimental findings associated with herbal ingredients.",
    keywords: ["drug", "pharmacological", "ingredient", "ashwagandha"],
  },
  {
    id: "RE-004",
    title: "Fundamental Research in Ayurveda",
    source: "Ayurveda Research Record",
    type: "Fundamental Research",
    evidence: "Fundamental",
    level: "Moderate",
    description:
      "Fundamental research record providing background evidence relevant to Ayurveda concepts and research.",
    keywords: ["fundamental", "ayurveda", "research", "traditional"],
  },
];

function ResearchEvidencePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredRecords = researchRecords.filter((record) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      record.title.toLowerCase().includes(query) ||
      record.description.toLowerCase().includes(query) ||
      record.source.toLowerCase().includes(query) ||
      record.type.toLowerCase().includes(query) ||
      record.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query)
      );

    const matchesCategory =
      category === "All Categories" ||
      record.type === category;

    return matchesSearch && matchesCategory;
  });

  const search = () => setHasSearched(true);

  const suggestion = (value) => {
    setSearchQuery(value);
    setHasSearched(true);
  };

  return (
    <main className="page-content research-evidence-page">

      <SectionHeader
        eyebrow="STAGE 03 • RESEARCH EVIDENCE"
        title="Research Evidence Explorer"
        description="Discover research evidence related to your Ayurveda innovation before moving toward IP assessment and protection."
        icon={BookOpen}
      />

      {/* JOURNEY */}
      <section className="re-journey-box">

        <div className="re-heading">
          <div>
            <span className="re-eyebrow">
              EVIDENCE INTELLIGENCE
            </span>

            <h2>Build the Evidence Behind Your Innovation</h2>

            <p>
              Search research records, identify relevant evidence and
              understand what research exists around your innovation.
            </p>
          </div>

          <div className="re-live">
            <span />
            EVIDENCE READY
          </div>
        </div>

        <div className="re-process">

          <div className="re-process-card active">
            <div className="re-number">01</div>
            <div className="re-icon">
              <Search size={19} />
            </div>
            <div>
              <strong>Search</strong>
              <span>Find research</span>
            </div>
          </div>

          <ArrowRight className="re-arrow" size={18} />

          <div className="re-process-card">
            <div className="re-number">02</div>
            <div className="re-icon">
              <FileText size={19} />
            </div>
            <div>
              <strong>Review</strong>
              <span>Read evidence</span>
            </div>
          </div>

          <ArrowRight className="re-arrow" size={18} />

          <div className="re-process-card">
            <div className="re-number">03</div>
            <div className="re-icon">
              <ShieldCheck size={19} />
            </div>
            <div>
              <strong>Assess</strong>
              <span>Identify evidence gaps</span>
            </div>
          </div>

          <ArrowRight className="re-arrow" size={18} />

          <div className="re-process-card">
            <div className="re-number">04</div>
            <div className="re-icon">
              <Sparkles size={19} />
            </div>
            <div>
              <strong>Apply</strong>
              <span>Use in IP journey</span>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="re-stats">

        <div className="re-stat">
          <div className="re-stat-icon">
            <Database size={20} />
          </div>
          <div>
            <strong>4</strong>
            <span>Research Types</span>
          </div>
          <small>Evidence categories</small>
        </div>

        <div className="re-stat">
          <div className="re-stat-icon">
            <Activity size={20} />
          </div>
          <div>
            <strong>Clinical</strong>
            <span>Human Research</span>
          </div>
          <small>Clinical evidence</small>
        </div>

        <div className="re-stat">
          <div className="re-stat-icon">
            <Microscope size={20} />
          </div>
          <div>
            <strong>Preclinical</strong>
            <span>Experimental Research</span>
          </div>
          <small>Laboratory evidence</small>
        </div>

        <div className="re-stat">
          <div className="re-stat-icon">
            <FlaskConical size={20} />
          </div>
          <div>
            <strong>Drug</strong>
            <span>Research Records</span>
          </div>
          <small>Pharmacological evidence</small>
        </div>

      </section>

      {/* SEARCH */}
      <section className="re-search-box">

        <div className="re-search-heading">

          <div className="re-heading-icon">
            <Search size={21} />
          </div>

          <div>
            <span className="re-eyebrow">
              RESEARCH SEARCH
            </span>

            <h2>Search Evidence for Your Innovation</h2>

            <p>
              Search by ingredient, formulation, therapeutic area,
              research topic or keyword.
            </p>
          </div>

          <div className="re-status">
            <span />
            SEARCH READY
          </div>

        </div>

        <div className="re-controls">

          <div className="re-input">

            <Search size={18} />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setHasSearched(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") search();
              }}
              placeholder="e.g. Ashwagandha clinical research..."
            />

            {searchQuery && (
              <button
                type="button"
                className="re-clear"
                onClick={() => {
                  setSearchQuery("");
                  setHasSearched(false);
                }}
              >
                ×
              </button>
            )}

          </div>

          <select
            className="re-filter"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setHasSearched(true);
            }}
          >
            <option>All Categories</option>
            <option>Clinical Research</option>
            <option>Pre-Clinical Research</option>
            <option>Drug Research</option>
            <option>Fundamental Research</option>
          </select>

          <button
            type="button"
            className="re-search-button"
            onClick={search}
          >
            <Search size={17} />
            Search Evidence
          </button>

        </div>

        <div className="re-hints">
          <span>Try searching:</span>

          <button
            type="button"
            onClick={() => suggestion("Ashwagandha")}
          >
            Ashwagandha
          </button>

          <button
            type="button"
            onClick={() => suggestion("Clinical")}
          >
            Clinical Research
          </button>

          <button
            type="button"
            onClick={() => suggestion("Herbal")}
          >
            Herbal Formulation
          </button>

          <button
            type="button"
            onClick={() => suggestion("Ayurveda")}
          >
            Ayurveda
          </button>
        </div>

      </section>

      {/* RESULTS */}
      <section className="re-results-box">

        <div className="re-results-heading">

          <div>
            <span className="re-eyebrow">
              {hasSearched
                ? "SEARCH RESULTS"
                : "EVIDENCE RECORDS"}
            </span>

            <h2>
              {hasSearched && searchQuery
                ? `Evidence for "${searchQuery}"`
                : "Relevant Research Evidence"}
            </h2>

            <p>
              Research records relevant to your innovation.
            </p>
          </div>

          <div className="re-count">
            <FileText size={15} />
            {filteredRecords.length} records found
          </div>

        </div>

        {filteredRecords.length > 0 ? (

          <div className="re-grid">

            {filteredRecords.map((record) => {

              const Icon =
                record.type === "Clinical Research"
                  ? Activity
                  : record.type === "Pre-Clinical Research"
                  ? Microscope
                  : record.type === "Drug Research"
                  ? FlaskConical
                  : BookOpen;

              return (
                <article
                  className="re-card"
                  key={record.id}
                >

                  <div className="re-card-top">

                    <div className="re-card-icon">
                      <Icon size={21} />
                    </div>

                    <StatusBadge
                      status={record.level}
                      tone={
                        record.level === "High"
                          ? "success"
                          : "warning"
                      }
                    />

                  </div>

                  <div className="re-id">
                    {record.id}
                  </div>

                  <h3>{record.title}</h3>

                  <div className="re-tags">
                    <span>{record.type}</span>
                    <span>{record.evidence}</span>
                  </div>

                  <p>{record.description}</p>

                  <div className="re-divider" />

                  <div className="re-footer">

                    <span>
                      <Database size={13} />
                      Research dataset
                    </span>

                    <button
                      type="button"
                      className="re-explore"
                      onClick={() => {
                        alert(
                          `${record.title}\n\nSource: ${record.source}\nType: ${record.type}`
                        );
                      }}
                    >
                      Explore
                      <ExternalLink size={14} />
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          <div className="re-empty">

            <div className="re-empty-icon">
              <Search size={25} />
            </div>

            <h3>No matching research found</h3>

            <p>
              Try another ingredient, research type or keyword.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCategory("All Categories");
                setHasSearched(false);
              }}
            >
              Clear Search
            </button>

          </div>

        )}

      </section>

      {/* EVIDENCE GAP */}
      <section className="re-gap-box">

        <div className="re-gap-icon">
          <Sparkles size={22} />
        </div>

        <div>
          <span className="re-eyebrow">
            EVIDENCE INTELLIGENCE
          </span>

          <h3>Research Evidence → Evidence Gap Analysis</h3>

          <p>
            Relevant research can help an innovator identify what
            evidence already exists and where additional research
            may still be needed.
          </p>
        </div>

        <div className="re-flow">
          <span>Research</span>
          <ArrowRight size={15} />
          <span>Evidence</span>
          <ArrowRight size={15} />
          <span>Gap Analysis</span>
        </div>

      </section>

      {/* NOTE */}
      <section className="re-note">

        <BookOpen size={17} />

        <div>
          <strong>Evidence Verification Note</strong>

          <p>
            Research records are intended for discovery and
            demonstration. Always review the original publication,
            methodology, source and study context before relying on
            research for scientific or IP decisions.
          </p>
        </div>

      </section>

      {/* CSS */}
      <style>{`

        .research-evidence-page {
          padding-bottom: 40px;
        }

        .re-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          color: #16835b;
          margin-bottom: 6px;
        }

        .re-journey-box,
        .re-search-box,
        .re-results-box,
        .re-gap-box,
        .re-note {
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 20px;
          box-shadow: 0 8px 28px rgba(25,72,52,.07);
        }

        .re-journey-box {
          padding: 25px;
          margin-top: 22px;
        }

        .re-heading,
        .re-search-heading,
        .re-results-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .re-heading h2,
        .re-search-heading h2,
        .re-results-heading h2 {
          margin: 0;
          color: #183c2d;
          font-size: 22px;
          font-weight: 800;
        }

        .re-heading p,
        .re-search-heading p,
        .re-results-heading p {
          margin: 7px 0 0;
          color: #718278;
          font-size: 13px;
          line-height: 1.6;
        }

        .re-live,
        .re-status {
          padding: 8px 12px;
          border-radius: 999px;
          background: #f0fbf5;
          border: 1px solid #bfe3d0;
          color: #16835b;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .re-live span,
        .re-status span {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20a568;
          margin-right: 7px;
        }

        .re-process {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          gap: 10px;
          align-items: center;
          margin-top: 23px;
        }

        .re-process-card {
          min-height: 82px;
          padding: 14px;
          border: 1px solid #e0e9e4;
          border-radius: 15px;
          background: #fbfdfc;
          display: grid;
          grid-template-columns: auto auto 1fr;
          gap: 11px;
          align-items: center;
        }

        .re-process-card.active {
          background: #f2fbf6;
          border-color: #8fd0b1;
        }

        .re-number {
          color: #96a69e;
          font-size: 10px;
          font-weight: 900;
        }

        .re-icon,
        .re-stat-icon,
        .re-card-icon,
        .re-heading-icon,
        .re-gap-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #18845c;
          background: #eaf7f0;
          border: 1px solid #d0ecdd;
          border-radius: 11px;
        }

        .re-icon {
          width: 38px;
          height: 38px;
        }

        .re-process-card strong,
        .re-process-card span {
          display: block;
        }

        .re-process-card strong {
          font-size: 13px;
          color: #244438;
        }

        .re-process-card span {
          margin-top: 3px;
          color: #7b8b83;
          font-size: 11px;
        }

        .re-arrow {
          color: #9aac9f;
        }

        .re-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
          margin: 18px 0;
        }

        .re-stat {
          padding: 17px;
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 16px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 11px;
        }

        .re-stat-icon {
          width: 42px;
          height: 42px;
        }

        .re-stat strong,
        .re-stat span,
        .re-stat small {
          display: block;
        }

        .re-stat strong {
          color: #173d2d;
          font-size: 18px;
        }

        .re-stat span {
          color: #54695f;
          font-size: 11px;
          font-weight: 700;
        }

        .re-stat small {
          grid-column: 2;
          color: #9aa9a1;
          font-size: 10px;
        }

        .re-search-box {
          padding: 25px;
          margin-bottom: 18px;
        }

        .re-search-heading {
          align-items: center;
        }

        .re-heading-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
        }

        .re-search-heading > div:nth-child(2) {
          flex: 1;
        }

        .re-controls {
          display: grid;
          grid-template-columns: 1fr 190px 180px;
          gap: 11px;
          margin-top: 22px;
        }

        .re-input {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 13px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          color: #7b8e84;
        }

        .re-input:focus-within {
          border-color: #42a875;
          box-shadow: 0 0 0 3px rgba(66,168,117,.10);
          background: #fff;
        }

        .re-input input {
          width: 100%;
          height: 46px;
          border: 0;
          outline: none;
          background: transparent;
          color: #243f33;
          font-size: 13px;
        }

        .re-input input::placeholder {
          color: #9aa8a1;
        }

        .re-clear {
          border: 0;
          background: transparent;
          color: #87978f;
          font-size: 20px;
          cursor: pointer;
        }

        .re-filter {
          min-height: 48px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          padding: 0 13px;
          color: #52665b;
          outline: none;
        }

        .re-search-button {
          border: 0;
          border-radius: 12px;
          background: #177d56;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
        }

        .re-search-button:hover {
          background: #126a48;
        }

        .re-hints {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 13px;
        }

        .re-hints span {
          color: #8b9992;
          font-size: 11px;
        }

        .re-hints button {
          border: 1px solid #d8e7df;
          background: #f7fbf9;
          color: #39705a;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 10px;
          cursor: pointer;
        }

        .re-results-box {
          padding: 25px;
        }

        .re-count {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #f0f8f4;
          border: 1px solid #d5e9de;
          color: #39715b;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .re-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .re-card {
          padding: 18px;
          border: 1px solid #dce8e1;
          border-radius: 16px;
          background: #fcfefd;
          transition: .2s;
        }

        .re-card:hover {
          transform: translateY(-2px);
          border-color: #a9d7be;
          box-shadow: 0 10px 24px rgba(25,72,52,.08);
        }

        .re-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .re-card-icon {
          width: 42px;
          height: 42px;
        }

        .re-id {
          margin-top: 17px;
          color: #94a39b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .1em;
        }

        .re-card h3 {
          margin: 5px 0 10px;
          color: #234538;
          font-size: 16px;
        }

        .re-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .re-tags span {
          padding: 5px 8px;
          border-radius: 999px;
          background: #edf7f2;
          color: #39725a;
          font-size: 9px;
          font-weight: 700;
        }

        .re-card p {
          margin: 13px 0;
          color: #718178;
          font-size: 12px;
          line-height: 1.65;
        }

        .re-divider {
          height: 1px;
          background: #e5eee9;
        }

        .re-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
        }

        .re-footer span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #99a69f;
          font-size: 10px;
        }

        .re-explore {
          border: 0;
          background: transparent;
          color: #16835b;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .re-empty {
          margin-top: 20px;
          padding: 45px 20px;
          text-align: center;
          border: 1px dashed #cdded5;
          border-radius: 16px;
          background: #fbfdfc;
        }

        .re-empty-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 12px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf7f2;
          color: #16835b;
        }

        .re-empty h3 {
          margin: 0;
          color: #284b3c;
          font-size: 15px;
        }

        .re-empty p {
          color: #7b8982;
          font-size: 12px;
        }

        .re-empty button {
          border: 1px solid #b9dcca;
          background: #f1faf5;
          color: #167950;
          padding: 8px 13px;
          border-radius: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .re-gap-box {
          margin-top: 18px;
          padding: 19px 22px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg,#f4fbf7,#fff);
        }

        .re-gap-icon {
          width: 46px;
          height: 46px;
        }

        .re-gap-box h3 {
          margin: 0;
          color: #214737;
          font-size: 15px;
        }

        .re-gap-box p {
          margin: 5px 0 0;
          color: #73837b;
          font-size: 11px;
          line-height: 1.55;
        }

        .re-flow {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #47715f;
          font-size: 10px;
          font-weight: 800;
        }

        .re-flow span {
          padding: 7px 9px;
          background: #edf7f2;
          border-radius: 8px;
        }

        .re-note {
          margin-top: 14px;
          padding: 14px 17px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          background: #fbfcfb;
          box-shadow: none;
          color: #8b9891;
        }

        .re-note strong {
          display: block;
          color: #607169;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .re-note p {
          margin: 0;
          font-size: 10px;
          line-height: 1.55;
        }

        @media (max-width:1050px) {
          .re-process {
            grid-template-columns: 1fr 1fr;
          }

          .re-arrow {
            display: none;
          }

          .re-stats {
            grid-template-columns: 1fr 1fr;
          }

          .re-controls {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width:720px) {
          .re-grid,
          .re-stats {
            grid-template-columns: 1fr;
          }

          .re-heading,
          .re-search-heading,
          .re-results-heading {
            flex-direction: column;
          }

          .re-gap-box {
            grid-template-columns: auto 1fr;
          }

          .re-flow {
            grid-column: 1 / -1;
          }
        }

      `}</style>
    </main>
  );
}

export default ResearchEvidencePage;