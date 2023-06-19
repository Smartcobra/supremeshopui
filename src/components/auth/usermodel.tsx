export interface IAuthModel {
  userName: string;
  password: string;
}

export interface IUserState {
  isLoggedin: boolean;
  token: string;
}

// export interface IResponseBody {
//   access_token: string;
//   refresh_token: string;
//   scope: string;
//   id_token: string;
// }

export interface IResponseBody {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
}

////for wso2
// export interface Ilogout {
//   token_type_hint: string;
//   token: string;
// }

///for keycloak
export interface Ilogout {
  access_token: string;
  refresh_token: string;
}
