import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EkskulPage from "./pages/gallery/EkskulPage";
import EventPage from "./pages/gallery/EventPage";
import FieldTripPage from "./pages/gallery/FieldTripPage";
import GraduationPage from "./pages/gallery/GraduationPage";
import KBMPage from "./pages/gallery/KBMPage";
import LifeSkillPage from "./pages/gallery/LifeSkillPage";
import MunaqosyahPage from "./pages/gallery/MunaqosyahPage";
import PpdbPage from "./pages/PpdbPage";
import KontakPage from "./pages/KontakPage";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />

          {/* Gallery Route */}
          <Route path="/gallery-kbm" Component={KBMPage} />
          <Route path="/gallery-ekskul" Component={EkskulPage} />
          <Route path="/gallery-lifeskill" Component={LifeSkillPage} />
          <Route path="/gallery-event" Component={EventPage} />
          <Route path="/gallery-graduation" Component={GraduationPage} />
          <Route path="/gallery-fieldtrip" Component={FieldTripPage} />
          <Route path="/gallery-munaqosyah" Component={MunaqosyahPage} />

          <Route path="/ppdb" Component={PpdbPage} />
          <Route path="/kontak" Component={KontakPage} />
        </Routes>
      </Router>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
