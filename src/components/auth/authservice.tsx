import axios from "axios";
import { IAuthModel, IResponseBody, Ilogout } from "./usermodel";

export class AuthService {
  private static loginUrl: string = "http://localhost:5022/users/token";
  private static logoutUrl: string = "http://localhost:5022/users/logout";
  /**
     @usage : to get all contacts
     @method : POST
     @body : IAuthModel
     @url : https://iam.supremeshope.com/oauth2/token
     */

  public static getToken(auth: IAuthModel): Promise<{ data: IResponseBody }> {
    return axios.post(this.loginUrl, auth);
  }

  public static removeToken(userLogout: Ilogout): Promise<{ data: { message: string } }> {
    let token_type_hint = userLogout.token_type_hint;
    let token = userLogout.token;
    return axios.post(
      this.logoutUrl,
      {},
      {
        params: {
          token_type_hint: token_type_hint,
          token: token,
        },
      }
    );
  }
}
