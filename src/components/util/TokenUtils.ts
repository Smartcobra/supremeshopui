export class TokenUtil {
  private static TOKEN_KEY: string = "user-token";
  private static REFRESH_TOKEN_KEY: string = "refresh-token";

  public static saveTokenToSession(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public static saveRefreshTokenToSession(refreshtoken: string) {
    sessionStorage.setItem(this.REFRESH_TOKEN_KEY, refreshtoken);
  }

  public static removeTokenFromSession() {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  public static getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public static getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  public static isLoggedIn() {
    const token = this.getToken();
    //return !!token;
    return true;
  }
}
