import React, { useState, useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ICategoryModel, IEditCategoryRequest } from "./CategoryModel";
import { useNavigate, useParams } from "react-router-dom";
import * as categoryEditReducer from "../../redux/category/category.reducer";
import * as categoryEditAction from "../../redux/category/category.actions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ShowModal from "../util/ShowModal";

const EditCategory: React.FC = () => {
  const disPatch = useDispatch();
  const { catId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigate = useNavigate();

  //get categories data from redux
  const categoryReduxState: categoryEditReducer.InitialState = useSelector((state: RootState) => {
    return state[categoryEditReducer.categoryFeatureKey];
  });

  const { loading, editCategoryModel: reduxStateModel } = categoryReduxState; //reduxStateModel : if will not give will complain because we are using same key for setCategoryModel

  const [categoryModel, setCategoryModel] = useState<IEditCategoryRequest>({
    categoryId: 0,
    categoryName: "",
    categoryAlias: "",
    parentCategoryId: 0,
    categoryActive: false,
  });

  useEffect(() => {
    console.log("useEffect----Edit", catId);
    if (catId) {
      disPatch(categoryEditAction.getCategoryByIdAction(catId))
        .then((response: any) => {
          console.log("response payload", response.payload);
          if (response && !response.error) {
            console.log("Category with id " + response.payload.categoryId);
          }
        })
        .catch((err: any) => {});
    }
  }, [catId]);

  //set Redux State to local state
  useEffect(() => {
    console.log("before if-------useEffect----setvalues", catId);
    console.log("before if-------useEffect----reduxStateModel---", reduxStateModel);
    if (reduxStateModel && Object.keys(reduxStateModel).length > 0) {
      console.log("useEffect----setvalues", catId);
      setCategoryModel({
        ...categoryModel,
        categoryId: reduxStateModel.categoryId,
        categoryName: reduxStateModel.categoryName,
        categoryAlias: reduxStateModel.categoryAlias,
        parentCategoryId: reduxStateModel.parentCategoryId,
        categoryActive: reduxStateModel.categoryActive,
      });

      console.log("useEffect----setvalues", categoryModel.categoryName);
    }
  }, [reduxStateModel]);

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "categoryActive") {
      setCategoryModel({
        ...categoryModel,
        [event.target.name]: event.target.checked,
      });
    } else if (event.target.name == "parentCategoryId") {
      setCategoryModel({
        ...categoryModel,
        [event.target.name]: +event.target.value, // + is used to converting string to number
      });
    } else {
      setCategoryModel({
        ...categoryModel,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("category::", categoryModel);
    disPatch(categoryEditAction.updateCategoryAction({ category: categoryModel }))
      .then((response: any) => {
        if (response && !response.error) {
          console.log("response---------", response);
          console.log("response---------", response.payload.responseMessage);
          setIsModalOpen(true);
          setModalContent(response.payload.responseMessage);
        }
      })
      .catch((err: any) => {});
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/viewcategory");
  };

  return (
    <>
      <pre>{JSON.stringify(categoryModel)}</pre>
      <Container className="mt-5">
        <div className="container-flex">
          <Card border="warning border-4" style={{ width: "40rem", marginLeft: "21rem" }}>
            <Card.Header className="card-header" as="h5">
              Edit Category
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCatname">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" value={categoryModel.categoryName} name={"categoryName"} onChange={updateInput} placeholder="Enter Category Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCatAlias">
                  <Form.Label>Category Alias</Form.Label>
                  <Form.Control type="text" value={categoryModel.categoryAlias} name={"categoryAlias"} onChange={updateInput} placeholder="Enter Category Alias" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCatParentid">
                  <Form.Label> Parent Category Id</Form.Label>
                  <Form.Control
                    type="text"
                    value={categoryModel.parentCategoryId}
                    name={"parentCategoryId"}
                    onChange={updateInput}
                    placeholder="Enter Category parent Id"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" checked={categoryModel.categoryActive} name={"categoryActive"} onChange={updateInput} label="Category Status" />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="secondary" type="submit">
                    Update Category
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <ShowModal isOpen={isModalOpen} onRequestClose={closeModal} content={modalContent} headername="Update Category" />
    </>
  );
};

export default EditCategory;
