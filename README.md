# Appstech
Appstech web development project

# Tech Stack 
- Languages  (Fastapi, React, TypeScript)
- Tools (Tailwind css, react-router-dom, react-icons)

## Clone Repository
- git clone https://github.com/Yebitbryanche/Appstech

# Install dependencies
npm install
npm install react-icons
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite

# Start the development server
npm run dev

# Appstech Backend - Internship application system
 this is the backendAPI for the Appstech website, built with **FASTAPI
 it handles form submissio for:
 -Academic internship application
 -Professional internship application
# features
  - REST API endpoints for submitting applications
  - Validation using Pydantic schemas
  - Database integration with SQLAlchemy
  - Ready for deployment with Uvicorn
  - Easy to integrate with ReactJS frontend

# create and activate a virtual environment
  python3 -m venv venv
  source venv/bin/activate 

# Install Dependencies
  pip install -r requirements.txt

# Run the development server
  first do: "cd Backend" on your terminal
  uvicorn app.main:app --reload
  the api will be at "http://127.0.0.1:8000"
  the swagger ui will be at " http://127.0.0.1:8000/docs" 

