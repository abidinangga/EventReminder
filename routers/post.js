const ControllerPost = require('../controllers/controllersPost');
const express = require('express')
const routerPost = express.Router();

routerPost.get('/post/:id', ControllerPost.post)

routerPost.get('/post/:id/add', ControllerPost.formpost)

routerPost.post('/post/:id/add', ControllerPost.postAdd)

routerPost.get('/post/:id/edit', ControllerPost.postEdit)

routerPost.post('/post/:id/edit', ControllerPost.postAddEdit)

routerPost.get('/post/:id/delete', ControllerPost.postDelete)

module.exports = routerPost
