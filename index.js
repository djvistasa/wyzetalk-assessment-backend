require("dotenv").config();

const express = require("express");
const application = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");

const { PORT } = process.env;

application.use(cors());
application.use(bodyParser.json());
application.use("/", routes);

const port = PORT || 3002;

application.listen(port, () => {
  console.log(`server started on port ${port}`);
});
