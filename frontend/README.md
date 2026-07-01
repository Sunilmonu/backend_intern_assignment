# Task Management System

## Overview

This project is a full-stack Task Management application developed as part of a Backend Developer Internship assignment. It provides secure user authentication using JWT, task management through RESTful APIs, and a React-based frontend for interacting with the backend services.

## Features

### Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing
* Protected routes

### Task Management

* Create tasks
* View tasks
* Update tasks
* Delete tasks

### Backend

* RESTful API using Django REST Framework
* JWT authentication using Simple JWT
* Input validation
* Error handling
* API versioning
* Swagger API documentation

### Frontend

* React.js with Vite
* Axios for API communication
* React Router for navigation
* Bootstrap for responsive UI

---

## Technologies Used

### Backend

* Python
* Django
* Django REST Framework
* Simple JWT
* SQLite

### Frontend

* React.js
* Vite
* Axios
* Bootstrap
* React Router DOM

---

## Project Structure

```
project-assignment/
│
├── backend/
│   ├── config/
│   ├── users/
│   ├── tasks/
│   ├── manage.py
│   ├── requirements.txt
│   └── db.sqlite3
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Backend Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux/macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Start the development server:

```bash
python manage.py runserver
```

The backend server will be available at:

```
http://127.0.0.1:8000/
```

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will be available at:

```
http://localhost:5173/
```

---

## API Documentation

Swagger UI:

```
http://127.0.0.1:8000/api/docs/
```

OpenAPI Schema:

```
http://127.0.0.1:8000/api/schema/
```

---

## Authentication Endpoints

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/api/v1/auth/register/` | Register a new user      |
| POST   | `/api/v1/auth/login/`    | Authenticate user        |
| POST   | `/api/v1/auth/refresh/`  | Refresh JWT access token |

---

## Task Endpoints

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| GET    | `/api/v1/tasks/`      | Retrieve all tasks      |
| POST   | `/api/v1/tasks/`      | Create a new task       |
| PUT    | `/api/v1/tasks/{id}/` | Update a task           |
| PATCH  | `/api/v1/tasks/{id}/` | Partially update a task |
| DELETE | `/api/v1/tasks/{id}/` | Delete a task           |

---

## Security

* Password hashing
* JWT-based authentication
* Protected API endpoints
* Request validation
* Structured error responses

---

## Scalability

The project follows a modular architecture by separating authentication and task management into individual Django applications. The frontend communicates with the backend through REST APIs, making it easy to extend or replace components independently.

Possible improvements for production deployment include:

* PostgreSQL or MySQL as the production database
* Redis for caching
* Docker for containerization
* Reverse proxy and load balancing
* Background task processing with Celery
* Centralized logging and monitoring

---

## Assignment Requirements Covered

* User registration
* User login
* JWT authentication
* CRUD operations
* RESTful API design
* Database integration
* API documentation
* Frontend integration
* Input validation
* Error handling
* Protected routes

---

## Author

Sunil Kumar
