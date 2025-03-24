# Tech Job Manager - Documentation

![image](https://github.com/user-attachments/assets/0b615244-e5b6-48d7-a36c-adeda5fe6cd1)
![image](https://github.com/user-attachments/assets/3205c92e-49c9-4cb3-9e20-dd0d257fb03e)


## Overview

Tech Job Manager is an application designed to help manage and track job opportunities in the tech industry. The platform allows users to create, view, and manage job listings for various tech roles, enabling seamless interaction between employers and potential candidates.

The project includes features such as job creation, job list display, and job deletion. The app is built using modern web technologies like React, Supabase, Tailwind CSS, and Shadcn components.

## Key Features

- **Job Creation**: Employers can add new job listings, including job title, company, area of expertise, link to the job posting, and seniority level.
- **Job Listing**: Users can view all available job listings, with sorting and filtering options.
- **Job Deletion**: Administrators or authorized users can remove job postings from the platform.
- **Form Validation**: Uses Zod for schema validation on form data to ensure only valid entries are submitted.
- **Responsive UI**: The app is fully responsive and works on both desktop and mobile devices.
- **Toast Notifications**: Displays success and error messages when actions (e.g., job creation or deletion) are completed.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Supabase**: A backend-as-a-service (BaaS) platform used for managing the job data in a PostgreSQL database.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.
- **Shadcn**: Provides pre-designed UI components such as dialogs, buttons, and forms.
- **Zod**: A TypeScript-first schema validation library used for form validation.
- **React Hook Form**: A library to handle form state and validation in React.
- **Toast**: Displays feedback messages to the user for success or failure events.
- **TypeScript**: A superset of JavaScript that adds static typing to the language.

## Features Breakdown

### 1. **Job Creation Form**

The job creation form allows users to add a new job listing by providing the following fields:

- **Title**: The title of the job (e.g., Frontend Developer, Backend Engineer).
- **Area**: The area of expertise (e.g., Frontend, Backend, Full-stack).
- **Company**: The name of the company offering the job.
- **Link**: A URL linking to the full job listing (e.g., LinkedIn, company careers page).
- **Seniority**: The level of seniority for the position (e.g., Intern, Junior, Senior, Tech Lead).

This form is validated using Zod to ensure that the data entered is correct. After successful submission, the form will reset, and a toast notification will appear confirming the creation of the job listing.

### 2. **Job List**

The job list page displays a collection of all the job listings stored in the database. Each job listing includes:

- **Title**: The name of the job.
- **Company**: The company offering the job.
- **Area**: The area of expertise.
- **Seniority**: The seniority level required for the job.
- **Created At**: The date and time when the job was posted.

Job listings are fetched from the Supabase database and displayed in a structured format. The list can be sorted and filtered based on different criteria.

### 3. **Job Deletion**

Users can delete job listings by clicking a delete button next to each job. This action will remove the listing from the database and update the job list dynamically.

### 4. **Toast Notifications**

Toast notifications are used throughout the application to provide feedback to the user. These notifications can indicate:

- Success: When a job is created or deleted successfully.
- Error: When an error occurs during the job creation or deletion process.

Notifications provide immediate feedback and improve the user experience.

## Project Structure

The project follows a modular structure with clearly defined components and hooks to handle various application functionalities.

### `components/`

- **`JobForm.tsx`**: Contains the form used to create or edit a job.
- **`JobList.tsx`**: Displays the list of jobs fetched from the Supabase database.
- **`Loading.tsx`**: A loading spinner that appears while the data is being fetched.
- **`JobDialog.tsx`**: A dialog component that wraps the job creation form inside a modal.
- **`Toast.tsx`**: A toast component for showing success and error messages.
- **`Button.tsx`**: A reusable button component used throughout the app.

### `lib/`

- **`supabase.ts`**: Configuration file to set up and initialize Supabase client for database interactions.

### `app/actions.ts`

- Contains the logic for interacting with Supabase to create, fetch, and delete job listings.

## Setup and Installation

To get the project up and running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/tech-job-manager.git
   cd your-project

2. Install the dependencies:

   ```bash
    yarn add

4. Create a .env.local file in the root directory and add the following environment variables:
   ```bash
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key

5. Start the development server:

   ```bash
    yarn dev


Conclusion
Tech Job Manager is a simple yet effective tool for managing job opportunities in the tech industry. By utilizing Supabase for backend services, React for frontend development, and Tailwind CSS for styling, it provides an easy-to-use, fully-functional application for both job seekers and employers.

