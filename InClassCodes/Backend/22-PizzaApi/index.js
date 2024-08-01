"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// E-mail
//Nodemailer.com

// const nodemailer = require('nodemailer')

// Create test account:

// nodemailer.createTestAccount().then((data)=> console.log(data))

/* 
  user: 'uzjzdc3uaoi3sf73@ethereal.email',
  pass: 'eXUmsXMUKeQJu8s5kY',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email',
  mxEnabled: false

*/

// // Connect to MailServer/SMTP:
// const transporter = nodemailer.createTransport({
//   // SMTP:
//   host: 'smtp.ethereal.email',
//   port: 587,
//   secure: false,
//   auth:{
//     user: 'uzjzdc3uaoi3sf73@ethereal.email',
//     pass: 'eXUmsXMUKeQJu8s5kY'
//   }
// })

// // console.log(transporter)

// // SendMail:
// transporter.sendMail({
//   from: 'uzjzdc3uaoi3sf73@ethereal.email',
//   to: 'mustafa.selcuk.tls@gmail.com',
//   subject: 'Deneme',
//   text: 'Hi man. what is going on?',
//   html: '<p><b>Hello</b> to myself!</p>'
// }, (err,success)=>{
//   success ? console.log("success:", success) : console.log(err)
// })


// GoogleMail:

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mustafa.selcuk.tls@gmail.com',
//     pass: 'bjiw nsgg xsco bgxx'
//   }
// })

// const transporter = nodemailer.createTransport({
//   service: 'yandex',
//   auth: {
//     user: 'mustafa.selcuk.tls@gmail.com',
//     pass: 'kendi parolanı gir'
//   }
// })


// SendMail:
// transporter.sendMail({
//   from: 'mustafa.selcuk.tls@gmail.com',
//   to: 'mustafa.selcuk.tls@gmail.com',
//   subject: 'Deneme',
//   text: 'Hi man. what is going on?',
//   html: '<p><b>Hello</b> to myself!</p>'
// }, (err,success)=>{
//   success ? console.log("success:", success) : console.log(err)
// })



/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.

