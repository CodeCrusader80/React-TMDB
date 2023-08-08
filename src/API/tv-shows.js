import axios from "axios";
import {BASE_URL, API_KEY_PARAM} from "../config.js";

export class TVShowAPI {
    static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}movie/popular${API_KEY_PARAM}`);
    return response.data.results;
    }
    static async fetchRecommendations(movieID) {
    const response = await axios.get(`${BASE_URL}movie/${movieID}/recommendations${API_KEY_PARAM}`);
    return response.data.results;
    }
}