const {Profile,Post,User} = require('../models/');

class Controller{
    static home(req,res){
        res.render("home")
    }

}

module.exports = Controller