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
      <div className="berita-terbaru w-100">
        <Container className="overflow-hidden px-3 mx-auto">
          <Row className="berita-utama row-cols-md-2 row-cols-1 flex-md-nowrap flex-wrap gap-md-1 gap-4 mb-md-1 mb-4">
            <Col className="position-relative overflow-hidden p-0">
              <img src={Hero1} alt="berita-utama-1" width="100%" />
              <div className="bg"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2">Siswa</button>
                <h4 className="text-white fw-bold">
                  Hari Senin adalah hari yang sama dengan hari Senin lalu,
                  kecuali satu
                </h4>
                <p className="text-white fw-bold">
                  yakni semangat baru untuk mengawalinya. Apel pengibaran
                  bendera Pertama dengan suasana dan wajah sekolah yang baru
                </p>

                <p className="text-white">
                  <span className="fw-semibold">OSIS SMANSA</span> - 20 Februari
                  2024
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0">
              <img src={Hero2} alt="berita-utama-2" width="100%" />
              <div className="bg"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2">Guru</button>
                <h4 className="text-white fw-bold">
                  SMAN 1 SEMBALUN melaksanakan kegiatan P.5
                </h4>
                <p className="text-white">
                  <span className="fw-semibold">Team Smansa</span> - 17 Februari
                  2024
                </p>
              </div>
            </Col>
          </Row>
          <Row className="berita-lainnya row-cols-md-4 row-cols-1 flex-md-nowrap flex-wrap gap-1">
            <Col className="position-relative overflow-hidden p-0 d-flex">
              <img src={Hero3} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">
                  Kepala Sekolah
                </button>
                <p className="fw-semibold">
                  Study Tiru di SMAN 1 WRINGINANOM GRESIK KAB. GRESIK JATIM
                  sudah selesai dilaksanakan.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team Smansa</span> - 23 Februari
                  2024
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex">
              <img src={Hero4} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">
                  Kepala Sekolah
                </button>
                <p className="fw-semibold">
                  STUDI TIRU di SMAN TAWANGMANGU Kec. Tawangmangu Kab.
                  Karanganyar Jawa Tengah.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team Smansa</span> - 21 Februari
                  2024.
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex ">
              <img src={Hero5} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">
                  Siswa
                </button>
                <p className="fw-semibold">
                  SMAN 1 Sembalun memang indah jika sudah mulai dibersihkan dan
                  dikelola. Disinilah program Kewirausahaan dan kegiatan P5
                  dilaksanakan.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team Smansa</span> - 15 Februari
                  2024
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex ">
              <img src={Hero6} alt="" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-primary btn-sm mb-2 d-sm-block d-none">
                  Siswa
                </button>
                <p className="fw-semibold">
                  Mengikuti Kegiatan Indonesia Education & Carier Festival (IECA
                  FEST 2024) di Ballroom Hotel Vaganza Mataram.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team Smansa</span> - 20 Januari
                  2024
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
                SMA Negeri 1 Sembalun adalah sebuah sekolah menengah atas negeri
                yang terletak di Desa Sembalun, Kecamatan Sembalun, Kabupaten
                Lombok Timur, Nusa Tenggara Barat, Indonesia. Sekolah ini
                didirikan pada tahun 2004 dan memiliki luas tanah 12.000 meter
                persegi.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                SMAN 1 Sembalun adalah salah satu sekolah menengah atas terbaik
                di Lombok Timur. Sekolah ini memiliki banyak keunggulan, seperti
                guru-guru yang berkualitas, fasilitas belajar yang lengkap,
                banyak prestasi, dan lingkungan belajar yang kondusif. Bagi
                siswa-siswi yang ingin mendapatkan pendidikan yang berkualitas
                dan berprestasi, SMAN 1 Sembalun adalah pilihan yang tepat.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <button
                className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                onClick={() => navigate("/profil/tentang")}
              >
                Detail Tentang Kami{" "}
                <i className="fa-solid fa-chevron-right"></i>{" "}
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
                <h1 className="section-title mb-4">Osis Smansa Sembalun</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-kbm")}
                >
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
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-ekskul")}
                >
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
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-lifeskill")}
                >
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
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-event")}
                >
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
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-graduation")}
                >
                  Lihat Semua <i className="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Studi Tour</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-fieldtrip")}
                >
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
