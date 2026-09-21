from sqlalchemy import Column, Integer, String, Text, Float
from .db import Base


class Innovation(Base):
    __tablename__ = "innovations"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)
    description = Column(Text, default="")
    category = Column(String(100), default="Ayurveda")

    ingredients = Column(Text, default="")
    formulation = Column(Text, default="")
    traditional_use = Column(Text, default="")

    prior_art_score = Column(Float, default=0.0)
    novelty_score = Column(Float, default=0.0)
    ip_readiness_score = Column(Float, default=0.0)

    status = Column(String(50), default="draft")

    created_at = Column(String(50), default="")
    updated_at = Column(String(50), default="")