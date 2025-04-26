# Job Portal Web Application

The **Job Portal** is a full-stack web application designed to connect job seekers with employers. It provides features for job seekers to browse and apply for jobs, and for recruiters to post and manage job listings. The application is built using **React**, **Node.js**, **Express.js**, and **MongoDB**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Frontend Documentation](#frontend-documentation)
  - [Pages](#pages)
  - [Components](#components)
- [Backend Documentation](#backend-documentation)

---

## Features

### For Job Seekers:
- Browse job listings by category, location, and title.
- Apply for jobs after uploading a resume.
- View applied jobs and their statuses.

### For Recruiters:
- Register and log in as a company.
- Post job listings with details like title, description, location, and salary.
- Manage job visibility and view applicants for each job.
- Update the status of job applications (e.g., Accepted, Rejected).

---

## Tech Stack

### Frontend:
- **React**: For building the user interface.
- **Tailwind CSS**: For styling.
- **React Router**: For navigation.
- **Axios**: For API requests.
- **Quill**: For rich text editing in job descriptions.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For database management.
- **Mongoose**: For object data modeling.
- **Cloudinary**: For file uploads (e.g., resumes, company logos).
- **Clerk**: For user authentication.
- **Sentry**: For error tracking.

---

## Folder Structure

```
job-portal/
├── client/                  # Frontend code
│   ├── public/              # Static assets
│   ├── src/                 # React components, pages, and context
│   ├── .env                 # Frontend environment variables
│   ├── vite.config.js       # Vite configuration
│   └── package.json         # Frontend dependencies
├── server/                  # Backend code
│   ├── config/              # Configuration files (e.g., database, Cloudinary)
│   ├── controllers/         # API controllers
│   ├── middleware/          # Middleware for authentication
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── .env                 # Backend environment variables
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
├── README.md                # Main documentation
└── .gitignore               # Git ignore file
```

---

## Installation

### Prerequisites:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account for file uploads

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/job-portal.git
   cd job-portal
   ```

2. Set up the backend:
   ```bash
   cd server
   npm install
   ```

3. Set up the frontend:
   ```bash
   cd ../client
   npm install
   ```

4. Configure environment variables (see [Environment Variables](#environment-variables)).

5. Start the backend server:
   ```bash
   cd ../server
   npm start
   ```

6. Start the frontend development server:
   ```bash
   cd ../client
   npm run dev
   ```

---

## Environment Variables

### Backend (`server/.env`):
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

### Frontend (`client/.env`):
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

---

## Frontend Documentation

The frontend is built using **React** and **Vite**. It includes the following key components and pages:

### Pages:
1. **Home**: Displays the hero section, job listings, and trusted companies.
2. **Apply Job**: Allows job seekers to view job details and apply.
3. **Applications**: Displays the list of jobs the user has applied for.
4. **Dashboard**: Recruiter panel for managing jobs and applications.
   - **Add Job**: Form for recruiters to post new jobs.
   - **Manage Jobs**: List of jobs posted by the recruiter with visibility toggles.
   - **View Applications**: List of applicants for the recruiter's jobs.

### Components:
1. **Navbar**: Navigation bar for job seekers and recruiters.
2. **Hero**: Search bar and promotional content.
3. **JobListing**: Displays a list of jobs with filters for categories and locations.
4. **JobCard**: Displays individual job details in a card format.
5. **RecruiterLogin**: Modal for recruiter login and registration.
6. **AppDownload**: Section promoting the mobile app.
7. **Footer**: Footer with social media links and copyright information.
8. **Loading**: Loading spinner for asynchronous operations.

---

## Backend Documentation

The backend is built using **Node.js** and **Express.js**. It includes the following key features:

### API Endpoints:

#### User Routes:
| Method | Endpoint               | Description                     |
|--------|-------------------------|---------------------------------|
| GET    | `/api/users/user`       | Get user data                  |
| POST   | `/api/users/apply`      | Apply for a job                |
| GET    | `/api/users/applications` | Get user job applications      |
| POST   | `/api/users/update-resume` | Upload or update user resume   |

#### Job Routes:
| Method | Endpoint       | Description                     |
|--------|-----------------|---------------------------------|
| GET    | `/api/jobs`     | Get all visible jobs           |
| GET    | `/api/jobs/:id` | Get job details by ID          |

#### Company Routes:
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

#### Webhooks:
| Method | Endpoint       | Description                     |
|--------|-----------------|---------------------------------|
| POST   | `/webhooks`     | Handle Clerk webhooks          |

### Middleware:
- **`authMiddleware.js`**: Protects routes by verifying JWT tokens.

### Error Tracking:
- **Sentry** is used for error tracking and debugging.

---
