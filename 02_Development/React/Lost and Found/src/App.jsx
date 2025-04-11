import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/Profile";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import ReportPage from "./components/ReportPage";
import LoginPage from "./components/Login";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} / >
        <Route path="/profile" element={<ProfilePage />} / >
        <Route path="/aboutUs" element={<AboutUs />} / >
        <Route path="/reportpage" element ={<ReportPage />} / >
      </Routes>
    </Router> 
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
