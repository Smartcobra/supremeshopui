import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ISmartWatchDetails } from "./ProductModel";
import { nextPage, previousPage, updatePage4Field } from "../../redux/product/product.reducer";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const SmartWatchProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const [watchModel, setWatchModel] = useState<ISmartWatchDetails>({
    manufacturer: "",
    series: "",
    colour: "",
    productDimensions: "",
    bateries: "",
    screenDisplaySize: "",
    connectivityType: "",
    callFacility: "",
    averageBatteryLife: "",
    countryOfOrigin: "",
    weight: "",
    wattage: "",
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWatchModel({
      ...watchModel,
      [event.target.name]: event.target.value,
    });
    // dispatch(updatePage4Field({ page: "productCompleteDtls", field: "smartWatchDtls", value: watchModel }));
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
            <h1>SMART WATCH DETAILS PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "90rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="watchSeries">
                <Form.Label className="textBold">Watch Series</Form.Label>
                <Form.Control type="text" name={"series"} value={watchModel.series} onChange={updateInput} placeholder="Watch Series" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productColor">
                <Form.Label className="textBold">Watch Color</Form.Label>
                <Form.Control type="text" value={watchModel.colour} onChange={updateInput} placeholder="Watch Color" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productDmns">
                <Form.Label className="textBold">Product Dimension</Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={watchModel.productDimensions} onChange={updateInput} placeholder="Product IMEI" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="batterySize">
                <Form.Label className="textBold">Product Baterry Size</Form.Label>
                <Form.Control type="text" name={"bateries"} value={watchModel.bateries} onChange={updateInput} placeholder="Product Baterry Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productDisplaySize">
                <Form.Label className="textBold">Screen Dispaly Size</Form.Label>
                <Form.Control type="text" name={"screenDisplaySize"} value={watchModel.screenDisplaySize} onChange={updateInput} placeholder="screen Dispaly Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="connectivityType">
                <Form.Label className="textBold">Connectivity Type</Form.Label>
                <Form.Control type="text" name={"connectivityType"} value={watchModel.connectivityType} onChange={updateInput} placeholder="Connectivity Type" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="callFacility">
                <Form.Label className="textBold">Call Facility</Form.Label>
                <Form.Control type="text" name={"callFacility"} value={watchModel.callFacility} onChange={updateInput} placeholder="Call Facility" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productRam">
                <Form.Label className="textBold">Average Battery Life</Form.Label>
                <Form.Control type="text" name={"averageBatteryLife"} value={watchModel.averageBatteryLife} onChange={updateInput} placeholder="Average Battery Life" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskSize">
                <Form.Label className="textBold">Manufacturer Details</Form.Label>
                <Form.Control type="text" name={"hardDriveSize"} value={watchModel.manufacturer} onChange={updateInput} placeholder="Manufacturer" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={watchModel.countryOfOrigin} onChange={updateInput} placeholder="Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={watchModel.weight} onChange={updateInput} placeholder="Product Weight" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Wattage Details</Form.Label>
                <Form.Control type="text" name={"wattage"} value={watchModel.wattage} onChange={updateInput} placeholder="Wattage" />
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

export default SmartWatchProductDetails;
