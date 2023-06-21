import React, { useState } from "react";
import { IClothDetails } from "./ProductModel";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { nextPage, previousPage, updatePage4Field } from "../../redux/product/product.reducer";

// interface ClothPage {
//   data: IClothDetails;
// }

const ClothProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  // const { productDimensions, manufacturer, ASIN, itemModelNumber, countryOrigin, department, genericName } = data;
  const [clothModel, setClothModel] = useState<IClothDetails>({
    productDimensions: "",
    manufacturer: "",
    ASIN: "",
    itemModelNumber: "",
    countryOrigin: "",
    department: "",
    genericName: "",
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClothModel({
      ...clothModel,
      [event.target.name]: event.target.value,
    });
    dispatch(updatePage4Field({ page: "productCompleteDtls", field: "clothDeatils", value: clothModel }));
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
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>CLOTH DEATILS PAGE</h1>
          </Card.Body>
        </Card>
        <Card style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Title style={{ marginLeft: "14rem", marginBottom: "2rem" }}></Card.Title>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="genericName">
                <Form.Label className="textBold">Generic Name</Form.Label>
                <Form.Control type="text" name={"genericName"} value={clothModel.genericName} placeholder="Generic Name" />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="productType">
                <Form.Label className="textBold">Product ASIN</Form.Label>
                <Form.Control type="text" name={"ASIN"} value={clothModel.ASIN} placeholder="Product ASIN" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="productDimension">
                <Form.Label className="textBold">Product Dimension</Form.Label>
                <Form.Control type="text" name={"productDimensions"} value={clothModel.productDimensions} placeholder="Product Dimension" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="productItemNumber">
                <Form.Label className="textBold">Product Item Number</Form.Label>
                <Form.Control type="text" name={"itemModelNumber"} value={clothModel.itemModelNumber} placeholder="Product Item Number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="productCountryRegion">
              <Form.Label className="textBold">Product Country Origin</Form.Label>
              <Form.Control type="text" name={"countryOrigin"} value={clothModel.countryOrigin} placeholder="Product Origin Country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productDepartment">
              <Form.Label className="textBold">Product Department</Form.Label>
              <Form.Control type="text" name={"department"} value={clothModel.department} placeholder=" Product Department" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productManufacture">
              <Form.Label className="textBold">Product Manufacture</Form.Label>
              <Form.Control type="text" name={"manufacturer"} value={clothModel.manufacturer} placeholder="Product Manufacture" />
            </Form.Group>

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

export default ClothProductDetails;
