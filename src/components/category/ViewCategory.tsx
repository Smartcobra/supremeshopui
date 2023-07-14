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
      headerAlign: "center",
      formatter: actionFormatter,
      headerStyle: {
        width: "300px",
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
        <Button className="catbtnedit" onClick={() => navigate(`/editcategory/${row.categoryId}`)} variant="outline-warning">
          <TbEdit />
        </Button>{" "}
        <Button className="catbtndlt" onClick={() => deleteCategory(row.categoryId)} variant="outline-danger">
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
        <Card className="text-center" style={{ width: "81rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>CATEGORY DETAILS</h1>
          </Card.Body>
        </Card>
        <Card className="shadow-lg">
          <BootstrapTable keyField="categoryId" data={categories} columns={columns} pagination={paginationFactory(options)} />
        </Card>
      </Container>
    </>
  );
};

export default ViewCategory;
