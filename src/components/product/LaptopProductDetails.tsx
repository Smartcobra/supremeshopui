import React, { useState } from "react";
import { ILaptopDetails, IProductDescription } from "./ProductModel";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { nextPage, previousPage, updateField, updatePage4Field } from "../../redux/product/product.reducer";
import "./product.css";

interface LaptopPage {
  productDesc: IProductDescription;
}

const LaptopProductDetails: React.FC<LaptopPage> = ({ productDesc }) => {
  const dispatch = useDispatch();
  const {
    manufacturer,
    series,
    colour,
    productDimensions,
    processor,
    screenDisplaySize,
    resolution,
    ram,
    hardDriveSize,
    hardDiskDescription,
    audioDetails,
    averageBatteryLife,
    countryOfOrigin,
    weight,
    graphics,
  } = productDesc;

  const handleManuFactureNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "manufacturer", value: e.target.value }));
  };

  const handleSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "series", value: e.target.value }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "colour", value: e.target.value }));
  };

  const handleDimensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "productDimensions", value: e.target.value }));
  };

  const handleProcessorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "processor", value: e.target.value }));
  };

  const handleScrnDisplayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "screenDisplaySize", value: e.target.value }));
  };

  const handleResolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "resolution", value: e.target.value }));
  };

  const handleRAMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "ram", value: e.target.value }));
  };

  const handleHARDDriveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "hardDriveSize", value: e.target.value }));
  };
  const handleHARDDEscChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "hardDiskDescription", value: e.target.value }));
  };
  const handleAudioDtlsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "audioDetails", value: e.target.value }));
  };
  const handleBatteryLfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "averageBatteryLife", value: e.target.value }));
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "countryOfOrigin", value: e.target.value }));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "weight", value: e.target.value }));
  };

  const handleGraphisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "graphics", value: e.target.value }));
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
        <Card className="text-center" style={{ width: "90rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>LAPTOP DETAILS PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "90rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>̥
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productManufacture">
                <Form.Label className="textBold">Manufacturer</Form.Label>
                <Form.Control
                  type="text"
                  name={"manufacturer"}
                  value={manufacturer}
                  onChange={handleManuFactureNameChange}
                  placeholder="Please Enter Manufacturer Name"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productSeries">
                <Form.Label className="textBold">Product Series</Form.Label>
                <Form.Control type="text" name={"series"} value={series} onChange={handleSeriesChange} placeholder="Product Series" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productColor">
                <Form.Label className="textBold">Color</Form.Label>
                <Form.Control type="text" name={"colour"} value={colour} onChange={handleColorChange} placeholder="Please Enter Color" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productDmns">
                <Form.Label className="textBold">Producr Dimension</Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={productDimensions} onChange={handleDimensionChange} placeholder="Please Enter Dimensions" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="ProductProcessor">
                <Form.Label className="textBold">Processor</Form.Label>
                <Form.Control type="text" name={"processor"} value={processor} onChange={handleProcessorChange} placeholder="Please Enter Processor Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productDisplaySize">
                <Form.Label className="textBold">Screen Dispaly Size</Form.Label>
                <Form.Control
                  type="text"
                  name={"screenDisplaySize"}
                  value={screenDisplaySize}
                  onChange={handleScrnDisplayChange}
                  placeholder="Please Enter Screen Display Size"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="producrResolution">
                <Form.Label className="textBold">Resolution</Form.Label>
                <Form.Control type="text" name={"resolution"} value={resolution} onChange={handleResolutionChange} placeholder="Please Enter Resolution" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productRam">
                <Form.Label className="textBold">RAM Size</Form.Label>
                <Form.Control type="text" name={"ram"} value={ram} onChange={handleRAMChange} placeholder="RAM  Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskSize">
                <Form.Label className="textBold">Hard Drive Size</Form.Label>
                <Form.Control type="text" name={"hardDriveSize"} value={hardDriveSize} onChange={handleHARDDriveChange} placeholder="Please Enter Hard Drive Size" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskDesc">
                <Form.Label className="textBold">Hard Disk Description</Form.Label>
                <Form.Control type="text" name={"hardDiskDescription"} value={hardDiskDescription} onChange={handleHARDDEscChange} placeholder="Hard Disk Description" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="mb-3" controlId="productAudioDtls">
                <Form.Label className="textBold">Audio Details</Form.Label>
                <Form.Control type="text" name={"audioDetails"} value={audioDetails} onChange={handleAudioDtlsChange} placeholder="Audio Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productBateryLife">
                <Form.Label className="textBold">Batteries</Form.Label>
                <Form.Control
                  type="text"
                  name={"averageBatteryLife"}
                  value={averageBatteryLife}
                  onChange={handleBatteryLfChange}
                  placeholder="Enter Battery Description"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={countryOfOrigin} onChange={handleCountryChange} placeholder=" Enter Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={weight} onChange={handleWeightChange} placeholder="Enter Product Weigth" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Graphics Details</Form.Label>
                <Form.Control type="text" name={"graphics"} value={graphics} onChange={handleGraphisChange} placeholder="Product Weigth" />
              </Form.Group>
            </Row>
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

export default LaptopProductDetails;
