import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import "../../App.css";
import "./Category.styles.css";
import { ICategoryModel } from "./CategoryModel";
import { useDispatch } from "react-redux";
import { createCategoryAction } from "../../redux/category/category.actions";
import * as categoryAction from "../../redux/category/category.actions";
import ShowModal from "../util/ShowModal";
import Table from "react-bootstrap/Table";
import * as categoryReducer from "../../redux/category/category.reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Category: React.FC = () => {
  const disPatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    disPatch(categoryAction.getAllCategoryAction());
  }, []);

  const categoryReduxState: categoryReducer.InitialState = useSelector((state: RootState) => {
    return state[categoryReducer.categoryFeatureKey];
  });

  const { loading, categories } = categoryReduxState;

  const [categoryModel, setCategoryModel] = useState<ICategoryModel>({
    categoryName: "",
    categoryAlias: "",
    parentCategoryId: 0,
    categoryActive: false,
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "categoryActive") {
      setCategoryModel({
        ...categoryModel,
        [event.target.name]: event.target.checked,
      });
    } else if (event.target.name == "parentCategoryId") {
      setCategoryModel({
        ...categoryModel,
        [event.target.name]: +event.target.value, // + is used to converting string to number
      });
    } else {
      setCategoryModel({
        ...categoryModel,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("category::", categoryModel);
    disPatch(createCategoryAction({ category: categoryModel }))
      .then((response: any) => {
        if (response && !response.error) {
          console.log("response---------", response);
          console.log("response---------", response.payload.responseMessage);
          setIsModalOpen(true);
          setModalContent(response.payload.responseMessage);

          setCategoryModel({
            categoryName: "",
            categoryAlias: "",
            parentCategoryId: 0,
            categoryActive: false,
          });
        }
      })
      .catch((err: any) => {});
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={9}>
            <div className="container-flex">
              <Card className="text-center" style={{ width: "50rem", marginBottom: "4px", height: "4rem" }}>
                <Card.Body>
                  <h1>CREATE CATEGORY</h1>
                </Card.Body>
              </Card>
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <Form id="myForm" className="form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicCatname">
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control type="text" value={categoryModel.categoryName} name={"categoryName"} onChange={updateInput} placeholder="Enter Category Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCatAlias">
                      <Form.Label>Category Alias</Form.Label>
                      <Form.Control type="text" value={categoryModel.categoryAlias} name={"categoryAlias"} onChange={updateInput} placeholder="Enter Category Alias" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCatParentid">
                      <Form.Label> Parent Category Id</Form.Label>
                      <Form.Control
                        type="text"
                        value={categoryModel.parentCategoryId}
                        name={"parentCategoryId"}
                        onChange={updateInput}
                        placeholder="Enter Category parent Id"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" checked={categoryModel.categoryActive} name={"categoryActive"} onChange={updateInput} label="Category Status" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button variant="secondary" type="submit">
                        Create Category
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={3}>
            <div style={{ width: "500px", height: "500px", overflowY: "auto" }}>
              <Table striped bordered hover>
                {/* </Table>  <table className="table-fixed table table-responsive"> */}
                <thead className="theadcolor">
                  <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th>Parent Category Id</th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((category, index) => {
                      return (
                        <tr key={category.categoryId}>
                          <td align="left">{index + 1}</td>
                          <td align="left">{category.categoryName}</td>
                          <td>{category.parentCategoryId}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <ShowModal isOpen={isModalOpen} onRequestClose={closeModal} content={modalContent} headername="Create Category" />
    </>
  );
};

export default Category;
