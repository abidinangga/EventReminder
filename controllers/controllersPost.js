const {Profile,Post,User} = require('../models/');
const { google, outlook, office365, yahoo, ics } = require("calendar-link");
const {calendar} = require('../helper/reminder');

class ControllerPost{
    static post(req,res){
        let id = req.session.id
        // console.log(id);
        let option = {}
        if (req.query.sort === "reminder"){
            option.order = [['reminder', 'ASC']]
        } 
        Post.findAll(option)
        .then(data =>{
            // console.log(reminder);
            // let result = calendar(data.reminder)
            res.render("post",{data, id})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static formpost(req,res){
        let id=req.body.UserId
        // console.log(id);
        res.render("postform",{id})
    }

    static postAdd(req,res){
        let id = req.params.id
        // console.log(id);
        let newData = {
            title:req.body.title,
            content:req.body.content,
            imageUrl:req.body.imageUrl,
            reminder:req.body.reminder
        }
        Post.create(newData,{where:{id:id}})
        .then(data =>{
            // console.log(data,">>>>>>>>>");
            res.redirect(`/post/${id}`)
        })
        .catch(err=>{
            res.send(err)
        }) 

    }
    static postEdit(req,res){
        let id = req.params.id
        Post.findByPk(id)
        .then(data=>{
            res.render("postformedit",{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    
    static postAddEdit(req,res){
        // console.log(req.params.id);
        let id = req.params.id
        let editData = {
            title:req.body.title,
            content:req.body.content,
            imageUrl:req.body.imageUrl,
            reminder:req.body.reminder
        }
        Post.update(editData,{where:{id:id}})
        .then(data =>{
            console.log(data);
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