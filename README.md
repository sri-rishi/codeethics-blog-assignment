# 📝 Blog Application

A full-stack blog application built using **React**, **Node.js**, **GraphQL**, and **MongoDB**. Users can create blog posts and view all published posts in a clean, responsive interface.

---

## 🚀 Features

- View all blog posts
- Add new blog posts
- GraphQL API
- MongoDB database
- Responsive UI
- Form validation
- Toast notifications
- Modern card-based layout

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Apollo Client
- GraphQL
- CSS

### Backend

- Node.js
- Express.js
- Apollo Server
- GraphQL
- MongoDB
- Mongoose

---

## 📖 Project Approach

This project follows a simple client-server architecture.

- **Frontend:** Built with React and Apollo Client to provide a responsive user interface. Users can create new blog posts and view all existing posts.
- **Backend:** Developed using Node.js, Express.js, Apollo Server, and GraphQL. The backend exposes GraphQL queries and mutations for fetching and creating blog posts.
- **Database:** MongoDB is used to persist blog data, with Mongoose handling schema definition and database operations.
- **Data Flow:**
  1. The user submits a blog post from the React application.
  2. Apollo Client sends a GraphQL mutation to the backend.
  3. The backend validates and stores the blog post in MongoDB.
  4. After successful creation, the frontend automatically refetches the list of posts and updates the UI.
- **UI/UX:** The application includes responsive layouts, inline form validation, loading indicators, empty-state messaging, and toast notifications to improve the user experience.

---

## 📁 Project Structure

```
blog-app/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── graphql/
│   │   ├── models/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── apollo/
│   │   ├── components/
│   │   ├── graphql/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙ Prerequisites

- Node.js (LTS)
- MongoDB (Local or Atlas)
- npm

---

## 📦 Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```
http://localhost:4000
```

GraphQL Endpoint:

```
http://localhost:4000/graphql
```

---

## 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string
```

---

## 📌 GraphQL Operations

### Query

```graphql
query {
  posts {
    _id
    title
    content
    createdAt
  }
}
```

### Mutation

```graphql
mutation {
  addPost(
    title: "Hello World"
    content: "This is my first blog."
  ) {
    _id
    title
  }
}
```

---

## 🚀 Future Improvements

- Edit blog posts
- Delete blog posts
- User authentication
- Image uploads
- Rich text editor
- Search and filtering
- Pagination

---

## 👨‍💻 Author

**Rishi Srivastava**

GitHub: https://github.com/sri-rishi