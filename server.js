console.log(`Your port is ${process.env.PORT}`);
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`);
module.exports = {port: process.env.PORT};

