import { useEffect, useMemo, useState } from "react";
import api from "./services/api";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Sidebar from "./components/sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";

import InnovationOverviewPage from "./pages/InnovationOverviewPage.jsx";
import KnowledgeDiscoveryPage from "./pages/KnowledgeDiscoveryPage";
import ResearchEvidencePage from "./pages/ResearchEvidencePage";
import PriorArtSearchPage from "./pages/PriorArtSearchPage";
import SimilarityAnalysisPage from "./pages/SimilarityAnalysisPage";
import EvidenceGapPage from "./pages/EvidenceGapPage";
import IPReadinessPage from "./pages/IPReadinessPage";
import IPStrategyPage from "./pages/IPStrategyPage";
import PatentPreparationPage from "./pages/PatentPreparationPage";
import ExpertReviewPage from "./pages/ExpertReviewPage";
import InnovationDossierPage from "./pages/InnovationDossierPage";
import PreFilingChecklistPage from "./pages/PreFilingChecklistPage.jsx";
import InnovationRoadmapPage from "./pages/InnovationRoadmapPage";
import InnovationJourneyPage from "./pages/InnovationJourneyPage";

import {
  getSavedInnovation,
  saveInnovation,
} from "./services/storage";

import {
  createInitialJourney,
  completeJourneyStep,
  getCurrentJourneyStep,
} from "./services/journeyEngine";


/* =========================================================
   DEFAULT INNOVATION
========================================================= */

const defaultInnovation = {
  name: "",
  title: "",
  type: "Herbal formulation",
  category: "Herbal formulation",

  language: "en",

  focus: "",
  description: "",

  ingredients: [],

  therapeuticUse: "",
  traditional_use: "",

  formulation: "",
  process: "",

  evidence: [],

  createdAt: new Date().toISOString(),

  id: null,

  prior_art_score: 0,
  novelty_score: 0,
  ip_readiness_score: 0,
};


/* =========================================================
   APP SHELL
========================================================= */

function AppShell() {

  const navigate = useNavigate();
  const location = useLocation();


  /* =======================================================
     BACKEND STATE
  ======================================================= */

  const [apiLoaded, setApiLoaded] = useState(false);
  const [apiInnovationId, setApiInnovationId] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [backendReachable, setBackendReachable] = useState(true);

  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);


  /* =======================================================
     INNOVATION STATE
  ======================================================= */

  const [innovation, setInnovation] = useState(() => {

    const saved = getSavedInnovation();

    return {
      ...defaultInnovation,
      ...(saved || {}),
    };

  });


  /* =======================================================
     JOURNEY STATE
  ======================================================= */

  const [journey, setJourney] = useState(() => {
    return createInitialJourney();
  });


  /* =======================================================
     SIDEBAR
  ======================================================= */

  const [sidebarOpen, setSidebarOpen] = useState(false);


  /* =======================================================
     LOCAL SAVE
  ======================================================= */

  useEffect(() => {

    try {

      saveInnovation(innovation);

    } catch (error) {

      console.error(
        "Local innovation save failed:",
        error
      );

    }

  }, [innovation]);


  /* =======================================================
     BACKEND HEALTH + INNOVATION LOAD
========================================================= */

  useEffect(() => {

    let mounted = true;

    async function checkBackendAndLoad() {

      try {

        await api.health();

        if (!mounted) return;

        setBackendReachable(true);
        setApiError(null);


        try {

          const innovations =
            await api.getInnovations();

          if (!mounted) return;

          if (
            Array.isArray(innovations) &&
            innovations.length > 0
          ) {

            const latest = innovations[0];

            setApiInnovationId(latest.id);

            setInnovation(previous => ({

              ...previous,

              id: latest.id,

              name:
                latest.title ||
                previous.name ||
                "",

              title:
                latest.title ||
                previous.title ||
                "",

              description:
                latest.description ||
                previous.description ||
                "",

              type:
                latest.category ||
                previous.type ||
                "Herbal formulation",

              category:
                latest.category ||
                previous.category ||
                "Herbal formulation",

              ingredients:
                typeof latest.ingredients === "string"
                  ? latest.ingredients
                      .split(",")
                      .map(item => item.trim())
                      .filter(Boolean)
                  : (
                      latest.ingredients ||
                      previous.ingredients ||
                      []
                    ),

              formulation:
                latest.formulation ||
                previous.formulation ||
                "",

              therapeuticUse:
                latest.traditional_use ||
                previous.therapeuticUse ||
                "",

              traditional_use:
                latest.traditional_use ||
                previous.traditional_use ||
                "",

              prior_art_score:
                latest.prior_art_score ??
                previous.prior_art_score ??
                0,

              novelty_score:
                latest.novelty_score ??
                previous.novelty_score ??
                0,

              ip_readiness_score:
                latest.ip_readiness_score ??
                previous.ip_readiness_score ??
                0,

            }));

          }

        } catch (innovationError) {

          console.error(
            "Backend innovation load failed:",
            innovationError
          );

          if (mounted) {

            setBackendReachable(true);
            setApiError(null);

          }

        }

      } catch (error) {

        console.error(
          "Backend health check failed:",
          error
        );

        if (mounted) {

          setBackendReachable(false);

          setApiError(
            "Backend is not reachable. Local data is still available."
          );

        }

      } finally {

        if (mounted) {
          setApiLoaded(true);
        }

      }

    }


    checkBackendAndLoad();


    const retryTimer = setInterval(() => {

      checkBackendAndLoad();

    }, 3000);


    return () => {

      mounted = false;

      clearInterval(retryTimer);

    };

  }, []);


  /* =======================================================
     CURRENT JOURNEY STEP
  ======================================================= */

  const currentStep = useMemo(() => {

    return getCurrentJourneyStep(journey);

  }, [journey]);


  /* =======================================================
     UPDATE INNOVATION
  ======================================================= */

  const updateInnovation = updates => {

    setInnovation(previous => ({
      ...previous,
      ...updates,
    }));

  };


  /* =======================================================
     BACKEND MAPPING
  ======================================================= */

  const prepareBackendInnovation = () => {

    return {

      title:
        innovation.title ||
        innovation.name ||
        "",

      description:
        innovation.description ||
        "",

      category:
        innovation.category ||
        innovation.type ||
        "Herbal formulation",

      ingredients:
        Array.isArray(innovation.ingredients)
          ? innovation.ingredients.join(", ")
          : innovation.ingredients || "",

      formulation:
        innovation.formulation ||
        "",

      traditional_use:
        innovation.traditional_use ||
        innovation.therapeuticUse ||
        "",

    };

  };


  /* =======================================================
     SAVE TO BACKEND
  ======================================================= */

  const saveInnovationToBackend = async () => {

    try {

      setApiError(null);

      const backendInnovation =
        prepareBackendInnovation();

      let saved;

      if (apiInnovationId) {

        saved = await api.updateInnovation(
          apiInnovationId,
          backendInnovation
        );

      } else {

        saved = await api.createInnovation(
          backendInnovation
        );

        if (saved?.id) {

          setApiInnovationId(saved.id);

        }

      }


      if (saved) {

        setBackendReachable(true);
        setApiError(null);

        setInnovation(previous => ({

          ...previous,

          id:
            saved.id ??
            previous.id,

          name:
            saved.title ||
            previous.name,

          title:
            saved.title ||
            previous.title,

          description:
            saved.description ||
            previous.description,

          type:
            saved.category ||
            previous.type,

          category:
            saved.category ||
            previous.category,

          formulation:
            saved.formulation ||
            previous.formulation,

          therapeuticUse:
            saved.traditional_use ||
            previous.therapeuticUse,

          traditional_use:
            saved.traditional_use ||
            previous.traditional_use,

          prior_art_score:
            saved.prior_art_score ??
            previous.prior_art_score,

          novelty_score:
            saved.novelty_score ??
            previous.novelty_score,

          ip_readiness_score:
            saved.ip_readiness_score ??
            previous.ip_readiness_score,

        }));

      }

      return saved;

    } catch (error) {

      console.error(
        "Backend save failed:",
        error
      );

      setBackendReachable(false);

      setApiError(
        "Innovation could not be saved to backend."
      );

      return null;

    }

  };


  /* =======================================================
     ANALYZE INNOVATION
  ======================================================= */

  const analyzeInnovation = async () => {

    setAnalysisLoading(true);
    setApiError(null);

    try {

      const saved =
        await saveInnovationToBackend();

      const innovationId =
        saved?.id ||
        apiInnovationId ||
        innovation.id;

      if (!innovationId) {

        throw new Error(
          "Innovation ID is missing."
        );

      }

      const result =
        await api.analyzeInnovation(
          innovationId
        );

      setBackendReachable(true);
      setApiError(null);

      setAnalysisResult(result);

      if (result?.analysis) {

        setInnovation(previous => ({

          ...previous,

          id: innovationId,

          prior_art_score:
            result.analysis.prior_art_score ??
            previous.prior_art_score,

          novelty_score:
            result.analysis.novelty_score ??
            previous.novelty_score,

          ip_readiness_score:
            result.analysis.ip_readiness_score ??
            previous.ip_readiness_score,

        }));

      }

      return result;

    } catch (error) {

      console.error(
        "Innovation analysis failed:",
        error
      );

      setApiError(
        "AI analysis could not be completed."
      );

      return null;

    } finally {

      setAnalysisLoading(false);

    }

  };


  /* =======================================================
     JOURNEY
  ======================================================= */

  const completeCurrentStage = stepId => {

    setJourney(previous => {

      return completeJourneyStep(
        previous,
        stepId
      );

    });

  };


  const continueFrom = (
    stepId,
    nextPath
  ) => {

    completeCurrentStage(stepId);

    if (nextPath) {
      navigate(nextPath);
    }

  };


  /* =======================================================
     MAIN NAVIGATION
  ======================================================= */

  const goToJourney = () => {
    navigate("/innovation/journey");
  };


  const goToDashboard = () => {
    navigate("/");
  };


  /* =======================================================
     INNOVATION OVERVIEW CARD NAVIGATION
  ======================================================= */

  const goToKnowledge = () => {
    navigate("/knowledge");
  };


  const goToResearch = () => {
    navigate("/research");
  };


  const goToPriorArt = () => {
    navigate("/prior-art");
  };


  const goToIPReadiness = () => {
    navigate("/ip-readiness");
  };


  const goToSimilarity = () => {
    navigate("/similarity");
  };


  const goToEvidenceGap = () => {
    navigate("/evidence-gap");
  };


  /* =======================================================
     UI
  ======================================================= */

  return (

    <div className="app-shell">

      <Sidebar
        innovation={innovation}
        journey={journey}
        currentStep={currentStep}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />


      <div className="main-shell">

        <Topbar
          innovation={innovation}
          onMenuClick={() =>
            setSidebarOpen(true)
          }
          onDashboard={goToDashboard}
          onJourney={goToJourney}
        />


        {/* BACKEND WARNING REMOVED
            Backend functionality remains active. */}


        <main className="page-content">

          <Routes>

            {/* DASHBOARD */}

            <Route
              path="/"
              element={
                <Dashboard
                  innovation={innovation}
                  journey={journey}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onStartJourney={
                    goToJourney
                  }
                />
              }
            />


            {/* INNOVATION OVERVIEW */}

            <Route
              path="/innovation"
              element={
                <InnovationOverviewPage

                  innovation={innovation}

                  onUpdateInnovation={
                    updateInnovation
                  }

                  analysisResult={
                    analysisResult
                  }

                  analysisLoading={
                    analysisLoading
                  }

                  onAnalyze={
                    analyzeInnovation
                  }

                  onContinue={
                    goToJourney
                  }

                  onContinueJourney={
                    goToJourney
                  }

                  onKnowledge={
                    goToKnowledge
                  }

                  onResearch={
                    goToResearch
                  }

                  onPriorArt={
                    goToPriorArt
                  }

                  onIPReadiness={
                    goToIPReadiness
                  }

                  onSimilarity={
                    goToSimilarity
                  }

                  onEvidenceGap={
                    goToEvidenceGap
                  }

                />
              }
            />


            {/* JOURNEY */}

            <Route
              path="/innovation/journey"
              element={
                <InnovationJourneyPage
                  innovation={innovation}
                  journey={journey}
                  currentStep={currentStep}
                  onContinue={continueFrom}
                  onUpdateInnovation={
                    updateInnovation
                  }
                />
              }
            />


            {/* KNOWLEDGE / TKDL */}

            <Route
              path="/knowledge"
              element={
                <KnowledgeDiscoveryPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={goToResearch}
                />
              }
            />


            {/* RESEARCH */}

            <Route
              path="/research"
              element={
                <ResearchEvidencePage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={goToPriorArt}
                />
              }
            />


            {/* PRIOR ART */}

            <Route
              path="/prior-art"
              element={
                <PriorArtSearchPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={goToSimilarity}
                />
              }
            />


            {/* SIMILARITY */}

            <Route
              path="/similarity"
              element={
                <SimilarityAnalysisPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={goToEvidenceGap}
                />
              }
            />


            {/* EVIDENCE GAP */}

            <Route
              path="/evidence-gap"
              element={
                <EvidenceGapPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={
                    goToIPReadiness
                  }
                />
              }
            />


            {/* IP READINESS */}

            <Route
              path="/ip-readiness"
              element={
                <IPReadinessPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={() =>
                    navigate(
                      "/innovation/ip-strategy"
                    )
                  }
                />
              }
            />


            {/* IP STRATEGY */}

            <Route
              path="/innovation/ip-strategy"
              element={
                <IPStrategyPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={() =>
                    navigate(
                      "/patent-preparation"
                    )
                  }
                />
              }
            />


            {/* PATENT PREPARATION */}

            <Route
              path="/patent-preparation"
              element={
                <PatentPreparationPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={() =>
                    navigate(
                      "/expert-connect"
                    )
                  }
                />
              }
            />


            {/* EXPERT CONNECT */}

            <Route
              path="/expert-connect"
              element={
                <ExpertReviewPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={() =>
                    navigate("/dossier")
                  }
                />
              }
            />


            {/* DOSSIER */}

            <Route
              path="/dossier"
              element={
                <InnovationDossierPage
                  innovation={innovation}
                  journey={journey}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={() =>
                    navigate(
                      "/pre-filing"
                    )
                  }
                />
              }
            />


            {/* PRE-FILING */}

            <Route
              path="/pre-filing"
              element={
                <PreFilingChecklistPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={() =>
                    navigate(
                      "/innovation/roadmap"
                    )
                  }
                />
              }
            />


            {/* ROADMAP */}

            <Route
              path="/innovation/roadmap"
              element={
                <InnovationRoadmapPage
                  innovation={innovation}
                  onUpdateInnovation={
                    updateInnovation
                  }
                  onContinue={
                    goToJourney
                  }
                />
              }
            />


            {/* FALLBACK */}

            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />

          </Routes>

        </main>

      </div>

    </div>

  );

}


/* =========================================================
   APP
========================================================= */

export default function App() {

  return (

    <BrowserRouter>

      <AppShell />

    </BrowserRouter>

  );

}