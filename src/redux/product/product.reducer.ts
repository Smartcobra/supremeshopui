import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { IBrand, ICategory, IImageAndPrice, IProduct, IProductRequest } from "../../components/product/ProductModel";
import { RootState } from "../store";
import * as productAction from "./product.action";

export const productFeatureKey = "productFeature";

const productRequest = {} as IProductRequest;

export interface InitialState {
  loading: boolean;
  errorMessage: string | null;
  isAuthenticated: boolean;
  token: string | null;
  page: number;
  data: {
    page1: ICategory;
    page2: IBrand;
    page3: IProduct;
    page4: IImageAndPrice;
  };
  productRequest: IProductRequest;
  submitting: boolean;
  submitted: boolean;
}

const initialState: InitialState = {
  loading: false,
  errorMessage: null,
  isAuthenticated: false,
  token: null,
  page: 1,
  data: {
    page1: {
      categoryName: "",
      categoryAlias: "",
      categoryStatus: "",
    },
    page2: {
      brandName: "",
      brandLogo: null,
    },
    page3: {
      productName: "",
      productAlias: "",
      shortDescription: "",
      fullDescription: "",
      productType: "",
      productIMEI: "",
    },
    page4: {
      productprice: 0,
      productStatus: "",
      imagePath0ne: null,
      imagePathTwo: null,
      imagePathThree: null,
      imagePathFour: null,
      imagePathFive: null,
    },
  },
  productRequest: {} as IProductRequest,
  submitting: false,
  submitted: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    previousPage(state) {
      state.page -= 1;
    },

    updateField<T extends keyof InitialState["data"]>(
      state: RootState,
      // action: PayloadAction<{ page: T; field: keyof ProductFormState["data"][T]; value: ProductFormState["data"][T][keyof ProductFormState["data"][T]] }>
      action: PayloadAction<{ page: T; field: any; value: any }>
    ) {
      const { page, field, value } = action.payload;
      state.data[page][field] = value;
      state.productRequest.category = state.data.page1;
      state.productRequest.brand = state.data.page2;
      state.productRequest.product = state.data.page3;
      state.productRequest.imageAndPrice = state.data.page4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAction.createProductAction.pending, (state) => {
        state.submitting = true;
      })
      .addCase(productAction.createProductAction.fulfilled, (state) => {
        state.submitting = false;
        state.submitted = true;
        state.page = 1;
        state.data.page1 = initialState.data.page1;
        state.data.page2 = initialState.data.page2;
        state.data.page3 = initialState.data.page3;
        state.data.page4 = initialState.data.page4;
      })
      .addCase(productAction.createProductAction.rejected, (state) => {
        state.submitting = false;
        state.submitted = false;
      });
  },
});

export default productSlice.reducer;
export const { nextPage, previousPage, updateField } = productSlice.actions;
