# Blog Apis - NestJS

This repository hosts the source code for a simple-featured Blog Application built with NestJS. It includes role-based access control, category management, and post creation features. The application uses JWT for authentication, Bcrypt for password hashing, Multer for file uploads, and Swagger for API documentation.

## Demo

- Live Preview: [https://blog-apis-nestjs.onrender.com/](https://blog-apis-nestjs.onrender.com/)

## Features

- User and Admin roles
- JWT Authentication
- Password Hashing with Bcrypt
- CRUD Operations for Posts and Categories
- Multer for File Uploads
- Login/Signup
- Swagger API Documentation
- Role-Based Access Control
- Admin: Can create, edit, delete posts and categories.
- User: Can view posts and categories.
- Authenticated APIs for secured access
- REST APIs for interaction with the application
- Database: MySQL with TypeORM

## API Documentation
You can access the full API documentation via Swagger at the root URL of the deployed application:

Swagger UI: [https://your-app-url.com/](https://your-app-url.com/)

## Relationships
- User to Post: One-to-Many relationship (One user can have multiple posts).
- Category to Post: One-to-Many relationship (One category can contain multiple posts).

## Screenshots

![Post](https://i.ibb.co/LnLC9v2/blog-apis-1.png)
- Post Apis

![Categories](https://i.ibb.co/yY9hB5R/blog-apis-2.png)
- Categories And Authentication Apis

## Run Locally

Clone the project

```bash
    git clone https://github.com/Mshandev/Blog-Apis-Nestjs.git
```
Go to the project directory

```bash
    cd Blog-Apis-Nestjs
```
Install dependencies

```bash
    npm install
```

Setup Environment Vaiables

```Make .env file and store environment Variables
  DATABASE_HOST=YOUR_DB_HOST
  DATABASE_PORT=YOUR_DB_PORT
  DATABASE_USER=YOUR_DB_USER
  DATABASE_PASSWORD=YOUR_DB_PASSWORD
  DATABASE_NAME=DB_NAME
  JWT_SECRET=secretkey

 ```

Start the server

```bash
    npm run start:dev
```

## Tech Stack
* [Nestjs](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [MySQL](https://www.mysql.com/)
* [JWT Authentication](https://jwt.io/introduction)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Multer for File Uploads](https://www.npmjs.com/package/multer)
* [Swagger for API Documentation](https://swagger.io/)

## Deployment

The application is deployed on Render.

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/muhammad-shan-full-stack-developer/)
