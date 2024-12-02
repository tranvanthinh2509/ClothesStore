const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./src/config/connectDatabase");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

connectDatabase();
app.use("/", (req, res) => {
  res.send("Sever on ...");
});

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port: ${listener.address().port}`);
});