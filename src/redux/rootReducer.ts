import { combineReducers } from "@reduxjs/toolkit";

import * as userReducer from "./users/user.reducer";
import * as categoryReducer from "./category/category.reducer";

const rootReducer: any = combineReducers({
  [userReducer.userFeatureKey]: userReducer.userSlice.reducer,
  [categoryReducer.categoryFeatureKey]: categoryReducer.categorySlice.reducer,
});

export default rootReducer;
