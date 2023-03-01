//import des modules
const Sauces = require('../models/sauces');
const fs = require('fs');

// Création d'une sauce
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
exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    delete sauceObject._userId;
    Sauces.findOne({_id: req.params.id})
        .then((sauce) => {
            if (sauce.userId !== req.auth.userId) {
                res.status(401).json({ message : 'Not authorized'});
            } else {
                Sauces.updateOne({ _id: req.params.id}, { ...sauceObject, _id: req.params.id})
                    .then(() => res.status(200).json({message : 'Objet modifié!'}))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};


// Suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
    Sauces.findOne({ _id: req.params.id})
        .then(sauce => {
            if (sauce.userId !== req.auth.userId) {
                res.status(401).json({message: 'Not authorized'});
            } else {
                const filename = sauce.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Sauces.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });

};

// Récupération de toutes les sauces dans la base de données
exports.getAllSauces = (req, res, next) => {
    Sauces.find()
        .then((sauce) => {res.status(200).json(sauce) })
        .catch((error) => {res.status(400).json({error: error})});
};

// like/dislike d'une sauce
exports.notationSauce = (req, res, next) => {
    Sauces.findOne({ _id: req.params.id })
        .then(sauces => {
            switch (req.body.like) {
                case 1:
                    if (!sauces.usersLiked.includes(req.body.userId)) sauces.usersLiked.push(req.body.userId);
                    if (sauces.usersDisliked.includes(req.body.userId)) sauces.usersDisliked = sauces.usersDisliked.filter(value => value!=req.body.userId);
                    break;

                case 0:
                    if (sauces.usersLiked.includes(req.body.userId)) sauces.usersLiked = sauces.usersLiked.filter(value => value!=req.body.userId);
                    if (sauces.usersDisliked.includes(req.body.userId)) sauces.usersDisliked = sauces.usersDisliked.filter(value => value!=req.body.userId);
                    break;

                case -1:
                    if (!sauces.usersDisliked.includes(req.body.userId)) sauces.usersDisliked.push(req.body.userId);
                    if (sauces.usersLiked.includes(req.body.userId)) sauces.usersLiked = sauces.usersLiked.filter(value => value!=req.body.userId);
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