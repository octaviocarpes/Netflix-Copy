import axios from "axios";
import config from "../../config/config.dev.js";
import Parser from "../parsers";
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=trailers&type=video&key=${
  config.API_KEY
}`;

export default {
  async getVideos() {
    let { data } = await axios.get(BASE_URL);
    return Parser.parseVideos(data);
  }
};
