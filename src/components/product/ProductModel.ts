export interface ICategory {
  categoryName: string;
  categoryAlias: string;
  categoryStatus: string;
}

export interface IBrand {
  brandName: string;
  brandLogo: File | null;
}

export interface IProduct {
  productName: string;
  productAlias: string;
  shortDescription: string;
  fullDescription: string;
  productType: string;
  productIMEI: string;
}

export interface IImageAndPrice {
  productprice: number;
  productStatus: string;
  imagePath0ne: File | null;
  imagePathTwo: File | null;
  imagePathThree: File | null;
  imagePathFour: File | null;
  imagePathFive: File | null;
}

export interface IProductRequest {
  product: IProduct;
  category: ICategory;
  brand: IBrand;
  imageAndPrice: IImageAndPrice;
}
