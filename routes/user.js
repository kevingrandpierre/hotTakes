// import des modules
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/user');
const validateUser = require('../middleware/validateUser');
const  maxRate = require('../middleware/express-rate-limit');

// Définition des routes
router.post('/signup', validateUser, maxRate, signup);
router.post('/login', validateUser, maxRate, login);

// export des routes
module.exports = router;