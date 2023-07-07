module.exports = (req, res, next) => {
    if(!req.files || !req.files.image) {
        return res.status(400).json({ error: 'Image file is required.' });
    } else if (!req.body.username) {
        return res.status(400).json({ error: 'username file is required.' });
    } else if (!req.body.title) {
        return res.status(400).json({ error: 'title file is required.' });
    } else if (!req.body.subtitle) {
        return res.status(400).json({ error: 'subtitle file is required.' });
    } else if (!req.body.content) {
        return res.status(400).json({ error: 'content file is required.' });
    }
    next()
}