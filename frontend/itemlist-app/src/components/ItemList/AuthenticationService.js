/* Using data in localStorage has no expiration time. The key in it won't be deleted and the 
 data stored in there will stay even if the browser is closed and considered unsecure. 
 The key has to be deleted manually or by code.
 Using the sessionStorage the data get cleared when the page session ends and when you close the browser. 
 Using  sessionStorage preferred for login Authentication. */

class AuthenicationService {
  registerSuccessfulLogin(username, password) {
    console.log("registerSuccessfulLogin");
    sessionStorage.setItem("authenticatedUser", username);
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }
}
export default new AuthenicationService();
