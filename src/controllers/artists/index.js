const {
  getArtistsService,
  getArtistAlbumsService,
  getArtistTopTracksService,
} = require("../../services/artists");

async function getArtists(request, response) {
  const getArtistsResponse = await getArtistsService(request);

  if (getArtistsResponse && getArtistsResponse.error) {
    return response.status(500).send(getArtistsResponse);
  }

  if (getArtistsResponse.ok) {
    return response.status(200).send(getArtistsResponse);
  }

  response.status(403).send(getArtistsResponse);
}

async function getArtistsAlbums(request, response) {
  const getArtistAlbumsResponse = await getArtistAlbumsService(request);

  if (getArtistAlbumsResponse && getArtistAlbumsResponse.error) {
    return response.status(500).send(getArtistAlbumsResponse);
  }

  if (getArtistAlbumsResponse.ok) {
    return response.status(200).send(getArtistAlbumsResponse);
  }

  response.status(403).send(getArtistsResponse);
}

async function getArtistsTopTracks(request, response) {
  const getArtistTopTracksResponse = await getArtistTopTracksService(request);

  if (getArtistTopTracksResponse && getArtistTopTracksResponse.error) {
    return response.status(500).send(getArtistTopTracksResponse);
  }

  if (getArtistTopTracksResponse.ok) {
    return response.status(200).send(getArtistTopTracksResponse);
  }

  response.status(403).send(getArtistTopTracksResponse);
}

module.exports = {
  getArtists,
  getArtistsAlbums,
  getArtistsTopTracks,
};
