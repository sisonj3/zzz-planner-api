# Zenless Zone Zero Progress Planner API

This is a REST API, for my Zenless Zone Zero progress tracker. Its main function is to interact with the PSQL database and function as a backend. The API has CRUD (Create, Read, Update, and Delete) functionality for user profiles. Accounts, which are linked to user profiles, can be read and updated. Character and W-engine information can only be read. The API is meant to provide the client with relevant information and save user data.

# How to run locally

1.Clone the repository <br />
2.Enter the repository directory <br />
3.Run the build command: npm install <br />
4.Set Up your PSQL Database and PrismaORM <br />
5.Set up PSQL url <br />
&emsp;a.In an env file create an environment variable to hold your url <br />
&emsp;![plot](./Prisma_Screenshot.png) <br />
&emsp;b.In schema.prisma located in /zzz-planner-api/prisma enter your url. Replace env("RENDER_URL") if needed. <br />
6.Run the following commands: <br />
&emsp;a.npx prisma generate <br />
&emsp;b.npx prisma migrate dev --name init <br />
7.Seed the database: npx prisma db seed <br />
8.Return to /zzz-planner-api/ <br />
9.Run the API: node app.js <br />
