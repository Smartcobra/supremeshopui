import "./product.css";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CategoryDetails from "./CategoryDetails";
import BrandDetails from "./BrandDetails";
import ProductDetails from "./ProductDetails";
import * as productReducer from "../../redux/product/product.reducer";
import ImageAndpriceDetails from "./ImageAndPriceDetails";

const CreateProduct: React.FC = () => {
  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  const { loading, page, data, productRequest } = productReduxState;
  console.log("datatatatat", data);
  console.log("datatatatat", productRequest);

  return (
    <>
      {page === 1 && <CategoryDetails data={data.page1} />}
      {page === 2 && <BrandDetails data={data.page2} />}
      {page === 3 && <ProductDetails data={data.page3} />}
      {page === 4 && <ImageAndpriceDetails data={data.page4} />}
    </>
  );
};

export default CreateProduct;
