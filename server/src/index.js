require("dotenv").config();
const express = require("express");
const connection = require("../db/index");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const helmet = require('helmet');
const routes = require('../routes');

app.use(express.json());
app.use(cors());

if (process.env.APP_ENV != 'production') {
  const morgan = require('morgan')
  require('dotenv').config();
  app.use(morgan('combined'))
}

connection();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(helmet())
app.use(express.json());
app.use("/api/v1/", routes)

app.listen(port, () => console.log(`listening on port ${port}`));

