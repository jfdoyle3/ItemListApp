import axios from "axios";

class ItemListDataService {
  retrieveAllItems(name) {
    return axios.get(`http://localhost:8080/users/${name}/itemlist`);
    // console.log("service executed");
  }
}

export default new ItemListDataService();
