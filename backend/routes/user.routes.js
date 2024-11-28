const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userConteroller = require('../controllers/user.controller');



router.post('/register', [
    body('emial').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('first name must be at  least 3 characters long'),
    body('passwrod').isLength({ min: 6}).withMessage('Passwrod must be at least 6 characters long'),
],
userConteroller.registerUser
)



module.exports = router;