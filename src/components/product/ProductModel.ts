export interface ICategory {
  categoryName: string;
  categoryAlias: string;
  categoryStatus: string;
}

export interface IBrand {
  brandName: string;
  brandDesc: string;
}

export interface IProduct {
  productName: string;
  productQuantity: number;
  shortDescription: string;
  fullDescription: string;
  productType: string;
  productModel: string;
  productPrice?: string;
  productStatus: string;
}

export interface IImages {
  imagePath0ne: File | null;
  imagePathTwo: File | null;
  imagePathThree: File | null;
  imagePathFour: File | null;
  imagePathFive: File | null;
}

export interface IProductRequest {
  product: IProduct;
  productDetails: any;
  category: ICategory;
  brand: IBrand;
  images: IImages;
}

export interface IClothDetails {
  productDimensions: string;
  manufacturer: string;
  ASIN: string;
  itemModelNumber: string;
  countryOrigin: string;
  department: string;
  genericName: string;
}

export interface ILaptopDetails {
  manufacturer: string;
  series: string;
  colour: string;
  productDimensions: string;
  processor: string;
  screenDisplaySize: string;
  resolution: string;
  ram: string;
  hardDriveSize: string;
  hardDiskDescription: string;
  audioDetails: string;
  averageBatteryLife: string;
  countryOfOrigin: string;
  weight: string;
  graphics: string;
}

export interface IMobileDetails {
  os: string;
  manufacturer: string;
  modelNo: string;
  colour: string;
  productDimensions: string;
  processor: string;
  screenDisplaySize: string;
  ram: string;
  audioDetails: string;
  batteryPowerRating: string;
  countryOfOrigin: string;
  weight: string;
  gps: string;
  connectivityType: string;
  specialFeature: string;
  frontCamer: string;
  rearCamera: string;
}

export interface ISmartWatchDetails {
  manufacturer: string;
  series: string;
  colour: string;
  productDimensions: string;
  bateries: string;
  screenDisplaySize: string;
  connectivityType: string;
  callFacility: string;
  averageBatteryLife: string;
  countryOfOrigin: string;
  weight: string;
  wattage: string;
}

export interface ITVDetails {
  manufacturer: string;
  model: string;
  modelYear: string;
  colour: string;
  productDimensions: string;
  displayTechnology: string;
  resolution: string;
  viewingAngle: string;
  audioOutputMode: string;
  volatage: string;
  standingScreenDisplaySize: string;
  supportBluetooth: string;
  countryOfOrigin: string;
  weight: string;
  imageAspectRatio: string;
}

export interface IShoeDetails {
  productDimensions: string;
  manufacturer: string;
  ASIN: string;
  itemModelNumber: string;
  countryOrigin: string;
  department: string;
  genericName: string;
  shoeSize: string;
}

export interface ProductDtlRequest {
  productDetails: IProduct;
  productDescription: any;
  category: ICategory;
  brand: IBrand;
}

export interface ProductImageRequest {
  images: IImages;
}

export interface ProductCreateRequest {
  productDtlRequest: ProductDtlRequest;
  productImages: ProductImageRequest;
}

export interface ProductTableData {
  id: string;
  categoryName: string;
  brandName: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productStatus: string;
  productDescription: any;
}

export interface IProductDescription {
  productDimensions?: string;
  manufacturer?: string;
  ASIN?: string;
  itemModelNumber?: string;
  countryOrigin?: string;
  department?: string;
  genericName?: string;
  series?: string;
  colour?: string;
  processor?: string;
  screenDisplaySize?: string;
  resolution?: string;
  ram?: string;
  hardDriveSize?: string;
  hardDiskDescription?: string;
  audioDetails?: string;
  averageBatteryLife?: string;
  countryOfOrigin?: string;
  weight?: string;
  graphics?: string;
  os?: string;
  modelNo?: string;
  batteryPowerRating?: string;
  connectivityType?: string;
  gps?: string;
  specialFeature?: string;
  frontCamera?: string;
  rearCamera?: string;
  batteries?: string;
  callFacility?: string;
  wattage?: string;
  model?: string;
  modelYear?: string;
  displayTechnology?: string;
  viewingAngle?: string;
  audioOutputMode?: string;
  voltage?: string;
  standingScreenDisplaySize?: string;
  supportBluetooth?: string;
  imageAspectRatio?: string;
}

export interface CategoriesDrpDnDTO {
  catId: string;
  parentId: string;
  categories: string;
}

export interface BrandsDrpDnDTO {
  brandId: string;
  brandName: string;
}
