const controllersLogin = require('../controllers/controllersLogin');
const express = require('express')
const routerLogin = express.Router();

routerLogin.get('/login', controllersLogin.login)


module.exports = routerLogin