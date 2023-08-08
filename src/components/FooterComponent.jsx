import { Container, Row, Col } from "react-bootstrap";

import Logo from "../assets/logo/logo.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between flex-lg-row flex-column-reverse row-gap-5">
          <Col lg="6">
            <div className="d-flex align-items-center mb-3">
              <img alt="" src={Logo} width="60" height="60" className="logo-img d-inline-block align-top me-2" />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">PONPES QURAN YABIPA</p>
                <p className="logo-text m-0 fw-bold lh-sm">SMP IT YABIPA</p>
              </div>
            </div>
            <p className="lh-lg" style={{ fontSize: "14px", textAlign: "justify" }}>
              Yabipa Boarding School adalah Sekolah yang berupaya mengantarkan para santriwan/wati menuju sosok muslim yang paripurna (kaffah), bangga menjadi anak sholeh, yang siap bejuang dengan memiliki kemauan dan kemampuan bersaing.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <p className="px-md-0 px-3 text-sm-start text-center">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Team IT YABIPA</span>, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
