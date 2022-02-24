const controllersRegister = require('../controllers/controllersRegister');
const express = require('express')
const routerRegister = express.Router();

routerRegister.get('/register', controllersRegister.register)

module.exports = routerRegister