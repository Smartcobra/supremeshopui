import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthModel, IResponseBody, Ilogout } from "../../components/auth/usermodel";
import { AuthService } from "../../components/auth/authservice";

export const loginUserAction: any = createAsyncThunk(
  "users/loginUserAction",
  async (payload: { user: IAuthModel }, { rejectWithValue }): Promise<{ data: IResponseBody } | any> => {
    try {
      const { user } = payload; /// destrucring concept
      // console.log("paylod", payload);
      // console.log("paylod", payload.user.userName);
      // console.log("paylod", payload.user.password);
      let response = await AuthService.getToken(user);
      console.log("respose for user", response.data);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUserAction: any = createAsyncThunk(
  "users/logoutUserAction",
  async (payload: { userLogout: Ilogout }, { rejectWithValue }): Promise<{ data: string } | any> => {
    try {
      const { userLogout } = payload;
      console.log(payload.userLogout.refresh_token, "---------------------------------------");
      console.log(payload.userLogout.access_token, "---------------------------------------");
      let response = await AuthService.removeToken(userLogout); //// the o
      console.log("------------logout-----------", response.data);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
