# 🚀 Realtime Workspace App

A full-stack real-time collaboration platform that enables users to create workspaces, manage team communication, and exchange messages instantly using modern web technologies.

---

# 📌 Project Overview

Realtime Workspace App is designed to provide a collaborative environment where multiple users can:

* Register and authenticate securely
* Create and manage workspaces
* Join workspace discussions
* Exchange real-time messages
* Collaborate efficiently within teams

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* MongoDB
* Mongoose

## Authentication & Security

* JWT Authentication
* bcryptjs Password Hashing
* Protected Routes Middleware

---

# 📂 Project Structure

```bash
realtime-workspace-app
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── server
│   ├── src
│   │   ├── config
│   │   │   └── db.ts
│   │   │
│   │   ├── controllers
│   │   │   ├── authController.ts
│   │   │   └── workspaceController.ts
│   │   │
│   │   ├── middleware
│   │   │   └── authMiddleware.ts
│   │   │
│   │   ├── models
│   │   │   ├── User.ts
│   │   │   ├── Workspace.ts
│   │   │   └── Message.ts
│   │   │
│   │   ├── routes
│   │   │   ├── authRoutes.ts
│   │   │   └── workspaceRoutes.ts
│   │   │
│   │   └── app.ts
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🔐 Authentication Flow

1. User Registration
2. Password Hashing using bcryptjs
3. JWT Token Generation
4. Protected Route Access
5. Token Verification Middleware

---

# 🗄️ Database Models

## User

* name
* email
* password

## Workspace

* name
* description
* owner
* members

## Message

* sender
* workspace
* content
* timestamp

---

# ✅ Week 1 Progress Completed

### Backend Setup

* Express.js + TypeScript configured
* MongoDB integration completed
* Environment variables configured

### Authentication

* User Registration API
* User Login API
* Password Hashing (bcryptjs)
* JWT Authentication

### Frontend Setup

* React application initialized using Vite
* Tailwind CSS configured
* Monorepo structure established

---

# ✅ Week 2 Progress Completed

### Database Design

* User Schema
* Workspace Schema
* Message Schema

### REST APIs

* Create Workspace API
* Get All Workspaces API

### Security

* JWT Middleware
* Protected Routes
* Route Authorization

### Testing

* API Testing using Thunder Client
* MongoDB Integration Verification
* Authentication Testing

---

# 🚀 Upcoming Development (Week 3)

* React Authentication UI
* Login Page
* Registration Page
* Dashboard
* Workspace Management UI
* Socket.IO Integration
* Real-Time Messaging

---

# 🎯 Current Status

| Module          | Status         |
| --------------- | -------------- |
| Authentication  | ✅ Completed    |
| Database Models | ✅ Completed    |
| REST APIs       | ✅ Completed    |
| JWT Security    | ✅ Completed    |
| Frontend UI     | 🚧 In Progress |
| Real-Time Chat  | ⏳ Upcoming     |

---

# 👨‍💻 Author

Madhura Patil

Data Science Student | Full Stack Developer

Internship Project: Realtime Workspace App
