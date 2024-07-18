const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const addressRouter=require('./Routes/AddressRoute')

require("dotenv").config();
const { MONGO_URL, PORT } = process.env;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDb is connected Successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.use(cors());
app.use(express.json());
app.use('/',addressRouter)