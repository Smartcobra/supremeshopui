import React, { useEffect, useState } from "react";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import * as productReducer from "../../redux/product/product.reducer";
import * as productAction from "../../redux/product/product.action";
import { useSelector } from "react-redux";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { ProductService } from "./product.service";
import { AiFillEye } from "react-icons/ai";
import { IProductDescription, ProductTableData } from "./ProductModel";
import DataModal from "../util/ShowDataModal";
import ProductDescModal from "../util/ShowProductDescModel";
import { AuthUtil } from "../util/AuthUtils";

const ViwAllProductList: React.FC = () => {
  const [data, setData] = useState<ProductTableData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [modalData, setModaldata] = useState<any[]>([]);
  const [modalData, setModaldata] = useState<Partial<IProductDescription>>({});

  useEffect(() => {
    if (AuthUtil.isSetTokenToRequestHeader()) {
      ProductService.getAllProducts()
        .then((fetchedData) => {
          setData(fetchedData);
          console.log("******************88", fetchedData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  const showDescriptionData = (id: string) => {
    data.forEach((d) => {
      if (d.id === id) {
        console.log(d.productDescription);
        setModaldata(sanitize(d.productDescription));
      }
    });
    setIsModalOpen(true);
    console.log("modalData----", modalData);
  };

  const sanitize = (obj: any) => {
    return JSON.parse(
      JSON.stringify(obj, (key, value) => {
        return value === null ? undefined : value;
      })
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
      },

      headerStyle: {
        width: "18rem",
      },
    },
    {
      dataField: "productName",
      text: "Name",
    },
    {
      dataField: "productStatus",
      text: "Status",
      headerStyle: {
        width: "8rem",
      },
    },
    {
      dataField: "productPrice",
      text: "Price",
      headerStyle: {
        width: "8rem",
      },
    },
    {
      dataField: "productQuantity",
      text: "Quantity",
      headerStyle: {
        width: "8rem",
      },
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
      dataField: "productDescription",
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
        <Button className="productbutton" variant="productbutton" onClick={() => showDescriptionData(row.id)}>
          <AiFillEye />
        </Button>{" "}
      </div>
    );
  }

  const pageOptions = {
    // pageStartIndex: 0,
    sizePerPage: 13,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  return (
    <>
      <Container className="containerStyle">
        <Card style={{ width: "100rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <BootstrapTable keyField="id" data={data} columns={columns} pagination={paginationFactory(pageOptions)} />
          </Card.Body>
        </Card>
      </Container>
      <ProductDescModal isOpen={isModalOpen} onRequestClose={closeModal} pData={modalData} headername="product Description" />
    </>
  );
};

export default ViwAllProductList;
