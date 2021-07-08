require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
