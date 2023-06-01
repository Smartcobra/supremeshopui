import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const urlParam = useParams();
  return (
    <>
      Product Details compent
      <pre>url params : {JSON.stringify(urlParam)}</pre>
    </>
  );
};

export default ProductDetails;
