#this file defines our API end points(POST, GET)
import shutil
from urllib import request
from fastapi import APIRouter, Depends, File, Form, Request, UploadFile
from sqlalchemy.orm import Session
from app.services.database import get_db 
from app import models, schemas
from pathlib import Path #makes file path cleaner and cross platform
from app.models.internship import Internship
import os #lets us interact wih file systems e.g delete files etc
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig

router = APIRouter(prefix="/internships", tags=["internships"]) #creates a router that wil handle all routes starting with /internships

#email configuration
conf = ConnectionConfig(
    MAIL_USERNAME="bamafaith6@gmail.com",
    MAIL_PASSWORD="yxoz vjng psaq azha",
    MAIL_FROM="bamafaith6@gmail.com",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,#command that converts a normal insecure connection to a more secure tls connection
    MAIL_SSL_TLS=False ,#use just tls no sslbcos tsl is more modern than ssl
    USE_CREDENTIALS=True #use credentials for authentication
)

upload_dir = Path("uploads")
upload_dir.mkdir(parents=True, exist_ok=True) #makes sure the created folder exist

@router.post("/", response_model=dict,tags=["internships"])

async def create_internship(
    full_name:str = Form(...),
    email:str = Form(...),
    school:str=Form(...),
    phone_number:str = Form(...),
    cv:UploadFile = File(...),
    message:str=Form(...),
    department:str=Form(...),
    recommendation_letter:UploadFile = File(...),
    application_letter: UploadFile = File(...),
    photo: UploadFile = File(...),
    professional:bool = Form(...),
    db:Session = Depends(get_db)
   
):
   
    
    #saving the files to disk
    def save_file(file:UploadFile)->str:
        file_path = upload_dir / file.filename #used to append the file name to the directory
        with open(file_path, "wb") as buffer: #puts the file in a written binary form, buffer variable for file handling
            shutil.copyfileobj(file.file, buffer)#returns the entire content of the file as it is
        return str(file_path) #converts file path back to string
   
    cv_path= save_file(cv)
    rec_letter_path = save_file(recommendation_letter)
    app_letter_path = save_file(application_letter)
    photo_path = save_file(photo)

    #creating email body,this coming from the interns submitting their application
    message_body = f"""
    Internship Application Submitted:
    Name:{full_name}
    Email:{email}
    Phone:{phone_number}
    Department:{department}
    message:{message}
    Professional Intern?:{"Yes" if professional else "No"}
    """

    #how the meesage goes to the appstech admin
    message_schema= MessageSchema(
        subject="New Internship Application",
        recipients=["bamafaith6@gmail.com"],#company's email
        body=message_body,
        attachments=[cv_path, rec_letter_path, app_letter_path, photo_path],
        subtype="plain" #enables the message to come in plain text and not in html format
    )
    fm = FastMail(conf) #creates a FastMail instance with the config
    await fm.send_message(message_schema)#sends message to the company's email box

    #deletes temporary files after after email is sent, prevents the server from filling up with uploaded files
    for path in [cv_path, rec_letter_path, app_letter_path, photo_path]:
        if os.path.exists(path):
            os.remove(path)
 

    #create database entry

    new_entry = Internship(
        full_name=full_name,
        email=email,
        school=school,
        phone_number=phone_number,
        cv_path = cv_path,
        message=message,
        department=department,
        recommendation =rec_letter_path,
        application = app_letter_path,
        photo_path = photo_path,
        professional=professional
    )
    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)

    return {"message":"internship application sent successfully via email"}





