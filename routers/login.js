const ControllersLogin = require('../controllers/controllersLogin');
const express = require('express')
const routerLogin = express.Router();

routerLogin.get('/login', ControllersLogin.login)
routerLogin.post('/login', ControllersLogin.loginPost)


module.exports = routerLogin