# User Management API

A simple RESTful backend API built with Node.js and Express.js, supporting full CRUD (Create, Read, Update, Delete) operations for managing users, along with supporting endpoints for books and games data.

This project was built as part of the **DecodeLabs Full Stack Development Industrial Training Kit,      Project 2 (Backend API Development)**.

## Overview

This API demonstrates core backend development concepts including:

- RESTful endpoint design
- HTTP methods (GET, POST, PUT, DELETE)
- Request body parsing and validation
- Proper HTTP status code usage
- In-memory data storage

## Tech Stack

- **Node.js** — JavaScript runtime environment
- **Express.js** — Web application framework for building the API

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [Postman](https://www.postman.com/) (for testing API endpoints)

## Installation

1. Clone or download this repository
2. Navigate to the project folder in your terminal
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server with:

```bash
node server.js
```

The server will start on:

```
http://localhost:3000
```

## API Endpoints

### Users

| Method | Endpoint         | Description                     |
|--------|------------------|----------------------------------|
| GET    | `/users`         | Retrieve all users               |
| GET    | `/users/:id`     | Retrieve a single user by ID     |
| POST   | `/users`         | Create a new user                |
| PUT    | `/users/:id`     | Update an existing user          |
| DELETE | `/users/:id`     | Delete a user                    |

### Books

| Method | Endpoint  | Description         |
|--------|-----------|----------------------|
| GET    | `/books`  | Retrieve all books   |

### Games

| Method | Endpoint  | Description         |
|--------|-----------|----------------------|
| GET    | `/games`  | Retrieve all games   |

## Request & Response Examples

### Get all users

**Request:**
```
GET /users
```

**Response:** `200 OK`
```json
[
  { "id": 1, "name": "Mohsin", "email": "mohsin@example.com" },
  { "id": 2, "name": "Amna", "email": "amna@example.com" }
]
```

### Create a new user

**Request:**
```
POST /users
Content-Type: application/json

{
  "name": "Ahmed",
  "email": "ahmed@example.com"
}
```

**Response:** `201 Created`
```json
{
  "message": "User successfully created!",
  "user": { "id": 3, "name": "Ahmed", "email": "ahmed@example.com" }
}
```

### Update a user

**Request:**
```
PUT /users/1
Content-Type: application/json

{
  "name": "Mohsin Updated",
  "email": "newemail@example.com"
}
```

**Response:** `200 OK`
```json
{
  "message": "User updated successfully!",
  "user": { "id": 1, "name": "Mohsin Updated", "email": "newemail@example.com" }
}
```

### Delete a user

**Request:**
```
DELETE /users/2
```

**Response:** `200 OK`
```json
{
  "message": "User deleted successfully!"
}
```

## Validation Rules

- `name` and `email` fields are required when creating or updating a user
- `email` must contain an `@` symbol
- Requests missing required fields return `400 Bad Request`
- Requests targeting a non-existent user return `404 Not Found`

## HTTP Status Codes Used

| Code | Meaning       | Used When                              |
|------|---------------|------------------------------------------|
| 200  | OK            | Request succeeded                       |
| 201  | Created       | A new resource was successfully created |
| 400  | Bad Request   | Invalid or missing input data           |
| 404  | Not Found     | Requested resource does not exist       |

## Testing the API

This API can be tested using [Postman](https://www.postman.com/):

1. Open Postman and create a new request
2. Select the appropriate HTTP method (GET, POST, PUT, DELETE)
3. Enter the endpoint URL (e.g., `http://localhost:3000/users`)
4. For POST/PUT requests, go to the **Body** tab, select **raw**, choose **JSON**, and enter the request payload
5. Click **Send** to view the response


## Author
  
Khadija Tul Kubra