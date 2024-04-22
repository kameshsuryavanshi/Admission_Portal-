**README.md:**
This admission portal project is a web application built using Node.js, Express, and MongoDB Atlas as the database. It allows users to submit their admission details through a form, including personal information such as full name, email, phone number, and address, as well as academic information like marks in 10th and 12th standards, degree name, college name, year of passing, CGPA or percentage, specialization, GATE score, work experience, and a statement of purpose (SOP).

**index.html:**
The HTML file contains a form with input fields for the admission parameters mentioned above. It also includes a submit button to send the form data to the backend for processing.

**styles.css:**
The CSS file provides styling for the HTML elements, ensuring a visually appealing and user-friendly interface for the admission form and other components of the web application.

**app.js:**
The Node.js backend file sets up the server using Express, establishes a connection to the MongoDB Atlas database, defines a mongoose schema for the student data, and handles POST requests to save admission data submitted through the form.

**script.js:**
The JavaScript file handles form submission on the client-side, preventing the default form behavior, collecting form data using FormData, sending a POST request to the backend API endpoint with the data in JSON format, and displaying success or error messages to the user.

**MongoDB Atlas as Database:**
MongoDB Atlas is used as the cloud-hosted database for storing admission data. It provides scalability, reliability, and security for handling large volumes of data generated from student admissions. The parameters in the admission form correspond to the fields defined in the MongoDB schema for efficient data storage and retrieval.
