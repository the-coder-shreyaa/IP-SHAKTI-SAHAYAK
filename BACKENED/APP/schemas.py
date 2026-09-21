from typing import Optional
from pydantic import BaseModel


class InnovationCreate(BaseModel):
    title: str
    description: str = ""
    category: str = "Ayurveda"
    ingredients: str = ""
    formulation: str = ""
    traditional_use: str = ""


class InnovationUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    ingredients: Optional[str] = None
    formulation: Optional[str] = None
    traditional_use: Optional[str] = None
    status: Optional[str] = None


class InnovationResponse(InnovationCreate):
    id: int
    prior_art_score: float
    novelty_score: float
    ip_readiness_score: float
    status: str
    created_at: str
    updated_at: str

    class Config:
        from_attributes = True