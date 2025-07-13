import React, { useState } from "react";

const HomePage = () => {
  const [user1Score, setUser1Score] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [totalScore, setTotalScore] = useState(500);
  const [user1, setUser1] = useState(true);
  const [displayScore, setDisplayScore] = useState(0);
  const [turnPlayed, setTurnPlayed] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const randomNumber = () => {
    let score = Math.floor(Math.random() * 100);
    return score;
  };

  const userChange = () => {
    let score = randomNumber();
    setDisplayScore(score);

    if (user1) {
      setUser1Score((prev) => {
        const newScore = prev + score;
        if (newScore >= totalScore) setGameOver(true);
        return newScore;
      });
    } else {
      setUser2Score((prev) => {
        const newScore = prev + score;
        if (newScore >= totalScore) setGameOver(true);
        return newScore;
      });
    }

    setUser1(!user1);
    setTurnPlayed(true);
  };

  const findWinner = () => {
    if (user1Score >= totalScore) {
      return "Ankit is Winner!!";
    }
    if (user2Score >= totalScore) {
      return "Shreya is Winnerr!!";
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-3 drop-shadow-lg">
          🎲 Try Your Luck
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          First to reach 500 wins!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
        <div
          className={`bg-blue-500 text-white rounded-2xl shadow-xl p-6 w-48 md:w-56 transform transition-all duration-300 hover:scale-105 ${
            user1 ? "ring-4 ring-blue-300 scale-105" : "opacity-90 scale-95"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Ankit
          </h2>
          <p className="text-5xl md:text-6xl font-extrabold text-center tracking-wider">
            {user1Score}
          </p>
        </div>

        <div
          className={`bg-green-500 text-white rounded-2xl shadow-xl p-6 w-48 md:w-56 transform transition-all duration-300 hover:scale-105 ${
            !user1 ? "ring-4 ring-green-300 scale-105" : "opacity-90 scale-95"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Shreya
          </h2>
          <p className="text-5xl md:text-6xl font-extrabold text-center tracking-wider">
            {user2Score}
          </p>
        </div>
      </div>

      <div className="mb-10 flex flex-col items-center gap-3">
        {turnPlayed && (
          <span className="inline-block px-6 py-3 rounded-full bg-white shadow-md text-lg font-semibold text-purple-700 border border-purple-200">
            {!user1 ? "Ankit" : "Shreya"} you got{" "}
            <span className="font-bold text-2xl text-pink-600">
              {displayScore}
            </span>
          </span>
        )}
        <span className="inline-block px-6 py-3 rounded-full bg-white shadow text-lg font-semibold text-purple-700 border border-purple-200">
          {user1 ? "Ankit's" : "Shreya's"} turn
        </span>
      </div>

      <p className="text-xl font-semibold text-green-700 mb-6">{findWinner()}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className={`bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-xl transition-all font-bold text-lg transform hover:-translate-y-1 active:translate-y-0 ${
            gameOver ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={userChange}
          disabled={gameOver}
        >
          Play Your Turn
        </button>

        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all font-semibold text-lg border border-gray-300"
          onClick={() => window.location.reload()}
        >
          🔄 Restart Game
        </button>
      </div>
    </div>
  );
};

export default HomePage;
