import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthUtil } from "../../components/util/AuthUtils";
import { ProductService } from "../../components/product/product.service";
import {
  BrandsDrpDnDTO,
  CategoriesDrpDnDTO,
  IProductRequest,
  ProductCreateRequest,
  ProductDtlRequest,
  ProductImageRequest,
  ProductTableData,
} from "../../components/product/ProductModel";
import { promises } from "dns";

// export const createProductAction: any = createAsyncThunk(
//   "product/createProductAction",
//   async (payload: { product: IProductRequest }, { rejectWithValue }): Promise<any> => {
//     try {
//       // if (AuthUtil.isSetTokenToRequestHeader()) {
//       console.log("------------------------------------inside product action");
//       const { product } = payload;
//       console.log("paylod is-----", payload);
//       console.log("zssadasd----Product Model", JSON.stringify(product));
//       let response = await ProductService.createProduct(product);
//       return response.data;
//       // }
//     } catch (err: any) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const createProductAction: any = createAsyncThunk("product/createProductAction", async (payload: { formData: FormData }, { rejectWithValue }): Promise<any> => {
  try {
    if (AuthUtil.isSetTokenToRequestHeader()) {
      console.log("------------------------------------inside product action");
      const { formData } = payload;
      console.log("dtls--in action--Product Model", formData);
      let response = await ProductService.createProduct(formData);
      return response.data;
    }
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

export const getAllProductAction: any = createAsyncThunk(
  "product/getAllProductAction",
  async (payload: {}, { rejectWithValue }): Promise<{ data: ProductTableData[] } | any> => {
    try {
      if (AuthUtil.isSetTokenToRequestHeader()) {
        console.log("getAllProductAction");
        let response = await ProductService.getAllProducts();
        console.log("getAllProductAction----", response);
        //console.log("getAllProductAction----", response.data);
        //return response.data;
      }
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllCategoriesAction: any = createAsyncThunk(
  "product/getAllCategoriesAction",
  async (payload: {}, { rejectWithValue }): Promise<{ data: CategoriesDrpDnDTO } | any> => {
    try {
      if (AuthUtil.isSetTokenToRequestHeader()) {
        let resp = await ProductService.getAllCategories();
        console.log("cat data for product", resp.data);
        return resp.data;
      }
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.CatDataResponse);
    }
  }
);

export const getAllBrandsAction: any = createAsyncThunk(
  "product/getAllBrandsAction",
  async (payload: {}, { rejectWithValue }): Promise<{ data: BrandsDrpDnDTO } | any> => {
    try {
      if (AuthUtil.isSetTokenToRequestHeader()) {
        let resp = await ProductService.getAllBrands();
        console.log("brands Data", resp.data);
        return resp.data;
      }
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err);
    }
  }
);
