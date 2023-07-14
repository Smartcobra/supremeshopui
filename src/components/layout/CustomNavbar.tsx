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
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ImSearch } from "react-icons/im";
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

  const access_token = TokenUtil.getToken();
  const refresh_token = TokenUtil.getRefreshToken();
  console.log("token-logout", access_token);
  //const [logOutModel, setLogOutModel] = useState({ access_token: access_token, refresh_token: refresh_token });
  const logOutModel = { access_token: access_token, refresh_token: refresh_token };
  //console.log("refreshToken---beforeset--state", logOutModel.refresh_token);
  // console.log("token-logout---beforeset--state", logOutModel.access_token);

  const clickLogOff = () => {
    console.log("hit in clicklogoff------------------------------------------------");
    // setLogOutModel({ access_token: access_token, refresh_token: refresh_token });
    dispatch(userActions.logoutUserAction({ userLogout: logOutModel }))
      .then((response: any) => {
        if (response && !response.error) {
          navigate("/");
        }
      })
      .catch((err: any) => {});
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="warning" variant="warning">
        <Container fluid>
          <Navbar.Brand href="/">{props.heading}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="mb-1 mt-1" href="#home">
              Home
            </Nav.Link>
            <InputGroup className="mb-1 mt-1 mr-l">
              <Form.Control type="text" placeholder="Search Here" className="searchbarc" />
              <Button variant="outline-dark" id="button-search">
                <ImSearch></ImSearch>
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

                  <Button variant="outline-dark" onClick={clickLogOff}>
                    <b>logout</b>
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate("/user/login")} variant="outline-dark">
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
                <NavDropdown title="Product" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/addproduct">Create Product</NavDropdown.Item>
                  <NavDropdown.Item href="/products">View Product</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Brand" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/addbrand">Create Brand</NavDropdown.Item>
                  <NavDropdown.Item href="/viewBrands">View Brands</NavDropdown.Item>
                </NavDropdown>
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
        /
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
