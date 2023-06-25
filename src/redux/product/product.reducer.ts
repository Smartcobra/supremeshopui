import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import {
  IBrand,
  ICategory,
  IClothDetails,
  IImages,
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
  };
  submitting: boolean;
  submitted: boolean;
  imageData: FormData;
  error: string | null;
  allProducts: any;
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
    },
    productDtls: {
      productName: "",
      productStatus: "",
      shortDescription: "",
      fullDescription: "",
      productType: "",
      productIMEI: "",
      productPrice: 0,
      productQuantity: 0,
    },
    productCompleteDtls: {} as ILaptopDetails | {} as IClothDetails | {} as ISmartWatchDetails | {} as ITVDetails | {} as IMobileDetails,
  },
  submitting: false,
  submitted: false,
  imageData: new FormData(),
  error: null,
  allProducts: null,
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

    updateImages: (state, action) => {
      const { images } = action.payload;
      if (images) {
        for (let i = 0; i < images.length; i++) {
          state.imageData.append("images", images[i]);
        }
      }
    },
    updatePage4Field<T extends keyof InitialState["data"]>(state: RootState, action: PayloadAction<{ page: T; field: any; value: any }>) {
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAction.createProductAction.pending, (state) => {
        state.submitting = true;
      })
      .addCase(productAction.createProductAction.fulfilled, (state, action) => {
        state.submitting = false;
        state.submitted = true;
        state.page = 1;
        state.data.categoryDtls = initialState.data.categoryDtls;
        state.data.brandDtls = initialState.data.brandDtls;
        state.data.productDtls = initialState.data.productDtls;
        state.data.productCompleteDtls = initialState.data.productCompleteDtls;
      })
      .addCase(productAction.createProductAction.rejected, (state) => {
        state.submitting = false;
        state.submitted = false;
      });

    ///getAllProducts
    builder
      .addCase(productAction.getAllProductAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getAllProductAction.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        console.log("Product reducer", state);
        console.log("Product reducer", state.allProducts);
      })
      .addCase(productAction.getAllProductAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action = action.payload;
        }
      });
  },
});

export default productSlice.reducer;
export const { nextPage, previousPage, updateField, updatePage4Field, updateImages } = productSlice.actions;
