# 🎓 Student Registration System

<div align="center">

### 🚀 A Full-Stack Student Registration Web Application

**React.js • Node.js • Express.js • MongoDB**

A simple and modern student registration system where users can submit their details and the information is securely stored in a MongoDB database.

<br>

![React](https://img.shields.io/badge/React.js-2026-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-API-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)

</div>

---

## 🌟 About The Project

**Student Registration System** is a full-stack web application developed using the MERN stack.

The application provides a registration form where students can enter their information. Once submitted, the data is sent from the React frontend to the Express/Node.js backend and stored in MongoDB.

### 🔄 How It Works

```text
👨‍🎓 Student
     │
     ▼
🖥️ React Registration Form
     │
     │ HTTP Request
     ▼
⚙️ Node.js + Express Server
     │
     │ MongoDB Query
     ▼
🍃 MongoDB Database
     │
     ▼
📊 Student Data Stored
```

---

## ✨ Features

| Feature               | Description                            |
| --------------------- | -------------------------------------- |
| 📝 Registration Form  | Collect student information            |
| ⚛️ React UI           | Interactive frontend                   |
| 🚀 REST API           | Backend API using Express              |
| 🍃 MongoDB            | Stores student records                 |
| 🔗 Frontend ↔ Backend | API communication                      |
| 🌐 CORS               | Allows frontend-backend communication  |
| 📦 JSON Data          | Handles API requests/responses         |
| 💾 Persistent Data    | Student data remains stored in MongoDB |

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 CSS
* 🌐 Fetch API

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔗 CORS

### Database

* 🍃 MongoDB
* 🧭 MongoDB Compass

### Tools

* 💻 VS Code
* 🐙 Git
* 🐙 GitHub

---

## 📂 Project Structure

```text
student/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   └── ...
│
├── public/
│
├── package.json
├── .gitignore
└── README.md
```

> Project structure may vary depending on the current implementation.

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/student-registration.git
```

### 2️⃣ Open the Project

```bash
cd student-registration
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the React Application

```bash
npm run dev
```

### 5️⃣ Start the Backend

Open another terminal and run your backend:

```bash
node server.js
```

> Replace `server.js` with your actual backend file if it has a different name.

---

## 🍃 MongoDB Setup

Make sure MongoDB is installed and running.

Example local connection:

```text
mongodb://127.0.0.1:27017/student
```

You can open **MongoDB Compass** to view the database and collections.

Example:

```text
MongoDB
   │
   └── student
        │
        └── students
              ├── Student 1
              ├── Student 2
              └── Student 3
```

---

## 🔐 Environment Variables

If you are using a `.env` file, create it locally:

```env
MONGO_URI=mongodb://127.0.0.1:27017/student
PORT=3000
```

⚠️ **Never upload `.env` to GitHub.**

Add this to `.gitignore`:

```gitignore
node_modules/
.env
```

---

## 📸 Screenshots

### 🖥️ Registration Page

*Add your project screenshot here.*

```text
📷 Screenshot
```

### 🗄️ MongoDB Database

*Add your MongoDB Compass screenshot here.*

```text
📷 MongoDB Screenshot
```

---

## 🔮 Future Improvements

I'm planning to improve this project by adding:

* 🔐 Student Login & Signup
* ✏️ Edit Student Details
* 🗑️ Delete Student Records
* 🔎 Search Students
* 📊 Student Dashboard
* ✅ Better Form Validation
* 📱 Improved Mobile Responsiveness
* ☁️ Deployment

---

## 🎯 Learning Goals

This project helped me understand:

* React component development
* Handling forms in React
* Fetch API
* REST APIs
* Express.js routing
* Node.js backend development
* MongoDB database connection
* CRUD concepts
* Frontend ↔ Backend communication
* Git & GitHub workflow

---

## 👨‍💻 Author

<div align="center">

### Mohit Saraswat

💻 Full-Stack Web Development Learner

**React • Node.js • Express • MongoDB**

</div>

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a Star!

Made with ❤️ and lots of ☕ by **Mohit Saraswat**

</div>
