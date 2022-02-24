const controllersLogin = require('../controllers/controllersLogin');
const express = require('express')
const routerLogin = express.Router();

routerLogin.get('/login', controllersLogin.login)
routerLogin.post('/login', controllersLogin.loginPost)


module.exports = routerLogin