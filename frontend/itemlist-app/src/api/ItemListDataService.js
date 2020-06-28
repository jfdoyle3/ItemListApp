import axios from "axios";

class ItemListDataService {
  retrieveAllItems(name) {
    return axios.get(`http://localhost:8080/users/${name}/itemlist`);
    // console.log("service executed");
  }

  deleteItem(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/itemlist/${id}`);
    // console.log("service executed");
  }
}

export default new ItemListDataService();
