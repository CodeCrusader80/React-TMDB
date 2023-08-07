import axios from "axios";
import {BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL} from "../config.js";

export class TVShowAPI {
    static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}movie/popular${API_KEY_PARAM}`);
    return response.data.results;
    }
}