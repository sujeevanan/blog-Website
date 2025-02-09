const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const port = 4000;
const secret = "1235w5westes6d65d6d6";
const cookieParser = require("cookie-parser");

//to use the json data
app.use(express.json());

//coockie parser
app.use(cookieParser());

//salt
const salt = bcrypt.genSaltSync(10);

//use cors
app.use(
  cors({
    origin: "http://localhost:5173", // Only allow requests from your frontend
    credentials: true, // Allow cookies, authentication headers
  })
);

//mongoose connect
mongoose.connect(
  "mongodb+srv://blog:blog123@cluster0.2tbi5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  //   () => {
  //     console.log("database connected succesfully");
  //   }
);

//test
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const UserDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    res.json(UserDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

//login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

//profile
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

//server started
app.listen(port, () => {
  console.log(`started on port number ${port}`);
});

//mongodb+srv://blog:blog123@cluster0.2tbi5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
