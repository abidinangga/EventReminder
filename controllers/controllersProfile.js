
const {Profile,Post,User} = require('../models/');

class ControllersProfile{
    
    static addProfile(req,res){
        let id = +req.query.id
        // console.log(id, 'INI DARI ADD PROFILE');
        let newData = {
            name:req.body.name,
            fotoProfile:req.body.fotoProfile,
            bio:req.body.bio,
            gender:req.body.gender,
            UserId:id
        }
        Profile.create(newData,{where:{id:id}})
        .then(data =>{
            res.redirect(`/profile/${data.id}`)
        })
        .catch(err=>{
            res.send(err)
        }) 
    }
    
    static formprofile(req,res){
        const id = req.query.id
        res.render("formaddprofile", {id})
    }
    
    static profile(req,res){
        let id = req.params.id
        console.log(id);
        Profile.findByPk(id)
        .then(data => {
            console.log(data, '<<<<<<<');
            res.render("profile",{data, id})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports =ControllersProfile