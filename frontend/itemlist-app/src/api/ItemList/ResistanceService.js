import axios from "axios";

class ResistanceService {
  executeResistanceService() {
    return axios.get("http://localhost:8080/resistance/");
    // console.log("service executed");
  }

  executeResistanceBeanService() {
    return axios.get("http://localhost:8080/resistance-bean/");
    // console.log("service executed");
  }

  executeResistancPathVariableService(name) {
    return axios.get(`http://localhost:8080/resistance/path-variable/${name}`);
    // console.log("service executed");
  }
}

export default new ResistanceService();
