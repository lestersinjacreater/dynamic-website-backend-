# **Dynamic Website Backend**

## **Project Overview**

This project is a backend application built using **TypeScript**, **Express**, and **MongoDB**. The system is designed to handle updates and testimonials dynamically, allowing:

- **Admins** to create, manage, and delete updates and testimonials.
- **Users** to submit testimonials for approval.

The project is structured to ensure **scalability**, **security**, and **maintainability**.

## **Features**

### **Dynamic Updates Management**
- Admins can create, fetch, and delete updates.

### **Testimonials Management**
- Users can submit testimonials.
- Admins can approve or delete testimonials.

### **Authentication**
- Admin-protected routes using JWT authentication.

### **Database Integration**
- Uses MongoDB for data persistence.

## **Project Setup**

### **Prerequisites**

Ensure you have the following installed on your machine:

- Node.js
- MongoDB
- TypeScript

### **Installation Steps**

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd dynamic-website-backend

2. **Install Dependencies:**
   ```bash
   npm install

3. **Configure Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:

   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000

4. **Run the Application:**
   ```bash
   npm run build

5. **Project Structure:**
Path	Description
src/	Root directory for source code
src/config/	Configuration files
src/config/db.ts	MongoDB connection
src/models/	Database schemas
src/models/update.model.ts	Update schema
src/models/testimonial.model.ts	Testimonial schema
src/routes/	API routes
src/routes/update.routes.ts	Routes for updates
src/routes/testimonial.routes.ts	Routes for testimonials
src/middlewares/	Middleware files
src/middlewares/auth.middleware.ts	JWT authentication middleware
src/controllers/	Route logic
src/controllers/update.controller.ts	Logic for update routes
src/controllers/testimonial.controller.ts	Logic for testimonial routes
src/app.ts	App initialization
src/server.ts	Server entry point
.env.example	Environment variables template


6. **API Documentation:**
   **API Endpoints**
   Update Routes

   Method	Endpoint	Description	Protected
GET	/api/updates	Fetch all updates	No
POST	/api/updates	Create a new update	Yes
DELETE	/api/updates/:id	Delete an update	Yes

Testimonial Routes

Method	Endpoint	Description	Protected
GET	/api/testimonials	Fetch all testimonials	No
POST	/api/testimonials	Submit a new testimonial	No
PATCH	/api/testimonials/:id/approve	Approve a testimonial	Yes
DELETE	/api/testimonials/:id	Delete a testimonial	Yes


7. **Running the Application**

     **Development Mode**
       To run the project in development mode with nodemon, use:
         ```bash
             npm run dev


     **Production Mode**
    To run the project in production mode, use:
      ```bash
          npm start


9. **Testing the API**
You can use tools like Postman or Thunder Client to test the endpoints. 
Ensure the server is running and the database connection is established.

10. **Deployment**

You can deploy this backend to cloud platforms such as:
Render
Railway
AWS

**Ensure you**
Set the environment variables on the platform.
Update your MongoDB connection string to a cloud-hosted database like MongoDB Atlas.

**Additional Notes**
Always secure your JWT_SECRET and MONGO_URI using environment variables.
Use HTTPS in production to secure API communications.

**Contributing**
Feel free to fork the repository and create a pull request with your enhancements or bug fixes.
**License**
This project is licensed under the MIT License.


**Acknowledgements**
Special thanks to the open-source community for the amazing tools and libraries used in this project.







  





