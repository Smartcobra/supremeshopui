import axios from "axios";
import { IProduct, IProductRequest, ProductCreateRequest, ProductDtlRequest, ProductImageRequest } from "./ProductModel";

export class ProductService {
  private static createProductUrl: string = "http://localhost:5023/products";
  private static getAllProductsUrl: string = "http://localhost:5023/products";

  public static createProduct(formData: FormData): Promise<{ data: any }> {
    const choice = formData.get("data") as string;
    console.log("data for post call", choice);

    return axios.post(this.createProductUrl, formData);
  }

  public static getAllProducts(): Promise<{ data: any }> {
    console.log("data for all product call");
    return axios.get(this.getAllProductsUrl);
  }
}
