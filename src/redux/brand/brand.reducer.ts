import { createSlice, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import * as BrandActions from "./brand.action";
import { ViewBrandData } from "../../components/brand/BrandModel";

export const brandFeatureKey = "brandFeature";

export interface InitialState {
  categories: number[];
  brandName: string | null;
  loading: boolean;
  errorMessage: string | null;
  brands: ViewBrandData[];
}

const initialState: InitialState = {
  categories: [0],
  brandName: "",
  loading: false,
  errorMessage: null,
  brands: [] as ViewBrandData[],
};

export const BrandsSlice = createSlice({
  name: "BrandSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(BrandActions.createBrandAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(BrandActions.createBrandAction.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = initialState.categories;
        state.brandName = initialState.brandName;
      })
      .addCase(BrandActions.createBrandAction.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message ?? "Image upload failed";
      });

    ////get All Brands
    builder
      .addCase(BrandActions.getALLBrandsAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(BrandActions.getALLBrandsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(BrandActions.getALLBrandsAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action.payload;
        }
      });
  },
});

export const BrandFeatureKey = "brandFeature";
