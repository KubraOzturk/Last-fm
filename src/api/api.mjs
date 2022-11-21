// import axios
import axios from "axios";
// API KEY
export const API_KEY = "a9559914408b33241d16fe4974ecc393";
// baseURL
const BASE_AXIOS = axios.create({
  baseURL: "https://ws.audioscrobbler.com/2.0",
});

//chart.getTopArtists
export const fetchArtistInfo = (artist_url) =>
 BASE_AXIOS.get(`/?method=artist.getinfo&artist=${artist_url}&api_key=${API_KEY}&format=json`
  );

//artist.getTopAlbums
export const fetchTopAlbums = (artist_url) =>
  BASE_AXIOS.get(
    `/?method=artist.gettopalbums&artist=${artist_url}&api_key=${API_KEY}&format=json`
  );

//artist.getTopTracks
export const fetchTopTracks = (artist_url) =>
  BASE_AXIOS.get(
    `/?method=artist.gettoptracks&artist=${artist_url}&api_key=${API_KEY}&format=json`
  );