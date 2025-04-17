# React + Vite

# Task Manager Web Application - MERN + MySQL Stack

A modular, React-based task management web application with route protection and context-based state handling. This app allows users to create, view, and delete tasks while handling authentication and routing securely. Built using React Hooks, Context API, and React Router DOM.

---

## Overview

This application serves as a basic foundation for task management systems that require user authentication and protected content access.

**Frontend** in React with optional Context API for state
**Session Management** via HTTP-only cookies
**Authentication** using JWT and bcrypt
**Secure backend** built with Node.js, Express, and MySQL

---

## Features

- User Sign-Up and Login functionality
  - Secure registration and login
  - JWT-based sessions
  - Password hashing using `bcryptjs`
  - Auth state managed via React Context
- Route protection for authenticated users
- Add tasks with:
  - Title
  - Description
  - Priority level
  - Due date
- View and Delete tasks with deletion feedback
- Modular codebase using component-based architecture

---

## Tech Stack

- **Frontend**: React (with Hooks and JSX)
- **Routing**: React Router v6
- **State Management**: Context API with `useContext` and `useState`
- **Styling**: Custom classes (Tailwind)
- **Deployment Ready**: Works well for both local dev and production builds

---

## Setup & Installation

- Clone the Repository

  git clone https://github.com/thisme8/task-manager-app.git
  cd task-manager-app

- Install Dependencies

  cd frontend

  npm install

  ***

  cd backend

  npm install

- Create a .env file (backend)

  DB_USER = "root"
  DB_PASSWORD = "your_mysql_password"
  DB_HOST = "localhost"
  DB_NAME = "tasks_manager_db"

  PORT = "8080"

  CORS_ORIGIN=http://localhost:5173
  JWT_SECRET=your_jwt_secret
  VITE_REACT_APP_API_URL= "http://localhost:8080/api/"

- Create a .env file (frontend)

  VITE_REACT_APP_API_URL= "http://localhost:8080/api/"

- Run the App

  npm run dev
