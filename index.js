const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const commonBaseRoute = "/api/v1";

app.use(commonBaseRoute, require("./routes/user.js"))

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API master-be",
  })
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});