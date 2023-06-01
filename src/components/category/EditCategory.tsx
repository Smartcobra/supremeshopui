import React, { useState, useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ICategoryModel } from "./CategoryModel";
import { useParams } from "react-router-dom";
import * as categoryEditReducer from "../../redux/category/category.reducer";
import * as categoryEditAction from "../../redux/category/category.actions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const EditCategory: React.FC = () => {
  const disPatch = useDispatch();
  const { catId } = useParams();

  //get categories data from redux
  const categoryReduxState: categoryEditReducer.InitialState = useSelector((state: RootState) => {
    return state[categoryEditReducer.categoryFeatureKey];
  });

  const { loading, categoryModel: reduxStateModel } = categoryReduxState; //reduxStateModel : if will not give will complain because we are using same key for setCategoryModel

  const [categoryModel, setCategoryModel] = useState<ICategoryModel>({
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
          if (response && !response.error) {
            console.log("category update failed::");
          }
        })
        .catch((err: any) => {});
    }
  }, [catId]);

  //set Redux State to local state
  useEffect(() => {
    if (reduxStateModel && Object.keys(reduxStateModel).length > 0) {
      setCategoryModel({
        ...categoryModel,
        categoryName: reduxStateModel.categoryName,
        categoryAlias: reduxStateModel.categoryAlias,
        parentCategoryId: reduxStateModel.parentCategoryId,
        categoryActive: reduxStateModel.categoryActive,
      });
    }
  }, [reduxStateModel]);

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    </>
  );
};

export default EditCategory;
