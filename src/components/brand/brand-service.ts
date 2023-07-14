import axios from "axios";
import { ViewBrandData } from "./BrandModel";

export class BrandService {
  private static createBrandUrl: string = "http://localhost:5012/gateway-brand-sv/brands";
  private static getBrandUrl: string = "http://localhost:5012/gateway-brand-sv/brands";

  public static createBrand(formData: FormData): Promise<{ data: any }> {
    console.log("Brand Serive--------", formData.get("brandName") as string);
    console.log("Brand Serive----categ----", formData.getAll("categories[]"));
    console.log("Brand Serive--------", formData);
    return axios.post(this.createBrandUrl, formData);
  }

  public static getBrands(): Promise<{ data: ViewBrandData[] }> {
    console.log("Brand get Service--------");
    return axios.get(this.getBrandUrl);
  }
}
