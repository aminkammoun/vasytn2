const express = require("express");
const router = express.Router();
const app = express();
const Covoiturage = require("../models/covoiturage");
const checkAuth = require("../middleware/check_auth");

router.get("/", async (req, res) => {
  const covoiturage = await Covoiturage.find();

  res.send(covoiturage);
});
router.get("/:id", async (req, res) => {
  const covoiturage = await Covoiturage.findById(req.params.id);
  res.send(covoiturage);
});
router.get("/owner/:id", async (req, res) => {
  const covoiturage = await Covoiturage.find({ idUserPoster: req.params.id });
  res.send(covoiturage);
});

router.post("/postCov", async (req, res) => {
  let cov = new Covoiturage({
    username: req.body.username,
    type: req.body.type,
    depart: req.body.depart,
    arrive: req.body.arrive,
    time: req.body.time,
    prix: req.body.prix,
    phone: req.body.phone,
    description: req.body.description,
    nbrePlace: req.body.nbrePlace,
    bagage: req.body.bagage,
    idUserPoster: req.body.idUserPoster,
  });
  await cov.save();
  res.send(cov);
});
router.get("/distination/:distination", async (req, res) => {
  const distination = await Covoiturage.find({ arrive: req.params.distination });
  if (!distination) return res.status(404).send("The distination not found.");
  res.send(distination);
});
router.put("/:id", async (req, res) => {
  const genre = await Covoiturage.findByIdAndUpdate(req.params.id, {
    depart: req.body.depart,
    arrive: req.body.arrive,
    new: true,
  });

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

router.delete("/:id", async (req, res) => {
  const cov = await Covoiturage.findByIdAndRemove(req.params.id);

  if (!cov)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(cov);
});
module.exports = router;
