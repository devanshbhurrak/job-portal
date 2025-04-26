# Job Portal Server

This is the backend server for the Job Portal application. It is built using **Node.js**, **Express.js**, and **MongoDB**. The server handles user authentication, job postings, job applications, and other related functionalities.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Job Routes](#job-routes)
  - [Company Routes](#company-routes)
  - [Webhooks](#webhooks)
- [Middleware](#middleware)
- [Error Tracking](#error-tracking)

---

## Features

- User registration and login via Clerk.
- Company registration and login.
- Job posting and visibility management.
- Job application submission and tracking.
- Resume upload using **Cloudinary**.
- Error tracking with **Sentry**.
- Webhooks for real-time updates.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/job-portal.git
   cd job-portal/server
   npm install
   npm start
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the server:
   ```bash
   npm start
   ```

---

## Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
SENTRY_DSN=your_sentry_dsn
```

---

## Folder Structure

```
server/
├── config/
│   ├── cloudinary.js       # Cloudinary configuration
│   ├── db.js               # MongoDB connection
│   ├── instrument.js       # Sentry configuration
│   ├── multer.js           # Multer configuration for file uploads
├── controllers/
│   ├── companyController.js # Company-related logic
│   ├── jobController.js     # Job-related logic
│   ├── userController.js    # User-related logic
│   ├── webhooks.js          # Webhook handling
├── middleware/
│   ├── authMiddleware.js    # Authentication middleware
├── models/
│   ├── Company.js           # Company schema
│   ├── Job.js               # Job schema
│   ├── JobApplication.js    # Job application schema
│   ├── User.js              # User schema
├── routes/
│   ├── companyRoutes.js     # Routes for company-related APIs
│   ├── jobRoutes.js         # Routes for job-related APIs
│   ├── userRoutes.js        # Routes for user-related APIs
├── utils/
│   ├── generateToken.js     # Utility for generating JWT tokens
├── server.js                # Main server file
```

---

## API Endpoints

### User Routes

| Method | Endpoint               | Description                     |
|--------|-------------------------|---------------------------------|
| GET    | `/api/users/user`       | Get user data                  |
| POST   | `/api/users/apply`      | Apply for a job                |
| GET    | `/api/users/applications` | Get user job applications      |
| POST   | `/api/users/update-resume` | Upload or update user resume   |

#### Example Responses:

- **GET `/api/users/user`**:
  ```json
  {
    "success": true,
    "user": {
      "_id": "12345",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "resume": "https://cloudinary.com/resume.pdf",
      "image": "https://cloudinary.com/profile.jpg"
    }
  }
  ```

- **POST `/api/users/apply`**:
  ```json
  {
    "success": true,
    "message": "Application submitted successfully."
  }
  ```

- **GET `/api/users/applications`**:
  ```json
  {
    "success": true,
    "applications": [
      {
        "jobId": "job123",
        "status": "Pending",
        "date": 1682505600
      }
    ]
  }
  ```

- **POST `/api/users/update-resume`**:
  ```json
  {
    "success": true,
    "message": "Resume updated successfully."
  }
  ```

---

### Job Routes

| Method | Endpoint       | Description                     |
|--------|-----------------|---------------------------------|
| GET    | `/api/jobs`     | Get all visible jobs           |
| GET    | `/api/jobs/:id` | Get job details by ID          |

#### Example Responses:

- **GET `/api/jobs`**:
  ```json
  {
    "success": true,
    "jobs": [
      {
        "_id": "job123",
        "title": "Software Engineer",
        "description": "Develop and maintain web applications.",
        "location": "New York",
        "category": "IT",
        "level": "Mid",
        "salary": 120000,
        "visible": true
      }
    ]
  }
  ```

- **GET `/api/jobs/:id`**:
  ```json
  {
    "success": true,
    "job": {
      "_id": "job123",
      "title": "Software Engineer",
      "description": "Develop and maintain web applications.",
      "location": "New York",
      "category": "IT",
      "level": "Mid",
      "salary": 120000,
      "visible": true
    }
  }
  ```

---

### Company Routes

| Method | Endpoint                  | Description                              |
|--------|----------------------------|------------------------------------------|
| POST   | `/api/company/register`    | Register a new company                  |
| POST   | `/api/company/login`       | Login a company                         |
| GET    | `/api/company/company`     | Get company data                        |
| POST   | `/api/company/post-job`    | Post a new job                          |
| GET    | `/api/company/applicants`  | Get job applicants for the company      |
| GET    | `/api/company/list-jobs`   | Get jobs posted by the company          |
| POST   | `/api/company/change-status` | Change job application status          |
| POST   | `/api/company/change-visiblity` | Toggle job visibility                  |

#### Example Responses:

- **POST `/api/company/register`**:
  ```json
  {
    "success": true,
    "message": "Company registered successfully."
  }
  ```

- **POST `/api/company/login`**:
  ```json
  {
    "success": true,
    "token": "jwt-token"
  }
  ```

- **GET `/api/company/company`**:
  ```json
  {
    "success": true,
    "company": {
      "_id": "company123",
      "name": "Tech Corp",
      "email": "contact@techcorp.com"
    }
  }
  ```

---

### Webhooks

| Method | Endpoint       | Description                     |
|--------|-----------------|---------------------------------|
| POST   | `/webhooks`     | Handle Clerk webhooks          |

#### Example Response:

- **POST `/webhooks`**:
  ```json
  {
    "success": true,
    "message": "Webhook processed successfully."
  }
  ```

---

## Middleware

### `authMiddleware.js`

- **`protectCompany`**: Verifies the JWT token for company authentication.

---

## Error Tracking

The server uses **Sentry** for error tracking. To test Sentry integration, visit the `/debug-sentry` endpoint.

---
