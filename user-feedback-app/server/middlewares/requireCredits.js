module.exports = (req, res, next) => {
    if (req.user.credits < 1) { //passport assigns the req object the details of the logged in user.
        return res.status(403).send({ error: 'Not enough credits!' })
    }
    next();
}