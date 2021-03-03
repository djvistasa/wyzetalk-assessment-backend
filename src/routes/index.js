const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/get-albums", controller.getArtists);

module.exports = router;
