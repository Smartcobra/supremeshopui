import axios from "axios";
import { ICategoryModel, ICategoryRsponse } from "./CategoryModel";

export class CategoryService {
  // private static createCatUrl: string = "http://localhost:5016/categories";
  // private static getCatUrl: string = "http://localhost:5016/categories";

  private static createCatUrl: string = "http://3.7.96.250:5012/gateway-catg-sv/categories";
  private static getCatUrl: string = "http://3.7.96.250:5012/gateway-catg-sv/categories";
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

  public static updateCategory(categoryModel: ICategoryModel): Promise<{ data: any }> {
    console.log("zssadasd----categoryModel", JSON.stringify(categoryModel));
    return axios.put(this.createCatUrl, categoryModel);
  }

  public static deleteCategoryById(catId: number): Promise<{ data: any }> {
    console.log("in delete service", typeof catId);
    console.log("in delete service", catId);
    return axios.delete(`${this.getCatUrl}/${catId}`);
  }
}
