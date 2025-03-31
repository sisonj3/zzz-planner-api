const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();
const { Client } = require('pg');

const app = express();

// PSQL Settings
// const client = new Client({
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     host: process.env.HOSTNAME,
//     port: process.env.PORT,
//     database: process.env.DATABASE,
// });

// Router constants
const characterRouter = require('./routes/characterRouter');
const wengineRouter = require('./routes/wengineRouter');
const userRouter = require('./routes/userRouter');
const accountRouter = require('./routes/accountRouter');
const loginRouter = require('./routes/loginRouter');

app.set('trust proxy', true);

// Header settings
app.use(function (req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', ['http://localhost:5173', 'https://zzz-planner.onrender.com']);

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// Set up passport session
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(passport.session());

// Used for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/character", characterRouter);
app.use("/wengine", wengineRouter);
app.use("/user", userRouter);
app.use("/account", accountRouter);
app.use("/login", loginRouter);

app.listen(3000, () => console.log("App listening on port 3000!"));