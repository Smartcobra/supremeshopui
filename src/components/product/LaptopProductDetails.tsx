import React, { useState } from "react";
import { ILaptopDetails } from "./ProductModel";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { nextPage, previousPage, updateField, updatePage4Field } from "../../redux/product/product.reducer";
import "./product.css";

// interface LaptopPage {
//   data: ILaptopDetails;
// }

const LaptopProductDetails: React.FC = () => {
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

  const [laptopModel, setLaptopModel] = useState<ILaptopDetails>({
    manufacturer: "",
    series: "",
    colour: "",
    productDimensions: "",
    processor: "",
    screenDisplaySize: "",
    resolution: "",
    ram: "",
    hardDriveSize: "",
    hardDiskDescription: "",
    audioDetails: "",
    averageBatteryLife: "",
    countryOfOrigin: "",
    weight: "",
    graphics: "",
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLaptopModel({
      ...laptopModel,
      [event.target.name]: event.target.value,
    });
    dispatch(updatePage4Field({ page: "productCompleteDtls", field: "laptopDetails", value: laptopModel }));
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
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productManufacture">
                <Form.Label className="textBold">Product Manufaturer</Form.Label>
                <Form.Control type="text" name={"manufacturer"} value={laptopModel.manufacturer} onChange={updateInput} placeholder="Manufacturer Name" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productSeries">
                <Form.Label className="textBold">Product Series</Form.Label>
                <Form.Control type="text" name={"series"} value={laptopModel.series} onChange={updateInput} placeholder="Product Series" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="productColor">
                <Form.Label className="textBold">Color</Form.Label>
                <Form.Control type="text" name={"colour"} value={laptopModel.colour} onChange={updateInput} placeholder="Product Color" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productDmns">
                <Form.Label className="textBold">Producr Dimension</Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={laptopModel.productDimensions} onChange={updateInput} placeholder="Product IMEI" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="ProductProcessor">
                <Form.Label className="textBold">Processor</Form.Label>
                <Form.Control type="text" name={"processor"} value={laptopModel.processor} onChange={updateInput} placeholder="Product Short Description" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productDisplaySize">
                <Form.Label className="textBold">Screen Dispaly Size</Form.Label>
                <Form.Control type="text" name={"screenDisplaySize"} value={laptopModel.screenDisplaySize} onChange={updateInput} placeholder="Screen Display Size" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="producrResolution">
                <Form.Label className="textBold">Resolution</Form.Label>
                <Form.Control type="text" name={"resolution"} value={laptopModel.resolution} onChange={updateInput} placeholder="Resolution" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productRam">
                <Form.Label className="textBold">Ram</Form.Label>
                <Form.Control type="text" name={"ram"} value={laptopModel.ram} onChange={updateInput} placeholder="RAM  Size" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskSize">
                <Form.Label className="textBold">Hard Drive Size</Form.Label>
                <Form.Control type="text" name={"hardDriveSize"} value={laptopModel.hardDriveSize} onChange={updateInput} placeholder="Hard Drive Size" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productHardDiskDesc">
                <Form.Label className="textBold">Hard Disk Description</Form.Label>
                <Form.Control
                  type="text"
                  name={"hardDiskDescription"}
                  value={laptopModel.hardDiskDescription}
                  onChange={updateInput}
                  placeholder="Hard Disk Description"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" className="mb-3" controlId="productAudioDtls">
                <Form.Label className="textBold">Audio Details</Form.Label>
                <Form.Control type="text" name={"audioDetails"} value={laptopModel.audioDetails} onChange={updateInput} placeholder="Audio Details" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productBateryLife">
                <Form.Label className="textBold">Average battery Life</Form.Label>
                <Form.Control type="text" name={"averageBatteryLife"} value={laptopModel.averageBatteryLife} onChange={updateInput} placeholder="Average BAttery Life" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="mb-3" controlId="productCountry">
                <Form.Label className="textBold">Country Of Origin</Form.Label>
                <Form.Control type="text" name={"countryOfOrigin"} value={laptopModel.countryOfOrigin} onChange={updateInput} placeholder="Country Of Origin" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Weight</Form.Label>
                <Form.Control type="text" name={"weight"} value={laptopModel.weight} onChange={updateInput} placeholder="Product Weigth" />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3" controlId="productWeight">
                <Form.Label className="textBold">Product Graphics Details</Form.Label>
                <Form.Control type="text" name={"graphics"} value={laptopModel.graphics} onChange={updateInput} placeholder="Product Weigth" />
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
