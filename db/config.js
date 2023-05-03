const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});//Local Host for Mongodb Connection

