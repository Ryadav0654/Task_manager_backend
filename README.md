# Task Manager Backend

This is the backend application for the Task Manager, built using **Express**, **Node.js 22**, **TypeScript**, and **MongoDB**.

## Table of Contents
- [Project Setup](#project-setup)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

# Project Setup
# Prerequisites
Ensure you have the following installed:

- **Node.js 22**: Download and install the latest LTS version from [Node.js](https://nodejs.org/).
- **MongoDB**: Make sure MongoDB is installed and running locally or use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **TypeScript**: TypeScript is used for static typing. It's a dev dependency in the project, but you can install it globally using:
  
```bash
  npm install -g typescript
```
# Installation
1. Clone the Repository:
```bash
git clone <repository-url>
cd task-manager-backend
```
2. Install Dependencies: Install all project dependencies:
```bash
pnpm install
```
# Running the Development Server
To start the development server with live reloading:

```bash
pnpm dev
```
The server will be available at http://localhost:3000.

# Building for Production
To build the project for production:

```bash
pnpm build
```
This will compile the TypeScript code into JavaScript and place the compiled files in the `dist` folder.

# Running the Production Server
Once built, run the production server using:

```bash
pnpm start
```
# Environment Variables
Create a `.env` file in the root of the project to define environment variables. Below is an example:

```bash
MONGODB_URI=mongodb://localhost:27017/task-manager
PORT=8080
NODE_ENV=development
```

- MONGODB_URI: The URI for your MongoDB instance.
- PORT: The port on which the server will run.
- NODE_ENV: Set to development or production.

# Project Structure
Here’s an overview of the primary folders and files in the project:

```bash
task-manager-backend/
├── src/                     
│   ├── controllers/          # Controller functions for handling requests
│   ├── models/               # Mongoose models for database schema
│   ├── routes/               # Route handlers for Express
│   ├── middleware/           # Express middleware (e.g., authentication)
│   ├── utils/                # Utility functions
│   ├── app.ts                # Express app setup and middleware
│   ├── server.ts             # Server entry point
│   └── config.ts             # Configuration file (e.g., environment variables)
├── .env                     # Environment variables
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and dependencies
└── pnpm-lock.yaml           # Lockfile for PNPM
```
# Technologies Used
- Express - Web framework for Node.js
- Node.js 22 - JavaScript runtime for the backend
- TypeScript - A typed superset of JavaScript for better maintainability
- MongoDB - NoSQL database for storing task data
- Mongoose - MongoDB object modeling tool

# Contributing
If you’d like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

Steps to contribute:
1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit and push (git push origin feature/your-feature)
5. Create a pull request

