import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import {
  IBrand,
  ICategory,
  IClothDetails,
  IImageAndPrice,
  ILaptopDetails,
  IMobileDetails,
  IProduct,
  IProductRequest,
  ISmartWatchDetails,
  ITVDetails,
} from "../../components/product/ProductModel";
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
    categoryDtls: ICategory;
    brandDtls: IBrand;
    productDtls: IProduct;
    productCompleteDtls: IClothDetails | ILaptopDetails | ISmartWatchDetails | IMobileDetails | ITVDetails;
    imageAndPriceDtls: IImageAndPrice;
  };
  //productRequest: IProductRequest;
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
    categoryDtls: {
      categoryName: "",
      categoryAlias: "",
      categoryStatus: "",
    },
    brandDtls: {
      brandName: "",
      brandLogo: null,
    },
    productDtls: {
      productName: "",
      productAlias: "",
      shortDescription: "",
      fullDescription: "",
      productType: "",
      productIMEI: "",
    },
    productCompleteDtls: {} as ILaptopDetails | {} as IClothDetails | {} as ISmartWatchDetails | {} as ITVDetails | {} as IMobileDetails,
    imageAndPriceDtls: {
      productprice: 0,
      productStatus: "",
      imagePath0ne: null,
      imagePathTwo: null,
      imagePathThree: null,
      imagePathFour: null,
      imagePathFive: null,
    },
  },
  // productRequest: {} as IProductRequest,
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

    updatePage4Field<T extends keyof InitialState["data"]>(
      state: RootState,
      // action: PayloadAction<{ page: T; field: keyof ProductFormState["data"][T]; value: ProductFormState["data"][T][keyof ProductFormState["data"][T]] }>
      action: PayloadAction<{ page: T; field: any; value: any }>
    ) {
      const { page, field, value } = action.payload;
      state.data[page][field] = value;
    },

    updateField<T extends keyof InitialState["data"]>(
      state: RootState,
      // action: PayloadAction<{ page: T; field: keyof ProductFormState["data"][T]; value: ProductFormState["data"][T][keyof ProductFormState["data"][T]] }>
      action: PayloadAction<{ page: T; field: any; value: any }>
    ) {
      const { page, field, value } = action.payload;
      state.data[page][field] = value;
      // const keyField = field;
      // state.productRequest.category = state.data.page1;
      // state.productRequest.brand = state.data.page2;
      // state.productRequest.product = state.data.page3;
      // state.productRequest.product = state.data.page3;
      // if (keyField == "laptopDetails") {
      //   console.log("inside If", keyField);
      //   state.productRequest.productDetails = state.data.page4[keyField];
      // }
      // state.productRequest.imageAndPrice = state.data.page5;
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
        state.data.categoryDtls = initialState.data.categoryDtls;
        state.data.brandDtls = initialState.data.brandDtls;
        state.data.productDtls = initialState.data.productDtls;
        state.data.productCompleteDtls = initialState.data.productCompleteDtls;
        state.data.imageAndPriceDtls = initialState.data.imageAndPriceDtls;
      })
      .addCase(productAction.createProductAction.rejected, (state) => {
        state.submitting = false;
        state.submitted = false;
      });
  },
});

export default productSlice.reducer;
export const { nextPage, previousPage, updateField, updatePage4Field } = productSlice.actions;
