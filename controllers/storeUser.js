const User = require('../database/models/user')

module.exports = (req, res) => {
    User.create(req.body)
    .then((createdUser) => {
        console.log('User created:', createdUser);
        res.redirect('/');
    })
    .catch((error) => {
        const registrationError = Object.keys(error.errors).map(key => error.errors[key].message)
        req.flash('registrationError', registrationError);
        req.flash('data', req.body);
        res.redirect('/auth/register');
    });
}
