import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { nextPage, updateField, updatePrentId } from "../../redux/product/product.reducer";
import * as productReducer from "../../redux/product/product.reducer";
import * as productAction from "../../redux/product/product.action";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ICategory } from "./ProductModel";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ShowModal from "../util/ShowModal";

type Option = {
  value: string;
  label: string;
};

interface CategoryPage {
  catData: ICategory;
}

const CategoryDetails: React.FC<CategoryPage> = ({ catData }) => {
  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  const { catDrDnData, modalContent } = productReduxState;
  console.log("----------------------------------", modalContent);
  let catMap = new Map<string, string>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCnt, setModalContent] = useState("");

  const dispatch = useDispatch();
  const { categoryName, categoryAlias, categoryStatus } = catData;

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const options: Option[] = [
    { value: "0", label: "Not Available" },
    { value: "1", label: "Available" },
  ];

  useEffect(() => {
    dispatch(productAction.getAllCategoriesAction());
  }, [dispatch]);

  useEffect(() => {
    if (modalContent) {
      setIsModalOpen(true);
      setModalContent(modalContent);
    }
  }, [modalContent]);

  useEffect(() => {
    catMap = new Map(catDrDnData.map((i) => [i.categories, i.parentId]));
  }, [catDrDnData]);

  const handleCatNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("parent------------", catMap);
    const value = e.target.value;
    let parentId = catMap.get(value);
    console.log("parent------------", parentId);
    dispatch(updatePrentId({ parentId }));
    dispatch(updateField({ page: "categoryDtls", field: "categoryName", value: value }));
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

  const closeModal = () => {
    setIsModalOpen(false);
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
                <Form.Select onChange={handleCatNameChange}>
                  <option value="">Select one Category</option>
                  {catDrDnData
                    .filter((cat) => cat.parentId !== "0")
                    .map((cat) => (
                      <option key={cat.catId} value={cat.categories}>
                        {cat.categories}
                      </option>
                    ))}
                </Form.Select>
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
      <ShowModal isOpen={isModalOpen} onRequestClose={closeModal} content={modalContent} headername="Create Product" />
    </>
  );
};

export default CategoryDetails;
