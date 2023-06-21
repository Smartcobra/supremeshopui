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
  productDetails: any;
  category: ICategory;
  brand: IBrand;
  imageAndPrice: IImageAndPrice;
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
