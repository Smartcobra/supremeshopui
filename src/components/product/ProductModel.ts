export interface ICategory {
  categoryName: string;
  categoryAlias: string;
  categoryStatus: string;
}

export interface IBrand {
  brandName: string;
}

export interface IProduct {
  productName: string;
  productQuantity: number;
  shortDescription: string;
  fullDescription: string;
  productType: string;
  productIMEI: string;
  productPrice: number;
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
  productId: string;
  productName: string;
  productStatus: string;
  productPrice: number;
  productQuantity: number;
  categoryName: string;
  brandName: string;
  productDetails: any;
}
