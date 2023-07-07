const Post = require('../database/models/post')

module.exports = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            res.end('not found');
        } else {
            res.render('post', { post });
        }
    } catch (error) {
        console.log('Error:', error);
    }
}
