"use strict"
const Controller = require('../controllers/controllers');
const routers = require('express').Router();
const routerLogin = require("./login")
const routerRegister = require("./register")

routers.use("/", routerLogin);
routers.use("/", routerRegister);

routers.get('/', Controller.home)

routers.get('/user', Controller.user)

routers.get('/profile', Controller.profile)

routers.get('/profile/:id', Controller.post)

routers.post('/profile/:id', Controller.postAdd)

routers.post('/profile/:id/edit', Controller.postEdit)

routers.post('/profile/:id/delete', Controller.postDelete)





module.exports = routers