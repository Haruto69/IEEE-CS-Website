# IEEE-CS-Website

This is the official website for the IEEE Computer Society hackathon/event. It includes a **Django backend** and a **React frontend**.

## Project Structure

```
.
├── backend/             # Django backend
├── frontend/            # React frontend
├── README.md
└── requirements.txt
```

## Prerequisites

Make sure you have the following installed:

* Python 3.10+
* Node.js 18+ and npm
* Git

---

## Backend Setup (Django)

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create a virtual environment (if not already created):

```bash
python -m venv venv
```

3. Activate the virtual environment:

* **Windows (PowerShell)**:

```bash
.\venv\Scripts\Activate
```

* **Linux / macOS**:

```bash
source venv/bin/activate
```

4. Install dependencies:

```bash
pip install -r requirements.txt
```

5. Apply database migrations:

```bash
python manage.py migrate
```

6. Run the development server:

```bash
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000/`.

---

## Frontend Setup (React)

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

The frontend will be available at `http://localhost:3000/`.

---

## Notes

* **Static Files**: Ensure your Django settings for `STATIC_URL` and `STATICFILES_DIRS` point correctly to where your frontend builds or static files are stored.
* **API Requests**: Your React app should call the Django backend API (usually `http://127.0.0.1:8000/api/...`).

---

## Troubleshooting

* If you see errors about `react-scripts` not found, run:

```bash
npm install
```

* If Django warns about unapplied migrations:

```bash
python manage.py migrate
```

* If static files warnings appear, ensure `STATICFILES_DIRS` exists or remove the path if you don’t have a frontend build folder.

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.
