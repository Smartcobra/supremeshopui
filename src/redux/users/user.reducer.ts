import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { IAuthModel } from "../../components/auth/usermodel";
import { TokenUtil } from "../../components/util/TokenUtils";
import * as userActions from "../users/user.actions";

export const userFeatureKey = "userFeature";
export interface InitialState {
  loading: boolean;
  errorMessage: string | null;
  user: IAuthModel;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  loading: false,
  errorMessage: null,
  user: {} as IAuthModel,
  token: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    // logOutUserAction: (state, action) => {
    //   state.user = {} as IAuthModel;
    //   state.token = null;
    //   state.isAuthenticated = false;
    //   TokenUtil.removeTokenFromSession();
    // },
  },
  extraReducers: (builder) => {
    //loginUserAction
    builder
      .addCase(userActions.loginUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(userActions.loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload", action.payload, "------");

        if (action.payload.access_token) {
          state.user = action.payload.user;
          state.token = action.payload.access_token;
          state.isAuthenticated = true;
          TokenUtil.saveTokenToSession(action.payload.access_token);
        }
      })
      .addCase(userActions.loginUserAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.user = {} as IAuthModel;
          state.token = null;
          state.isAuthenticated = true;
          TokenUtil.removeTokenFromSession();
          state.errorMessage = action.payload;
        }
      });
    /////////////logout builder
    builder
      .addCase(userActions.logoutUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(userActions.logoutUserAction.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload", action.payload.message, "------");
        ////what to here
        TokenUtil.removeTokenFromSession();
        state.isAuthenticated = false;
      })
      .addCase(userActions.logoutUserAction.rejected, (state, action) => {
        state.loading = false;
        // TokenUtil.removeTokenFromSession();
        //state.isAuthenticated = false;
      });
  },
});

//export const { logOutUserAction } = userSlice.actions;
export default userSlice.reducer;
