import axios from "axios";

export default class CardService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      return response.data.results;
    } catch (e) {
      console.log();
    }
  }
}
