const { Profile,Post,User } = require('../models/');
const bcrypt = require('bcryptjs')

class ControllerLogout {
    static logout(req, res) {
        req.session.destroy(err => {
          if (err) {
            res.send(err)
          } else {
            res.redirect('/login')
          }
        })
      }
}

module.exports = ControllerLogout