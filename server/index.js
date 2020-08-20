const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;
const router = require("./routes/route");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/v1", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
