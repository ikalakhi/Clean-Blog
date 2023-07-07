const bcrypt = require('bcrypt')
const User = require('../database/models/user')

module.exports = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then((same) => {
                        if (same) {
                            req.session.userId = user._id
                            res.redirect('/');
                        } else {
                            res.redirect('/auth/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        res.redirect('/auth/login');
                    });
            } else {
                res.redirect('/auth/login');
            }
        })
        .catch((error) => {
            console.log(error);
            res.redirect('/auth/login');
        });
};
