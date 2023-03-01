// Import des modules
const mongoose = require('mongoose');

// Définition du schema pour l'enregistrement dans la database
const sauceSchema = new mongoose.Schema({
                                            userId: { type: String, required: true },
                                            name: { type: String, required: true },
                                            manufacturer: { type: String, required: true },
                                            description: { type: String, required: true },
                                            mainPepper: { type: String, required: true },
                                            imageUrl: { type: String, required: true },
                                            heat: { type: Number, required: true },
                                            likes: { type: Number, default: 0 },
                                            dislikes: { type: Number, default: 0 },
                                            usersLiked: { type: [String] },
                                            usersDisliked: { type: [String] },
                                        });


// Export du schema d'enregistrement
module.exports = mongoose.model('sauces', sauceSchema);