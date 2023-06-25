import React, { useEffect, useState } from "react";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import * as productReducer from "../../redux/product/product.reducer";
import * as productAction from "../../redux/product/product.action";
import { useSelector } from "react-redux";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { ProductTableData } from "./ProductModel";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const ViwAllProductList: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  //let productTableData: ProductTableData[] = [];
  let productsdata: any[] = [];

  //get categories data from redux
  const productReduxState: productReducer.InitialState = useSelector((state: RootState) => {
    return state[productReducer.productFeatureKey];
  });

  const { allProducts } = productReduxState;

  useEffect(() => {
    dispatch(productAction.getAllProductAction());
  }, []);

  useEffect(() => {
    if (!allProducts) {
      return;
    }
    prodData();
  }, [allProducts]);

  const prodData = () => {
    // console.log("hshhaHS", JSON.stringify(allProducts));
    // const myJSONss = JSON.stringify(allProducts);
    //const allProductData = JSON.parse(JSON.stringify(allProducts));
    console.log("myJSON", allProducts[0].product);

    for (let i = 0; i < allProducts.length; i++) {
      console.log("all product json", allProducts[i].product);
      let p: any = {
        productId: allProducts[i]._id.$oid,
        productName: allProducts[i].product.productName,
        productStatus: allProducts[i].product.productStatus.label,
        productPrice: allProducts[i].product.productPrice,
        productQuantity: allProducts[i].product.productQuantity,
        categoryName: allProducts[i].category.categoryName,
        brandName: allProducts[i].brand.brandName,
        // productDetails: allProducts[i].productDetails,
      };

      productsdata.push(p);
    }
    console.log("productTableData", productsdata);
    console.log("type", typeof productsdata[0]);
  };

  const columns = [
    {
      dataField: "productId",
      text: "ID",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
      },

      headerStyle: {
        width: "400px",
      },
    },
    {
      dataField: "productName",
      text: "Name",
    },
    {
      dataField: "productStatus",
      text: "Status",
    },
    {
      dataField: "productPrice",
      text: "Price",
      headerStyle: {
        width: "100px",
      },
    },
    {
      dataField: "productQuantity",
      text: "Quantity",
    },
    {
      dataField: "categoryName",
      text: "Category",
    },
    {
      dataField: "brandName",
      text: "Brand",
    },

    {
      dataField: "productDetails",
      text: "Product Description",
      formatter: actionFormatter,
      headerStyle: {
        width: "170px",
      },
    },
  ];

  function actionFormatter(cell: any, row: any, rowIndex: any, formatExtraData: any) {
    return (
      <div style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}>
        {/* <Button onClick={() => navigate(`/editcategory/${row.categoryId}`)} variant="outline-warning">
          <TbEdit />
        </Button>{" "}
        <Button onClick={() => deleteCategory(row.categoryId)} variant="outline-danger">
          <AiFillDelete />
        </Button> */}
      </div>
    );
  }

  const pageOptions = {
    // pageStartIndex: 0,
    sizePerPage: 13,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  // var res = productTableData.reduce((acc,item,index) => {
  //   acc[`place${index}`] = item;
  //   return acc;
  // }, {});

  const data = require("../util/data.json");
  console.log("----------------", data);
  //const data = JSON.stringify(productTableData) ;

  return (
    <>
      <Container className="mt-3">
        <pre>{JSON.stringify(allProducts)}</pre>
        <BootstrapTable keyField="productId" data={productsdata} columns={columns} pagination={paginationFactory(pageOptions)} />

        {/* <Container className="mt-3">
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
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((prod: any, index: any) => {
                          return (
                            <tr key={prod.productId}>
                              <td align="left">{index + 1}</td>
                              <td>{prod.productId}</td>
                              <td align="left">{prod.productName}</td>
                              <td align="left">{prod.productStatus}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
      </Container>
    </>
  );
};

export default ViwAllProductList;
