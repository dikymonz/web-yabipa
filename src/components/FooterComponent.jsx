import { Container, Row, Col } from "react-bootstrap";

import Logo from "../assets/logo/logo.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between row-gap-5">
          <Col lg="5">
            <div className="d-flex align-items-center mb-3">
              <img
                alt=""
                src={Logo}
                width="60"
                height="60"
                className="logo-img d-inline-block align-top me-2"
              />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">SMANSA</p>
                <p className="logo-text m-0 fw-bold lh-sm">SEMBALUN</p>
              </div>
            </div>
            <p
              className="lh-lg"
              style={{ fontSize: "14px", textAlign: "justify", color: "white" }}
            >
              Membangun Generasi Cerdas, Terampil, Berbudaya yang berwawasan
              Lingkungan berlandaskan Iman dan Taqwa.
            </p>
          </Col>
          <Col lg="3" className="menu-footer d-flex flex-column row-gap-2">
            <h5 className="fw-bold text-white">Struktur Organisasi</h5>
            <a href="/kurikulum/struktur">Struktur Organisasi</a>
            <a href="">Struktur Osis</a>
          </Col>
          <Col lg="3" className="menu-footer d-flex flex-column row-gap-2">
            <h5 className="fw-bold text-white">Cari tahu kami</h5>
            <a href="">Facebook Sman Sembalun</a>
            <a href="">Instagram Osis Smansa Sembalun</a>
            <a href="">Instagam Sman Sembalun</a>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <p className="px-md-0 px-3 text-center text-white">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Smansa Sembalun</span>, All Right
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
