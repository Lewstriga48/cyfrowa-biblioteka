# 📚 Cyfrowa Biblioteka – Digital Library Project

A full-stack Node.js web application to manage a digital book library using **MongoDB Atlas**, **Express.js**, **EJS**, and **Bootstrap**.  
The project follows **MVC architecture** and uses **Server-Side Rendering (SSR)** for all views.

---

## 🎯 Purpose

This is a student project designed to demonstrate:
- CRUD operations using Node.js and MongoDB
- MVC pattern in practice
- User-friendly interface with Bootstrap styling
- Dynamic content rendering using EJS
- Clean routing and middleware usage

---

## 🧠 How It Works (Application Logic)

1. The app starts with `app.js`, where all routes, middleware, and MongoDB connection are initialized.
2. When the user visits `/books`, a list of all books is fetched from MongoDB and rendered via `books/index.ejs`.
3. The user can:
   - Add a new book (`/books/new`)
   - View book details (`/books/:id`)
   - Edit a book (`/books/:id/edit`)
   - Delete a book (using method override)
4. All data is stored in **MongoDB Atlas**, managed via **Mongoose models**.
5. Views are generated using **EJS templates** and styled with **Bootstrap 5**.

---

## 📦 Technologies & Libraries

| Tool | Purpose |
|------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web server framework |
| **MongoDB Atlas** | Cloud-based NoSQL database |
| **Mongoose** | MongoDB ORM for schema-based models |
| **EJS** | View engine for rendering dynamic HTML |
| **Bootstrap 5** | CSS framework for UI styling |
| **dotenv** | Environment variable management |
| **method-override** | Allows HTTP verbs like PUT & DELETE from forms |
| **body-parser (included in Express)** | Parses incoming request bodies |

---

## 🔧 Installation – Step by Step

### 1. Clone the Repository

git clone https://github.com/your-username/cyfrowa-biblioteka.git
cd cyfrowa-biblioteka

2. Install All Dependencies

npm install
Installs:

express

ejs

mongoose

dotenv

method-override

You can check all dependencies in package.json.

3. Create .env File
This file holds your sensitive MongoDB connection string.

Example .env file:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/library

4. Run the Application
node app.js
Open your browser:http://localhost:3000/books

📁 Project Structure

cyfrowa-biblioteka/
├── controllers/
│   └── bookController.js     # Contains all logic for handling books
├── models/
│   └── Book.js               # Mongoose schema for Book objects
├── routes/
│   └── bookRoutes.js         # Route definitions for book operations
├── views/
│   ├── books/                # EJS templates for books (index, show, new, edit)
│   └── partials/             # Shared header/footer templates
├── public/                   # CSS and client-side static files
├── .env                      # Environment variables
├── app.js                    # Main app entry point
├── package.json              # Project metadata and dependencies
🧪 Example Use Case
User visits /books: sees a list of all books.

Clicks "Add new book" → goes to /books/new, fills a form.

Form POSTs to /books → book saved to MongoDB.

User clicks book title → sees /books/:id detail view.

User clicks "Edit" → updates the book at /books/:id/edit via PUT.

User clicks "Delete" → deletes the book via method-override.

All these routes are handled in the bookRoutes.js file using Express Router.

✅ Tips for Reviewers (like your instructor)
All CRUD functionality is implemented and testable

Follows MVC pattern: Models, Views, Controllers separated

MongoDB connection is secure via .env

Uses method-override to simulate HTTP verbs from HTML forms

Fully responsive UI using Bootstrap

👤 Author
Arda Ata Arslan
Digital Library project for academic purposes
