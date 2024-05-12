
# Pric assignment

This repository contains the frontend built with React (TypeScript) and a backend with Firebase Cloud Services. The frontend(client) is containerized using Docker for easy deployment and management.

- [Demo Video Link](https://drive.google.com/file/d/1q0vsAYsO3VFzNg2wmn1wrrjIIEke3PDA/view?usp=sharing)
- [Hostes Link](http://ec2-13-201-225-101.ap-south-1.compute.amazonaws.com)

## Requirements
- Docker
- Node.js
- Firebase-tools


## Getting Started

### 1.Clone the Repository

- `git clone https://github.com/Ravindra-24/Pric_Assignment.git`

- `cd pric_assignment`

- `npm install` or `npm i`
- `npm start`

#### Docker
- Install Docker, signup or login to docker 
- pull docker image : `docker pull ravindrapawar24/pric-assignment`
 - Build Image : `docker build -t  pric-assignment .`

 - Run container :   `docker run -d -p 3000:3000 --name pric-assignment-cont pric-assignment`

 - List of images : `docker images`
 - List of running container : `docker ps`
- List of non running and running container: `docker ps -a`
-  Stop container: `docker stop <id>`

- Remove container: `docker rm <id>`

### 2.Set up Firebase

- You'll need to set up a Firebase project and obtain your Firebase configuration.

- checkout doc https://firebase.google.com/docs/firestore

### local 
- open new terminal
 
 - type command : `cd backend`
 - build and run locally : `npm run emulate`

 - build and deploy on firebase : `npm run deploy`




## API Documentation

### Base URL
The base URL for the API endpoints is `https://asia-south1-pric-assignment.cloudfunctions.net`

### Endpoints
#### 1. Create User

Endpoint: POST /user-createUser

Description: Create a new user.

Request Body:
```
 {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": *****
} 
```


 #### 2. Get All Users

 Endpoint: GET /user-getUser

Description: Get all users.

Response:

Status Code: "200 OK"
Body:
```
[
  {
    "id": "user-id-1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": *****
  },
  {
    "id": "user-id-2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": *****
  }
]
```

#### 3.Update User
Endpoint: PATCH /user-updateUser

Description: Update a user by ID.

Request Body:
```
{
  "id":"userId"
  "name": "Updated Name",
  "email": "update email",
  "password": "******"
}
```
#### 4.Delete User
Endpoint: DELETE /user-deleteUser/?userId=${userId}

Description: Delete a user by ID.
