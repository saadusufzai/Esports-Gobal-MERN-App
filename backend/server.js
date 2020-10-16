const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by')
app.use(cors());
app.use(express.json());

const registerRoutes = require("./routes/register");

app.use("/register", registerRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to ESports Global API.",
    developer: "Saad Aslam",
    links:{ 
        github_Link: "https://github.com/saadusufzai",
        facebook: "https://www.facebook.com/saadusufzai"
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  const uri = process.env.ATLAS_URI;

  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("MongoDB database connection is successfully established");
  });
});
