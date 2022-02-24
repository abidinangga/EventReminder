const controllersRegister = require('../controllers/controllersRegister');
const express = require('express')
const routerRegister = express.Router();

routerRegister.get('/register', controllersRegister.register);
routerRegister.post('/register', controllersRegister.registerPost);

module.exports = routerRegister