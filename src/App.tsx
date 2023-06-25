import "./App.css";
import Brand from "./components/brand/Brand";
import Category from "./components/category/Category";
import HomePage from "./components/home/HomePage";
import Profile from "./components/auth/Profile";
import Login from "./components/auth/login";
import CustomNavbar from "./components/layout/CustomNavbar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProductList from "./components/product/ViewAllProducts";
import ProductDetails from "./components/product/ProductDetails";
import CreateProduct from "./components/product/CreateProduct";
import Help from "./components/util/Help";
import ViewCategory from "./components/category/ViewCategory";
import EditCategory from "./components/category/EditCategory";
import { AppDispatch, RootState, useAppDispatch } from "../src/redux/store";
import * as productReducer from "../src/redux/product/product.reducer";
import { useSelector } from "react-redux";
import ViwAllProductList from "./components/product/ViewAllProducts";

//currentPage, fields, setFieldValue, setPage

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar heading={"SupremeShop"} />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/user/login"} element={<Login />} />
          <Route path={"/user/profile"} element={<Profile />} />
          <Route path={"/addproduct"} element={<CreateProduct />} />
          <Route path={"/products"} element={<ViwAllProductList />} />
          {/* <Route path={"/product/:productId"} element={<ProductDetails />} /> */}
          <Route path={"/addbrand"} element={<Brand />} />
          <Route path={"/addcategory"} element={<Category />} />
          <Route path={"/viewcategory"} element={<ViewCategory />} />
          <Route path={"/editcategory/:catId"} element={<EditCategory />} />
          <Route path={"/help"} element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
