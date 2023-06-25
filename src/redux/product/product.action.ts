import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthUtil } from "../../components/util/AuthUtils";
import { ProductService } from "../../components/product/product.service";
import { IProductRequest, ProductCreateRequest, ProductDtlRequest, ProductImageRequest } from "../../components/product/ProductModel";

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
    // if (AuthUtil.isSetTokenToRequestHeader()) {
    console.log("------------------------------------inside product action");
    const { formData } = payload;
    console.log("dtls--in action--Product Model", formData);
    let response = await ProductService.createProduct(formData);
    return response.data;
    // }
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

export const getAllProductAction: any = createAsyncThunk("product/getAllProductAction", async (payload: {}, { rejectWithValue }): Promise<{ data: any[] } | any> => {
  try {
    // if (AuthUtil.isSetTokenToRequestHeader()) {
    console.log("getAllProductAction");
    let response = await ProductService.getAllProducts();
    console.log("getAllProductAction----", response);
    console.log("getAllProductAction----", response.data);
    return response.data;
    // }
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});
