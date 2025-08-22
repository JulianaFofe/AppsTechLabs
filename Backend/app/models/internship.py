#this file is where i defined the database tables(postgres database)
from sqlalchemy import Boolean, Column, Integer, String, Text
from app.services.database import Base 

class Internship(Base):#imported in routers.internship.py
    __tablename__ = "Internships"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone_number = Column(String(20), nullable=False)
    cv_path = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    department = Column(String(100), nullable=False)
    school = Column(String(100), nullable=True)
    recommendation= Column(String, nullable=False)
    photo_path = Column(String, nullable=False)
    application=Column(String, nullable=False)
    professional=Column(Boolean,default=False)

