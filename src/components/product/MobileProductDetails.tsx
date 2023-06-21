import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IMobileDetails } from "./ProductModel";
import { nextPage, previousPage, updatePage4Field } from "../../redux/product/product.reducer";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const MobileProdcutDetails: React.FC = () => {
  const dispatch = useDispatch();
  // const {
  //   manufacturer,
  //   series,
  //   colour,
  //   productDimensions,
  //   processor,
  //   screenDisplaySize,
  //   resolution,
  //   ram,
  //   hardDriveSize,
  //   hardDiskDescription,
  //   audioDetails,
  //   averageBatteryLife,
  //   countryOfOrigin,
  //   weight,
  // } = data;

  const [mobileModel, setMobileModel] = useState<IMobileDetails>({
    manufacturer: "",
    os: "",
    modelNo: "",
    colour: "",
    productDimensions: "",
    processor: "",
    screenDisplaySize: "",
    ram: "",
    audioDetails: "",
    batteryPowerRating: "",
    gps: "",
    connectivityType: "",
    countryOfOrigin: "",
    weight: "",
    specialFeature: "",
    frontCamer: "",
    rearCamera: "",
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobileModel({
      ...mobileModel,
      [event.target.name]: event.target.value,
    });
    dispatch(updatePage4Field({ page: "productCompleteDtls", field: "mobileDeatils", value: mobileModel }));
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
                <Form.Control type="text" name={"manufacturer"} value={mobileModel.manufacturer} onChange={updateInput} placeholder="Manufacturer Name" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productOS">
                <Form.Label className="textBold">Product OS</Form.Label>
                <Form.Control type="text" name={"os"} value={mobileModel.os} onChange={updateInput} placeholder="Product Operating System" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productModelNumber">
                <Form.Label className="textBold">Model Number</Form.Label>
                <Form.Control type="text" name={"modelNo"} value={mobileModel.modelNo} onChange={updateInput} placeholder="Product Model NUmber" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productColor">
                <Form.Label className="textBold">Product color</Form.Label>
                <Form.Control type="text" name={"colour"} value={mobileModel.colour} onChange={updateInput} placeholder="Product Color" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="ProductDemension">
                <Form.Label className="textBold">Product Dimension </Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={mobileModel.productDimensions} onChange={updateInput} placeholder="Product Dimension" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productProcessor">
                <Form.Label className="textBold">Product Processor</Form.Label>
                <Form.Control type="text" name={"processor"} value={mobileModel.processor} onChange={updateInput} placeholder="Product Processor" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="producrScDisplaySz">
                <Form.Label className="textBold">Screen Display Size</Form.Label>
                <Form.Control type="text" name={"screenDisplaySize"} value={mobileModel.screenDisplaySize} onChange={updateInput} placeholder=" Screen Display Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productRam">
                <Form.Label className="textBold">Ram Size</Form.Label>
                <Form.Control type="text" name={"ram"} value={mobileModel.ram} onChange={updateInput} placeholder="RAM  Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productAudioDisplay">
                <Form.Label className="textBold">Audio Display</Form.Label>
                <Form.Control type="text" name={"audioDetails"} value={mobileModel.audioDetails} onChange={updateInput} placeholder="Audio Deatils" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskDesc">
                <Form.Label className="textBold">Battery Power Ratings</Form.Label>
                <Form.Control type="text" name={"batteryPowerRating"} value={mobileModel.batteryPowerRating} onChange={updateInput} placeholder="Battery Power Ratings" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="mb-3" controlId="productAudioDtls">
                <Form.Label className="textBold">Audio Details</Form.Label>
                <Form.Control type="text" name={"audioDetails"} value={mobileModel.audioDetails} onChange={updateInput} placeholder="Audio Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="gpsDetails">
                <Form.Label className="textBold">GPS Details</Form.Label>
                <Form.Control type="text" name={"gps"} value={mobileModel.gps} onChange={updateInput} placeholder="GPS Details" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={mobileModel.countryOfOrigin} onChange={updateInput} placeholder="Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={mobileModel.weight} onChange={updateInput} placeholder="Product Weigth" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Coonectivity Type Details</Form.Label>
                <Form.Control type="text" name={"connectivityType"} value={mobileModel.connectivityType} onChange={updateInput} placeholder="Connectivity Type Details" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="frontCamDtls">
                <Form.Label className="textBold">Front Camera Details</Form.Label>
                <Form.Control type="text" name={"frontCamer"} value={mobileModel.frontCamer} onChange={updateInput} placeholder="Front Camera Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="rearCamDtls">
                <Form.Label className="textBold">Rear Camera Details</Form.Label>
                <Form.Control type="text" name={"rearCamera"} value={mobileModel.rearCamera} onChange={updateInput} placeholder="Rear Camera Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productSPLFetures">
                <Form.Label className="textBold">Special features</Form.Label>
                <Form.Control type="text" name={"specialFeature"} value={mobileModel.specialFeature} onChange={updateInput} placeholder="Special Features" />
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
