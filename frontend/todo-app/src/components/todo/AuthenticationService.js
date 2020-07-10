import axios from "axios";

class AuthenticationService {
  // Standard Basic authenication header in JS.
  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  createJWTToken(token) {
    return "Bearer " + token;
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: {
        authorization: this.createBasicAuthToken(username, password),
      },
    });
  }

  executeJwtAuthenticationService(username, password) {
    return axios.post("http://localhost:8080/authenticate", {
      username,
      password,
    });
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createJWTToken(token));
  }

  registerSuccessfulLogin(username, password) {
    console.log("registerSuccessfulLogin");
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return "";
    return user;
  }

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
