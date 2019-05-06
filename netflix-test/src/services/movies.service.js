import axios from "axios";
import config from "../../config/config.dev.js";
import Parser from "../parsers";
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10`;

export default {
  async getMovies() {
    let { data } = await axios.get(
      `${BASE_URL}&q=movies&type=video&key=${config.API_KEY}`
    );
    return Parser.parseMovies(data);
  },

  async getTrailers() {
    let { data } = await axios.get(
      `${BASE_URL}&q=trailers&type=video&key=${config.API_KEY}`
    );
    return Parser.parseMovies(data);
  }
};
