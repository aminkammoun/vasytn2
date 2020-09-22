const express = require("express");
const router = express.Router();
const app = express();
const Reservation = require("../models/reservation");
const Covoiturage = require("../models/covoiturage");

router.post("/res", async (req, res) => {
  let reservation = new Reservation({
    idPoster: req.body.idPoster,
    idLogger: req.body.idLogger,
  });
  await reservation.save();
  res.send(reservation);
});

router.get("/", async (req, res) => {
  const reservation = await Reservation.find();
  res.send(reservation);
});

router.get("/history/:id", async (req, res) => {
  const reservation = await Reservation.find({ idLogger: req.params.id });

  res.send(reservation);
});


module.exports = router;
