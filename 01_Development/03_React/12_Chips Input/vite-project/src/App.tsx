import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [chips, setChips] = useState<string[]>([]);

  const addChip = () => {
    if (text.trim() !== "") {
      setChips([...chips, text.trim()]);
      setText("");
    }
  };

  const removeChip = (index: number) => {
    setChips(chips.filter((_, idx) => idx !== index));
  };

  return ( // ✅ You missed this
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Chips Input</h1>

        <div className="flex gap-2 mb-6">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Enter the text"
            value={text}
            onChange={e => setText(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Button */}
          <button
            onClick={addChip}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Create
          </button>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip, idx) => (
            <div
              key={idx}
              className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium shadow"
            >
              {chip}
              <button
                onClick={() => removeChip(idx)}
                className="ml-2 text-red-500 hover:text-red-700 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
