import { Container, Row, Col } from "react-bootstrap";

const VisiMisiPage = () => {
  return (
    <div className="profil">
      <div className="visi-misi">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Visi & Misi</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Visi</h1>
              <p>
                Berdasarkan tantangan, peluang dan daya dukung yang ada, SMA
                Negeri 1 Sembalun mempunyai cita – cita yang menggambarkan
                profil sekolah yang diinginkan di masa dating yang mewujudkan
                dalam Visi sekolah.{" "}
                <strong>
                  {" "}
                  Membangun Generasi Cerdas, Terampil, Berbudaya yang berwawasan
                  Lingkungan berlandaskan Iman dan Taqwa.
                </strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Misi</h1>
              <p>
                Untuk mewujudkan Visi Sekolah, SMA Negeri 1 Sembalun menentukan
                langkah – langkah strategis yang dinyatakan dalam Misi sebagai
                berikut:
              </p>
              <p>
                <ol>
                  <li>
                    Melaksanakan pembelajaran dan bimbingan secara efektif
                    sehingga setiap peserta didik berkembang secara optimal,
                    sesuai dengan potensi yang dimiliki.
                  </li>
                  <li>
                    Mendorong dan membantu setiap peserta didik untuk mengenali
                    potensi dirinya sehingga dapat berkembang secara optimal.
                  </li>
                  <li>
                    Menumbuhkan penghayatan terhadap ajaran agama yang dianut
                    dan budaya bangsa sehingga menjadi sumber kearifan dalam
                    bertindak.
                  </li>
                  <li>
                    Menerapkan manajemen partisipatif dengan melibatkan seluruh
                    warga sekolah dan kelompok kepentingan yang terkait dengan
                    sekolah.
                  </li>
                </ol>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VisiMisiPage;
