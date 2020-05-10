module.exports = (req, res, next) => {
    if (!req.user) { //passport assigns the req object the details of the logged in user.
        return res.status(401).send({ error: 'You must log in!' })
    }
    next();
}