const ControllersProfile = require('../controllers/controllersProfile');
const express = require('express')
const routerProfile = express.Router()



routerProfile.get('/profile', ControllersProfile.formprofile)

routerProfile.post('/profile', ControllersProfile.addProfile)

routerProfile.get('/profile/:id', ControllersProfile.profile)


module.exports = routerProfile