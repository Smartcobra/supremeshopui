import React from "react";
import "./product.css";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { nextPage, previousPage, updateField } from "../../redux/product/product.reducer";
import { IBrand } from "./ProductModel";

interface BrandPage {
  brandData: IBrand;
}
const BrandDetails: React.FC<BrandPage> = ({ brandData }) => {
  const dispatch = useDispatch();
  const { brandName, brandLogo } = brandData;

  const handleBrandNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "brandDtls", field: "brandName", value: e.target.value }));
  };

  // const handleBrandLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(updateField({ page: "page2", field: "page2", value: e.target.value }));
  // };

  const handleBrandLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files ? event.target.files[0] : null;
      dispatch(updateField({ page: "brandDtls", field: "brandLogo", value: file }));
    }
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  return (
    <>
      <Container className="mt-5">
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>BRAND PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Form.Group className="mb-3" controlId="productFormBrandName">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control type="text" value={brandName} onChange={handleBrandNameChange} placeholder="Brand Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productFormBrandLogo">
              <Form.Label>Brand logo</Form.Label>
              <Form.Control type="file" onChange={handleBrandLogoChange} placeholder="Brand Logo" />
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

export default BrandDetails;
