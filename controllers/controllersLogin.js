const { Profile,Post,User } = require('../models/');
const bcrypt = require('bcryptjs')

class ControllerLogin {
    static login(req, res) {
        const { error } = req.query
        res.render('login', { error })
    }

    static loginPost(req, res) {
        let { email, password } = req.body

        User.findOne({
            where: { email }
        })
        .then(user => {
            if(user) {
                const isValidPassword = bcrypt.compareSync(password, user.password)

                if(isValidPassword) {
                    res.redirect('/')
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