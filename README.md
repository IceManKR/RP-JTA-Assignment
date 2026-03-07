# Task Tracker API

A backend system for user authentication and task management built with **Node.js, Express, PostgreSQL, and Prisma**.

## Features

- User registration and login
- JWT authentication
- Role-based access control
- Task CRUD operations
- Input validation
- Automated tests

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT
- Zod validation
- Jest & Supertest

## Setup
# Backend Setup
Clone the repository:
```
git clone https://github.com/IceManKR/RP-JTA-Backend.git
cd RP-JTA-Backend
```

Install dependencies:
```
npm install
```


Create a `.env` file using `.env.example`:
```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
PORT=5000
```

Run database migrations:
```
npx prisma migrate dev
```
Start the server:
```
npm run dev
```
Server runs on:
```
http://localhost:5000/
```
# Frontend Setup

Navigate to the frontend folder:

```bash
cd task-tracker-frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```
## Running Tests
```
npm test
```

## API Endpoints

### Authentication
```
POST /auth/register
POST /auth/login
```

### Tasks
```
POST /tasks
GET /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

### Users
```
GET /users/profile
GET /users (admin)
DELETE /users/:id (admin)
```

## Environment Variables

See `.env.example` for required variables.

## Project Structure
```
RP-JTA-Backend
│
├── prisma
│
├── src
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── utils
│   ├── validators
│   └── app.js
│
├── task-tracker-frontend
│
├── tests
│
├── server.js
├── package.json
└── README.md
```

## Author

Suhas Karjigi
