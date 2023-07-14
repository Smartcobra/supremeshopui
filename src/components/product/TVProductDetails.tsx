import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IProductDescription, ITVDetails } from "./ProductModel";
import { nextPage, previousPage, updateField, updatePage4Field } from "../../redux/product/product.reducer";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

interface TVPage {
  productDesc: IProductDescription;
}

const TVProductDetails: React.FC<TVPage> = ({ productDesc }) => {
  const dispatch = useDispatch();
  const {
    manufacturer,
    model,
    modelYear,
    colour,
    productDimensions,
    displayTechnology,
    resolution,
    viewingAngle,
    audioOutputMode,
    voltage,
    standingScreenDisplaySize,
    supportBluetooth,
    countryOfOrigin,
    weight,
    imageAspectRatio,
  } = productDesc;

  const handleManuFactureNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "manufacturer", value: e.target.value }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "model", value: e.target.value }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "colour", value: e.target.value }));
  };

  const handleDimensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "productDimensions", value: e.target.value }));
  };

  const handleModelYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "modelYear", value: e.target.value }));
  };

  const handleDisplayTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "displayTechnology", value: e.target.value }));
  };

  const handleResolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "resolution", value: e.target.value }));
  };

  const handleViewAngleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "viewingAngle", value: e.target.value }));
  };

  const handleAudioModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "audioOutputMode", value: e.target.value }));
  };
  const handleVoltageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "voltage", value: e.target.value }));
  };
  const handleStdSCRNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "standingScreenDisplaySize", value: e.target.value }));
  };
  const handleBluetoothChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "supportBluetooth", value: e.target.value }));
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "countryOfOrigin", value: e.target.value }));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "weight", value: e.target.value }));
  };

  const handleIMGAspectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "imageAspectRatio", value: e.target.value }));
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
            <h1>TV DETAILS PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "90rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productManufacture">
                <Form.Label className="textBold">Product Manufaturer</Form.Label>
                <Form.Control type="text" name={"manufacturer"} value={manufacturer} onChange={handleManuFactureNameChange} placeholder="Manufacturer Name" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productSeries">
                <Form.Label className="textBold">TV Model</Form.Label>
                <Form.Control type="text" name={"model"} value={model} onChange={handleModelChange} placeholder="TV Model" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="modelYear">
                <Form.Label className="textBold">Model Year</Form.Label>
                <Form.Control type="text" value={modelYear} onChange={handleModelYearChange} placeholder="Model Year" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="tvColor">
                <Form.Label className="textBold">TV Color</Form.Label>
                <Form.Control type="text" name={"colour"} value={colour} onChange={handleColorChange} placeholder="TV Color" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productDmns">
                <Form.Label className="textBold">Producr Dimension</Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={productDimensions} onChange={handleDimensionChange} placeholder="Product Dimension" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="displayTechnology">
                <Form.Label className="textBold">Display Technology</Form.Label>
                <Form.Control type="text" name={"displayTechnology"} value={displayTechnology} onChange={handleDisplayTechChange} placeholder="Display Technology" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="producrResolution">
                <Form.Label className="textBold">Resolution</Form.Label>
                <Form.Control type="text" name={"resolution"} value={resolution} onChange={handleResolutionChange} placeholder="Resolution" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="viewAngle">
                <Form.Label className="textBold">Viewing Angle</Form.Label>
                <Form.Control type="text" name={"viewingAngle"} value={viewingAngle} onChange={handleViewAngleChange} placeholder="Viewing Angle" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskSize">
                <Form.Label className="textBold">HOutput Audio Mode</Form.Label>
                <Form.Control type="text" name={"audioOutputMode"} value={audioOutputMode} onChange={handleAudioModeChange} placeholder="Output  Audio Mode" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="tvVoltage">
                <Form.Label className="textBold">Voltage</Form.Label>
                <Form.Control type="text" name={"volatage"} value={voltage} onChange={handleVoltageChange} placeholder="voltage" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="mb-3" controlId="stndDisplaySz">
                <Form.Label className="textBold">Standing Display Size</Form.Label>
                <Form.Control
                  type="text"
                  name={"standingScreenDisplaySize"}
                  value={standingScreenDisplaySize}
                  onChange={handleStdSCRNChange}
                  placeholder="Audio Details"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productBateryLife">
                <Form.Label className="textBold">Support Bluetooth</Form.Label>
                <Form.Control type="text" name={"supportBluetooth"} value={supportBluetooth} onChange={handleBluetoothChange} placeholder="Support Bluetooth" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={countryOfOrigin} onChange={handleCountryChange} placeholder="Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={weight} onChange={handleWeightChange} placeholder="Product Weigth" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="imageAspectRatio">
                <Form.Label className="textBold">Image Aspect Ratio</Form.Label>
                <Form.Control type="text" name={"imageAspectRatio"} value={imageAspectRatio} onChange={handleIMGAspectChange} placeholder="Image Aspect Ratio" />
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

export default TVProductDetails;
