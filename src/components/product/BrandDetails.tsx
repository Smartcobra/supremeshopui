import React, { useEffect } from "react";
import "./product.css";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as productAction from "../../redux/product/product.action";
import { nextPage, previousPage, updateField } from "../../redux/product/product.reducer";
import * as productReducer from "../../redux/product/product.reducer";
import { IBrand } from "./ProductModel";

interface BrandPage {
  brandData: IBrand;
}
const BrandDetails: React.FC<BrandPage> = ({ brandData }) => {
  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  const { brandDrDnData } = productReduxState;
  const dispatch = useDispatch();
  const { brandName, brandDesc } = brandData;

  useEffect(() => {
    dispatch(productAction.getAllBrandsAction());
  }, [dispatch]);

  const handleBrandNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateField({ page: "brandDtls", field: "brandName", value: e.target.value }));
  };

  const handleBrandDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "brandDtls", field: "brandDesc", value: e.target.value }));
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
            <Form.Group className="mb-3" controlId="productFormCategoryName">
              <Form.Label>Brand Name</Form.Label>
              <Form.Select onChange={handleBrandNameChange}>
                <option value="">Select one Category</option>
                {brandDrDnData.map((brand) => (
                  <option key={brand.brandId} value={brand.brandName}>
                    {brand.brandName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productFormBrandName">
              <Form.Label className="textBold">Brand Description</Form.Label>
              <Form.Control type="text" value={brandDesc} onChange={handleBrandDescChange} placeholder="Brand Description" />
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
