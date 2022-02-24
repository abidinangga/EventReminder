
const {Profile,Post,User} = require('../models/');

class ControllersProfile{
    
    static addProfile(req,res){
        let id = +req.params.id
        let newData = {
            name:req.body.name,
            fotoProfile:req.body.fotoProfile,
            bio:req.body.bio,
            gender:req.body.gender
        }
        Profile.create(newData,{where:{id:id}})
        .then(data =>{
            res.redirect({data},`/post/${id}`)
        })
        .catch(err=>{
            res.send(err)
        }) 
    }
    static formprofile(req,res){
        res.render("formaddprofile")
    }
    
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