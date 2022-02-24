const ControllersLogout = require('../controllers/controllersLogout');
const express = require('express')
const routerLogout = express.Router();

routerLogout.get('/logout', ControllersLogout.logout)

module.exports = routerLogout