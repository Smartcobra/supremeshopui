import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthUtil } from "../../components/util/AuthUtils";
import { ProductService } from "../../components/product/product.service";
import { IProductRequest } from "../../components/product/ProductModel";

export const createProductAction: any = createAsyncThunk(
  "product/createProductAction",
  async (payload: { product: IProductRequest }, { rejectWithValue }): Promise<any> => {
    try {
      // if (AuthUtil.isSetTokenToRequestHeader()) {
      console.log("------------------------------------inside product action");
      const { product } = payload;
      console.log("paylod is-----", payload);
      console.log("zssadasd----Product Model", JSON.stringify(product));
      let response = await ProductService.createProduct(product);
      return response.data;
      // }
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// export const submitFormData = createAsyncThunk(
//   'form/submitFormData',
//   async (data: any) => {
//     const response = await axios.post('<your-post-url>', data); // Replace <your-post-url> with your actual API endpoint
//     return response.data;
//   }
// );
