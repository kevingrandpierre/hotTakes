// Import des modules
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


// Définition du schema pour l'enregistrement dans la database
const userSchema = new mongoose.Schema({
                                           email: {type: String, required: true, unique: true},
                                           password: {type: String, required: true, unique: true}
                                       });

userSchema.plugin(uniqueValidator);


// Export du schema
module.exports =  mongoose.model('user', userSchema);