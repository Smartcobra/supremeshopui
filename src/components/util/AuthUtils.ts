import axios from "axios";
import { TokenUtil } from "./TokenUtils";

// export class AuthUtil {
//   public static isSetTokenToRequestHeader(): boolean {
//     let isSuccess: boolean = false;
//     if (TokenUtil.isLoggedIn()) {
//       console.log("is logged in----------------");
//       const token = TokenUtil.getToken();
//       console.log(token, "is logged in-----token-----------");
//       if (token) {
//         axios.defaults.headers.common["Authorization"] = "Bearer " + token;
//         console.log(token, "is logged in-----token-----Bearers------");
//         isSuccess = true;
//       } else {
//         delete axios.defaults.headers["Authorization"];
//         isSuccess = false;
//       }
//     }

//     return isSuccess;
//   }
// }

export class AuthUtil {
public static isSetTokenToRequestHeader(): boolean {
  let isSuccess: boolean = false;
  if (TokenUtil.isLoggedIn()) {
    console.log("is logged in----------------");
    const token = TokenUtil.getToken();
    console.log(token, "is logged in-----token-----------");
    if (token) {
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
      console.log(token, "is logged in-----token-----Bearers------");
      isSuccess = true;
    } else {
      delete axios.defaults.headers["Authorization"];
      isSuccess = false;
    }
  }

  return isSuccess;
}
}

