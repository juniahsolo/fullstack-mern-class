 To-Do List API - Node.js, Express & MongoDB
A simple RESTful API for managing tasks, built with Node.js, Express, and MongoDB. Perfect for beginners learning backend development!

🚀 Features
✅ CRUD Operations - Create, Read, Update, Delete tasks
✅ MongoDB Database - Store todos persistently
✅ RESTful Design - Follows standard API conventions
✅ Easy Setup - Ready to run in minutes

🛠️ Tech Stack
Backend: Node.js + Express

Database: MongoDB (local or Atlas)

API Testing: Postman

⚙️ Setup & Installation
1. Clone the Repository
bash
git clone https://github.com/yourusername/todo-api.git
cd todo-api
2. Install Dependencies
bash
npm install
3. Configure Environment Variables
Create a .env file:

env
MONGODB_URI=mongodb://localhost:27017/todoapp  # For local MongoDB
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todoapp?retryWrites=true&w=majority
PORT=5000
4. Start the Server
bash
node server.js
Server will run at: http://localhost:5000

📡 API Endpoints
Method	Endpoint	Description	Request Body Example
GET	/api/todos	Get all todos	-
POST	/api/todos	Create a new todo	{ "title": "Learn Node.js" }
PATCH	/api/todos/:id	Update a todo (e.g., mark done)	{ "completed": true }
DELETE	/api/todos/:id	Delete a todo	-
🔍 Testing with Postman
Import the provided Postman Collection (or manually test endpoints)

Sample requests:

Create Todo:

json
POST http://localhost:5000/api/todos
Body: { "title": "Buy milk" }
Get All Todos:

bash
GET http://localhost:5000/api/todos
📂 Project Structure
text
todo-api/
├── models/          # MongoDB schemas
│   └── Todo.js     
├── routes/          # API routes
│   └── todos.js     
├── .env             # Environment config
├── server.js        # Main server file
└── package.json     # Dependencies
🚨 Troubleshooting
"Cannot connect to MongoDB" → Check .env URI

Postman errors → Ensure server is running (node server.js)

Module not found → Run npm install

📜 License
MIT

💡 Next Steps
🔹 Add user authentication (JWT)
🔹 Deploy to Render/Heroku
🔹 Build a frontend (React/Vue)