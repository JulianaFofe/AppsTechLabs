from fastapi import FastAPI
from app.services.database import Base, engine
from app.routers import internship
from fastapi.middleware.cors import CORSMiddleware

#creating db tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

#alows fastapi to interact and share resources with frontend running in the given url
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],#the frontend url
    allow_credentials = True,#allows froontend to send cookies or authentication headers
    allow_methods=["*"],#specifies what HTTP methods are required for the front end("*" means all methods)
    allow_headers=["*"]#allows front end to send all custom headers
)



#registering the routers
app.include_router(internship.router)

@app.get("/")
def root():
    return{"message":"Backend is running"}
