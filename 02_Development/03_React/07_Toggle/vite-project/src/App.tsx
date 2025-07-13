import { useState } from "react";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const showLoginPage = () => {
    setIsLogin(true);
  };

  const showSignUp = () => {
    setIsLogin(false);
  };

  return (
    <>
      <div>
        <div className="flex justify-center m-20 gap-10">
          <button
            onClick={showLoginPage}
            className="border-2 border-black px-5 py-2 rounded text-white bg-pink-600 text-bold font-medium"
          >
            Sign Up
          </button>
          <button
            onClick={showSignUp}
            className="border-2 border-black px-5 py-2 rounded text-white bg-blue-600 text-bold font-medium"
          >
            Login
          </button>
        </div>
        <div className="flex ">{isLogin ? <LoginPage /> : <SignupPage />}</div>
      </div>
    </>
  );
}

export default App;
