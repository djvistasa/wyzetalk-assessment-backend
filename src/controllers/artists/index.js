const { getArtistsService } = require("../../services/artists");

async function getArtists(request, response) {
  const getArtistsResponse = await getArtistsService(request);

  if (getArtistsResponse && getArtistsResponse.error) {
    return response.status(500).send(getArtistsResponse);
  }

  if (getArtistsResponse.success) {
    return response.status(200).send(getArtistsResponse);
  }

  response.status(403).send(getArtistsResponse);
}

module.exports = {
  getArtists,
};
