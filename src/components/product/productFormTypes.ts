// export interface ProductFormPage {
//   [key: string]: string;
// }

import { IBrand, ICategory, IImageAndPrice, IProduct } from "./ProductModel";

// export interface ProductFormPage {
//   [key: string]: string | number | ICategory | IBrand | IProduct | IImageAndPrice;
// }

export interface ProductFormPage {
  page: number;
  data: {
    [key: string]: {
      [key: string]: string | number | boolean;
    };
  };
}
