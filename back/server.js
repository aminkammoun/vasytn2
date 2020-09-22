const mongoose = require("mongoose");
const express = require("express");
const app = express();
const convRouter = require("./routes/covoiturage");
const reservation = require("./routes/reservation");
const path = require("path");
const covUser = require("./routes/user");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

mongoose
  .connect(process.env.MONGO||"mongodb://localhost/covoiturage")
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log("problem to connect to data base ", err);
  });

app.use(express.json());

app.use("/covoiturage", convRouter);
app.use("/user", covUser);
app.use("/reservation", reservation);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/ , (req,res)=> res.sendFile(__dirname + '/public/index.html'))
}
//app.use("/users", usersRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
