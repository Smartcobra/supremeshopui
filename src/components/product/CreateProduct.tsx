import React, { useEffect, useState } from "react";
import "./product.css";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CategoryDetails from "./CategoryDetails";
import BrandDetails from "./BrandDetails";
import ProductDetails from "./ProductDetails";
import * as productReducer from "../../redux/product/product.reducer";
import ImageAndpriceDetails from "./ImageDetails";
import LaptopProductDetails from "./LaptopProductDetails";
import MobileProdcutDetails from "./MobileProductDetails";
import ClothProductDetails from "./ClothProductDetails";
import ShoeProductDeatils from "./ShoeProductDetails";
import SmartWatchProductDetails from "./SmartWatchProductDeatils";
import TVProductDetails from "./TVProductDetails";
import ProductErrorPage from "./ErrorPage";

const CreateProduct: React.FC = () => {
  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  const { loading, page, data, parentId } = productReduxState;
  console.log("datatatatat", data);
  console.log("category Name", data.categoryDtls.categoryName);

  let categoryName = data.categoryDtls.categoryName;
  let pageID = parentId;
  // useEffect(() => {
  //   categoryName = data.page1.categoryName;
  // }, [data]);

  console.log(pageID, "pageID---------------");
  const renderPage = () => {
    console.log("-------Render Page Invoked--------");
    if (pageID === "21") {
      return <LaptopProductDetails productDesc={data.productDescription} />;
    } else if (pageID === "1") {
      return <MobileProdcutDetails productDesc={data.productDescription} />;
    } else if (pageID == "3") {
      return <ClothProductDetails />;
    } else if (pageID == "26") {
      return <ShoeProductDeatils />;
    } else if (pageID == "30") {
      return <SmartWatchProductDetails />;
    } else if (pageID == "2") {
      return <TVProductDetails productDesc={data.productDescription} />;
    } else if (!categoryName) {
      return <ProductErrorPage />;
    }
  };

  return (
    <>
      {page === 1 && <CategoryDetails catData={data.categoryDtls} />}
      {page === 2 && <BrandDetails brandData={data.brandDtls} />}
      {page === 3 && <ProductDetails productData={data.productDtls} />}
      {page === 4 && renderPage()}
      {/* {page === 5 && <ImageAndpriceDetails imgData={data.images} />} */}
      {page === 5 && <ImageAndpriceDetails />}
      {/* <LaptopProductDetails></LaptopProductDetails> */}
    </>
  );
};

export default CreateProduct;
