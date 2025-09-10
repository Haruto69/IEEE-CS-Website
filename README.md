# IEEE-CS-Website

This is the official website for **IEEE Computer Society RNSIT** built with a **Django REST Framework backend** and a **React + TailwindCSS frontend**.

## 🚀 Features
- Django backend serving REST API endpoints (`/api/events/`, `/api/register/`).
- React frontend with TailwindCSS for styling.
- Interactive event listing.
- Easily extensible for new features like registrations, authentication, and announcements.

## 🛠️ Tech Stack
- **Backend:** Django, Django REST Framework
- **Frontend:** React, TailwindCSS, Axios
- **Database:** SQLite (default, can be changed to PostgreSQL/MySQL)
- **Version Control:** Git & GitHub

## 📂 Project Structure
```
IEEE-CS-Website/
│── backend/        # Django backend (API + admin + models)
│── frontend/       # React frontend (UI + Axios API calls)
│── .gitignore
│── README.md
```

## ⚡ Setup Instructions

### Backend (Django)
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # (Linux/Mac)
   venv\Scripts\activate    # (Windows)
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Django server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React + TailwindCSS)
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## 🌐 Access
- Backend API: [http://127.0.0.1:8000/api/events/](http://127.0.0.1:8000/api/events/)
- Frontend React App: [http://localhost:3000](http://localhost:3000)

## 👥 Contributors
- IEEE Computer Society RNSIT Students

---
🔴 Background with red-highlighted text design planned for homepage with IEEE-CS and ImpactX logos.
