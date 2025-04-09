const express = require('express');
const mongoose = require('mongoose');
const vehicleRoute = require('./routes/vehicle.route');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/vehicles", vehicleRoute);

app.get('/', (req, res) => {
  res.send("Hello depuis l'API des véhicules !");
});

// Connexion MongoDB Atlas
console.log('MONGODB_URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(" Connexion reussi ");
    app.listen(3000, () => {
      console.log(" Serveur démarré sur le port 3000");
    });
  })
  .catch((error) => {
    console.error("echec", error);
  });

