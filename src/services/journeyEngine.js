import { innovationJourney } from "../data/journeyData";

export function createInitialJourney() {
  return innovationJourney.map((step, index) => ({
    ...step,
    status:
      index === 0
        ? "active"
        : index === 1
          ? "next"
          : "locked",
  }));
}

export function updateJourneyStep(
  journey,
  stepId,
  status = "completed"
) {
  return journey.map((step) => {
    if (step.id === stepId) {
      return {
        ...step,
        status,
      };
    }

    return step;
  });
}

export function completeJourneyStep(journey, stepId) {
  return journey.map((step) => {
    if (step.id === stepId) {
      return {
        ...step,
        status: "completed",
      };
    }

    if (step.id === stepId + 1) {
      return {
        ...step,
        status: "active",
      };
    }

    return step;
  });
}

export function getJourneyProgress(journey = []) {
  if (!journey.length) {
    return {
      completed: 0,
      total: 0,
      percentage: 0,
    };
  }

  const completed = journey.filter(
    (step) => step.status === "completed"
  ).length;

  return {
    completed,
    total: journey.length,
    percentage: Math.round((completed / journey.length) * 100),
  };
}

export function getCurrentJourneyStep(journey = []) {
  return (
    journey.find((step) => step.status === "active") ||
    journey.find((step) => step.status === "next") ||
    journey[0] ||
    null
  );
}

export function getNextJourneyStep(journey = [], currentId) {
  const currentIndex = journey.findIndex(
    (step) => step.id === currentId
  );

  if (currentIndex === -1 || currentIndex >= journey.length - 1) {
    return null;
  }

  return journey[currentIndex + 1];
}

export function isJourneyComplete(journey = []) {
  return (
    journey.length > 0 &&
    journey.every((step) => step.status === "completed")
  );
}

export function getJourneySummary(journey = []) {
  const progress = getJourneyProgress(journey);
  const currentStep = getCurrentJourneyStep(journey);
  const nextStep = currentStep
    ? getNextJourneyStep(journey, currentStep.id)
    : null;

  return {
    ...progress,
    currentStep,
    nextStep,
    complete: isJourneyComplete(journey),
  };
}