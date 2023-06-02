import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { ICategoryModel, ICategoryRsponse } from "../../components/category/CategoryModel";
import * as categoryActions from "./category.actions";

export const categoryFeatureKey = "categoryFeature";

export interface InitialState {
  loading: boolean;
  errorMessage: string | null;
  categoryModel: ICategoryModel;
  editCategoryModel: ICategoryRsponse;
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
  editCategoryModel: {} as ICategoryRsponse,
  categories: [] as ICategoryRsponse[],
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //////create Category
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
        state.editCategoryModel = action.payload;
        console.log("category reducer", state);
        console.log("category reducer", state.categoryModel);
      })
      .addCase(categoryActions.getCategoryByIdAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action = action.payload;
        }
      });

    ///updateCategory
    builder
      .addCase(categoryActions.updateCategoryAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryActions.updateCategoryAction.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryModel = action.payload;
      })
      .addCase(categoryActions.updateCategoryAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.categoryModel = {} as ICategoryModel;
          state.categoryModel = action.payload;
        }
      });

    ///delete by Category Id
    builder
      .addCase(categoryActions.deleteCategoryByIdAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryActions.deleteCategoryByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        console.log("category reducer", state);
        state.categoryModel = {} as ICategoryModel;
        console.log("category reducer", state);
        console.log("category reducer", state.categoryModel);
      })
      .addCase(categoryActions.deleteCategoryByIdAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action = action.payload;
        }
      });
  },
});

export default categorySlice.reducer;
