**README.md:**

# Admission Portal Project

## Overview

The admission portal project is a dynamic web application designed to streamline the admission process for educational institutions. Leveraging Node.js, Express, and MongoDB Atlas, this application provides a user-friendly interface for students to submit their admission details conveniently.

## Features

- **Form Inputs:** The HTML form includes fields for personal information such as full name, email, phone number, and address.
- **Academic Details:** Students can input their academic information, including marks in 10th and 12th standards, degree name, college name, year of passing, CGPA or percentage, specialization, GATE score, and work experience.
- **Statement of Purpose (SOP):** The form allows students to articulate their motivations and career goals through a SOP input field.
- **Backend Processing:** The backend, powered by Node.js and Express, handles form submissions, validates data, and saves it to the MongoDB Atlas database.
- **Responsive Design:** CSS styling ensures a visually appealing and responsive layout across different devices.

## File Structure

- **index.html:** Contains the admission form with input fields and a submit button.
- **styles.css:** Provides styling for HTML elements, enhancing the user experience.
- **app.js:** Node.js backend file that establishes server connections, handles API requests, and interacts with the database.
- **script.js:** Client-side JavaScript for form submission handling and displaying success/error messages.

## Database

MongoDB Atlas is used as the cloud-hosted database, offering scalability, reliability, and security for storing student admission data efficiently.

**Get Started:** Clone this repository, set up the MongoDB connection URI in `app.js`, install dependencies using `npm install`, and run the server with `node app.js`. Access the application on your browser to experience the admission portal firsthand.
