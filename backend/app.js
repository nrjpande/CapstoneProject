const express = require("express");
const app = express();
const PORT = 8080;

const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");

require("./models/model");
require("./models/post");
require("./models/notifications");
app.use(cors());
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/createPost"));
app.use(require("./routes/user"));
mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb");
});

mongoose.connection.on("error", () => {
  console.log("Not Connected to mongodb");
});

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
