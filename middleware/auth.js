// import des modules
const jwt = require('jsonwebtoken');

// Récupération du token dans la requête
/**
 * @const {token} /Récupere le token dans la requête d'authentification
 * @param {token} req /Vérifie le token
 * @param {*} next
 */

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        res.status(401).json({ error });
    }
};