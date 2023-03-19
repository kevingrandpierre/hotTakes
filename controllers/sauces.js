//import des modules
const Sauces = require('../models/sauces');
const fs = require('fs');

// Création d'une sauce
/**
 * @api {get} /sauce
 * @param {saucesObject} /Recupére le corps de la requête
 * @param {sauces} /Prépare l'envoi du formulaire et de l'image
 * @param {save} /Sauvegarde les données dans la DB
 */

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    delete sauceObject.userId;
    const sauce = new Sauces({
                                ...sauceObject,
                                userId: req.auth.userId,
                                imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                            });

    sauce.save()
        .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
        .catch(error => { res.status(400).json( { error })})

};


// Récupération d'une sauce
/**
 * @api {get} /sauce/:id
 * @param {findOne} /Récupére l'id de la sauce
 * @param {Sauces} /Renvoi une sauce
 */

exports.getOneSauce = (req, res, next) => {
    Sauces.findOne({
                      _id: req.params.id
                  }).then(
        (sauce) => {
            res.status(200).json(sauce);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                                     error: error
                                 });
        }
    );

};


// Modification d'une sauce
/**
 * @api {put} /sauce/:id
 * @param {findOne} /Recupére l'id de la sauce
 * @param {saucesObject} /Recupére le corps de la requête
 * @param {updateOne} /Sauvegarde les nouvelles données
 */

exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    delete sauceObject._userId;
    Sauces.findOne({ _id: req.params.id })
        .then((sauce) => {
            if (sauce.userId !== req.auth.userId) {
                res.status(401).json({ message: 'Not authorized' });
            } else {
                const filename = sauce.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
    Sauces.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
                            .then(() => res.status(200).json({ message: 'Sauce modifié!' }))
                            .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};


// Suppression d'une sauce
/**
 * @api {delete} /sauce/:id
 * @param {findOne} /Recupére l'id de la sauce, vérifie que l'utilisateur soit le propriétaire de la sauce
 * @param {filename} /Récupére l'url de l'image et la supprime
 * @param {deleteOne} /Supprime la sauce
 */

exports.deleteSauce = (req, res, next) => {
    Sauces.findOne({ _id: req.params.id })
        .then(sauce => {
            if (sauce.userId !== req.auth.userId) {
                res.status(401).json({ message: 'Not authorized' });
            } else {
                const filename = sauce.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Sauces.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Sauce supprimé !' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

// Récupération de toutes les sauces dans la base de données
/**
 * @api {get} /sauces
    * @param {find} /Récupére toutes les sauces
 * @param {Sauces} /Renvoi toutes les sauces
 * @param {error} /Renvoi une erreur
 * @param {status} /Renvoi le status de la requête
 */

exports.getAllSauces = (req, res, next) => {
    Sauces.find()
        .then((sauce) => {res.status(200).json(sauce) })
        .catch((error) => {res.status(400).json({error: error})});
};

// like/dislike d'une sauce
/**
 * @api {post} /sauce/:id/like
 * @param {findOne} /Recupére l'id de la sauce, vérifie que l'utilisateur soit le propriétaire de la sauce
 * @switch /Ajout un like, un dislike ou le supprime. Vérification du userId pour empecher plusieurs votes
 * @param {sauces.likes} /Affiche le nombre d'utilisateur ayant liké
 * @param {sauces.disLikes} /Affiche le nombre d'utilisateur ayant disliké
 * @param {udpateOne} /Met à jour la sauce
 */

exports.notationSauce = (req, res, next) => {
    Sauces.findOne({ _id: req.params.id })
        .then(sauces => {
            switch (req.body.like) {

                // Si l'utilisateur aime la sauce
                case 1:
                    if (!sauces.usersLiked.includes(req.body.userId)){
                        sauces.usersLiked.push(req.body.userId);
                    }
                    if (sauces.usersDisliked.includes(req.body.userId)){
                        sauces.usersDisliked = sauces.usersDisliked.filter(value => value!==req.body.userId);
                    }
                    break;

                    // Si l'utilisateur annule son like ou son dislike
                case 0:
                    if (sauces.usersLiked.includes(req.body.userId)){
                        sauces.usersLiked = sauces.usersLiked.filter(value => value!==req.body.userId);
                    }
                    if (sauces.usersDisliked.includes(req.body.userId)){
                        sauces.usersDisliked = sauces.usersDisliked.filter(value => value!==req.body.userId);
                    }
                    break;

                    // Si l'utilisateur n'aime pas la sauce
                case -1:
                    if (!sauces.usersDisliked.includes(req.body.userId)){
                        sauces.usersDisliked.push(req.body.userId);
                    }
                    if (sauces.usersLiked.includes(req.body.userId)){
                        sauces.usersLiked = sauces.usersLiked.filter(value => value!==req.body.userId);
                    }
                    break;
                default:
                    res.status(403).json({ message : 'Bad request'});
            }
            sauces.likes = sauces.usersLiked.length;
            sauces.dislikes = sauces.usersDisliked.length;
            Sauces.updateOne({_id: req.params.id}, sauces)
                .then(() => res.status(201).json({message: 'Sauce notée !'}))
                .catch((error) => res.status(400).json({error: error}));
        })
        .catch(error => res.status(500).json({ error: error }));
};