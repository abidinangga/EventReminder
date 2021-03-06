"use strict"
const Controller = require('../controllers/controllers');
const routers = require('express').Router();
const routerLogin = require("./login")
const routerRegister = require("./register")
const routerPost = require('./post');
const routerProfile = require('./profile');
const routerLogout = require('./logout');

routers.use(routerLogin);

routers.get('/home/:id', Controller.home);

routers.use(routerRegister);

routers.use(routerPost);

routers.use(routerProfile);

routers.use(routerLogout);










module.exports = routers