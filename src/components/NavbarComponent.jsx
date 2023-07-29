import { Navbar, Container, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

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

                  <NavDropdown title="Profil" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="/profil/tentang">Tentang Kami</NavDropdown.Item>
                    <NavDropdown.Item href="/profil/sejarah">Sejarah</NavDropdown.Item>
                    <NavDropdown.Item href="/profil/visi-misi">Visi dan Misi</NavDropdown.Item>
                    <NavDropdown.Item href="/profil/profil-santri">Profil Santri S2MB3</NavDropdown.Item>
                    <NavDropdown.Item href="/profil/profil-guru">Profil Guru ISTIMEWA</NavDropdown.Item>
                    <NavDropdown.Item href="/profil/profil-sekolah">Profil Sekolah SARAMI</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Galeri Kegiatan" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="/gallery/gallery-kbm"> KBM</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-ekskul"> Ekskul</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-lifeskill"> Lifeskill</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-event"> Event</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-graduation"> Graduation</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-fieldtrip"> Fieldtrip</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-munaqosyah"> Munaqosyah</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Kurikulum" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="/kurikulum/pesantren">Pesantren</NavDropdown.Item>
                    <NavDropdown.Item href="/kurikulum/smp">SMP</NavDropdown.Item>
                    <NavDropdown.Item href="/kurikulum/kalender-pendidikan">Kalender Pendidikan</NavDropdown.Item>
                  </NavDropdown>

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
