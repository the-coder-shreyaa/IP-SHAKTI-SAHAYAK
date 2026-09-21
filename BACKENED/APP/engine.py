"""
IP SHAKTI SAHAYAK
Ayurveda IP Discovery & Innovation Screening Engine

This engine provides explainable, rule-based screening indicators
for the frontend dashboard.

IMPORTANT:
These scores are screening indicators only.
They are NOT legal opinions, patentability decisions,
or a substitute for professional IP/legal examination.
"""


# ============================================================
# TEXT HELPERS
# ============================================================

def _clean(value):
    """
    Safely convert a field into normalized lowercase text.
    """
    if value is None:
        return ""

    return str(value).strip().lower()


def _contains_terms(text, terms):
    """
    Return all matching terms found in text.
    """
    return [
        term
        for term in terms
        if term.lower() in text
    ]


def _score_label(score):
    """
    Convert numerical score into a simple UI label.
    """
    if score >= 75:
        return "STRONG"

    if score >= 50:
        return "MODERATE"

    return "EARLY STAGE"


def _risk_label(score):
    """
    Convert prior-art signal into a risk indicator.
    """
    if score >= 65:
        return "HIGH"

    if score >= 40:
        return "MEDIUM"

    return "LOW"


# ============================================================
# MAIN IP SCREENING ENGINE
# ============================================================

def calculate_scores(innovation):
    """
    Explainable Ayurveda IP screening engine.

    Generates:
        - Novelty signal
        - Prior-art signal
        - IP readiness
        - Completeness
        - Technical signals
        - Traditional knowledge signals
        - Risk level
        - Readiness level
        - Recommended next steps

    The returned structure is designed to be directly consumed
    by the React frontend and displayed as cards/boxes.
    """

    # --------------------------------------------------------
    # READ INNOVATION DATA
    # --------------------------------------------------------

    title = _clean(getattr(innovation, "title", ""))
    description = _clean(getattr(innovation, "description", ""))
    ingredients = _clean(getattr(innovation, "ingredients", ""))
    formulation = _clean(getattr(innovation, "formulation", ""))
    traditional_use = _clean(
        getattr(innovation, "traditional_use", "")
    )

    # Combined searchable text
    text = " ".join(
        [
            title,
            description,
            ingredients,
            formulation,
            traditional_use,
        ]
    )


    # ========================================================
    # 1. NOVELTY SIGNAL
    # ========================================================

    novelty = 30.0

    technical_terms = [
        "extract",
        "standardized",
        "standardisation",
        "standardization",
        "nano",
        "nanoparticle",
        "nanotechnology",
        "liposomal",
        "liposome",
        "encapsulation",
        "microencapsulation",
        "controlled release",
        "sustained release",
        "bioavailability",
        "dosage",
        "dose",
        "formulation",
        "process",
        "delivery system",
        "drug delivery",
        "targeted delivery",
        "stability",
        "purification",
        "fraction",
        "fractionation",
        "active compound",
        "active ingredient",
        "synergistic",
        "synergy",
        "standardized extract",
        "enhanced absorption",
        "enhanced bioavailability",
    ]

    technical_matches = _contains_terms(
        text,
        technical_terms
    )

    # Each technical indicator increases novelty signal.
    novelty += min(
        len(technical_matches) * 5,
        40
    )


    # ========================================================
    # 2. PRIOR-ART SIGNAL
    # ========================================================

    prior_art = 20.0

    traditional_terms = [
        "traditional",
        "classical",
        "classical formulation",
        "traditional formulation",
        "ayurvedic",
        "ayurveda",
        "charaka",
        "charaka samhita",
        "sushruta",
        "sushruta samhita",
        "rasayana",
        "vedic",
        "traditional knowledge",
        "folk medicine",
        "ethnomedicine",
        "ancient formulation",
        "classical text",
    ]

    traditional_matches = _contains_terms(
        text,
        traditional_terms
    )

    # Traditional/classical references increase
    # the prior-art / TK overlap signal.
    prior_art += min(
        len(traditional_matches) * 7,
        45
    )


    # ========================================================
    # 3. INFORMATION COMPLETENESS
    # ========================================================

    completeness = 0

    if title:
        completeness += 15

    if description:
        completeness += 20

    if ingredients:
        completeness += 20

    if formulation:
        completeness += 25

    if traditional_use:
        completeness += 20

    completeness = min(
        completeness,
        100
    )


    # ========================================================
    # 4. ADDITIONAL EVIDENCE SIGNALS
    # ========================================================

    evidence_terms = [
        "clinical",
        "clinical study",
        "clinical trial",
        "in vivo",
        "in vitro",
        "study",
        "research",
        "experiment",
        "experimental",
        "validation",
        "validated",
        "tested",
        "test result",
        "efficacy",
        "safety",
        "stability study",
        "pharmacological",
        "pharmacokinetic",
        "toxicity",
        "toxicology",
    ]

    evidence_matches = _contains_terms(
        text,
        evidence_terms
    )


    # ========================================================
    # 5. INGREDIENT / FORMULATION SIGNAL
    # ========================================================

    ingredient_signal = 0

    if ingredients:
        ingredient_signal += 50

    if formulation:
        ingredient_signal += 50

    ingredient_signal = min(
        ingredient_signal,
        100
    )


    # ========================================================
    # 6. TECHNICAL DIFFERENTIATION SIGNAL
    # ========================================================

    if len(technical_matches) >= 6:
        technical_differentiation = 90

    elif len(technical_matches) >= 4:
        technical_differentiation = 75

    elif len(technical_matches) >= 2:
        technical_differentiation = 55

    elif len(technical_matches) == 1:
        technical_differentiation = 35

    else:
        technical_differentiation = 15


    # ========================================================
    # 7. EVIDENCE READINESS
    # ========================================================

    evidence_readiness = min(
        len(evidence_matches) * 15,
        100
    )


    # ========================================================
    # 8. IP READINESS
    # ========================================================

    ip_readiness = (
        novelty * 0.35
        + (100 - prior_art) * 0.25
        + completeness * 0.20
        + technical_differentiation * 0.10
        + evidence_readiness * 0.10
    )

    novelty = round(
        min(novelty, 100),
        2
    )

    prior_art = round(
        min(prior_art, 100),
        2
    )

    ip_readiness = round(
        min(ip_readiness, 100),
        2
    )

    technical_differentiation = round(
        technical_differentiation,
        2
    )

    evidence_readiness = round(
        evidence_readiness,
        2
    )


    # ========================================================
    # 9. CLASSIFICATION
    # ========================================================

    risk_level = _risk_label(
        prior_art
    )

    readiness_level = _score_label(
        ip_readiness
    )


    # ========================================================
    # 10. PRIOR-ART STATUS
    # ========================================================

    if prior_art >= 65:

        prior_art_status = (
            "Strong prior-art / traditional "
            "knowledge overlap signal"
        )

    elif prior_art >= 40:

        prior_art_status = (
            "Moderate prior-art overlap signal"
        )

    else:

        prior_art_status = (
            "Lower overlap signal from "
            "provided information"
        )


    # ========================================================
    # 11. NEXT STEPS
    # ========================================================

    next_steps = []


    if not title:

        next_steps.append(
            "Add a clear innovation title."
        )


    if not description:

        next_steps.append(
            "Add a detailed technical description "
            "of the innovation."
        )


    if not ingredients:

        next_steps.append(
            "Add complete ingredient information."
        )


    if not formulation:

        next_steps.append(
            "Describe the formulation, preparation "
            "process or technical method."
        )


    if not traditional_use:

        next_steps.append(
            "Document the traditional use or "
            "background of the formulation."
        )


    if not technical_matches:

        next_steps.append(
            "Identify technical differentiation such as "
            "process, dosage, delivery method, "
            "standardization or stability."
        )


    if prior_art >= 40:

        next_steps.append(
            "Perform detailed prior-art and "
            "traditional-knowledge searching."
        )


    if not evidence_matches:

        next_steps.append(
            "Add supporting research, experimental, "
            "clinical or validation evidence."
        )


    if ip_readiness >= 75:

        next_steps.append(
            "Prepare an invention disclosure and "
            "patent-readiness dossier."
        )

    else:

        next_steps.append(
            "Improve technical evidence and "
            "documentation before patent drafting."
        )


    # ========================================================
    # 12. FRONTEND CARD DATA
    # ========================================================

    score_cards = [

        {
            "id": "novelty",
            "title": "Novelty Signal",
            "subtitle": "Technical differentiation",
            "value": novelty,
            "icon": "✦",
        },

        {
            "id": "prior_art",
            "title": "Prior-Art Signal",
            "subtitle": "Existing knowledge overlap",
            "value": prior_art,
            "icon": "◈",
        },

        {
            "id": "ip_readiness",
            "title": "IP Readiness",
            "subtitle": "Overall preparation",
            "value": ip_readiness,
            "icon": "◆",
        },

        {
            "id": "completeness",
            "title": "Completeness",
            "subtitle": "Innovation information",
            "value": completeness,
            "icon": "✓",
        },

    ]


    # ========================================================
    # 13. RETURN EVERYTHING
    # ========================================================

    return {

        # ----------------------------------------------------
        # Existing API-compatible scores
        # ----------------------------------------------------

        "prior_art_score": prior_art,

        "novelty_score": novelty,

        "ip_readiness_score": ip_readiness,


        # ----------------------------------------------------
        # Structured scores
        # ----------------------------------------------------

        "scores": {

            "prior_art_score": prior_art,

            "novelty_score": novelty,

            "ip_readiness_score": ip_readiness,

            "completeness_score": completeness,

            "technical_differentiation_score":
                technical_differentiation,

            "evidence_readiness_score":
                evidence_readiness,
        },


        # ----------------------------------------------------
        # Frontend score cards
        # ----------------------------------------------------

        "score_cards": score_cards,


        # ----------------------------------------------------
        # Classification
        # ----------------------------------------------------

        "classification": {

            "risk_level": risk_level,

            "readiness_level": readiness_level,

            "prior_art_status": prior_art_status,
        },


        # ----------------------------------------------------
        # Detected signals
        # ----------------------------------------------------

        "signals": {

            "technical_terms_found":
                technical_matches,

            "traditional_terms_found":
                traditional_matches,

            "evidence_terms_found":
                evidence_matches,

            "technical_signal_count":
                len(technical_matches),

            "traditional_signal_count":
                len(traditional_matches),

            "evidence_signal_count":
                len(evidence_matches),
        },


        # ----------------------------------------------------
        # Evidence summary
        # ----------------------------------------------------

        "evidence": {

            "technical_signal":
                technical_differentiation,

            "traditional_knowledge_signal":
                prior_art,

            "research_evidence_signal":
                evidence_readiness,

            "information_completeness":
                completeness,
        },


        # ----------------------------------------------------
        # Recommendations
        # ----------------------------------------------------

        "recommendations": next_steps,


        # ----------------------------------------------------
        # Summary
        # ----------------------------------------------------

        "summary": {

            "title":
                getattr(
                    innovation,
                    "title",
                    ""
                ),

            "message": (
                "Screening completed using "
                "explainable rule-based indicators. "
                "Review prior-art, traditional-knowledge "
                "and technical differentiation before "
                "making IP decisions."
            ),

        },

    }