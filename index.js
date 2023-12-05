const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.static(__dirname));
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/SGH', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const PatientSchema = mongoose.Schema({
    lname: String,
    fname: String,
    cnum: String,
    email: String,
    address:String,
    service:String,
    opddept: String,
    raddept: String,
    entsched: String,
    opthsched: String,
    pediasched: String, 
    cardiosched: String,
    gynesched: String,
    pulmosched: String, 
    ultrasched: String,
    xraysched: String, 
    ctsched: String
});

const UserModel = mongoose.model("patient", PatientSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'appointment.html'));
});

app.post("/", async (req, res) => {
  try {
    const {
      lname,
      fname,
      cnum,
      email,
      address,
      service,
      opddept,
      raddept,
      entsched,
      opthsched,
      pediasched,
      cardiosched,
      gynesched,
      pulmosched,
      ultrasched,
      xraysched,
      ctsched,
    } = req.body;

    const newUser = new UserModel({
      lname,
      fname,
      cnum,
      email,
      address,
      service,
      opddept,
      raddept,
      entsched,
      opthsched,
      pediasched,
      cardiosched,
      gynesched,
      pulmosched,
      ultrasched,
      xraysched,
      ctsched,
    });

    await newUser.save();

    res.status(201).send("Data saved to MongoDB");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
