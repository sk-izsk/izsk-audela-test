import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/',
});

const urlArtist = `chart.artists.get?page=1&page_size=3&country=it&apiKey=${process.env.REACT_APP_MUSIX_API}`;
export { urlArtist, axiosApi };
