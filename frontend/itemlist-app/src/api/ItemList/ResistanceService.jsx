import axios from "axios";

class ResistanceService {
  executeResistanceService() {
    return axios.get("http://localhost:8080/resistance/");
    // console.log("service executed");
  }
}

export default new ResistanceService();
