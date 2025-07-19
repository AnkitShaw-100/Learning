// ✅ new Date()
// → To get the current date and time.

// ✅ toLocaleTimeString()
// → To convert the time to a human-readable format (HH:MM:SS AM/PM).

// ✅ useState()
// → To store and update the current time in React state.

// ✅ useEffect()
// → To start the interval that updates the time every second.

// ✅ setInterval()
// → To update the time continuously every second.

// ✅ clearInterval()
// → To stop the interval when the component unmounts (used in cleanup).

import { useEffect, useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("0");
  const [showTime, setShowTime] = useState(false);
  const [theme, setTheme] = useState("light");

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    if (showTime) {
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [showTime]);

  return (
    <div className={`min-h-screen w-full ${theme === "light" ? "bg-white" : "bg-gray-900"} transition-colors duration-200 p-5`}>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              theme === "light"
                ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
          
          <button
            onClick={() => setShowTime(!showTime)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              theme === "light"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {showTime ? "Hide Time" : "Show Time"}
          </button>
        </div>

        {showTime && (
          <h1 className={`text-3xl font-bold underline ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}>
            {currentTime}
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;