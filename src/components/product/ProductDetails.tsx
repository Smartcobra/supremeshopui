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

type ProductStatusOption = {
  value: string;
  label: string;
};

const ProductDetails: React.FC<ProductPage> = ({ productData }) => {
  const dispatch = useDispatch();
  const { productName, productPrice, productStatus, productQuantity, productType, fullDescription, productIMEI, shortDescription } = productData;

  const [selectedProductStatusOption, setProductStatusSelectedOption] = useState<ProductStatusOption | null>(null);
  const productStatusoptions: ProductStatusOption[] = [
    { value: "0", label: "Not Available" },
    { value: "1", label: "Available" },
  ];

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDtls", field: "productName", value: e.target.value }));
  };

  const handleCatStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const productStatusOption = productStatusoptions.find((opt) => opt.value === value) || null;
    setProductStatusSelectedOption(productStatusOption);
    dispatch(updateField({ page: "productDtls", field: "productStatus", value: productStatusOption }));
  };

  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDtls", field: "productPrice", value: +e.target.value }));
  };

  const handleProductQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDtls", field: "productQuantity", value: +e.target.value }));
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
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="productQuantity">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control type="text" value={productQuantity} onChange={handleProductQuantityChange} placeholder="Product Quantity" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="productPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" value={productPrice} onChange={handleProductPriceChange} placeholder="Product Price" />
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
