"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const express = require('express')
const app = express()
const cors = require("cors")
const path = require('path');
// app.use(cors({
//     origin: "https://stock-app-beryl-theta.vercel.app"
// }))

const whitelist = ['https://stock-app-beryl-theta.vercel.app', 'http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()

const PORT = process.env?.PORT

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Call static uploadFile:
app.use('/upload', express.static('./upload'))

// Check Authentication:
app.use(require('./src/middlewares/authentication'))

// Run Logger:
// app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.json({
    message: "Welcome to Stock api!",
    documents: ["/documents/json", "/documents/swagger", "/documents/redoc"],
    user: req.user,
  });
});

// Routes:
app.use("/", require("./src/routes/index.js"));

/* ------------------------------------------------------- */
//swagger statics
app.use(
  "/swagger",
  express.static(path.join(__dirname, "node_modules", "swagger-ui-dist"))
);


// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

//not found 
app.use("*", (req, res) => {
  res.errorStatusCode = 400;
  throw new Error("route not found!");
});

// RUN SERVER:
app.listen(PORT, () => console.log(`server running on: ${PORT}`))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.