import axios from "axios";
import { IProduct, IProductRequest } from "./ProductModel";

export class ProductService {
  // private static createCatUrl: string = "http://localhost:5016/categories";
  // private static getCatUrl: string = "http://localhost:5016/categories";

  private static createProductUrl: string = "http://localhost:5023/products";
  private static getCatUrl: string = "http://3.7.96.250:5012/gateway-catg-sv/categories";
  /**
       @usage : to get all contacts
       @method : POST
       @body : IAuthModel
       @url : https://iam.supremeshope.com/oauth2/token
       */

  public static createProduct(productModel: IProductRequest): Promise<{ data: any }> {
    const product = { productRequest: productModel };
    console.log("zssadasd----Productmodel", JSON.stringify(product));
    return axios.post(this.createProductUrl, productModel);
  }

  //   public static getCategory(): Promise<{ data: ICategoryRsponse[] }> {
  //     return axios.get(this.getCatUrl);
  //   }

  //   public static getCategoryById(catId: number): Promise<{ data: ICategoryRsponse[] }> {
  //     console.log("in service", catId);
  //     return axios.get(`${this.getCatUrl}/${catId}`);
  //   }

  //   public static updateCategory(categoryModel: ICategoryModel): Promise<{ data: any }> {
  //     console.log("zssadasd----categoryModel", JSON.stringify(categoryModel));
  //     return axios.put(this.createCatUrl, categoryModel);
  //   }

  //   public static deleteCategoryById(catId: number): Promise<{ data: any }> {
  //     console.log("in delete service", typeof catId);
  //     console.log("in delete service", catId);
  //     return axios.delete(`${this.getCatUrl}/${catId}`);
  //   }
}
