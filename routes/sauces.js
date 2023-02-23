const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/user');

router.get('/', auth, stuffCtrl.login);
router.post('/', auth, stuffCtrl.signup);

module.exports = router;