import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import * as categoryReducer from "../../redux/category/category.reducer";
import * as categoryAction from "../../redux/category/category.actions";
import { useSelector } from "react-redux";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const ViewCategory: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  //get categories data from redux
  const categoryReduxState: categoryReducer.InitialState = useSelector((state: RootState) => {
    return state[categoryReducer.categoryFeatureKey];
  });

  const { categories } = categoryReduxState;

  useEffect(() => {
    dispatch(categoryAction.getAllCategoryAction());
  }, []);

  const columns = [
    {
      dataField: "categoryId",
      text: "ID",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
      },

      headerStyle: {
        width: "80px",
      },
    },
    {
      dataField: "categoryName",
      text: "Name",
    },
    {
      dataField: "categoryAlias",
      text: "Alias",
    },
    {
      dataField: "parentCategoryId",
      text: "Parent ID",
      headerStyle: {
        width: "100px",
      },
    },
    {
      dataField: "categoryActive",
      text: "Status",
      // formatter: statusFormatter,
      formatter: (cell: any) => {
        return cell ? "Available" : "Not Available";
      },
      headerStyle: {
        width: "120px",
      },
    },
    {
      dataField: "actions",
      text: "Actions",
      formatter: actionFormatter,
      headerStyle: {
        width: "170px",
      },
    },
  ];

  const deleteCategory = (categoryId: string) => {
    console.log("Delete");
    console.log(categoryId + typeof categoryId + "----------");
    dispatch(categoryAction.deleteCategoryByIdAction({ catId: categoryId })).then((response: any) => {
      if (response && !response.error) {
        console.log("Category delete succesfully");
        deleteRecordWithId();
      }
    });
  };

  const deleteRecordWithId = () => {
    dispatch(categoryAction.getAllCategoryAction());
  };

  ///// replaced by  line 61
  // function statusFormatter(cell: any, row: any, rowIndex: any, formatExtraData: any) {
  //   return cell ? "Available" : "Not Available";
  // }

  // const rowEvents = {
  //   onClick: (e: any, row: any, rowIndex: any) => {
  //     console.log(`clicked on row with index: ${rowIndex}`);
  //   },
  // };

  function actionFormatter(cell: any, row: any, rowIndex: any, formatExtraData: any) {
    return (
      <div style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}>
        <Button onClick={() => navigate(`/editcategory/${row.categoryId}`)} variant="outline-warning">
          <TbEdit />
        </Button>{" "}
        <Button onClick={() => deleteCategory(row.categoryId)} variant="outline-danger">
          <AiFillDelete />
        </Button>
      </div>
    );
  }

  const options = {
    // pageStartIndex: 0,
    sizePerPage: 13,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  // const { SearchBar } = Search;

  return (
    <>
      <Container className="mt-3">
        <BootstrapTable keyField="categoryId" data={categories} columns={columns} pagination={paginationFactory(options)} />
        {/* <Row>
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
      </Row> */}
      </Container>
    </>
  );
};

export default ViewCategory;
