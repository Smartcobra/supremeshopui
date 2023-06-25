import React, { useState } from "react";
import "./product.css";
import { nextPage, previousPage, updateField } from "../../redux/product/product.reducer";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IBrand, ICategory, IImages, IProduct, ProductCreateRequest, ProductDtlRequest, ProductImageRequest } from "./ProductModel";
import * as productReducer from "../../redux/product/product.reducer";
import * as productAction from "../../redux/product/product.action";

const ImageDetails: React.FC = () => {
  const dispatch = useDispatch();

  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  // const { productRequest } = productReduxState;
  // console.log("dataIImagePagetatatat", productRequest);

  const { data, imageData } = productReduxState;
  console.log("data to send----------", data);
  console.log("data to imageData----------", imageData.getAll("images"));

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  const handleSubmitForm = () => {
    let productDtlRequest: ProductDtlRequest = {
      productDetails: data.productDtls,
      category: data.categoryDtls,
      brand: data.brandDtls,
      productDescription: data.productCompleteDtls,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(productDtlRequest));
    const imageTemp = imageData.getAll("images");
    if (imageTemp) {
      for (let i = 0; i < imageTemp.length; i++) {
        formData.append("images", imageTemp[i]);
      }
    }
    dispatch(productAction.createProductAction({ formData }))
      .then((response: any) => {
        if (response && !response.error) {
          console.log("response-----handleSubmitForm---product-", response);
          console.log("response---------", response.payload.responseMessage);
        }
      })
      .catch((err: any) => {});
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    dispatch(productReducer.updateImages({ images: event.target.files }));
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

            <Form.Group className="mb-3" controlId="productImageOne">
              <Form.Label>Please Upload</Form.Label>
              <Form.Control type="file" multiple onChange={handleFileChange} placeholder="Upload Images" />
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

export default ImageDetails;
