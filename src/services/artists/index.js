const { makeApiCall } = require("../../helpers/api");
const { GET_ARTISTS_URL } = require("../constants");

async function getArtistsService({ query: { searchTerm } }) {
  return makeApiCall("get", GET_ARTISTS_URL, null, {
    q: searchTerm,
  });
}

module.exports = {
  getArtistsService,
};
