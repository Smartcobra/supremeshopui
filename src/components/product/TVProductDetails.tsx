import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ITVDetails } from "./ProductModel";
import { nextPage, previousPage, updatePage4Field } from "../../redux/product/product.reducer";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const TVProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const [tvModel, setTVModel] = useState<ITVDetails>({
    manufacturer: "",
    model: "",
    modelYear: "",
    colour: "",
    productDimensions: "",
    displayTechnology: "",
    resolution: "",
    viewingAngle: "",
    audioOutputMode: "",
    volatage: "",
    standingScreenDisplaySize: "",
    supportBluetooth: "",
    countryOfOrigin: "",
    weight: "",
    imageAspectRatio: "",
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTVModel({
      ...tvModel,
      [event.target.name]: event.target.value,
    });
    dispatch(updatePage4Field({ page: "productCompleteDtls", field: "tvDetails", value: tvModel }));
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
                <Form.Control type="text" name={"manufacturer"} value={tvModel.manufacturer} onChange={updateInput} placeholder="Manufacturer Name" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productSeries">
                <Form.Label className="textBold">TV Model</Form.Label>
                <Form.Control type="text" name={"model"} value={tvModel.model} onChange={updateInput} placeholder="TV Model" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="modelYear">
                <Form.Label className="textBold">Model Year</Form.Label>
                <Form.Control type="text" value={tvModel.modelYear} onChange={updateInput} placeholder="Model Year" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="tvColor">
                <Form.Label className="textBold">TV Color</Form.Label>
                <Form.Control type="text" name={"colour"} value={tvModel.colour} onChange={updateInput} placeholder="TV Color" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productDmns">
                <Form.Label className="textBold">Producr Dimension</Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={tvModel.productDimensions} onChange={updateInput} placeholder="Product Dimension" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="displayTechnology">
                <Form.Label className="textBold">Display Technology</Form.Label>
                <Form.Control type="text" name={"displayTechnology"} value={tvModel.displayTechnology} onChange={updateInput} placeholder="Display Technology" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="producrResolution">
                <Form.Label className="textBold">Resolution</Form.Label>
                <Form.Control type="text" name={"resolution"} value={tvModel.resolution} onChange={updateInput} placeholder="Resolution" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="viewAngle">
                <Form.Label className="textBold">Viewing Angle</Form.Label>
                <Form.Control type="text" name={"viewingAngle"} value={tvModel.viewingAngle} onChange={updateInput} placeholder="Viewing Angle" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskSize">
                <Form.Label className="textBold">HOutput Audio Mode</Form.Label>
                <Form.Control type="text" name={"audioOutputMode"} value={tvModel.audioOutputMode} onChange={updateInput} placeholder="Output  Audio Mode" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="tvVoltage">
                <Form.Label className="textBold">Voltage</Form.Label>
                <Form.Control type="text" name={"volatage"} value={tvModel.volatage} onChange={updateInput} placeholder="voltage" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="mb-3" controlId="stndDisplaySz">
                <Form.Label className="textBold">Standing Display Size</Form.Label>
                <Form.Control
                  type="text"
                  name={"standingScreenDisplaySize"}
                  value={tvModel.standingScreenDisplaySize}
                  onChange={updateInput}
                  placeholder="Audio Details"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productBateryLife">
                <Form.Label className="textBold">Support Bluetooth</Form.Label>
                <Form.Control type="text" name={"supportBluetooth"} value={tvModel.supportBluetooth} onChange={updateInput} placeholder="Support Bluetooth" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={tvModel.countryOfOrigin} onChange={updateInput} placeholder="Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={tvModel.weight} onChange={updateInput} placeholder="Product Weigth" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="imageAspectRatio">
                <Form.Label className="textBold">Image Aspect Ratio</Form.Label>
                <Form.Control type="text" name={"imageAspectRatio"} value={tvModel.imageAspectRatio} onChange={updateInput} placeholder="Image Aspect Ratio" />
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
