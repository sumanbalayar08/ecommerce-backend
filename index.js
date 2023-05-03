const express = require("express"); //To initialize the instance for express
const cors = require("cors"); //Used to resolve the fetch api problem from frontend part
const bcrypt = require("bcryptjs");
require("./db/config");
const app = express();
const User = require("./db/User");

app.use(express.json()); //MiddleWare is use for handling the data from frontend part
app.use(cors());

app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const myData = await new User({
    name:req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  myData.save();
  res.send(req.body);
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.send("Invalid email");
  }

  const passwordMatches = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!passwordMatches) {
    return res.send("Invalid password");
  }
  res.send(user);
});

app.listen(5000);
