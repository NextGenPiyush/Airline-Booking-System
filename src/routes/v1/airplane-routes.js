const express = require('express');

const {AirplaneController} = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares');

const router = express.Router();

// API --> "/api/v1/airplanes/" (POST)
router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

// API --> "/api/v1/airplanes/" (GET)
router.get('/', AirplaneController.getAirplanes);

// API --> "/api/v1/airplanes/:id" (GET)
router.get('/:id', AirplaneController.getAirplane);

// API --> "/api/v1/airplanes/:id" (DELETE)
router.delete('/:id', AirplaneController.destroyAirplane);

module.exports = router;


