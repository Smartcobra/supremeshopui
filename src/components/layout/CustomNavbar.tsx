import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../App.css";
import { TokenUtil } from "../util/TokenUtils";
import { AppDispatch, useAppDispatch, RootState } from "../../redux/store";
import * as userReducer from "../../redux/users/user.reducer";
import { useSelector } from "react-redux";
//import { logOutUserAction } from "../../redux/users/user.reducer";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import * as userActions from "./../../redux/users/user.actions";
import { Ilogout } from "../auth/usermodel";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdOutlineStorage } from "react-icons/md";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface IProps {
  heading: string;
}

const CustomNavbar: React.FC<IProps> = (props) => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  //get user state from redux
  const userState: userReducer.InitialState = useSelector((state: RootState) => {
    return state[userReducer.userFeatureKey];
  });

  const { user: userReduxState } = userState;

  const tokenConst = TokenUtil.getToken();
  console.log("token-logout", tokenConst);
  const [logOutModel, setLogOutModel] = useState({ token_type_hint: "access_token", token: tokenConst });
  console.log("token_type_hint---beforeset--state", logOutModel.token_type_hint);
  console.log("token-logout---beforeset--state", logOutModel.token);

  const clickLogOff = () => {
    console.log("hit in clicklogoff------------------------------------------------");
    setLogOutModel({ token_type_hint: "access_token", token: tokenConst });
    console.log("token_type_hint--after---state", logOutModel.token_type_hint);
    console.log("token-logout---after--state", logOutModel.token);
    dispatch(userActions.logoutUserAction({ userLogout: logOutModel }))
      .then((response: any) => {
        if (response && !response.error) {
          navigate("/");
        }
      })
      .catch((err: any) => {});
  };

  const clickSignIn = () => {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">{props.heading}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="mb-1 mt-1" href="#home">
              Home
            </Nav.Link>
            <InputGroup className="mb-1 mt-1 mr-l">
              <Form.Control type="text" placeholder="Search Here" className="searchbarc" />
              <Button variant="outline-warning" id="button-addon2">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <ul className="navbar-nav ms-auto">
              {TokenUtil.isLoggedIn() ? (
                <>
                  {userReduxState && Object.keys(userReduxState).length > 0 && (
                    <Nav.Item>
                      <Nav.Link href="/" className="nav-link">
                        {userReduxState.userName}
                      </Nav.Link>
                    </Nav.Item>
                  )}

                  <Button variant="outline-warning" onClick={clickLogOff}>
                    logout
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate("/user/login")} variant="outline-light">
                  Hello, Sign in
                </Button>
                // <Nav.Link href="/user/login"> Hello, Login</Nav.Link>
              )}
            </ul>
          </Nav>
        </Container>
      </Navbar>
      <div>
        {TokenUtil.isLoggedIn() ? (
          <Navbar variant="dark" className="navbarheight">
            <Container fluid>
              <Navbar.Brand href="#nolink" onClick={handleShow}>
                <i className="bi bi-sliders2"></i>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/addproduct">Product</Nav.Link>
                <Nav.Link href="/addbrand">Brand</Nav.Link>
                <NavDropdown title="Category" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/addcategory">Create Category</NavDropdown.Item>
                  <NavDropdown.Item href="/viewcategory">View Category</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        ) : (
          <></>
        )}

        {/* <Navbar variant="dark" className="navbarheight">
          <Container fluid>
            <Navbar.Brand href="#nolink" onClick={handleShow}>
              <i className="bi bi-sliders2"></i>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/addproduct">Product</Nav.Link>
              <Nav.Link href="/addbrand">Brand</Nav.Link>
              <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/addcategory">Create Category</NavDropdown.Item>
                <NavDropdown.Item href="/viewcategory">View Category</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar> */}
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CustomNavbar;
