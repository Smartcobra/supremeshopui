import { Button, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nextcatPage } from "../../redux/product/product.reducer";

const ProductErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navgetCategory = () => {
    dispatch(nextcatPage());
  };

  return (
    <>
      <Container className="mt-5">
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "4rem" }}>
          <Card.Body>
            <h1>Please Select Category</h1>
          </Card.Body>
        </Card>
        <Card className="text-center" style={{ width: "60rem", marginBottom: "4px", height: "6rem" }}>
          <Card.Body>
            <Button variant="info" onClick={navgetCategory}>
              Goto Category Page
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProductErrorPage;
