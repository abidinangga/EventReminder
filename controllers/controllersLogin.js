const { Profile,Post,User } = require('../models/');
const bcrypt = require('bcryptjs')

class ControllerLogin {
    static login(req, res) {
        res.render('login')
    }

    static loginPost(req, res) {
        let { email, password } = req.body

        User.findOne({
            where: { email }
        })
        .then(user => {
            if(user) {

                // console.log(user);
                // if(bcrypt.compareSync(password, user.password)) {
                    if(password === user.password) {
                // console.log('masukganih');
                    req.session.UserId = user.id
                    res.redirect('/home')
                    // return 
                } else {
                    const err = 'Please input a valid Email or Password'
                    res.redirect(`/login?err=${err}`)
                }
            } else {
                const err = 'Please input a valid Email or Password'
                res.redirect(`/login?err=${err}`)
                }
        })
        .catch(err => res.send(err)) 
    }
}

module.exports = ControllerLogin 