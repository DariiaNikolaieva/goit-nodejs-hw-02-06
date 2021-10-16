const express = require('express');
const router = express.Router();
const guard = require('../../helpers/guard');

const {
    signup,
    login,
    logout
} = require('../../controllers/users-controllers');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', guard, logout);

module.exports = router;
