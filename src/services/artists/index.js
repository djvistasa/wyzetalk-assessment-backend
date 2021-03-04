const { makeApiCall } = require("../../helpers/api");
const {
  GET_ARTISTS_URL,
  GET_ARTIST_ALBUMS_URL,
  GET_ARTISTS_TOP_TRACKS,
} = require("../constants");

async function getArtistsService({ query: { searchTerm } }) {
  return makeApiCall("get", GET_ARTISTS_URL, null, {
    q: searchTerm,
  });
}

async function getArtistAlbumsService({ query: { artistId } }) {
  return makeApiCall("get", `${GET_ARTIST_ALBUMS_URL}/${artistId}/albums`);
}

async function getArtistTopTracksService({ query: { artistId } }) {
  return makeApiCall("get", `${GET_ARTISTS_TOP_TRACKS}/${artistId}/top`);
}

module.exports = {
  getArtistsService,
  getArtistAlbumsService,
  getArtistTopTracksService,
};
