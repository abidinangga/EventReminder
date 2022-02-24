const { User } = require('../models');
const bcrypt = require('bcryptjs')

class ControllerRegister {
    static register(req, res) {
        res.render('register')
    }

    static registerPost(req, res) {
        let { name, email, password, gender } = req.body
console.log(req.body);
    User
      .create({
        name,
        email,
        password,
        gender
      })
      .then((Users) => {
          const UserId = Users.id
          console.log(UserId);
        res.redirect(`/profile?id=${UserId}`)
      })
      
      .catch((err) => {
        // console.log(err);
        // err = err.errors.map(el => el.message)
        res.send(err)
      })
    }
}

module.exports = ControllerRegister