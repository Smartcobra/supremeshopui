import axios from "axios";
import { ICategoryModel, ICategoryRsponse } from "./CategoryModel";

export class CategoryService {
  private static createCatUrl: string = "http://localhost:5016/categories";
  private static getCatUrl: string = "http://localhost:5016/categories";
  /**
       @usage : to get all contacts
       @method : POST
       @body : IAuthModel
       @url : https://iam.supremeshope.com/oauth2/token
       */

  public static createCategory(categoryModel: ICategoryModel): Promise<{ data: any }> {
    console.log("zssadasd----categoryModel", JSON.stringify(categoryModel));
    return axios.post(this.createCatUrl, categoryModel);
  }

  public static getCategory(): Promise<{ data: ICategoryRsponse[] }> {
    return axios.get(this.getCatUrl);
  }

  public static getCategoryById(catId: number): Promise<{ data: ICategoryRsponse[] }> {
    console.log("in service", catId);
    return axios.get(`${this.getCatUrl}/${catId}`);
  }
}
