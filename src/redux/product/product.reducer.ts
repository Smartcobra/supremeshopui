import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { BrandsDrpDnDTO, CategoriesDrpDnDTO, IBrand, ICategory, IProduct, IProductDescription } from "../../components/product/ProductModel";
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
    productDescription: IProductDescription;
  };
  submitting: boolean;
  submitted: boolean;
  imageData: FormData;
  error: string | null;
  allProducts: any;
  catDrDnData: CategoriesDrpDnDTO[];
  brandDrDnData: BrandsDrpDnDTO[];
  parentId: string;
  modalContent: string;
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
      brandDesc: "",
    },
    productDtls: {
      productName: "",
      productStatus: "",
      shortDescription: "",
      fullDescription: "",
      productType: "",
      productModel: "",
      productPrice: "",
      productQuantity: 0,
    },
    productDescription: {
      productDimensions: "",
      manufacturer: "",
      ASIN: "",
      itemModelNumber: "",
      countryOrigin: "",
      department: "",
      genericName: "",
      series: "",
      colour: "",
      processor: "",
      screenDisplaySize: "",
      resolution: "",
      ram: "",
      hardDriveSize: "",
      hardDiskDescription: "",
      audioDetails: "",
      averageBatteryLife: "",
      countryOfOrigin: "",
      weight: "",
      graphics: "",
      os: "",
      modelNo: "",
      batteryPowerRating: "",
      connectivityType: "",
      gps: "",
      specialFeature: "",
      frontCamera: "",
      rearCamera: "",
      batteries: "",
      callFacility: "",
      wattage: "",
      model: "",
      modelYear: "",
      displayTechnology: "",
      viewingAngle: "",
      audioOutputMode: "",
      voltage: "",
      standingScreenDisplaySize: "",
      supportBluetooth: "",
      imageAspectRatio: "",
    },
  },
  parentId: "",
  submitting: false,
  submitted: false,
  imageData: new FormData(),
  error: null,
  allProducts: null,
  catDrDnData: [],
  brandDrDnData: [],
  modalContent: "",
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
    nextcatPage(state) {
      state.page = 1;
    },
    setModalContent(state, action) {
      state.modalContent = action.payload;
    },

    updateImages: (state, action) => {
      const { images } = action.payload;
      if (images) {
        for (let i = 0; i < images.length; i++) {
          state.imageData.append("images", images[i]);
        }
      }
    },

    updatePrentId: (state, action) => {
      const { parentId } = action.payload;
      console.log("product reducer-----", parentId);
      if (parentId) {
        state.parentId = parentId;
      }
    },

    updatePage4Field<T extends keyof InitialState["data"]>(state: RootState, action: PayloadAction<{ page: T; field: any; value: any }>) {
      const { page, field, value } = action.payload;
      //state.data[page][field] = value;
      console.log(value);
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
        // state.data.productCompleteDtls = initialState.data.productCompleteDtls;
        state.data.productDescription = initialState.data.productDescription;
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
          state.errorMessage = action.payload;
        }
      });

    ///get CategoriesDroprDown Data
    builder
      .addCase(productAction.getAllCategoriesAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getAllCategoriesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.catDrDnData = action.payload;
      })
      .addCase(productAction.getAllCategoriesAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action.payload;
        }
      });

    ///get Brands drop down Data
    builder
      .addCase(productAction.getAllBrandsAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getAllBrandsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.brandDrDnData = action.payload;
      })
      .addCase(productAction.getAllBrandsAction.rejected, (state, action) => {
        state.loading = false;
        if (isRejectedWithValue(action)) {
          state.errorMessage = action.payload;
        }
      });
  },
});

export default productSlice.reducer;
export const { nextPage, previousPage, nextcatPage, updateField, updatePage4Field, updateImages, updatePrentId, setModalContent } = productSlice.actions;
