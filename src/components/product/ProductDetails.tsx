import React, { useState } from "react";
import { nextPage, previousPage, updateField } from "../../redux/product/product.reducer";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IProduct } from "./ProductModel";

interface ProductPage {
  productData: IProduct;
}

const ProductDetails: React.FC<ProductPage> = ({ productData }) => {
  const dispatch = useDispatch();
  const { productName, productAlias, productType, fullDescription, productIMEI, shortDescription } = productData;

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDtls", field: "productName", value: e.target.value }));
  };

  const handleProductAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(updateField({ page: "page1", field: "categoryAlias", value: Number(e.target.value) }));
    dispatch(updateField({ page: "productDtls", field: "productAlias", value: e.target.value }));
  };

  const handleProductTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDtls", field: "productType", value: e.target.value }));
  };

  const handleProductShortDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(updateField({ page: "page1", field: "categoryAlias", value: Number(e.target.value) }));
    dispatch(updateField({ page: "productDtls", field: "shortDescription", value: e.target.value }));
  };

  const handleProductFullDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDtls", field: "fullDescription", value: e.target.value }));
  };

  const handleProductIMIEChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(updateField({ page: "page1", field: "categoryAlias", value: Number(e.target.value) }));
    dispatch(updateField({ page: "productDtls", field: "productIMEI", value: e.target.value }));
  };

  return (
    <>
      <Container className="mt-5">
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>PRODUCT PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="productFormProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={productName} onChange={handleProductNameChange} placeholder="Product Name" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="productFormProductAlias">
                <Form.Label>Product Alias</Form.Label>
                <Form.Control type="text" value={productAlias} onChange={handleProductAliasChange} placeholder="Product Alias" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="productType">
                <Form.Label>Product Type</Form.Label>
                <Form.Control type="text" value={productType} onChange={handleProductTypeChange} placeholder="Product Type" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="productFormproductIMEI">
                <Form.Label>Product IMEI</Form.Label>
                <Form.Control type="text" value={productIMEI} onChange={handleProductIMIEChange} placeholder="Product IMEI" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="productFormShortDescription">
              <Form.Label>Product Short Description</Form.Label>
              <Form.Control type="text" value={shortDescription} onChange={handleProductShortDescChange} placeholder="Product Short Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productFormFullDescription">
              <Form.Label>Product Full Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={fullDescription} onChange={handleProductFullDescChange} placeholder="Product Full Description" />
            </Form.Group>

            <Container>
              <Row>
                <Col md={4}>
                  <Button variant="warning" onClick={handlePreviousPage}>
                    Previous
                  </Button>
                </Col>
                <Col md={{ span: 2, offset: 5 }}>
                  <Button variant="info" onClick={handleNextPage}>
                    next
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

export default ProductDetails;
