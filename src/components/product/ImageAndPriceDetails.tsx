import React, { useState } from "react";
import "./product.css";
import { nextPage, previousPage, updateField } from "../../redux/product/product.reducer";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IImageAndPrice } from "./ProductModel";
import * as productReducer from "../../redux/product/product.reducer";
import * as productAction from "../../redux/product/product.action";

interface ImageAndPricePage {
  data: IImageAndPrice;
}

type ProductStatusOption = {
  value: string;
  label: string;
};

const ImageAndpriceDetails: React.FC<ImageAndPricePage> = ({ data }) => {
  const dispatch = useDispatch();
  const { productprice, productStatus, imagePath0ne, imagePathTwo, imagePathThree, imagePathFour, imagePathFive } = data;

  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  const { productRequest } = productReduxState;
  //console.log("datatatatat", data);
  console.log("dataIImagePagetatatat", productRequest);

  const [selectedProductStatusOption, setProductStatusSelectedOption] = useState<ProductStatusOption | null>(null);
  const productStatusoptions: ProductStatusOption[] = [
    { value: "0", label: "Not Available" },
    { value: "1", label: "Available" },
  ];

  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "page4", field: "productprice", value: +e.target.value }));
  };

  const handleCatStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const productStatusOption = productStatusoptions.find((opt) => opt.value === value) || null;
    setProductStatusSelectedOption(productStatusOption);
    dispatch(updateField({ page: "page4", field: "productStatus", value: productStatusOption }));
  };

  // const handleImagePathOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(updateField({ page: "page4", field: "imagepath0ne", value: e.target.value }));
  // };
  const handleImagePathOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files ? event.target.files[0] : null;
      dispatch(updateField({ page: "page4", field: "imagePath0ne", value: file }));
    }
  };

  const handleImagePathTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files ? event.target.files[0] : null;
      dispatch(updateField({ page: "page4", field: "imagePathTwo", value: file }));
    }
  };

  const handleImagePathThreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files ? event.target.files[0] : null;
      dispatch(updateField({ page: "page4", field: "imagePathThree", value: file }));
    }
  };

  const handleImagePathFourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files ? event.target.files[0] : null;
      dispatch(updateField({ page: "page4", field: "imagePathFour", value: file }));
    }
  };

  const handleImagePathFiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files ? event.target.files[0] : null;
      dispatch(updateField({ page: "page4", field: "imagePathFive", value: file }));
    }
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  const handleSubmitForm = () => {
    dispatch(productAction.createProductAction({ product: productRequest }))
      .then((response: any) => {
        if (response && !response.error) {
          console.log("response-----handleSubmitForm---product-", response);
          console.log("response---------", response.payload.responseMessage);
        }
      })
      .catch((err: any) => {});
  };

  return (
    <>
      <Container className="mt-5">
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>IMAGE AND PRICE PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="productFormProductPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" value={productprice} onChange={handleProductPriceChange} placeholder="Product Price" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="productStatus">
                <Form.Label>Product Status</Form.Label>
                <Form.Select aria-label="Product Status" value={selectedProductStatusOption?.value || ""} onChange={handleCatStatusChange}>
                  <option value="">-- Select --</option>
                  {productStatusoptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="productImageOne">
              <Form.Label>Product Image One</Form.Label>
              <Form.Control type="file" onChange={handleImagePathOneChange} placeholder="Image One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productImageTwo">
              <Form.Label>Product Image Two</Form.Label>
              <Form.Control type="file" onChange={handleImagePathTwoChange} placeholder="Image One" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productImageThree">
              <Form.Label>Product Image Three</Form.Label>
              <Form.Control type="file" onChange={handleImagePathThreeChange} placeholder="Image One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productImageFour">
              <Form.Label>Product Image Four</Form.Label>
              <Form.Control type="file" onChange={handleImagePathFourChange} placeholder="Image One" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productImageFive">
              <Form.Label>Product Image Five</Form.Label>
              <Form.Control type="file" onChange={handleImagePathFiveChange} placeholder="Image One" />
            </Form.Group>

            <Container>
              <Row>
                <Col md={4}>
                  <Button variant="warning" onClick={handlePreviousPage}>
                    Previous
                  </Button>
                </Col>
                <Col md={{ span: 2, offset: 5 }}>
                  <Button variant="success" onClick={handleSubmitForm}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ImageAndpriceDetails;
