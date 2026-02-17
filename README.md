# Album Gallery

The Album Gallery full-stack application is built using Django and Django REST Framework
and provides a RESTful API for managing albums and a React frontend for UI/UX.

## Overview

The backend provides:

- Album CRUD API endpoints
- Search and ordering support
- Pagination
- External data seeding command
- Environment-based configuration
- CORS support for frontend integration

## Prerequisites

Ensure you have the following installed:

- Python 3.11+
- pip
- virtual environment tools

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/HugsyMal0n3/album_gallery.git
cd album_gallery
```

### 2. Create and activate virtual environment

**macOS / Linux**

```bash
python -m venv venv
source venv/bin/activate
```

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

If a requirements file is not provided:

```bash
pip install django djangorestframework django-environ django-cors-headers django-filter requests
```

---

## Environment Configuration

Navigate to the backend directory:

```bash
cd album_gallery/backend
```

Create a `.env` file based on the example and provide values for:

- DEBUG
- SECRET_KEY
- ALLOWED_HOSTS
- CORS_ALLOWED_ORIGINS

Example `.env`:

```
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=127.0.0.1,localhost
CORS_ALLOWED_ORIGINS=http://127.0.0.1:5173,http://localhost:5173
```

Navigate to the frontend directory:

```bash
cd album_gallery/frontend
```

Create a `.env` file based on the example and provide values for:

- VITE_API_URL

Example `.env`:

```
VITE_API_URL=http://127.0.0.1:8000/api/albums/
```

Never commit secrets to version control.

## Database Setup

Apply migrations:

```bash
python manage.py migrate
```

This project uses SQLite by default for development.

## Seeding Initial Data (Optional)

Populate the database with sample albums from an external API:

```bash
python manage.py seed_albums
```

This command:

- Fetches album data from the external API
- Inserts records safely using transactions
- Prevents duplicates via external IDs

## Running the Development Server

```bash
python manage.py runserver
```

Default address:

```
http://127.0.0.1:8000/api/albums/
```

## API Features

### Albums Endpoint

Supports:

- List albums
- Retrieve single album
- Create album
- Search by title
- Ordering
- Pagination

### Pagination

- Default page size: 12
- Maximum page size: 100

Configurable in backend via query parameter:

```
?page=1&page_size=20
```

### Searching

```
?search=<title>
```

### Ordering

```
?ordering=created_at
?ordering=-created_at
?ordering=title
```

Default ordering: newest first

## Model Summary

Album fields:

| Field       | Type     | Description                |
| ----------- | -------- | -------------------------- |
| id          | Integer  | Primary key                |
| title       | String   | Album title                |
| created_at  | DateTime | Creation timestamp         |
| updated_at  | DateTime | Last updated               |
| external_id | Integer  | External source identifier |

Constraints:

- Title cannot be empty
- External ID must be unique if provided

## Production Considerations

Before deploying:

- Set `DEBUG=False`
- Use a strong SECRET_KEY
- Configure ALLOWED_HOSTS
- Configure CORS origins
- Replace SQLite with PostgreSQL or another production database
- Enable HTTPS
- Configure static file handling
- Use a production WSGI/ASGI server (e.g. gunicorn)
- Add logging and monitoring

## Troubleshooting

### Module not found

Ensure virtual environment is activated and dependencies installed.

### Environment variables not loading

Confirm `.env` exists in backend root.

### Migration issues

Reset migrations if needed (development only):

```bash
rm db.sqlite3
python manage.py migrate
```

Then re-seed the database:

```bash
python manage.py seed_ablum
```

## Initialising React frontend

Navigate to the frontend directory:

```bash
cd album_gallery/frontend
npm install
```

Create an `.env` file in the root directory of frontend

## Running application locally in development mode

Run the backend developement server:

```bash
cd backend
python manage.py runserver
```

Run the frontend in development mode:

```bash
cd frontend
npm run dev
```

Open the app in your browser at the frontend URL (e.g. http://localhost:5173)
