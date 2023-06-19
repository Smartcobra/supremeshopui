import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./home.styles.css";
import SalesChart from "./SalesChart";
import ProductLineGraph from "./ProductLineChart";
import EarningsSkillBar from "./EarningsSkillBar";
import { FcSalesPerformance } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <Card style={{ width: "110rem", height: "7rem" }}>
          <Card.Body>
            <Row>
              <Col xs={2}>
                <Card.Title className="card-title">Supreme Shop</Card.Title>
              </Col>
              <Col xs={1}></Col>
              <Col xs={2}>
                <FcSalesPerformance />
              </Col>
              <Col xs={1}></Col>
              <Col xs={2}>
                <BsFillCartFill />
              </Col>
              <Col xs={1}></Col>
              <Col xs={2}>
                <AiFillLike />
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <EarningsSkillBar name="Earnings" level={80} backgroundcolor="skill-bar-progress-fill" />
              </Col>
              <Col xs={2}></Col>
              <Col xs={1}>
                <EarningsSkillBar name="Sales" level={80} backgroundcolor="skill-bar-progress-fill-green" />
              </Col>
              <Col xs={2}></Col>
              <Col xs={1}>
                <EarningsSkillBar name="Orders" level={80} backgroundcolor="skill-bar-progress-fill-blue" />
              </Col>
              <Col xs={2}></Col>
              <Col xs={1}>
                <EarningsSkillBar name="Likes" level={80} backgroundcolor="skill-bar-progress-fill-orange" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <Row>
          <Col xs={8}>
            <Card style={{ height: "30rem" }}>
              <Card.Body>
                <Card.Title>Product Line</Card.Title>
                <ProductLineGraph />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={1}></Col>
          <Col xs={3}>
            <Card style={{ width: "30rem", height: "25rem" }}>
              <Card.Body>
                <Card.Title>Sales Bar</Card.Title>
                <SalesChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <Card style={{ width: "110rem", height: "15rem" }}>
          <Card.Body>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount BTC</th>
                  <th>BTC Remainining</th>
                  <th>Price</th>
                  <th>USD</th>
                  <th>Fee(%)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>28-May-2023</td>
                  <td>Buy</td>
                  <td>0.58647</td>
                  <td>0.58647</td>
                  <td>11900.12</td>
                  <td>$ 1597.89</td>
                  <td>0.023</td>
                  <td>
                    <Button className="homebutton" variant="homebutton">
                      Accept
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>28-May-2023</td>
                  <td>Buy</td>
                  <td>0.58647</td>
                  <td>0.58647</td>
                  <td>11900.12</td>
                  <td>$ 1597.89</td>
                  <td>0.023</td>
                  <td>
                    <Button className="homebutton" variant="homebutton">
                      Accept
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>28-May-2023</td>
                  <td>Buy</td>
                  <td>0.58647</td>
                  <td>0.58647</td>
                  <td>11900.12</td>
                  <td>$ 1597.89</td>
                  <td>0.023</td>
                  <td>
                    <Button className="homebutton" variant="homebutton">
                      Accept
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
