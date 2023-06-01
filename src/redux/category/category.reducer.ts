import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { ICategoryModel, ICategoryRsponse } from "../../components/category/CategoryModel";
import * as categoryActions from "./category.actions";

export const categoryFeatureKey = "categoryFeature";

export interface InitialState {
  loading: boolean;
  errorMessage: string | null;
  categoryModel: ICategoryModel;
  token: string | null;
  isAuthenticated: boolean;
  categories: ICategoryRsponse[];
}

const initialState: InitialState = {
  loading: false,
  errorMessage: null,
  categoryModel: {} as ICategoryModel,
  token: null,
  isAuthenticated: false,
  categories: [] as ICategoryRsponse[],
};

export const categorySlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryActions.createCategoryAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryActions.createCategoryAction.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryModel = action.payload;
      })
      .addCase(categoryActions.createCategoryAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.categoryModel = {} as ICategoryModel;
          state.categoryModel = action.payload;
        }
      });

    ///getAllCategory
    builder
      .addCase(categoryActions.getAllCategoryAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryActions.getAllCategoryAction.fulfilled, (state, action) => {
        state.loading = false;
        console.log("category reducer", state);
        state.categories = action.payload;
        console.log("category reducer", state);
        console.log("category reducer", state.categories);
      })
      .addCase(categoryActions.getAllCategoryAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action = action.payload;
        }
      });

    ///getCategoryById
    builder
      .addCase(categoryActions.getCategoryByIdAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryActions.getCategoryByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        console.log("category reducer", state);
        state.categories = action.payload;
        console.log("category reducer", state);
        console.log("category reducer", state.categories);
      })
      .addCase(categoryActions.getCategoryByIdAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action = action.payload;
        }
      });
  },
});

export default categorySlice.reducer;
