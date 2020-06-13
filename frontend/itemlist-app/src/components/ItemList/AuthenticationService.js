class AuthenicationService {
  registerSuccessfulLogin(username, password) {
    console.log("registerSuccessfulLogin");
    sessionStorage.setItem("authenticatedUser", username);
  }
  logout() {
    console.log("registerSuccessfulLogout");
    sessionStorage.removeItem("authenticatedUser");
  }
}
export default new AuthenicationService();
