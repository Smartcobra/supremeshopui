import { createAsyncThunk } from "@reduxjs/toolkit";
import { BrandData, CreateBrandReq, ViewBrandData } from "../../components/brand/BrandModel";
import { BrandService } from "../../components/brand/brand-service";
import { AuthUtil } from "../../components/util/AuthUtils";

export const createBrandAction: any = createAsyncThunk("brand/createBrandAction", async (data: BrandData, { rejectWithValue }): Promise<any> => {
  try {
    let brandReq: CreateBrandReq = {
      description: data.description,
      brandName: data.brandName,
      categories: data.categories,
    };

    if (AuthUtil.isSetTokenToRequestHeader()) {
      console.log("categoreis", data.categories);
      const formData = new FormData();
      if (data.logo) {
        formData.append("logo", data.logo);
      }
      formData.append("data", JSON.stringify(brandReq));
      console.log("form-----", formData);
      let response = await BrandService.createBrand(formData);
      return response.data;
    }
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

export const getALLBrandsAction: any = createAsyncThunk(
  "brand/getAllBrandsAction",
  async (payload: {}, { rejectWithValue }): Promise<{ data: ViewBrandData[] } | any> => {
    try {
      if (AuthUtil.isSetTokenToRequestHeader()) {
        let response = await BrandService.getBrands();
        return response.data;
      }
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
