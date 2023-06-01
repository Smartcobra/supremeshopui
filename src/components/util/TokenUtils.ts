export class TokenUtil {
  private static TOKEN_KEY: string = "user-token";

  public static saveTokenToSession(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public static removeTokenFromSession() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  public static getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public static isLoggedIn() {
    const token = this.getToken();
    return !!token;
  }
}
