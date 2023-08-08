import { Container, Row, Col } from "react-bootstrap";

import Logo from "../assets/logo/logo.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between row-gap-5">
          <Col lg="5">
            <div className="d-flex align-items-center mb-3">
              <img alt="" src={Logo} width="60" height="60" className="logo-img d-inline-block align-top me-2" />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">PONPES QURAN YABIPA</p>
                <p className="logo-text m-0 fw-bold lh-sm">SMP IT YABIPA</p>
              </div>
            </div>
            <p className="lh-lg" style={{ fontSize: "14px", textAlign: "justify", color: "white" }}>
              Yabipa Boarding School adalah Sekolah yang berupaya mengantarkan para santriwan/wati menuju sosok muslim yang paripurna (kaffah), bangga menjadi anak sholeh, yang siap bejuang dengan memiliki kemauan dan kemampuan bersaing.
            </p>
          </Col>
          <Col lg="3" className="menu-footer d-flex flex-column row-gap-2">
            <h5 className="fw-bold text-white">Struktur Organisasi</h5>
            <a href="">Yayasan Bina Insan Paripurna</a>
            <a href="">Ponpes Quran YABIPA</a>
            <a href="">SMP IT YABIPA</a>
            <a href="">Forum Orangtua Murid</a>
            <a href="">Relawan YABIPA</a>
          </Col>
          <Col lg="3" className="menu-footer d-flex flex-column row-gap-2">
            <h5 className="fw-bold text-white">Falsafah</h5>
            <a href="">Profil Santri S2MB3</a>
            <a href="">Profil Guru ISTIMEWA</a>
            <a href="">Profil Sekolah SARAMI</a>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <p className="px-md-0 px-3 text-center text-white">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Team IT YABIPA</span>, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
