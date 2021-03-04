const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/search", controller.getArtists);
router.get("/get-artist-albums", controller.getArtistsAlbums);
router.get("/get-artist-top-tracks", controller.getArtistsTopTracks);

module.exports = router;
