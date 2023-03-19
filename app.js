// Import de l'environnement dotenv pour récupération des variables d'environnement
require('dotenv').config();

// Import des modules
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

// Import des routes
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');
const path = require('path');
const app = express();

// Connexion à la database en passant par une variable d'environnement
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_LOG,
                 { useNewUrlParser: true,
                     useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Définition accès à l'API
app.use(helmet());
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


// Export de l'application
module.exports = app;
