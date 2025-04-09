const express = require("express");
const { createVehicle } = require("../controllers/vehicle.controllers");
const router = express.Router();

router.post("/", createVehicle);

// creer un vehicule
module.exports = router;
