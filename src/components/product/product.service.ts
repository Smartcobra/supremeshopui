import axios from "axios";
import { BrandsDrpDnDTO, CategoriesDrpDnDTO, ProductTableData } from "./ProductModel";

export class ProductService {
  private static createProductUrl: string = "http://localhost:5012/gateway-product-sv/products";
  private static getAllProductsUrl: string = "http://localhost:5012/gateway-product-sv/products";
  private static getAllCategoriesUrl: string = "http://localhost:5012/gateway-product-sv/products/categories";
  private static getAllBrandsUrl: string = "http://localhost:5012/gateway-product-sv/products/brands";

  public static createProduct(formData: FormData): Promise<{ data: any }> {
    const choice = formData.get("data") as string;
    console.log("data for post call", choice);
    return axios.post(this.createProductUrl, formData);
  }

  public static getAllCategories(): Promise<{ data: CategoriesDrpDnDTO }> {
    return axios.get(this.getAllCategoriesUrl);
  }

  public static getAllBrands(): Promise<{ data: BrandsDrpDnDTO }> {
    return axios.get(this.getAllBrandsUrl);
  }

  // public static getAllProducts(): Promise<{ data: ProductTableData }> {
  //   console.log("data for all product call");
  //   return axios
  //     .get(this.getAllProductsUrl)
  //     .then((response) => response.data)
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       throw error;
  //     });
  // }

  // public static getAllProducts() {
  //   console.log("data for all product call");
  //   return axios
  //     .get(this.getAllProductsUrl)
  //     .then((response) => response.data)
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       throw error;
  //     });
  // }

  public static getAllProducts(): Promise<ProductTableData[]> {
    console.log("data for all product call");
    return axios
      .get<ProductTableData[]>(this.getAllProductsUrl)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }
}
