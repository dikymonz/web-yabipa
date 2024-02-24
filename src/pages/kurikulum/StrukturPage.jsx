import { Container, Row, Col } from "react-bootstrap";
import strukturImg from "../../assets/homepage/Struktur/struktur.png";

const StrukturPage = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Container>
        <Row>
          <Col className="section-title">
            <h1 className="fw-bold text-center pt-5">Struktur Organisasi</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-5">
            <img src={strukturImg} alt="" style={{ height: "600px" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StrukturPage;
