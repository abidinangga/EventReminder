const {Profile,Post,User} = require('../models/');

class ControllerPost{
    static post(req,res){
        Post.findAll()
        .then(data =>{
            res.render("home",{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static postAdd(req,res){
        let id = +req.params.id
        let newData = {
            title:req.body.title,
            content:req.body.content,
            imageUrl:req.body.imageUrl,
            like:0,
            reminder:req.body.reminder,
        }
        Post.create(newData,{where:{id:id}})
        .then(data =>{
            res.redirect(`/post/${id}`)
        })
        .catch(err=>{
            res.send(err)
        }) 

    }
    static postEdit(req,res){
        let id = +req.params.id
        Post.findByPk(id)
        .then(data=>{
            res.render("postformedit",{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    
    static postAddEdit(req,res){
        let id = +req.params.id
        let editData = {
            title:req.body.title,
            content:req.body.content,
            imageUrl:req.body.imageUrl,
            reminder:req.body.reminder
        }
        Post.update(editData,{where:{id:id}})
        .then(data =>{
            res.redirect(`/post/${id}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    
    static postDelete(req,res){
        let id = +req.params.id
        Post.destroy({where:{id:id}})
        .then(data=>{
            res.redirect(`/post/${id}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ControllerPost