const express = require("express"); //To initialize the instance for express
const cors = require("cors"); //Used to resolve the fetch api problem from frontend part
require('./db/config');
const app = express();
const User = require('./db/User');

app.use(express.json());//MiddleWare is use for handling the data from frontend part
app.use(cors());

app.post("/register",(req,res)=>{
    const myData = new User(req.body);
    myData.save();
    res.send(req.body);
});


app.listen(5000);