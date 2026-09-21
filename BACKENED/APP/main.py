from datetime import datetime

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .db import Base, engine, get_db
from .models import Innovation
from .schemas import (
    InnovationCreate,
    InnovationUpdate,
    InnovationResponse
)
from .engine import calculate_scores


# =========================================================
# DATABASE INITIALIZATION
# =========================================================

Base.metadata.create_all(bind=engine)


# =========================================================
# FASTAPI APP
# =========================================================

app = FastAPI(
    title="IP Shakti Sahayak",
    description=(
        "AI-powered Ayurveda Intellectual Property, "
        "Patent Discovery and Regulatory Intelligence Backend."
    ),
    version="1.0.0"
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# ROOT / HEALTH
# =========================================================

@app.get("/")
def root():
    return {
        "app": "IP Shakti Sahayak",
        "message": "Ayurveda IP Discovery Backend is running",
        "status": "healthy",
        "version": "1.0.0"
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "IP Shakti Sahayak Backend"
    }


# =========================================================
# INNOVATION CREATE
# =========================================================

@app.post(
    "/api/innovations",
    response_model=InnovationResponse
)
def create_innovation(
    data: InnovationCreate,
    db: Session = Depends(get_db)
):

    now = datetime.utcnow().isoformat()

    innovation = Innovation(
        title=data.title,
        description=data.description,
        category=data.category,
        ingredients=data.ingredients,
        formulation=data.formulation,
        traditional_use=data.traditional_use,
        status="draft",
        created_at=now,
        updated_at=now
    )

    # -----------------------------------------
    # AI / RULE BASED IP SCORING
    # -----------------------------------------

    scores = calculate_scores(innovation)

    innovation.prior_art_score = scores["prior_art_score"]
    innovation.novelty_score = scores["novelty_score"]
    innovation.ip_readiness_score = scores["ip_readiness_score"]

    db.add(innovation)
    db.commit()
    db.refresh(innovation)

    return innovation


# =========================================================
# GET ALL INNOVATIONS
# =========================================================

@app.get(
    "/api/innovations",
    response_model=list[InnovationResponse]
)
def get_innovations(
    db: Session = Depends(get_db)
):

    innovations = (
        db.query(Innovation)
        .order_by(Innovation.id.desc())
        .all()
    )

    return innovations


# =========================================================
# GET SINGLE INNOVATION
# =========================================================

@app.get(
    "/api/innovations/{innovation_id}",
    response_model=InnovationResponse
)
def get_innovation(
    innovation_id: int,
    db: Session = Depends(get_db)
):

    innovation = (
        db.query(Innovation)
        .filter(Innovation.id == innovation_id)
        .first()
    )

    if not innovation:
        raise HTTPException(
            status_code=404,
            detail="Innovation not found"
        )

    return innovation


# =========================================================
# UPDATE INNOVATION
# =========================================================

@app.put(
    "/api/innovations/{innovation_id}",
    response_model=InnovationResponse
)
def update_innovation(
    innovation_id: int,
    data: InnovationUpdate,
    db: Session = Depends(get_db)
):

    innovation = (
        db.query(Innovation)
        .filter(Innovation.id == innovation_id)
        .first()
    )

    if not innovation:
        raise HTTPException(
            status_code=404,
            detail="Innovation not found"
        )

    # -----------------------------------------
    # UPDATE ONLY PROVIDED FIELDS
    # -----------------------------------------

    updates = data.model_dump(exclude_unset=True)

    for key, value in updates.items():
        setattr(innovation, key, value)

    innovation.updated_at = datetime.utcnow().isoformat()

    # -----------------------------------------
    # RE-CALCULATE SCORES
    # -----------------------------------------

    scores = calculate_scores(innovation)

    innovation.prior_art_score = scores["prior_art_score"]
    innovation.novelty_score = scores["novelty_score"]
    innovation.ip_readiness_score = scores["ip_readiness_score"]

    db.commit()
    db.refresh(innovation)

    return innovation


# =========================================================
# DELETE INNOVATION
# =========================================================

@app.delete(
    "/api/innovations/{innovation_id}"
)
def delete_innovation(
    innovation_id: int,
    db: Session = Depends(get_db)
):

    innovation = (
        db.query(Innovation)
        .filter(Innovation.id == innovation_id)
        .first()
    )

    if not innovation:
        raise HTTPException(
            status_code=404,
            detail="Innovation not found"
        )

    db.delete(innovation)
    db.commit()

    return {
        "success": True,
        "message": "Innovation deleted successfully",
        "id": innovation_id
    }


# =========================================================
# IP ANALYSIS
# =========================================================

@app.post(
    "/api/innovations/{innovation_id}/analyze"
)
def analyze_innovation(
    innovation_id: int,
    db: Session = Depends(get_db)
):

    innovation = (
        db.query(Innovation)
        .filter(Innovation.id == innovation_id)
        .first()
    )

    if not innovation:
        raise HTTPException(
            status_code=404,
            detail="Innovation not found"
        )

    # -----------------------------------------
    # CALCULATE IP SCORES
    # -----------------------------------------

    scores = calculate_scores(innovation)

    innovation.prior_art_score = scores["prior_art_score"]
    innovation.novelty_score = scores["novelty_score"]
    innovation.ip_readiness_score = scores["ip_readiness_score"]

    innovation.status = "analyzed"
    innovation.updated_at = datetime.utcnow().isoformat()

    db.commit()
    db.refresh(innovation)

    # -----------------------------------------
    # INTERPRETATION
    # -----------------------------------------

    novelty = innovation.novelty_score
    prior_art = innovation.prior_art_score
    readiness = innovation.ip_readiness_score

    if readiness >= 80:
        readiness_label = "High IP Readiness"
    elif readiness >= 60:
        readiness_label = "Moderate IP Readiness"
    else:
        readiness_label = "Needs Further Evaluation"

    if novelty >= 75:
        novelty_label = "Strong Novelty Signal"
    elif novelty >= 50:
        novelty_label = "Moderate Novelty Signal"
    else:
        novelty_label = "Low Novelty Signal"

    if prior_art >= 70:
        prior_art_label = "High Prior-Art Overlap Risk"
    elif prior_art >= 40:
        prior_art_label = "Moderate Prior-Art Risk"
    else:
        prior_art_label = "Lower Prior-Art Signal"

    return {
        "success": True,
        "innovation_id": innovation.id,
        "title": innovation.title,

        "analysis": {
            "prior_art_score": innovation.prior_art_score,
            "novelty_score": innovation.novelty_score,
            "ip_readiness_score": innovation.ip_readiness_score
        },

        "interpretation": {
            "novelty": novelty_label,
            "prior_art": prior_art_label,
            "ip_readiness": readiness_label
        },

        "recommendations": [
            "Perform detailed prior-art search.",
            "Check Traditional Knowledge overlap.",
            "Validate formulation and technical contribution.",
            "Collect supporting evidence and documentation.",
            "Consult a qualified IP professional before filing."
        ],

        "status": innovation.status
    }


# =========================================================
# DASHBOARD SUMMARY
# =========================================================

@app.get(
    "/api/dashboard/summary"
)
def dashboard_summary(
    db: Session = Depends(get_db)
):

    innovations = (
        db.query(Innovation)
        .all()
    )

    total = len(innovations)

    analyzed = sum(
        1
        for item in innovations
        if item.status == "analyzed"
    )

    draft = sum(
        1
        for item in innovations
        if item.status == "draft"
    )

    average_novelty = (
        sum(
            item.novelty_score
            for item in innovations
        ) / total
        if total
        else 0
    )

    average_prior_art = (
        sum(
            item.prior_art_score
            for item in innovations
        ) / total
        if total
        else 0
    )

    average_ip_readiness = (
        sum(
            item.ip_readiness_score
            for item in innovations
        ) / total
        if total
        else 0
    )

    return {
        "total_innovations": total,

        "analyzed_innovations": analyzed,

        "draft_innovations": draft,

        "average_novelty_score": round(
            average_novelty,
            2
        ),

        "average_prior_art_score": round(
            average_prior_art,
            2
        ),

        "average_ip_readiness_score": round(
            average_ip_readiness,
            2
        )
    }


# =========================================================
# RECENT INNOVATIONS
# =========================================================

@app.get(
    "/api/dashboard/recent"
)
def recent_innovations(
    db: Session = Depends(get_db)
):

    innovations = (
        db.query(Innovation)
        .order_by(Innovation.id.desc())
        .limit(10)
        .all()
    )

    return [
        {
            "id": item.id,
            "title": item.title,
            "category": item.category,
            "status": item.status,
            "novelty_score": item.novelty_score,
            "prior_art_score": item.prior_art_score,
            "ip_readiness_score": item.ip_readiness_score,
            "created_at": item.created_at,
            "updated_at": item.updated_at
        }
        for item in innovations
    ]


# =========================================================
# INNOVATION STATS
# =========================================================

@app.get(
    "/api/innovations/{innovation_id}/stats"
)
def innovation_stats(
    innovation_id: int,
    db: Session = Depends(get_db)
):

    innovation = (
        db.query(Innovation)
        .filter(Innovation.id == innovation_id)
        .first()
    )

    if not innovation:
        raise HTTPException(
            status_code=404,
            detail="Innovation not found"
        )

    return {
        "id": innovation.id,
        "title": innovation.title,
        "scores": {
            "novelty": innovation.novelty_score,
            "prior_art": innovation.prior_art_score,
            "ip_readiness": innovation.ip_readiness_score
        },
        "status": innovation.status
    }


# =========================================================
# API STATUS
# =========================================================

@app.get(
    "/api/status"
)
def api_status():

    return {
        "application": "IP Shakti Sahayak",
        "backend": "FastAPI",
        "database": "SQLAlchemy",
        "status": "online",
        "timestamp": datetime.utcnow().isoformat()
    }

from io import BytesIO
from fastapi import Body
from fastapi.responses import StreamingResponse

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)


@app.post("/api/patent-preparation/export-pdf")
async def export_patent_preparation_pdf(payload: dict = Body(...)):
    preparation = payload.get("preparation", {})
    innovation = payload.get("innovation", {})

    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=45,
        leftMargin=45,
        topMargin=45,
        bottomMargin=45,
    )

    styles = getSampleStyleSheet()

    story = []

    title = preparation.get(
        "title",
        innovation.get("title", "Patent Preparation")
    )

    story.append(
        Paragraph(
            "PATENT PREPARATION DOCUMENT",
            styles["Title"]
        )
    )

    story.append(Spacer(1, 12))

    story.append(
        Paragraph(
            f"<b>Innovation Title:</b> {title}",
            styles["Heading2"]
        )
    )

    story.append(Spacer(1, 18))

    sections = [
        ("Technical Field", "technicalField"),
        ("Background", "background"),
        ("Problem Statement", "problemStatement"),
        ("Summary of Innovation", "summary"),
        ("Detailed Description", "detailedDescription"),
        ("Advantages / Technical Effect", "advantages"),
        ("Experimental Evidence", "experimentalEvidence"),
        ("Drawings / Flowchart Notes", "drawings"),
        ("Claims — DRAFT", "claims"),
        ("References", "references"),
    ]

    for heading, key in sections:

        value = str(
            preparation.get(key, "")
        ).strip()

        story.append(
            Paragraph(
                heading,
                styles["Heading2"]
            )
        )

        if value:
            safe_value = (
                value
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\n", "<br/>")
            )

            story.append(
                Paragraph(
                    safe_value,
                    styles["BodyText"]
                )
            )
        else:
            story.append(
                Paragraph(
                    "Not provided.",
                    styles["BodyText"]
                )
            )

        story.append(Spacer(1, 15))

    story.append(
        Paragraph(
            "<b>Disclaimer:</b> This document is a patent-preparation "
            "draft and is not an official patent application. "
            "Professional patent review is recommended before filing.",
            styles["BodyText"]
        )
    )

    doc.build(story)

    buffer.seek(0)

    safe_filename = (
        str(title)
        .replace(" ", "_")
        .replace("/", "_")
        .replace("\\", "_")
    )

    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
                f'attachment; filename="{safe_filename}_Patent_Preparation.pdf"'
        },
    )

from io import BytesIO
from fastapi import Body
from fastapi.responses import StreamingResponse
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
@app.post("/api/dossier/export-pdf")
async def export_dossier_pdf(payload: dict = Body(...)):
    innovation = payload.get("innovation", {})
    sections = payload.get("sections", [])

    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=45,
        leftMargin=45,
        topMargin=45,
        bottomMargin=45,
    )

    styles = getSampleStyleSheet()
    story = []

    story.append(
        Paragraph(
            "IP SHAKTI SAHAYAK — INNOVATION DOSSIER",
            styles["Title"]
        )
    )

    story.append(Spacer(1, 12))

    title = innovation.get(
        "title",
        "Ayurvedic Innovation"
    )

    story.append(
        Paragraph(
            f"<b>Innovation:</b> {title}",
            styles["Heading2"]
        )
    )

    story.append(
        Paragraph(
            f"<b>Domain:</b> {innovation.get('domain', '')}",
            styles["BodyText"]
        )
    )

    story.append(Spacer(1, 20))

    for section in sections:
        story.append(
            Paragraph(
                f"{section.get('number', '')} — "
                f"{section.get('title', '')}",
                styles["Heading2"]
            )
        )

        story.append(
            Paragraph(
                section.get("desc", ""),
                styles["BodyText"]
            )
        )

        story.append(Spacer(1, 12))

        for item in section.get("content", []):
            if len(item) >= 2:
                label = str(item[0])
                value = str(item[1])

                safe_value = (
                    value.replace("&", "&amp;")
                    .replace("<", "&lt;")
                    .replace(">", "&gt;")
                )

                story.append(
                    Paragraph(
                        f"<b>{label}:</b> {safe_value}",
                        styles["BodyText"]
                    )
                )

                story.append(Spacer(1, 6))

        story.append(Spacer(1, 12))

    story.append(
        Paragraph(
            "<b>Disclaimer:</b> This Innovation Dossier is a "
            "preliminary intelligence document and does not constitute "
            "legal, patent or regulatory advice.",
            styles["BodyText"]
        )
    )

    doc.build(story)
    buffer.seek(0)

    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            'attachment; filename="IP_Shakti_Sahayak_Innovation_Dossier.pdf"'
        },
    )