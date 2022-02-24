const {Profile,Post,User} = require('../models/');

class Controller{
    static home(req,res){
        res.render("home")
    }
    
    static user(req,res){
        res.render("user")
    }

    static profile(req,res){

    }

    static post(req,res){

    }

    static postAdd(req,res){

    }
    
    static postEdit(req,res){

    }
    
    static postDelete(req,res){

    }
    

}

module.exports = Controller