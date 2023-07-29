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

import KalenderPage from "./pages/kurikulum/KalenderPendidikan";
import PesantrenPage from "./pages/kurikulum/PesantrenPage";
import SMPPage from "./pages/kurikulum/SMPPage";

import PpdbPage from "./pages/PpdbPage";
import KontakPage from "./pages/KontakPage";

import NavbarComponent from "./components/NavbarComponent";
import ScrollToTop from "./components/ScrollToTop";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
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
          <Route path="/kurikulum/kalender-pendidikan" Component={KalenderPage} />
          <Route path="/kurikulum/pesantren" Component={PesantrenPage} />
          <Route path="/kurikulum/smp" Component={SMPPage} />

          <Route path="/ppdb" Component={PpdbPage} />
          <Route path="/kontak" Component={KontakPage} />
        </Routes>
      </Router>

      <FooterComponent />
    </div>
  );
}

export default App;
