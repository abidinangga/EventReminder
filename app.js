"use strict"
const express = require('express')
const routers = require('./routers')
const app = express()
const port = 3000
const bcrypt = require('bcryptjs');
const session = require('express-session');


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended : true}))

app.use('/',routers)

app.use(session({
    secret: 'hacktiv8',
    resave: false,
    saveUninitilized: false,
    cookie: {
        secure: false,
        sameSite: true
    }
}))


app.listen(port, function(){
    console.log('running '+ port);
})  