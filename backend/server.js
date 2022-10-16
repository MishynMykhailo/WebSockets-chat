const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const { PORT, DB_HOST } = process.env;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    const db = await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { port, host, name } = db.connection;
    console.log(
      `MongoDB connected on port ${port}, on ${host}, name - ${name}`
    );
  } catch (error) {
    console.log(`${error}`);
  }
};
(async () => {
  await connectDB();
})();
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
