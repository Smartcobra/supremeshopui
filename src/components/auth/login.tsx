import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../../styles/auth.module.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { AuthService } from "./authservice";
import { useNavigate } from "react-router-dom";
import { IAuthModel } from "./usermodel";
import { useAppDispatch, AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import * as userReducer from "./../../redux/users/user.reducer";
import * as userActions from "./../../redux/users/user.actions";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  //get user data from redux
  const userState: userReducer.InitialState = useSelector((state: RootState) => {
    return state[userReducer.userFeatureKey];
  });

  const { loading } = userState;

  const [authModel, setauthModel] = useState<IAuthModel>({
    userName: "",
    password: "",
  });

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setauthModel({
      ...authModel,
      [event.target.name]: event.target.value,
    });
  };

  const token = "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(authModel, "authModel");

    dispatch(userActions.loginUserAction({ user: authModel }))
      .then((response: any) => {
        if (response && !response.error) {
          navigate("/");
        }
      })
      .catch((err: any) => {});
  };

  return (
    <>
      <Container className="mt-5">
        <p className={styles.logologin}> SuprmeShop.in</p>
        <Card border="warning" style={{ width: "40rem", marginLeft: "21rem" }}>
          <Card.Body>
            <Card.Title>Sign in</Card.Title>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="formusername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={authModel.userName} name={"userName"} onChange={updateInput} placeholder="Please Enter Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={authModel.password} name={"password"} onChange={updateInput} placeholder="Please Enter Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Admin" />
                    <Form.Check type="checkbox" label="Shipper" />
                    <Form.Check type="checkbox" label="Editor" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Admin" />
                    <Form.Check type="checkbox" label="Shipper" />
                    <Form.Check type="checkbox" label="Editor" />
                  </Col>
                </Row>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="warning" size="sm" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted text-center">@Supremeshop Authorization</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Login;
