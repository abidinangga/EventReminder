const ControllerPost = require('../controllers/controllersPost');
const express = require('express')
const routerPost = express.Router();

routerPost.get('/profile/:id', ControllerPost.post)

routerPost.post('/profile/:id', ControllerPost.postAdd)

routerPost.get('/profile/:id/edit', ControllerPost.postEdit)

routerPost.post('/profile/:id/edit', ControllerPost.postAddEdit)

routerPost.get('/profile/:id/delete', ControllerPost.postDelete)

module.exports = routerPost