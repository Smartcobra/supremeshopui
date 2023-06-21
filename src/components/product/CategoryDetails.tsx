import React, { useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { nextPage, updateField } from "../../redux/product/product.reducer";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ICategory } from "./ProductModel";

type Option = {
  value: string;
  label: string;
};

interface CategoryPage {
  catData: ICategory;
}

const CategoryDetails: React.FC<CategoryPage> = ({ catData }) => {
  const dispatch = useDispatch();
  const { categoryName, categoryAlias, categoryStatus } = catData;

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const options: Option[] = [
    { value: "0", label: "Not Available" },
    { value: "1", label: "Available" },
  ];

  const handleCatNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "categoryDtls", field: "categoryName", value: e.target.value }));
  };

  const handleCatAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "categoryDtls", field: "categoryAlias", value: e.target.value }));
  };

  const handleCatStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((opt) => opt.value === value) || null;
    setSelectedOption(option);
    dispatch(updateField({ page: "categoryDtls", field: "categoryStatus", value: option }));
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  return (
    <>
      <Container className="mt-5">
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>CATEGORY PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="productFormCategoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" value={categoryName} onChange={handleCatNameChange} placeholder="Category Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productFormCategoryAlias">
                <Form.Label>Category Alias</Form.Label>
                <Form.Control type="text" value={categoryAlias} onChange={handleCatAliasChange} placeholder="Category Alias" />
              </Form.Group>
              <Form.Label>Category Status</Form.Label>
              <Form.Select aria-label="Default select example" value={selectedOption?.value || ""} onChange={handleCatStatusChange}>
                <option value="">-- Select --</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </Row>

            <Container>
              <Row>
                <Col md={4}></Col>
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

export default CategoryDetails;
