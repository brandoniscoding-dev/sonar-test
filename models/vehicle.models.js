 const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      required: [true, "quelle est le numR du véhicule"]
    },
    make: {
      type: String,
      required: [true, "quelle est la marque du véhicule"]
    },
    model: {
      type: String,
      required: [true, "quel est  le modèle du véhicule"]
    },
    year: {
      type: Number,
      required: true
    },
    rentalPrice: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;
