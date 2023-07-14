import { combineReducers } from "@reduxjs/toolkit";

import * as userReducer from "./users/user.reducer";
import * as categoryReducer from "./category/category.reducer";
import * as productReducer from "./product/product.reducer";
import * as brandReducer from "./brand/brand.reducer";

const rootReducer: any = combineReducers({
  [userReducer.userFeatureKey]: userReducer.userSlice.reducer,
  [categoryReducer.categoryFeatureKey]: categoryReducer.categorySlice.reducer,
  [productReducer.productFeatureKey]: productReducer.productSlice.reducer,
  [brandReducer.BrandFeatureKey]: brandReducer.BrandsSlice.reducer,
});

export default rootReducer;
