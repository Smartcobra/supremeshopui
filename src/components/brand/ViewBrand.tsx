import React, { useEffect, useState } from "react";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import * as viewBrandActions from "../../redux/brand/brand.action";
import * as brandReducer from "../../redux/brand/brand.reducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Button, Card, Container } from "react-bootstrap";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Stack from "react-bootstrap/Stack";

const ViewBrands: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  const brandReduxState: brandReducer.InitialState = useSelector((state: RootState) => {
    return state[brandReducer.brandFeatureKey];
  });

  const { brands } = brandReduxState;

  useEffect(() => {
    dispatch(viewBrandActions.getALLBrandsAction());
  }, [dispatch]);

  const columns = [
    {
      dataField: "brandId",
      text: "ID",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
      },

      headerStyle: {
        width: "12rem",
      },
    },
    {
      dataField: "logoPath",
      text: "Logo",
      formatter: logoFormatter,
      headerStyle: {
        width: "10rem",
      },
    },
    {
      dataField: "brandName",
      text: "Name",
      headerStyle: {
        width: "8rem",
      },
    },
    {
      dataField: "description",
      text: "Description",
      headerStyle: {
        width: "8rem",
      },
    },
    {
      dataField: "categories",
      text: "Categories",
      formatter: categorisFormatter,
      headerStyle: {
        width: "30rem",
      },
    },

    {
      dataField: "actions",
      text: "Actions",
      headerAlign: "center",
      formatter: actionFormatter,
      headerStyle: {
        width: "12rem",
      },
    },
  ];

  const deleteCategory = (categoryId: string) => {
    console.log("Delete");
    console.log(categoryId + typeof categoryId + "----------");
    // dispatch(categoryAction.deleteCategoryByIdAction({ catId: categoryId })).then((response: any) => {
    //   if (response && !response.error) {
    //     console.log("Category delete succesfully");
    //     deleteRecordWithId();
    //   }
    // });
  };

  const deleteRecordWithId = () => {
    // dispatch(categoryAction.getAllCategoryAction());
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

  function categorisFormatter(cell: any, row: any, rowIndex: any, formatExtraData: any) {
    return (
      <>
        <Stack direction="horizontal" gap={2}>
          {cell.map((label: any) => (
            <Badge bg="primary">{label}</Badge>
          ))}
        </Stack>
      </>
    );
  }

  function logoFormatter(cell: any, row: any, rowIndex: any, formatExtraData: any) {
    return (
      <>
        <img alt={row.name} style={{ width: 100, height: 50 }} src={row.logoPath} />
        {/* <img style={{ width: 50, height: 50 }} src={cell} /> */}
      </>
    );
  }

  const options = {
    // pageStartIndex: 0,
    sizePerPage: 13,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  return (
    <>
      <Container style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <Card className="text-center" style={{ width: "120rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>BRAND DETAILS</h1>
          </Card.Body>
        </Card>
        <Card className="shadow-lg" style={{ width: "120rem" }}>
          <BootstrapTable keyField="brandId" data={brands} columns={columns} pagination={paginationFactory(options)} />
        </Card>
      </Container>
    </>
  );
};

export default ViewBrands;
