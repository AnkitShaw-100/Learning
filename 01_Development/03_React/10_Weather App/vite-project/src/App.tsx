import { useState } from "react";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState<any>({});
  const [load, setLoad] = useState("");

  const fetchData = async () => {
    console.log("calling");
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      console.log("key", API_KEY);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      console.log(response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      const finalData = {
        wind: result.wind,
        tempreture: result.main.temp,
        humidity: result.main.humidity,
      };
      console.log("final data", finalData);
      setData(finalData);
      setLoad("");
    } catch (err: any) {
      setLoad("Loadinggg..... Data......");
    }
  };

  return (
    <>
      {/* Main container */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        {/* Card container */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-md space-y-6">
          {/* Search section */}
          <div className="w-full space-y-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Weather Finder
            </h1>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter city name..."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
              />
              <button
                onClick={fetchData}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg active:scale-95 transform"
              >
                Search
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-100"></div>

          {/* Results section */}
          <div className="w-full space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Weather Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600 font-medium">Temperature:</span>
                <span className="text-gray-800 font-semibold">
                  {data.tempreture}°C
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600 font-medium">Humidity:</span>
                <span className="text-gray-800 font-semibold">
                  {data.humidity}%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600 font-medium">Wind Speed:</span>
                <span className="text-gray-800 font-semibold">
                  {data.wind?.speed} km/h
                </span>
              </div>
              {load && <p className="text-red-600">{load}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
