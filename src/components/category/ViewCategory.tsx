import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import * as categoryReducer from "../../redux/category/category.reducer";
import * as categoryAction from "../../redux/category/category.actions";
import { useSelector } from "react-redux";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ViewCategory: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  //get categories data from redux
  const categoryReduxState: categoryReducer.InitialState = useSelector((state: RootState) => {
    return state[categoryReducer.categoryFeatureKey];
  });

  const { loading, categories } = categoryReduxState;

  let getAvailable = (arg: boolean) => {
    if (arg === true) {
      return "Available";
    } else {
      return "Not Available";
    }
  };

  useEffect(() => {
    dispatch(categoryAction.getAllCategoryAction());
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={10}>
          <Card className="shadow-lg">
            <Card.Header className="bg-dark text-white">
              <p className="h4">Category Items</p>
            </Card.Header>
            <Card.Body className="bg-light-grey">
              <Table striped hover className="text-center">
                <thead className="bg-warning">
                  <tr>
                    <th>#</th>
                    <th>Category ID</th>
                    <th>Category Name</th>
                    <th>Category Alias</th>
                    <th>Parent Category ID</th>
                    <th>Category Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((category, index) => {
                      return (
                        <tr key={category.categoryId}>
                          <td align="left">{index + 1}</td>
                          <td>{category.categoryId}</td>
                          <td align="left">{category.categoryName}</td>
                          <td align="left">{category.categoryAlias}</td>
                          <td>{category.parentCategoryId}</td>
                          <td align="left">{getAvailable(category.categoryActive)}</td>
                          <td align="left">
                            <Button onClick={() => navigate(`/editcategory/${category.categoryId}`)} variant="outline-warning">
                              <TbEdit />
                            </Button>{" "}
                            <Button variant="outline-danger">
                              <AiFillDelete />
                            </Button>{" "}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewCategory;
