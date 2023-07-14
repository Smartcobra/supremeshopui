export interface BrandData {
  description: string;
  logo: File | null;
  brandName: string;
  categories: number[];
}

export interface catDropdownOptions {
  id: number;
  name: string;
}

export interface CreateBrandReq {
  description: string;
  brandName: string;
  categories: number[];
}

export interface ViewBrandData {
  brandId: string;
  logoPath: string;
  brandName: string;
  description: String;
  categories: string[];
}
