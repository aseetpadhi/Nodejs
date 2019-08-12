const express = require('express');
const app = express();
const logger = require("./middlewares/logger");
const profileP = require("./middlewares/promiseEx");
const Request = require('request');
const {port} = require('./server');
app.use('/logs', logger);
profileP(4, (user) => console.log(user));
app.get('/', (req,res) => res.send("Hello World"));

app.listen(`${port}`);