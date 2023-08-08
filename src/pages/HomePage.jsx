import { useNavigate } from "react-router-dom";

import Hero1 from "../assets/homepage/hero/hero-1.jpg";
import Hero2 from "../assets/homepage/hero/hero-2.jpg";
import Hero3 from "../assets/homepage/gallery/kbm/galeri-3.jpg";
import Hero4 from "../assets/homepage/hero/hero-4.jpg";
import Hero5 from "../assets/homepage/gallery/kbm/galeri-1.jpg";
import Hero6 from "../assets/homepage/gallery/kbm/galeri-2.jpg";

import { Container, Row, Col } from "react-bootstrap";

import KBM1 from "../assets/homepage/gallery/kbm/galeri-1.jpg";
import KBM2 from "../assets/homepage/gallery/kbm/galeri-2.jpg";
import KBM3 from "../assets/homepage/gallery/kbm/galeri-3.jpg";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="berita-terbaru w-100 min-vh-100">
        <Container className="overflow-hidden px-3 mx-auto">
          <Row>
            <Col className="p-0 mb-3">
              <button className="btn btn-success">Berita Terkini</button>
            </Col>
          </Row>
          <Row className="berita-utama row-cols-md-2 row-cols-1 flex-md-nowrap flex-wrap gap-md-1 gap-4 mb-md-1 mb-4">
            <Col className="position-relative overflow-hidden p-0">
              <img src={Hero1} alt="berita-utama-1" width="100%" />
              <div className="bg"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2">Santri</button>
                <h4 className="text-white fw-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, suscipit.</h4>
                <p className="text-white">
                  <span className="fw-semibold">Team IT Yabipa</span> - 30 Juli 2023
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0">
              <img src={Hero2} alt="berita-utama-2" width="100%" />
              <div className="bg"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2">Santri</button>
                <h4 className="text-white fw-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, suscipit.</h4>
                <p className="text-white">
                  <span className="fw-semibold">Team IT Yabipa</span> - 30 Juli 2023
                </p>
              </div>
            </Col>
          </Row>
          <Row className="berita-lainnya row-cols-md-4 row-cols-1 flex-md-nowrap flex-wrap gap-1">
            <Col className="position-relative overflow-hidden p-0 d-flex">
              <img src={Hero3} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">Santri</button>
                <p className="fw-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, suscipit.</p>
                <p className="date">
                  <span className="fw-semibold">Team IT Yabipa</span> - 30 Juli 2023
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex">
              <img src={Hero4} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">Santri</button>
                <p className="fw-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, suscipit.</p>
                <p className="date">
                  <span className="fw-semibold">Team IT Yabipa</span> - 30 Juli 2023
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex ">
              <img src={Hero5} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">Santri</button>
                <p className="fw-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, suscipit.</p>
                <p className="date">
                  <span className="fw-semibold">Team IT Yabipa</span> - 30 Juli 2023
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex ">
              <img src={Hero6} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">Santri</button>
                <p className="fw-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, suscipit.</p>
                <p className="date">
                  <span className="fw-semibold">Team IT Yabipa</span> - 30 Juli 2023
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="tentang-kami">
        <Container>
          <Row>
            <Col>
              <h1 className="section-title mb-3">Tentang Kami</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kemajuan sains dan teknologi di zaman ini menimbulkan konsekwensi yang berdampak negatif, yaitu berupa kemerosotan nilai-nilai moral. Konsep-konsep kebebasan dan pengagungan akal materialisme (intelegent quotiont) telah
                menjebak manusia itu sendiri pada kebuntuan dan kekosongan akan nilai, pola fikir menjadi liar dan nilai-nilai budaya adiluhung semakin merosot.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kini mulai disadari, konsep pendidikan yang digunakan ternyata salah arah dan para pendidik mulai menggali konsep-konsep pendidikan baru dengan penekanan pada emosional, lalu spriritual dan entah apalagi. Hal ini terjadi
                karena tidak adanya visi dan misi pendidikan yang membawa manusia ke arah kaidah-kaidah yang mutlaq/hakiki, dan terealisasikan dalam proses pembelajaran di lingkungannya, khususnya lingkungan akademiknya.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Sebagai upaya partisipatif dalam rangka menghadapi keterpurukan pendidikan, maka Yayasan Bina Insan Paripurna sedang membangun Pondok Pesantren Qur-an Yabipa yang terintegrasi dengan SMP IT (Islam Terpadu) di Bandung.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/profil/tentang")}>
                Detail Tentang Kami <i className="fa-solid fa-chevron-right"></i>{" "}
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="galeri-kegiatan">
        <Container fluid>
          <Row>
            <Col className="text-center galeri-title">
              <h1 className="section-title m-0">Galeri Kegiatan</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">KBM</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-kbm")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Ekskul</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-ekskul")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Lifeskill</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-lifeskill")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Event</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-event")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Graduation</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-graduation")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Fieldtrip</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-fieldtrip")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Munaqosyah</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img src={KBM1} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM2} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
              <Col>
                <img src={KBM3} alt="unsplash.com" className="w-100" style={{ height: "250px" }} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-success btn-lg rounded-pill fs-5 px-4" onClick={() => navigate("/gallery/gallery-munaqosyah")}>
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
