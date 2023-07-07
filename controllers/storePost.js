const path = require('path')
const Post = require('../database/models/post')
const fileUpload =  require('express-fileupload')

module.exports = (req, res) => {
    const { image } = req.files
    image.mv(path.resolve(__dirname, '..','public/posts', image.name), (error) => {
        Post.create({
            ...req.body,
            image: `/posts/${image.name}`
        })
        .then((createdPost) => {
            console.log('Post created:', createdPost);
        })
        .catch((error) => {
            console.log(error);
        });
    res.redirect('/');
    })
}