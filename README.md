# Assignment API

A Node.js REST API application with authentication and user management, built with Express.js, MongoDB, and Redis.

## Features

- 🔐 JWT-based authentication (register, login, logout)
- 👤 User management endpoints
- 📚 Swagger API documentation
- 🔄 Redis caching for token management
- 🛡️ Error handling middleware
- 🌐 CORS enabled

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Redis** (v6 or higher) - [Download](https://redis.io/download)

## Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add the following variables:
   
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/assignment
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=your-secret-key-here
   JWT_EXPIRE=30d
   ```
   
   **Note:** Replace `your-secret-key-here` with a strong, random secret key for JWT token signing.

## Running the Project

### Development Mode

Run the server in development mode with auto-reload using nodemon:

```bash
npm run dev
```

### Production Mode

Run the server in production mode:

```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Documentation

Once the server is running, you can access the interactive Swagger API documentation at:

**http://localhost:5000/api-docs**

The Swagger documentation includes:
- All available endpoints
- Request/response schemas
- Authentication requirements
- Try-it-out functionality

You can also access the raw Swagger JSON specification at:

**http://localhost:5000/api-docs.json**

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user (requires authentication)

### Users

- `GET /api/users` - Get all users (requires authentication)
- `GET /api/users/:id` - Get user by ID (requires authentication)
- `PUT /api/users/:id` - Update user (requires authentication)
- `DELETE /api/users/:id` - Delete user (requires authentication)

### Health Check

- `GET /health` - Check server status

## Project Structure

```
assignment/
├── src/
│   ├── config/
│   │   ├── db.js           # MongoDB connection
│   │   ├── redis.js        # Redis connection
│   │   └── swagger.js      # Swagger configuration
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   ├── services/
│   │   └── redis.service.js
│   ├── app.js              # Express app configuration
│   └── server.js           # Server entry point
├── .env                    # Environment variables (create this)
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used

- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Redis** - In-memory data store for caching
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **Swagger** - API documentation
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/assignment` |
| `REDIS_URL` | Redis connection URL | `redis://localhost:6379` |
| `JWT_SECRET` | Secret key for JWT token signing | `your-secret-key` |
| `JWT_EXPIRE` | JWT token expiration time | `30d` |

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running on your system
- Check if the MongoDB URI in `.env` is correct
- Verify MongoDB service is accessible

### Redis Connection Issues

- Ensure Redis is running on your system
- Check if the Redis URL in `.env` is correct
- On Windows, you may need to use WSL or Docker for Redis

### Port Already in Use

- Change the `PORT` value in your `.env` file
- Or stop the process using the port

## License

ISC

