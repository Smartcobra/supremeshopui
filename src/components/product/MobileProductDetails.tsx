import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IMobileDetails, IProductDescription } from "./ProductModel";
import { nextPage, previousPage, updateField, updatePage4Field } from "../../redux/product/product.reducer";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

interface MobilePage {
  productDesc: IProductDescription;
}

const MobileProdcutDetails: React.FC<MobilePage> = ({ productDesc }) => {
  const dispatch = useDispatch();
  const {
    manufacturer,
    os,
    modelNo,
    colour,
    productDimensions,
    processor,
    screenDisplaySize,
    resolution,
    ram,
    audioDetails,
    batteryPowerRating,
    gps,
    connectivityType,
    countryOfOrigin,
    averageBatteryLife,
    weight,
    specialFeature,
    frontCamera,
    rearCamera,
  } = productDesc;

  const handleManuFactureNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "manufacturer", value: e.target.value }));
  };

  const handleOSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "os", value: e.target.value }));
  };

  const handleModelNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "modelNo", value: e.target.value }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "colour", value: e.target.value }));
  };

  const handleProductDMNSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "productDimensions", value: e.target.value }));
  };

  const handleProcessorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "processor", value: e.target.value }));
  };

  const handleResolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "resolution", value: e.target.value }));
  };

  const handleRAMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "ram", value: e.target.value }));
  };

  const handleAudioDtlsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "audioDetails", value: e.target.value }));
  };
  const handleBateryPowerRatingcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "batteryPowerRating", value: e.target.value }));
  };
  const handleGPSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "gps", value: e.target.value }));
  };
  const handleConnectiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "connectivityType", value: e.target.value }));
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "countryOfOrigin", value: e.target.value }));
  };

  const handleAvgBateryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "averageBatteryLife", value: e.target.value }));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "weight", value: e.target.value }));
  };

  const handleFrontCameraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "frontCamera", value: e.target.value }));
  };
  const handleRearCameraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "rearCamera", value: e.target.value }));
  };

  const handleSPLFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateField({ page: "productDescription", field: "specialFeature", value: e.target.value }));
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
            <h1>MOBILE DETAILS PAGE</h1>
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
              <Form.Group as={Col} md="4" controlId="productOS">
                <Form.Label className="textBold">Product OS</Form.Label>
                <Form.Control type="text" name={"os"} value={os} onChange={handleOSChange} placeholder="Product Operating System" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productModelNumber">
                <Form.Label className="textBold">Model Number</Form.Label>
                <Form.Control type="text" name={"modelNo"} value={modelNo} onChange={handleModelNoChange} placeholder="Product Model NUmber" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productColor">
                <Form.Label className="textBold">Product color</Form.Label>
                <Form.Control type="text" name={"colour"} value={colour} onChange={handleColorChange} placeholder="Product Color" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="ProductDemension">
                <Form.Label className="textBold">Product Dimension </Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={productDimensions} onChange={handleProductDMNSChange} placeholder="Product Dimension" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productProcessor">
                <Form.Label className="textBold">Product Processor</Form.Label>
                <Form.Control type="text" name={"processor"} value={processor} onChange={handleProcessorChange} placeholder="Product Processor" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="producrScDisplaySz">
                <Form.Label className="textBold">Screen Display Size</Form.Label>
                <Form.Control type="text" name={"screenDisplaySize"} value={screenDisplaySize} onChange={handleResolutionChange} placeholder=" Screen Display Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productRam">
                <Form.Label className="textBold">Ram Size</Form.Label>
                <Form.Control type="text" name={"ram"} value={ram} onChange={handleRAMChange} placeholder="RAM  Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productAudioDisplay">
                <Form.Label className="textBold">Audio Display</Form.Label>
                <Form.Control type="text" name={"audioDetails"} value={audioDetails} onChange={handleAudioDtlsChange} placeholder="Audio Deatils" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskDesc">
                <Form.Label className="textBold">Battery Power Ratings</Form.Label>
                <Form.Control
                  type="text"
                  name={"batteryPowerRating"}
                  value={batteryPowerRating}
                  onChange={handleBateryPowerRatingcChange}
                  placeholder="Battery Power Ratings"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" className="mb-3" controlId="productAudioDtls">
                <Form.Label className="textBold">Audio Details</Form.Label>
                <Form.Control type="text" name={"audioDetails"} value={audioDetails} onChange={handleGPSChange} placeholder="Audio Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="gpsDetails">
                <Form.Label className="textBold">GPS Details</Form.Label>
                <Form.Control type="text" name={"gps"} value={gps} onChange={handleConnectiveChange} placeholder="GPS Details" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={countryOfOrigin} onChange={handleCountryChange} placeholder="Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={weight} onChange={handleAvgBateryChange} placeholder="Product Weigth" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Coonectivity Type Details</Form.Label>
                <Form.Control type="text" name={"connectivityType"} value={connectivityType} onChange={handleWeightChange} placeholder="Connectivity Type Details" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="frontCamDtls">
                <Form.Label className="textBold">Front Camera Details</Form.Label>
                <Form.Control type="text" name={"frontCamera"} value={frontCamera} onChange={handleFrontCameraChange} placeholder="Front Camera Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="rearCamDtls">
                <Form.Label className="textBold">Rear Camera Details</Form.Label>
                <Form.Control type="text" name={"rearCamera"} value={rearCamera} onChange={handleRearCameraChange} placeholder="Rear Camera Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productSPLFetures">
                <Form.Label className="textBold">Special features</Form.Label>
                <Form.Control type="text" name={"specialFeature"} value={specialFeature} onChange={handleSPLFeatureChange} placeholder="Special Features" />
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

export default MobileProdcutDetails;
