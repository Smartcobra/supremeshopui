export interface IAuthModel {
  userName: string;
  password: string;
}

export interface IUserState {
  isLoggedin: boolean;
  token: string;
}

export interface IResponseBody {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
}

export interface Ilogout {
  token_type_hint: string;
  token: string;
}
