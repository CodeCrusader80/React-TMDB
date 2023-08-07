import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=d48c63199d6b5c860eda4ddf7c97c701";
export class TVShowAPI {
    static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}movie/popular${API_KEY_PARAM}`);
    console.log("***", response.data.results);
    return response.data.results;
    }
}