
const {Profile,Post,User} = require('../models/');

class ControllersProfile{
    static profile(req,res){
        let id = +req.params.id
        Profile.findByPk(id)
        .then(data=>{
            res.render("profile",{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}
module.exports =ControllersProfile