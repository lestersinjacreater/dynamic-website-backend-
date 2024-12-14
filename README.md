Dynamic Website Backend

Project Overview

This project is a backend application built using TypeScript, Express, and MongoDB. The system is designed to handle updates and testimonials dynamically, allowing:

Admins to create, manage, and delete updates and testimonials.

Users to submit testimonials for approval.

The project is structured to ensure scalability, security, and maintainability.

Features

Dynamic Updates Management:

Admins can create, fetch, and delete updates.

Testimonials Management:

Users can submit testimonials.

Admins can approve or delete testimonials.

Authentication:

Admin-protected routes using JWT authentication.

Database Integration:

Uses MongoDB for data persistence.

Project Setup

Prerequisites

Ensure you have the following installed on your machine:

Node.js

MongoDB

TypeScript

Installation Steps

Clone the Repository:

git clone <repository-url>
cd dynamic-website-backend

Install Dependencies:

npm install

Setup Environment Variables:
Create a .env file in the root directory and include the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

Build the Project:
Compile the TypeScript code into JavaScript:

npm run build

Start the Server:

npm start

Project Structure

src/
  |-- config/
      |-- db.ts               # MongoDB connection
  |-- models/
      |-- update.model.ts     # Update schema
      |-- testimonial.model.ts # Testimonial schema
  |-- routes/
      |-- update.routes.ts    # Routes for updates
      |-- testimonial.routes.ts # Routes for testimonials
  |-- middlewares/
      |-- auth.middleware.ts  # JWT authentication middleware
  |-- controllers/
      |-- update.controller.ts # Logic for update routes
      |-- testimonial.controller.ts # Logic for testimonial routes
  |-- app.ts                  # App initialization
  |-- server.ts               # Server entry point
.env.example                  # Environment variables template

API Endpoints

Update Routes

Method

Endpoint

Description

Protected

GET

/api/updates

Fetch all updates

No

POST

/api/updates

Create a new update

Yes

DELETE

/api/updates/:id

Delete an update

Yes


| Method | Endpoint                        | Description              | Protected |
| ------ | ------------------------------- | ------------------------ | --------- |
| GET    | `/api/testimonials`             | Fetch all testimonials   | No        |
| POST   | `/api/testimonials`             | Submit a new testimonial | No        |
| PATCH  | `/api/testimonials/:id/approve` | Approve a testimonial    | Yes       |
| DELETE | `/api/testimonials/:id`         | Delete a testimonial     | Yes       |


Running the Application

Development Mode

To run the project in development mode with nodemon, use:

npm run dev

Production Mode

To run the compiled JavaScript in production:

npm start

Testing the API

You can use tools like Postman or Thunder Client to test the endpoints. Ensure the server is running and the database connection is established.

Deployment

You can deploy this backend to cloud platforms such as:

Render

Railway

AWS

Ensure you:

Set the environment variables on the platform.

Update your MongoDB connection string to a cloud-hosted database like MongoDB Atlas.

Additional Notes

Always secure your JWT_SECRET and MONGO_URI using environment variables.

Use HTTPS in production to secure API communications.

Contributing

Feel free to fork the repository and create a pull request with your enhancements or bug fixes.

License

This project is licensed under the MIT License.

Acknowledgements

Special thanks to the open-source community for the amazing tools and libraries used in this project.

