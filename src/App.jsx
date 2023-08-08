import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import TentangPage from "./pages/profil/TentangPage";
import SejarahPage from "./pages/profil/SejarahPage";
import VisiMisiPage from "./pages/profil/VisiMisiPage";
import ProfilSantri from "./pages/profil/ProfilSantriPage";
import ProfilGuru from "./pages/profil/ProfilGuruPage";
import ProfilSekolah from "./pages/profil/ProfilSekolahPage";

import EkskulPage from "./pages/gallery/EkskulPage";
import EventPage from "./pages/gallery/EventPage";
import FieldTripPage from "./pages/gallery/FieldTripPage";
import GraduationPage from "./pages/gallery/GraduationPage";
import KBMPage from "./pages/gallery/KBMPage";
import LifeSkillPage from "./pages/gallery/LifeSkillPage";
import MunaqosyahPage from "./pages/gallery/MunaqosyahPage";

import YayasanPage from "./pages/kurikulum/YayasanPage";
import PesantrenPage from "./pages/kurikulum/PesantrenPage";
import SMPPage from "./pages/kurikulum/SMPPage";
import KomitePage from "./pages/kurikulum/KomitePage";
import RelawanPage from "./pages/kurikulum/RelawanPage";

import RincianBiayaPage from "./pages/ppdb/RincianBiayaPage";
import KontakPage from "./pages/KontakPage";

import NavbarComponent from "./components/NavbarComponent";
import ScrollToTop from "./components/ScrollToTop";
import FooterComponent from "./components/FooterComponent";

import { PulseLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PulseLoader color={"#1B61B6"} loading={loading} size={15} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <>
          <NavbarComponent />

          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" Component={HomePage} />

              {/* Profil Route */}
              <Route path="/profil/tentang" Component={TentangPage} />
              <Route path="/profil/sejarah" Component={SejarahPage} />
              <Route path="/profil/visi-misi" Component={VisiMisiPage} />
              <Route path="/profil/profil-santri" Component={ProfilSantri} />
              <Route path="/profil/profil-guru" Component={ProfilGuru} />
              <Route path="/profil/profil-sekolah" Component={ProfilSekolah} />

              {/* Gallery Route */}
              <Route path="/gallery/gallery-kbm" Component={KBMPage} />
              <Route path="/gallery/gallery-ekskul" Component={EkskulPage} />
              <Route path="/gallery/gallery-lifeskill" Component={LifeSkillPage} />
              <Route path="/gallery/gallery-event" Component={EventPage} />
              <Route path="/gallery/gallery-graduation" Component={GraduationPage} />
              <Route path="/gallery/gallery-fieldtrip" Component={FieldTripPage} />
              <Route path="/gallery/gallery-munaqosyah" Component={MunaqosyahPage} />

              {/* Kurikulum Route */}
              <Route path="/kurikulum/yayasan" Component={YayasanPage} />
              <Route path="/kurikulum/pesantren" Component={PesantrenPage} />
              <Route path="/kurikulum/smp" Component={SMPPage} />
              <Route path="/kurikulum/komite" Component={KomitePage} />
              <Route path="/kurikulum/relawan-yabipa" Component={RelawanPage} />

              <Route path="/ppdb/rincian-biaya" Component={RincianBiayaPage} />
              <Route path="/kontak" Component={KontakPage} />
            </Routes>
          </Router>

          <FooterComponent />
        </>
      )}
    </div>
  );
}

export default App;
