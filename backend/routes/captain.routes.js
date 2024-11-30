const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post(
    '/register', [
        body('email')
          .isEmail()
          .withMessage('Invalid Email'),
        body('fullName.firstName')
          .isLength({ min: 3 })
          .withMessage('First Nmae must be at least 3 characters long'),
        body('password')
          .isLength({ min: 6 })
          .withMessage('Password must be at least 6 characters long'),
        body('vehicle.color')
          .isLength({ min: 3 })
          .withMessage('Color must be at leat 3 characters long'),
        body('vehicle.plate')
          .isLength({ min: 3 })
          .withMessage('Plate number must be at least 3 characters long'),
        body('vehicle.capacity')
          .isInt({ min: 1 })
          .withMessage('Capacity must be at least 1'),
        body('vehicle.vehicleType')
          .isInt(['car', 'motocycle', 'auto'])
          .withMessage('Invalid vehicle type')
    ],
    captainController.registerCaptain
);



module.exports = router;