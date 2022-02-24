const ControllersProfile = require('../controllers/controllersProfile');
const express = require('express')
const routerProfile = express.Router()



routerProfile.get('/profile', ControllersProfile.profile)


module.exports = routerProfile