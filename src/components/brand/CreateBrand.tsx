import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as brandAction from "../../redux/brand/brand.action";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as categoryReducer from "../../redux/category/category.reducer";
import Multiselect from "multiselect-react-dropdown";
import * as categoryAction from "../../redux/category/category.actions";
import { catDropdownOptions } from "./BrandModel";
import ShowModal from "../util/ShowModal";

const CreateBrand: React.FC = () => {
  const brandlogo = useRef<HTMLInputElement>(null);
  const catOptns = useRef<Multiselect>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const categoryReduxState: categoryReducer.InitialState = useSelector((state: RootState) => {
    return state[categoryReducer.categoryFeatureKey];
  });
  const dispatch = useDispatch();

  const { categories } = categoryReduxState;

  useEffect(() => {
    dispatch(categoryAction.getAllCategoryAction());
  }, []);

  const options: catDropdownOptions[] = categories.map((item) => ({
    id: item.categoryId,
    name: item.categoryName,
  }));

  const [brand, setBrand] = useState({
    description: "",
    logo: null as File | null,
    brandName: "",
    categories: [0],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setBrand({ ...brand, logo: e.target.files[0] });
    }
  };

  const handleSelect = (selectedList: catDropdownOptions[]) => {
    const selectedValue = selectedList.map((item) => item.id);
    setBrand({ ...brand, categories: selectedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(brandAction.createBrandAction(brand)).then((response: any) => {
      if (response && !response.error) {
        console.log("brand Response", response.payload.responseMessage);
        setIsModalOpen(true);
        setModalContent(response.payload.responseMessage);
      }
      setBrand({
        description: "",
        logo: null,
        brandName: "",
        categories: [],
      });
      if (brandlogo.current != null) {
        //used to reset the file after submit
        brandlogo.current.value = "";
      }
      if (catOptns.current != null) {
        //used to reset the multiselect after submit
        catOptns.current.resetSelectedValues();
      }
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={9}>
            <div className="container-flex">
              <Card className="text-center" style={{ width: "50rem", marginBottom: "4px", height: "4rem" }}>
                <Card.Body>
                  <h1>CREATE BRAND</h1>
                </Card.Body>
              </Card>
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <Form id="myForm" className="form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBrandname">
                      <Form.Label>Brand Name</Form.Label>
                      <Form.Control type="text" value={brand.brandName} name={"brandName"} onChange={handleInputChange} placeholder="Enter Brand Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBrandname">
                      <Form.Label>Description</Form.Label>
                      <Form.Control type="text" value={brand.description} name={"description"} onChange={handleInputChange} placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fofrmLogo">
                      <Form.Label>Brand Logo</Form.Label>
                      <Form.Control type="file" ref={brandlogo} name={"logo"} onChange={handleLogoChange} placeholder="Enter Brand Logo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCategory">
                      <Form.Label>Categories</Form.Label>
                      <Multiselect
                        options={options} // Options to display in the dropdown
                        selectedValues={[]} // Preselected value to persist in dropdown
                        onSelect={handleSelect} // Function will trigger on select event
                        onRemove={handleSelect} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        ref={catOptns}
                      />
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button variant="secondary" type="submit">
                        Create Brand
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <div>
          {" "}
          <ShowModal isOpen={isModalOpen} onRequestClose={closeModal} content={modalContent} headername="Create Brand" />
          {/* <ShowModal {...{ isOpen: isModalOpen }} {...{ onRequestClose: closeModal }} {...{ content: modalContent }} headername="Create Brand" /> */}
        </div>
      </Container>
    </>
  );
};

export default CreateBrand;
