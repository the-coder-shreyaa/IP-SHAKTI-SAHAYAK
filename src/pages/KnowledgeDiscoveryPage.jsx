import { useState } from "react";
import {
  BookOpen,
  ExternalLink,
  FileText,
  Search,
  Sparkles,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Database,
  ArrowRight,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import StatusBadge from "../components/StatusBadge";

const knowledgeRecords = [
  {
    id: "TK-001",
    title: "Classical Herbal Formulation Reference",
    source: "Classical Ayurveda Reference",
    type: "Formulation",
    relevance: "High",
    keywords: ["herbal", "formulation", "ashwagandha", "ayurveda"],
    description:
      "Reference record for a traditional herbal formulation and its documented ingredients and preparation context.",
  },
  {
    id: "TK-002",
    title: "Traditional Digestive Wellness Knowledge",
    source: "Traditional Knowledge Record",
    type: "Therapeutic Use",
    relevance: "High",
    keywords: ["digestive", "digestion", "amla", "herbal", "wellness"],
    description:
      "Traditional-use reference related to digestive wellness and plant-based ingredients.",
  },
  {
    id: "TK-003",
    title: "Botanical Preparation Method",
    source: "Ayurveda Knowledge Record",
    type: "Preparation",
    relevance: "Moderate",
    keywords: ["preparation", "botanical", "herbal", "process"],
    description:
      "Reference describing a traditional preparation approach involving botanical materials.",
  },
  {
    id: "TK-004",
    title: "Herbal Ingredient Profile",
    source: "Traditional Knowledge Record",
    type: "Ingredient",
    relevance: "Moderate",
    keywords: ["ingredient", "ashwagandha", "tulsi", "amla", "herbal"],
    description:
      "Structured knowledge record containing traditional context and use information for herbal ingredients.",
  },
];

function KnowledgeDiscoveryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredRecords = knowledgeRecords.filter((record) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      record.title.toLowerCase().includes(query) ||
      record.description.toLowerCase().includes(query) ||
      record.type.toLowerCase().includes(query) ||
      record.source.toLowerCase().includes(query) ||
      record.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query)
      );

    const matchesCategory =
      selectedCategory === "All Categories" ||
      record.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSearch = () => {
    setHasSearched(true);
  };

  const handleSuggestion = (value) => {
    setSearchQuery(value);
    setHasSearched(true);
  };

  return (
    <main className="page-content knowledge-discovery-page">

      {/* PAGE HEADER */}
      <SectionHeader
        eyebrow="STAGE 02 • KNOWLEDGE DISCOVERY"
        title="Traditional Knowledge Explorer"
        description="Explore classical Ayurveda and traditional knowledge references before assessing scientific evidence and prior art."
        icon={BookOpen}
      />

      {/* DISCOVERY JOURNEY */}
      <section className="kd-journey-box">
        <div className="kd-journey-heading">
          <div>
            <span className="kd-eyebrow">
              AYURVEDA KNOWLEDGE INTELLIGENCE
            </span>

            <h2>Discover Before You Decide</h2>

            <p>
              Search your Ayurveda innovation against structured
              traditional knowledge records and identify relevant
              references before moving to IP assessment.
            </p>
          </div>

          <div className="kd-live-badge">
            <span />
            KNOWLEDGE INTELLIGENCE
          </div>
        </div>

        <div className="kd-process">

          <div className="kd-process-card active">
            <div className="kd-number">01</div>

            <div className="kd-process-icon">
              <Search size={20} />
            </div>

            <div>
              <strong>Discover</strong>
              <span>Search related knowledge</span>
            </div>
          </div>

          <ArrowRight className="kd-process-arrow" size={18} />

          <div className="kd-process-card">
            <div className="kd-number">02</div>

            <div className="kd-process-icon">
              <FileText size={20} />
            </div>

            <div>
              <strong>Compare</strong>
              <span>Compare existing records</span>
            </div>
          </div>

          <ArrowRight className="kd-process-arrow" size={18} />

          <div className="kd-process-card">
            <div className="kd-number">03</div>

            <div className="kd-process-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <strong>Assess</strong>
              <span>Identify possible overlap</span>
            </div>
          </div>

          <ArrowRight className="kd-process-arrow" size={18} />

          <div className="kd-process-card">
            <div className="kd-number">04</div>

            <div className="kd-process-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <strong>Apply</strong>
              <span>Use insights for IP journey</span>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="kd-stats-grid">

        <div className="kd-stat-card">
          <div className="kd-stat-icon">
            <Database size={21} />
          </div>

          <div>
            <strong>2,480+</strong>
            <span>Knowledge Records</span>
          </div>

          <small>Structured demo dataset</small>
        </div>

        <div className="kd-stat-card">
          <div className="kd-stat-icon">
            <BookOpen size={21} />
          </div>

          <div>
            <strong>7</strong>
            <span>Knowledge Categories</span>
          </div>

          <small>Ayurveda domains</small>
        </div>

        <div className="kd-stat-card">
          <div className="kd-stat-icon">
            <Leaf size={21} />
          </div>

          <div>
            <strong>24</strong>
            <span>Active Innovations</span>
          </div>

          <small>Currently exploring</small>
        </div>

        <div className="kd-stat-card">
          <div className="kd-stat-icon">
            <ShieldCheck size={21} />
          </div>

          <div>
            <strong>4</strong>
            <span>Intelligence Signals</span>
          </div>

          <small>Discovery checks</small>
        </div>

      </section>

      {/* SEARCH PANEL */}
      <section className="kd-search-box">

        <div className="kd-section-heading">

          <div className="kd-heading-icon">
            <Search size={21} />
          </div>

          <div>
            <span className="kd-eyebrow">
              DISCOVERY SEARCH
            </span>

            <h2>Search Your Ayurveda Innovation</h2>

            <p>
              Enter your idea, ingredient, formulation,
              therapeutic use or preparation method.
            </p>
          </div>

          <div className="kd-search-status">
            <span />
            SEARCH READY
          </div>

        </div>

        {/* ACTUAL WORKING SEARCH */}
        <div className="kd-search-controls">

          <div className="kd-search-input">

            <Search size={18} />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setHasSearched(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="e.g. Herbal digestive formulation with Amla..."
            />

            {searchQuery && (
              <button
                type="button"
                className="kd-clear"
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
            className="kd-filter"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setHasSearched(true);
            }}
          >
            <option>All Categories</option>
            <option>Formulation</option>
            <option>Ingredient</option>
            <option>Therapeutic Use</option>
            <option>Preparation</option>
          </select>

          <button
            type="button"
            className="kd-search-button"
            onClick={handleSearch}
          >
            <Search size={17} />
            Search Knowledge
          </button>

        </div>

        {/* SEARCH SUGGESTIONS */}
        <div className="kd-search-hints">
          <span>Try searching:</span>

          <button
            type="button"
            onClick={() => handleSuggestion("Ashwagandha")}
          >
            Ashwagandha
          </button>

          <button
            type="button"
            onClick={() =>
              handleSuggestion("Digestive formulation")
            }
          >
            Digestive formulation
          </button>

          <button
            type="button"
            onClick={() =>
              handleSuggestion("Herbal preparation")
            }
          >
            Herbal preparation
          </button>

          <button
            type="button"
            onClick={() => handleSuggestion("Amla")}
          >
            Amla
          </button>
        </div>

      </section>

      {/* RESULTS */}
      <section className="kd-results-box">

        <div className="kd-results-header">

          <div>
            <span className="kd-eyebrow">
              {hasSearched
                ? "SEARCH RESULTS"
                : "DISCOVERY RESULTS"}
            </span>

            <h2>
              {hasSearched && searchQuery
                ? `Results for "${searchQuery}"`
                : "Relevant Knowledge Records"}
            </h2>

            <p>
              {hasSearched
                ? "Records matching your innovation search."
                : "Existing knowledge records available for discovery."}
            </p>
          </div>

          <div className="kd-result-pill">
            <FileText size={15} />
            {filteredRecords.length} records found
          </div>

        </div>

        {filteredRecords.length > 0 ? (
          <div className="kd-results-grid">

            {filteredRecords.map((record) => {

              const Icon =
                record.type === "Formulation"
                  ? FlaskConical
                  : record.type === "Ingredient"
                  ? Leaf
                  : record.type === "Preparation"
                  ? BookOpen
                  : FileText;

              return (
                <article
                  className="kd-record-card"
                  key={record.id}
                >

                  <div className="kd-record-top">

                    <div className="kd-record-icon">
                      <Icon size={21} />
                    </div>

                    <StatusBadge
                      status={record.relevance}
                      tone={
                        record.relevance === "High"
                          ? "success"
                          : "warning"
                      }
                    />

                  </div>

                  <div className="kd-record-id">
                    {record.id}
                  </div>

                  <h3>{record.title}</h3>

                  <div className="kd-tags">
                    <span>{record.type}</span>
                    <span>{record.source}</span>
                  </div>

                  <p>{record.description}</p>

                  <div className="kd-record-divider" />

                  <div className="kd-record-footer">

                    <span>
                      <Database size={13} />
                      Demo knowledge dataset
                    </span>

                    <button
                      type="button"
                      className="kd-explore"
                      onClick={() => {
                        alert(
                          `${record.title}\n\nSource: ${record.source}\nType: ${record.type}\nRelevance: ${record.relevance}`
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

          <div className="kd-no-results">

            <div className="kd-no-results-icon">
              <Search size={25} />
            </div>

            <h3>No matching knowledge records found</h3>

            <p>
              Try a different ingredient, formulation,
              therapeutic use or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
                setHasSearched(false);
              }}
            >
              Clear Search
            </button>

          </div>

        )}

      </section>

      {/* INTELLIGENCE */}
      <section className="kd-intelligence-box">

        <div className="kd-intelligence-icon">
          <Sparkles size={22} />
        </div>

        <div>

          <span className="kd-eyebrow">
            WHY THIS MATTERS
          </span>

          <h3>
            Knowledge Discovery → IP Intelligence
          </h3>

          <p>
            Discovering existing traditional knowledge helps
            innovators understand possible overlaps before moving
            to prior-art, evidence and IP assessment.
          </p>

        </div>

        <div className="kd-intelligence-flow">
          <span>Knowledge</span>
          <ArrowRight size={15} />
          <span>Compare</span>
          <ArrowRight size={15} />
          <span>Assess</span>
        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="kd-disclaimer">

        <BookOpen size={17} />

        <div>
          <strong>Source & Verification Note</strong>

          <p>
            Knowledge records shown here are structured
            demonstration data. Classical references and
            traditional-knowledge information should be verified
            against authoritative sources before research or IP
            decisions.
          </p>
        </div>

      </section>

      {/* PAGE CSS */}
      <style>{`

        .knowledge-discovery-page {
          padding-bottom: 40px;
        }

        .kd-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          color: #16835b;
          margin-bottom: 6px;
        }

        .kd-journey-box,
        .kd-search-box,
        .kd-results-box,
        .kd-intelligence-box,
        .kd-disclaimer {
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 20px;
          box-shadow: 0 8px 28px rgba(25,72,52,.07);
        }

        .kd-journey-box {
          padding: 25px;
          margin-top: 22px;
        }

        .kd-journey-heading,
        .kd-section-heading,
        .kd-results-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .kd-journey-heading h2,
        .kd-section-heading h2,
        .kd-results-header h2 {
          margin: 0;
          color: #183c2d;
          font-size: 22px;
          font-weight: 800;
        }

        .kd-journey-heading p,
        .kd-section-heading p,
        .kd-results-header p {
          margin: 7px 0 0;
          color: #718278;
          font-size: 13px;
          line-height: 1.6;
        }

        .kd-live-badge,
        .kd-search-status {
          border: 1px solid #bfe3d0;
          background: #f0fbf5;
          color: #16835b;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          white-space: nowrap;
        }

        .kd-live-badge span,
        .kd-search-status span {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20a568;
          margin-right: 7px;
        }

        .kd-process {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 10px;
          margin-top: 23px;
        }

        .kd-process-card {
          min-height: 82px;
          padding: 14px;
          border: 1px solid #e0e9e4;
          border-radius: 15px;
          background: #fbfdfc;
          display: grid;
          grid-template-columns: auto auto 1fr;
          align-items: center;
          gap: 11px;
        }

        .kd-process-card.active {
          border-color: #8fd0b1;
          background: #f2fbf6;
        }

        .kd-number {
          font-size: 10px;
          font-weight: 900;
          color: #96a69e;
        }

        .kd-process-icon,
        .kd-stat-icon,
        .kd-record-icon,
        .kd-heading-icon,
        .kd-intelligence-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #18845c;
          background: #eaf7f0;
          border: 1px solid #d0ecdd;
          border-radius: 11px;
        }

        .kd-process-icon {
          width: 38px;
          height: 38px;
        }

        .kd-process-card strong,
        .kd-process-card span {
          display: block;
        }

        .kd-process-card strong {
          font-size: 13px;
          color: #244438;
        }

        .kd-process-card span {
          font-size: 11px;
          color: #7b8b83;
          margin-top: 3px;
        }

        .kd-process-arrow {
          color: #9aac9f;
        }

        .kd-stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
          margin: 18px 0;
        }

        .kd-stat-card {
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 16px;
          padding: 17px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 11px;
          box-shadow: 0 6px 20px rgba(25,72,52,.045);
        }

        .kd-stat-icon {
          width: 42px;
          height: 42px;
        }

        .kd-stat-card strong,
        .kd-stat-card span,
        .kd-stat-card small {
          display: block;
        }

        .kd-stat-card strong {
          color: #173d2d;
          font-size: 21px;
        }

        .kd-stat-card span {
          color: #54695f;
          font-size: 12px;
          font-weight: 700;
        }

        .kd-stat-card small {
          grid-column: 2;
          color: #9aa9a1;
          font-size: 10px;
        }

        .kd-search-box {
          padding: 25px;
          margin-bottom: 18px;
        }

        .kd-heading-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
        }

        .kd-section-heading {
          align-items: center;
        }

        .kd-section-heading > div:nth-child(2) {
          flex: 1;
        }

        .kd-search-controls {
          display: grid;
          grid-template-columns: 1fr 190px 180px;
          gap: 11px;
          margin-top: 22px;
        }

        .kd-search-input {
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

        .kd-search-input:focus-within {
          border-color: #42a875;
          box-shadow: 0 0 0 3px rgba(66,168,117,.10);
          background: #fff;
        }

        .kd-search-input input {
          width: 100%;
          height: 46px;
          border: 0;
          outline: none;
          background: transparent;
          color: #243f33;
          font-size: 13px;
        }

        .kd-search-input input::placeholder {
          color: #9aa8a1;
        }

        .kd-clear {
          border: 0;
          background: transparent;
          color: #87978f;
          font-size: 20px;
          cursor: pointer;
          padding: 2px 5px;
        }

        .kd-filter {
          min-height: 48px;
          padding: 0 13px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          color: #52665b;
          outline: none;
          cursor: pointer;
        }

        .kd-search-button {
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
          transition: .18s;
        }

        .kd-search-button:hover {
          background: #126a48;
          transform: translateY(-1px);
        }

        .kd-search-hints {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 13px;
        }

        .kd-search-hints > span {
          color: #8b9992;
          font-size: 11px;
        }

        .kd-search-hints button {
          border: 1px solid #d8e7df;
          background: #f7fbf9;
          color: #39705a;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 10px;
          cursor: pointer;
          transition: .15s;
        }

        .kd-search-hints button:hover {
          border-color: #8bc9a8;
          background: #eaf7f0;
        }

        .kd-results-box {
          padding: 25px;
        }

        .kd-result-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f0f8f4;
          border: 1px solid #d5e9de;
          color: #39715b;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .kd-results-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .kd-record-card {
          border: 1px solid #dce8e1;
          border-radius: 16px;
          padding: 18px;
          background: #fcfefd;
          transition: .2s ease;
        }

        .kd-record-card:hover {
          transform: translateY(-2px);
          border-color: #a9d7be;
          box-shadow: 0 10px 24px rgba(25,72,52,.08);
        }

        .kd-record-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .kd-record-icon {
          width: 42px;
          height: 42px;
        }

        .kd-record-id {
          color: #94a39b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .1em;
          margin-top: 17px;
        }

        .kd-record-card h3 {
          margin: 5px 0 10px;
          color: #234538;
          font-size: 16px;
        }

        .kd-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .kd-tags span {
          border-radius: 999px;
          padding: 5px 8px;
          background: #edf7f2;
          color: #39725a;
          font-size: 9px;
          font-weight: 700;
        }

        .kd-record-card p {
          color: #718178;
          font-size: 12px;
          line-height: 1.65;
          margin: 13px 0;
        }

        .kd-record-divider {
          height: 1px;
          background: #e5eee9;
        }

        .kd-record-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
        }

        .kd-record-footer > span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #99a69f;
          font-size: 10px;
        }

        .kd-explore {
          display: flex;
          align-items: center;
          gap: 5px;
          border: 0;
          background: transparent;
          color: #16835b;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .kd-no-results {
          margin-top: 20px;
          padding: 45px 20px;
          text-align: center;
          border: 1px dashed #cdded5;
          border-radius: 16px;
          background: #fbfdfc;
        }

        .kd-no-results-icon {
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

        .kd-no-results h3 {
          margin: 0;
          color: #284b3c;
          font-size: 15px;
        }

        .kd-no-results p {
          color: #7b8982;
          font-size: 12px;
          margin: 7px 0 14px;
        }

        .kd-no-results button {
          border: 1px solid #b9dcca;
          background: #f1faf5;
          color: #167950;
          padding: 8px 13px;
          border-radius: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .kd-intelligence-box {
          margin-top: 18px;
          padding: 19px 22px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg,#f4fbf7,#fff);
        }

        .kd-intelligence-icon {
          width: 46px;
          height: 46px;
        }

        .kd-intelligence-box h3 {
          margin: 0;
          color: #214737;
          font-size: 15px;
        }

        .kd-intelligence-box p {
          margin: 5px 0 0;
          color: #73837b;
          font-size: 11px;
          line-height: 1.55;
        }

        .kd-intelligence-flow {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #47715f;
          font-size: 10px;
          font-weight: 800;
        }

        .kd-intelligence-flow span {
          padding: 7px 9px;
          background: #edf7f2;
          border-radius: 8px;
        }

        .kd-disclaimer {
          margin-top: 14px;
          padding: 14px 17px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #8b9891;
          background: #fbfcfb;
          box-shadow: none;
        }

        .kd-disclaimer > svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .kd-disclaimer strong {
          display: block;
          color: #607169;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .kd-disclaimer p {
          margin: 0;
          font-size: 10px;
          line-height: 1.55;
        }

        @media (max-width: 1050px) {
          .kd-process {
            grid-template-columns: 1fr 1fr;
          }

          .kd-process-arrow {
            display: none;
          }

          .kd-stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .kd-search-controls {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .kd-results-grid,
          .kd-stats-grid {
            grid-template-columns: 1fr;
          }

          .kd-journey-heading,
          .kd-results-header,
          .kd-section-heading {
            flex-direction: column;
          }

          .kd-intelligence-box {
            grid-template-columns: auto 1fr;
          }

          .kd-intelligence-flow {
            grid-column: 1 / -1;
          }
        }

      `}</style>
    </main>
  );
}

export default KnowledgeDiscoveryPage;