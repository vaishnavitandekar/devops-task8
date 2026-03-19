# DevOps Internship – Day 8 Task

This repository is created as part of the **Yumaris Agency DevOps Internship Program**, focusing on building real-world, production-ready DevOps solutions.

---

## Task Objective

Create a Dockerized backend application with a database using Docker Compose, implement environment-based configuration, and run the full application locally.

---

## Steps Performed

* Created a backend application using Node.js and Express
* Connected the application with PostgreSQL database
* Structured the project with proper modular code (routes, DB config)
* Wrote a Dockerfile to containerize the backend service
* Configured environment variables using `.env` file
* Created `docker-compose.yml` for multi-container setup (backend + database)
* Implemented persistent storage using Docker volumes
* Built and ran containers using Docker Compose
* Tested API endpoints using browser and Postman

---

## Docker Commands Used

* docker-compose up --build
* docker ps
* docker-compose down

---

## Tools Used

* Docker
* Docker Compose
* Node.js
* Express.js
* PostgreSQL

---

## Key Learnings

* Containerizing backend applications using Docker
* Managing multi-container applications with Docker Compose
* Using environment variables for configuration management
* Connecting backend services with databases inside Docker network
* Implementing persistent storage using Docker volumes
* Running and testing APIs inside containerized environments

---

## API Endpoints

* **GET /** → Check backend status
* **GET /users/init** → Initialize database table
* **POST /users** → Create a new user
* **GET /users** → Fetch all users
* **DELETE /users/:id** → Delete user

---

## Internship Context

This task is part of the **Yumaris Agency DevOps Internship**, where the focus is on gaining hands-on experience with:

* Real-world DevOps tools
* Containerization and orchestration
* Backend deployment workflows
* Industry best practices

---

## Conclusion

Successfully built and deployed a Dockerized backend application with PostgreSQL, demonstrating real-world DevOps practices such as containerization, service orchestration, and environment-based configuration.
