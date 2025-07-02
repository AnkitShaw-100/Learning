import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";
import ProfilePage from "./components/Profile";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import ReportPage from "./components/ReportPage";
import LostItemPage from "./components/LostPage";
import FoundStatsPage from "./components/FoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/reportpage" element={<ReportPage />} />
          <Route path="/lostitemform" element={<LostItemPage />} />
          <Route path="/Founditempage" element={<FoundStatsPage />} />
        </Routes>
      </Router>
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
