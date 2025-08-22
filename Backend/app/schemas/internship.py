#this file defines how data enters and leave the API, using pydantic models for validation
from pydantic import BaseModel, EmailStr, field_validator
import re

class InternshipCreate(BaseModel):
    full_name:str
    email:EmailStr #gives automatic email validation
    phone_number: int
    cv_path:str
    message: str
    department: str
    school: str
    recommendation: str
    application:str
    photo_path: str
    professional:bool

@field_validator("phone_number")
def check_phone(cls,v):#cls is the class and v the variable that would hold the user input for phone_number
   v_str = str(v)
   v_str=v_str.replace(" ","")#removes empty spaces
   if not re.fullmatch("^6[0-9]{8}$",v_str):# validates that the number is nine digits starting with 6
       raise ValueError("Invalid phone number")
   return v

class InternshipResponse(InternshipCreate):
    id:int

    class Config:
        orm_model = True #allows pydantic to read sqlalchemy model instances

