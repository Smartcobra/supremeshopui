import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategoryModel, ICategoryRsponse } from "../../components/category/CategoryModel";
import { CategoryService } from "../../components/category/category.service";
import { AuthUtil } from "../../components/util/AuthUtils";

export const createCategoryAction: any = createAsyncThunk(
  "category/createCategoryAction",
  async (payload: { category: ICategoryModel }, { rejectWithValue }): Promise<any> => {
    try {
      if (AuthUtil.isSetTokenToRequestHeader()) {
        console.log("------------------------------------inside category action");
        const { category } = payload;
        console.log("paylod is-----", payload);
        console.log("zssadasd----categoryModel", JSON.stringify(category));
        let response = await CategoryService.createCategory(category);
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

export const getAllCategoryAction: any = createAsyncThunk(
  "category/getAllCategoryAction",
  async (payload: {}, { rejectWithValue }): Promise<{ data: ICategoryRsponse[] } | any> => {
    try {
      if (AuthUtil.isSetTokenToRequestHeader()) {
        let response = await CategoryService.getCategory();
        console.log("getAllCategoryAction----", response);
        console.log("getAllCategoryAction----", response.data);
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

export const getCategoryByIdAction: any = createAsyncThunk(
  "category/getCategoryByIdAction",
  async (payload: { catId: string }, { rejectWithValue }): Promise<{ data: ICategoryRsponse[] } | any> => {
    try {
      const { catId } = payload;
      console.log("payload---------------", payload);
      let catid: number = Number(payload);
      if (AuthUtil.isSetTokenToRequestHeader()) {
        let response = await CategoryService.getCategoryById(catid);
        console.log("getCategoryByIdAction----", response);
        console.log("getCategoryByIdAction----", response.data);
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
