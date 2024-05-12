# Pric assignment

This repository contains the frontend built with React (TypeScript) and a backend with Firebase Cloud Services. The frontend(client) is containerized using Docker for easy deployment and management.

- Demo link `https://drive.google.com/file/d/1q0vsAYsO3VFzNg2wmn1wrrjIIEke3PDA/view?usp=sharing`

## Requirements

- Docker
- Node.js
- Firebase-tools
- npm

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

- Run container : `docker run -d -p 3000:3000 --name pric-assignment-cont pric-assignment`

- List of images : `docker images`
- List of running container : `docker ps`
- List of non running and running container: `docker ps -a`
- Stop container: `docker stop <id>`

- Remove container: `docker rm <id>`

### 2.Set up Firebase

- You'll need to set up a Firebase project and obtain your Firebase configuration.

- checkout doc https://firebase.google.com/docs/firestore

### local

- open new terminal

- type command : `cd backend`
- build and run locally : `npm run emulate`

- build and deploy on firebase : `npm run deploy`
#   P r i c _ A s s i g n m e n t  
 