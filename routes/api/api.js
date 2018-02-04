/**
 * Created by patrick conroy on 2/3/18.
 */
const login=(req, res) => {
    if (!req.body) return res.sendStatus(400)

    const token = req.body.token
    global.firebase.auth().verifyIdToken(token)
        .then((decodedToken) => {
            req.session.decodedToken = decodedToken
            return decodedToken
        })
        .then((decodedToken) => res.json({status: true, decodedToken}))
        .catch((error) => res.json({error}))
};

const logout=(req, res) => {
    req.session.decodedToken = null
    res.json({status: true})
};


module.exports={
    login:login,
    logout:logout
};

