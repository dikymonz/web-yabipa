import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import Logo from "../assets/logo/logo.png";

const NavbarComponent = () => {
  return (
    <div>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-white mb-3 py-3 fixed-top w-100 z-3">
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <img alt="" src={Logo} width="60" height="60" className="logo-img d-inline-block align-top me-2" />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">PONPES QURAN YABIPA</p>
                <p className="logo-text m-0 fw-bold lh-sm">SMP IT YABIPA</p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="d-flex align-items-center">
                  <img alt="" src={Logo} width="60" height="60" className="d-inline-block align-top me-2" />
                  <p className="m-0 fw-bold lh-sm">
                    YABIPA <br /> BOARDING SCHOOL
                  </p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <Nav.Link href="/">Beranda</Nav.Link>
                  <Nav.Link href="/ppdb">PPDB</Nav.Link>
                  <Nav.Link href="/kontak">Kontak & Sosial Media</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarComponent;
