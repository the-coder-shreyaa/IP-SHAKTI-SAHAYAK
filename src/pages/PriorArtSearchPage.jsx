import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  FileSearch,
  GitCompare,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import PatentResultCard from "../components/PatentResultCard";
import SimilarityBreakdown from "../components/SimilarityBreakdown";

import { sampleInnovation } from "../data/innovationData";
import {
  getPatentById,
  searchAndComparePatents,
} from "../services/patentsearch.js";

import {
  getBookmarks,
  saveSearchHistory,
  toggleBookmark,
} from "../services/storage";

const defaultFilters = {
  keyword: "",
  ingredient: "",
  application: "",
  ipc: "",
  status: "All",
  source: "All",
};

function PriorArtSearchPage({
  innovation = sampleInnovation,
}) {
  const [filters, setFilters] = useState(defaultFilters);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [selectedResult, setSelectedResult] = useState(null);

  const updateFilter = (field, value) => {
    setFilters((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const nextResults = searchAndComparePatents(
      innovation,
      filters
    );

    setResults(nextResults);
    setHasSearched(true);
    setSelectedResult(nextResults[0] || null);

    saveSearchHistory({
      type: "prior-art",
      filters,
      resultCount: nextResults.length,
    });
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setResults([]);
    setHasSearched(false);
    setSelectedResult(null);
  };

  const handleBookmark = (patentId) => {
    const updated = toggleBookmark(patentId);
    setBookmarks(updated);
  };

  const selectedPatent = selectedResult
    ? getPatentById(selectedResult.patentId)
    : null;

  const searchSummary = useMemo(() => {
    if (!results.length) return null;

    const highest = results[0];

    return {
      total: results.length,
      highestScore: highest?.score || 0,
      highestTitle: highest?.title || "",
    };
  }, [results]);

  return (
    <main className="page-content pa-page">

      {/* ================= HEADER ================= */}

      <section className="pa-header">
        <div className="pa-header-icon">
          <FileSearch size={26} />
        </div>

        <div>
          <span className="pa-eyebrow">
            STAGE 04 • PRIOR ART INTELLIGENCE
          </span>

          <h1>Prior-Art & Patent Search</h1>

          <p>
            Discover potentially relevant patent records and compare
            them with your Ayurveda innovation before moving ahead.
          </p>
        </div>
      </section>


      {/* ================= INNOVATION ================= */}

      <section className="pa-innovation">

        <div className="pa-innovation-icon">
          <GitCompare size={24} />
        </div>

        <div className="pa-innovation-content">
          <span>INNOVATION UNDER REVIEW</span>

          <h2>
            {innovation?.title || "Current Innovation"}
          </h2>

          <p>
            {innovation?.description ||
              "Search and compare your innovation against available patent records."}
          </p>
        </div>

        <div className="pa-status">
          <ShieldCheck size={17} />
          Preliminary Analysis
        </div>

      </section>


      {/* ================= FLOW ================= */}

      <section className="pa-flow">

        <div className="pa-flow-item active">
          <div className="pa-flow-number">01</div>
          <div>
            <strong>Your Innovation</strong>
            <span>Current idea</span>
          </div>
        </div>

        <ArrowRight className="pa-flow-arrow" size={20} />

        <div className="pa-flow-item">
          <div className="pa-flow-number">02</div>
          <div>
            <strong>Search</strong>
            <span>Prior-art records</span>
          </div>
        </div>

        <ArrowRight className="pa-flow-arrow" size={20} />

        <div className="pa-flow-item">
          <div className="pa-flow-number">03</div>
          <div>
            <strong>Compare</strong>
            <span>Similarity signals</span>
          </div>
        </div>

        <ArrowRight className="pa-flow-arrow" size={20} />

        <div className="pa-flow-item">
          <div className="pa-flow-number">04</div>
          <div>
            <strong>Assess</strong>
            <span>Next-step signals</span>
          </div>
        </div>

      </section>


      {/* ================= SEARCH CARD ================= */}

      <section className="pa-search-card">

        <div className="pa-section-heading">

          <div className="pa-heading-icon">
            <Search size={22} />
          </div>

          <div>
            <span>PATENT DISCOVERY</span>

            <h2>Search Existing Prior Art</h2>

            <p>
              Use keywords, ingredients, applications or
              classification codes to discover potentially
              related records.
            </p>
          </div>

        </div>


        {/* ================= SEARCH FORM ================= */}

        <form
          className="pa-form"
          onSubmit={handleSearch}
        >

          {/* KEYWORD */}

          <div className="pa-field pa-keyword">

            <label>
              Keyword
            </label>

            <input
              type="text"
              value={filters.keyword}
              onChange={(event) =>
                updateFilter(
                  "keyword",
                  event.target.value
                )
              }
              placeholder="e.g. turmeric immunity formulation"
            />

            <small>
              Search using your innovation title or concept.
            </small>

          </div>


          {/* SECOND ROW */}

          <div className="pa-form-row">

            <div className="pa-field">

              <label>
                Ingredient
              </label>

              <input
                type="text"
                value={filters.ingredient}
                onChange={(event) =>
                  updateFilter(
                    "ingredient",
                    event.target.value
                  )
                }
                placeholder="e.g. turmeric, ashwagandha"
              />

            </div>


            <div className="pa-field">

              <label>
                Application / Use
              </label>

              <input
                type="text"
                value={filters.application}
                onChange={(event) =>
                  updateFilter(
                    "application",
                    event.target.value
                  )
                }
                placeholder="e.g. immunity, digestion"
              />

            </div>

          </div>


          {/* THIRD ROW */}

          <div className="pa-form-row">

            <div className="pa-field">

              <label>
                IPC / CPC Classification
              </label>

              <input
                type="text"
                value={filters.ipc}
                onChange={(event) =>
                  updateFilter(
                    "ipc",
                    event.target.value
                  )
                }
                placeholder="e.g. A61K"
              />

            </div>


            <div className="pa-field">

              <label>
                Patent Status
              </label>

              <select
                value={filters.status}
                onChange={(event) =>
                  updateFilter(
                    "status",
                    event.target.value
                  )
                }
              >
                <option value="All">
                  All Status
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Granted">
                  Granted
                </option>

                <option value="Expired">
                  Expired
                </option>
              </select>

            </div>

          </div>


          {/* SOURCE */}

          <div className="pa-field pa-source">

            <label>
              Database / Source
            </label>

            <select
              value={filters.source}
              onChange={(event) =>
                updateFilter(
                  "source",
                  event.target.value
                )
              }
            >
              <option value="All">
                All Available Sources
              </option>

              <option value="Indian Patent Office">
                Indian Patent Office
              </option>

              <option value="WIPO">
                WIPO
              </option>

              <option value="USPTO">
                USPTO
              </option>

              <option value="Google Patents">
                Google Patents
              </option>
            </select>

          </div>


          {/* BUTTONS */}

          <div className="pa-form-actions">

            <button
              type="submit"
              className="pa-search-button"
            >
              <Search size={17} />
              Search Prior Art
            </button>

            <button
              type="button"
              className="pa-reset-button"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>


        {/* ================= EXAMPLE BOX ================= */}

        <div className="pa-example-box">

          <div className="pa-example-icon">
            <Sparkles size={16} />
          </div>

          <div>
            <strong>Example search</strong>

            <p>
              Try: <b>turmeric + immunity</b>,
              <b> Ashwagandha formulation</b>,
              or <b>A61K</b>
            </p>
          </div>

        </div>

      </section>


      {/* ================= SUMMARY ================= */}

      {hasSearched && searchSummary && (

        <section className="pa-summary">

          <div className="pa-summary-card">
            <Database size={21} />
            <div>
              <span>RECORDS FOUND</span>
              <strong>{searchSummary.total}</strong>
            </div>
          </div>

          <div className="pa-summary-card">
            <Target size={21} />
            <div>
              <span>HIGHEST SIMILARITY</span>
              <strong>
                {searchSummary.highestScore}%
              </strong>
            </div>
          </div>

          <div className="pa-summary-card">
            <Layers3 size={21} />
            <div>
              <span>TOP MATCH</span>
              <strong>
                {searchSummary.highestTitle || "No match"}
              </strong>
            </div>
          </div>

        </section>

      )}


      {/* ================= RESULTS ================= */}

      {hasSearched && (

        <section className="pa-results">

          <div className="pa-results-heading">

            <div>
              <span>DISCOVERED RECORDS</span>
              <h2>Potential Prior Art</h2>
            </div>

            <div className="pa-result-count">
              {results.length} records
            </div>

          </div>


          {results.length === 0 ? (

            <div className="pa-empty">

              <div className="pa-empty-icon">
                <Search size={24} />
              </div>

              <h3>
                No matching records found
              </h3>

              <p>
                Try broader keywords, ingredient names,
                application terms or classification codes.
              </p>

            </div>

          ) : (

            <div className="pa-results-grid">

              <div className="pa-result-list">

                {results.map((result) => (

                  <div
                    key={result.patentId}
                    className={`pa-result-wrapper ${
                      selectedResult?.patentId ===
                      result.patentId
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedResult(result)
                    }
                  >

                    <PatentResultCard
                      result={result}
                      patent={getPatentById(
                        result.patentId
                      )}
                      isBookmarked={bookmarks.includes(
                        result.patentId
                      )}
                      onBookmark={handleBookmark}
                    />

                  </div>

                ))}

              </div>


              {/* ================= INTELLIGENCE ================= */}

              <aside className="pa-intelligence-panel">

                <div className="pa-intel-title">

                  <Sparkles size={19} />

                  <div>
                    <span>SIMILARITY INTELLIGENCE</span>
                    <h3>Why this record matters</h3>
                  </div>

                </div>

                {selectedResult ? (

                  <SimilarityBreakdown
                    result={selectedResult}
                    patent={selectedPatent}
                  />

                ) : (

                  <div className="pa-select-message">
                    Select a patent record to inspect
                    similarity signals.
                  </div>

                )}

              </aside>

            </div>

          )}

        </section>

      )}


      {/* ================= PRIOR ART INTELLIGENCE ================= */}

      <section className="pa-intelligence">

        <div className="pa-intel-header">

          <div>
            <span>PRIOR ART INTELLIGENCE</span>

            <h2>
              From Search to Decision Support
            </h2>
          </div>

          <p>
            The search helps identify relevant records,
            compare technical signals and plan the next
            IP investigation step.
          </p>

        </div>


        <div className="pa-intel-grid">

          <div className="pa-intel-card">

            <div className="pa-intel-icon">
              <Search size={21} />
            </div>

            <span>01</span>

            <h3>
              Discover
            </h3>

            <p>
              Find potentially relevant patent and
              prior-art records.
            </p>

          </div>


          <div className="pa-intel-card">

            <div className="pa-intel-icon">
              <GitCompare size={21} />
            </div>

            <span>02</span>

            <h3>
              Compare
            </h3>

            <p>
              Compare ingredients, use cases,
              classifications and technical signals.
            </p>

          </div>


          <div className="pa-intel-card">

            <div className="pa-intel-icon">
              <Target size={21} />
            </div>

            <span>03</span>

            <h3>
              Identify Signals
            </h3>

            <p>
              Surface similarity indicators for
              preliminary analysis.
            </p>

          </div>


          <div className="pa-intel-card">

            <div className="pa-intel-icon">
              <CheckCircle2 size={21} />
            </div>

            <span>04</span>

            <h3>
              Plan Next Step
            </h3>

            <p>
              Use the findings to decide what should
              be reviewed or investigated next.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DISCLAIMER ================= */}

      <section className="pa-disclaimer">

        <AlertTriangle size={18} />

        <div>
          <strong>
            Preliminary IP Intelligence
          </strong>

          <p>
            Similarity results are informational and
            should not be treated as a legal conclusion
            on novelty, patentability or infringement.
            Professional patent review may be required.
          </p>
        </div>

      </section>


      {/* ================= STYLES ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .pa-page {
          max-width: 1440px;
          margin: 0 auto;
          padding: 28px 34px 60px;
          color: #29483b;
        }


        /* HEADER */

        .pa-header {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .pa-header-icon {
          width: 54px;
          height: 54px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e3f2e9;
          color: #187d57;
          flex-shrink: 0;
        }

        .pa-eyebrow,
        .pa-section-heading span,
        .pa-results-heading span,
        .pa-intel-header span,
        .pa-intel-title span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #5c8371;
        }

        .pa-header h1 {
          margin: 5px 0 7px;
          font-size: 29px;
          line-height: 1.2;
          color: #183c2d;
        }

        .pa-header p {
          margin: 0;
          color: #71857c;
          font-size: 13px;
          line-height: 1.6;
        }


        /* INNOVATION */

        .pa-innovation {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 21px 24px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #174d39,
            #247455
          );
          color: white;
          margin-bottom: 22px;
          box-shadow: 0 10px 28px rgba(30, 91, 64, .13);
        }

        .pa-innovation-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255,255,255,.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pa-innovation-content {
          flex: 1;
          min-width: 0;
        }

        .pa-innovation-content span {
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 800;
          opacity: .7;
        }

        .pa-innovation-content h2 {
          margin: 4px 0 4px;
          font-size: 18px;
        }

        .pa-innovation-content p {
          margin: 0;
          font-size: 11px;
          line-height: 1.5;
          opacity: .78;
        }

        .pa-status {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 20px;
          background: rgba(255,255,255,.11);
          font-size: 10px;
          white-space: nowrap;
        }


        /* FLOW */

        .pa-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 13px;
          padding: 18px;
          margin-bottom: 24px;
          background: #f7faf8;
          border: 1px solid #e0ebe5;
          border-radius: 18px;
        }

        .pa-flow-item {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 13px;
          border-radius: 13px;
          background: white;
          border: 1px solid #e2ebe6;
        }

        .pa-flow-item.active {
          background: #edf8f1;
          border-color: #cce4d6;
        }

        .pa-flow-number {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5f2e9;
          color: #187d57;
          font-size: 10px;
          font-weight: 800;
        }

        .pa-flow-item strong {
          display: block;
          font-size: 11px;
          color: #294b3c;
        }

        .pa-flow-item span {
          display: block;
          margin-top: 3px;
          color: #8a9a93;
          font-size: 9px;
        }

        .pa-flow-arrow {
          color: #91a99d;
        }


        /* SEARCH CARD */

        .pa-search-card {
          padding: 29px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            #fffdf9,
            #f5faf7
          );
          border: 1px solid #dce9e1;
          box-shadow: 0 9px 26px rgba(48, 76, 61, .055);
          margin-bottom: 24px;
        }

        .pa-section-heading {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .pa-heading-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #e3f3e9;
          color: #187d57;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pa-section-heading h2 {
          margin: 4px 0 5px;
          font-size: 19px;
          color: #244638;
        }

        .pa-section-heading p {
          margin: 0;
          color: #81938b;
          font-size: 11px;
          line-height: 1.55;
        }


        /* FORM */

        .pa-form {
          width: 100%;
          padding: 25px;
          border-radius: 17px;
          background: rgba(255,255,255,.9);
          border: 1px solid #d8e6de;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
        }

        .pa-field {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .pa-keyword {
          margin-bottom: 21px;
        }

        .pa-form-row {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-bottom: 21px;
        }

        .pa-source {
          margin-bottom: 22px;
          max-width: 50%;
        }

        .pa-field label {
          display: block;
          margin-bottom: 8px;
          color: #38594b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .pa-field input,
        .pa-field select {
          width: 100%;
          height: 48px;
          padding: 0 14px;
          border-radius: 11px;
          border: 1px solid #ccdcd3;
          background: #fff;
          color: #29483b;
          font-size: 12px;
          outline: none;
          transition: .18s ease;
        }

        .pa-field input::placeholder {
          color: #a0ada7;
        }

        .pa-field input:focus,
        .pa-field select:focus {
          border-color: #53a87c;
          box-shadow: 0 0 0 3px rgba(83,168,124,.10);
        }

        .pa-field small {
          margin-top: 7px;
          color: #91a099;
          font-size: 9px;
        }


        /* BUTTONS */

        .pa-form-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 3px;
        }

        .pa-search-button,
        .pa-reset-button {
          height: 45px;
          border-radius: 11px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: .18s ease;
        }

        .pa-search-button {
          background: #187d57;
          color: white;
          border: 1px solid #187d57;
          box-shadow: 0 6px 15px rgba(24,125,87,.15);
        }

        .pa-search-button:hover {
          background: #126b49;
          transform: translateY(-1px);
        }

        .pa-reset-button {
          background: #f5f8f6;
          color: #60786d;
          border: 1px solid #cfddd6;
        }

        .pa-reset-button:hover {
          background: #edf4ef;
        }


        /* EXAMPLE */

        .pa-example-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 23px;
          padding: 14px 17px;
          border-radius: 12px;
          background: #eef8f2;
          border: 1px solid #d5e9dc;
        }

        .pa-example-icon {
          width: 31px;
          height: 31px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #3d956d;
          flex-shrink: 0;
        }

        .pa-example-box strong {
          display: block;
          margin-bottom: 3px;
          color: #416252;
          font-size: 10px;
        }

        .pa-example-box p {
          margin: 0;
          color: #758a80;
          font-size: 10px;
          line-height: 1.5;
        }


        /* SUMMARY */

        .pa-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 25px;
        }

        .pa-summary-card {
          min-height: 88px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 17px 19px;
          border-radius: 15px;
          background: white;
          border: 1px solid #dfebe4;
          box-shadow: 0 5px 15px rgba(45,75,59,.035);
        }

        .pa-summary-card > svg {
          color: #31926b;
        }

        .pa-summary-card span {
          display: block;
          color: #8a9b93;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .pa-summary-card strong {
          display: block;
          margin-top: 5px;
          color: #284b3c;
          font-size: 17px;
        }


        /* RESULTS */

        .pa-results {
          margin-bottom: 25px;
        }

        .pa-results-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .pa-results-heading h2 {
          margin: 5px 0 0;
          font-size: 19px;
          color: #29483b;
        }

        .pa-result-count {
          padding: 8px 12px;
          border-radius: 20px;
          background: #edf6f0;
          color: #4f7663;
          font-size: 10px;
          font-weight: 700;
        }

        .pa-results-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(320px, .75fr);
          gap: 22px;
          align-items: start;
        }

        .pa-result-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pa-result-wrapper {
          cursor: pointer;
          border-radius: 16px;
          transition: .18s ease;
        }

        .pa-result-wrapper.selected {
          box-shadow: 0 0 0 2px #55a77d;
        }

        .pa-intelligence-panel {
          padding: 22px;
          border-radius: 18px;
          background: linear-gradient(145deg,#f5faf7,#edf7f1);
          border: 1px solid #d6e7dc;
          position: sticky;
          top: 20px;
        }

        .pa-intel-title {
          display: flex;
          align-items: center;
          gap: 11px;
          padding-bottom: 17px;
          margin-bottom: 18px;
          border-bottom: 1px solid #dce9e1;
        }

        .pa-intel-title > svg {
          color: #299166;
        }

        .pa-intel-title h3 {
          margin: 4px 0 0;
          font-size: 14px;
          color: #315544;
        }

        .pa-select-message {
          padding: 24px 8px;
          text-align: center;
          color: #80938a;
          font-size: 11px;
          line-height: 1.6;
        }


        /* EMPTY */

        .pa-empty {
          padding: 45px 20px;
          text-align: center;
          border: 1px dashed #cadbd1;
          border-radius: 17px;
          background: #f8fbf9;
        }

        .pa-empty-icon {
          width: 45px;
          height: 45px;
          margin: 0 auto 13px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e7f3eb;
          color: #3b976e;
        }

        .pa-empty h3 {
          margin: 0 0 6px;
          color: #345545;
          font-size: 14px;
        }

        .pa-empty p {
          margin: 0;
          color: #82938b;
          font-size: 10px;
        }


        /* INTELLIGENCE */

        .pa-intelligence {
          padding: 30px;
          margin-top: 25px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            #f5faf7,
            #edf7f1
          );
          border: 1px solid #d8e7df;
        }

        .pa-intel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 26px;
        }

        .pa-intel-header h2 {
          margin: 5px 0 0;
          color: #294c3c;
          font-size: 20px;
        }

        .pa-intel-header p {
          max-width: 480px;
          margin: 0;
          color: #788c83;
          font-size: 10px;
          line-height: 1.7;
        }

        .pa-intel-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 20px;
        }

        .pa-intel-card {
          position: relative;
          min-height: 165px;
          padding: 21px;
          border-radius: 17px;
          background: rgba(255,255,255,.92);
          border: 1px solid #dce8e0;
          box-shadow: 0 6px 17px rgba(42,75,58,.045);
          transition: .18s ease;
        }

        .pa-intel-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 11px 23px rgba(42,75,58,.09);
        }

        .pa-intel-card > span {
          position: absolute;
          top: 16px;
          right: 17px;
          color: #a0b0a8;
          font-size: 9px;
          font-weight: 800;
        }

        .pa-intel-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #e7f4eb;
          color: #318f68;
          margin-bottom: 13px;
        }

        .pa-intel-card h3 {
          margin: 0 0 8px;
          color: #365747;
          font-size: 13px;
        }

        .pa-intel-card p {
          margin: 0;
          color: #84958d;
          font-size: 10px;
          line-height: 1.65;
        }


        /* DISCLAIMER */

        .pa-disclaimer {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          padding: 15px 18px;
          border-radius: 13px;
          background: #fffaf0;
          border: 1px solid #eee2c9;
          color: #8b7855;
        }

        .pa-disclaimer > svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pa-disclaimer strong {
          font-size: 10px;
        }

        .pa-disclaimer p {
          margin: 4px 0 0;
          font-size: 9px;
          line-height: 1.6;
        }


        /* RESPONSIVE */

        @media (max-width: 1100px) {

          .pa-results-grid {
            grid-template-columns: 1fr;
          }

          .pa-intelligence-panel {
            position: static;
          }

          .pa-intel-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }


        @media (max-width: 900px) {

          .pa-page {
            padding: 20px;
          }

          .pa-flow {
            grid-template-columns: 1fr 1fr;
          }

          .pa-flow-arrow {
            display: none;
          }

          .pa-form-row {
            grid-template-columns: 1fr;
          }

          .pa-source {
            max-width: 100%;
          }

          .pa-summary {
            grid-template-columns: 1fr;
          }

          .pa-intel-header {
            flex-direction: column;
            align-items: flex-start;
          }

        }


        @media (max-width: 600px) {

          .pa-page {
            padding: 15px;
          }

          .pa-header h1 {
            font-size: 23px;
          }

          .pa-innovation {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .pa-status {
            width: 100%;
          }

          .pa-flow {
            grid-template-columns: 1fr;
          }

          .pa-search-card {
            padding: 18px;
          }

          .pa-form {
            padding: 17px;
          }

          .pa-intel-grid {
            grid-template-columns: 1fr;
          }

          .pa-intelligence {
            padding: 20px;
          }

        }

      `}</style>

    </main>
  );
}

export default PriorArtSearchPage;
