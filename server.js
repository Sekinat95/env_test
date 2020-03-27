// console.log(`Your port is ${process.env.PORT}`); // undefined
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(`Your port is ${process.env.PORT}`); // 8080
const { port } = require('./config');
console.log(`Your port is ${port}`); // 8080