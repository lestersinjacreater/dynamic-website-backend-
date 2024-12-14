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
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
