// import des modules
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const joi = require('../middleware/joi');
// const expressRateLimit = require('../middleware/rate-limit');


// Définition des routes
router.post('/signup', joi.user, userCtrl.signup);
router.post('/login',  userCtrl.login);

// export des routes
module.exports = router;