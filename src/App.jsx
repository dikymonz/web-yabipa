import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PpdbPage from "./pages/PpdbPage";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/ppdb" Component={PpdbPage} />
        </Routes>
      </Router>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
