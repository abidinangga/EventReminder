"use strict"
const express = require('express')
const routers = require('./routers')
const app = express()
const port = 3000
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { google, outlook, office365, yahoo, ics } = require('calendar-link');


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended : true}))

app.use(session({
    secret: 'EventReminder',
    resave: false,
    saveUninitilized: false,
    cookie: {
        secure: false,
        sameSite: true
    }
}))

app.use('/',routers)

app.listen(port, function(){
    console.log('running '+ port);
})  