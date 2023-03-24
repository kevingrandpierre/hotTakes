//import des modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../models/users');

/**
 * @description inscription d'un nouvel utilisateur
 * @api {post} /signup
 * @param {email} /Recupére l'email de l'utilisateur
 * @param {password} /Recupére le mot de passe de l'utilisateur
 * @param {hash} /Hash le mot de passe de l'utilisateur
 * @param {user} /Créé un nouvel utilisateur
 * @param {save} /Sauvegarde les données dans la DB
 * @param {status} /Renvoi un message de confirmation
 * @param {error} /Renvoi un message d'erreur
 **/
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new users({
                                       email: req.body.email,
                                       password: hash
                                   });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


/**
 * @description connexion d'un utilisateur
 * @api {post} /login
 * @param {email} /Recupére l'email de l'utilisateur
 * @param {password} /Recupére le mot de passe de l'utilisateur
 * @param {compare} /Compare le mot de passe de l'utilisateur
 * @param {token} /Créé un token
 * @param {status} /Renvoi un message de confirmation
 * @param {error} /Renvoi un message d'erreur
 */
exports.login = (req, res, next) => {
    users.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                                             userId: user._id,
                                             token: jwt.sign(
                                                 { userId: user._id },
                                                 process.env.TOKEN,
                                                 { expiresIn: '24h' }
                                             )
                                         });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};