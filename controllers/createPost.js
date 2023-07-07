module.exports = (req, res) => {
    if(req.session.userId) {
        // console.log(req.session);
        return res.render('create');
    } else {
        res.redirect('/auth/login');
    }
};
