export interface ICategoryModel {
  categoryName: string;
  categoryAlias: string;
  parentCategoryId: number;
  categoryActive: boolean;
}

export interface ICategoryRsponse {
  categoryId: number;
  categoryName: string;
  categoryAlias: string;
  parentCategoryId: number;
  categoryActive: boolean;
}
