import { useState } from 'react'
import { accordionData } from './components/Accordion';
import './App.css'

function App() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(accordionData.length).fill(false));

  const toggleCard = (idx: number) => {
    setOpenIndexes(prev =>
      prev.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`transition-shadow duration-300 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200`}
        >
          <button
            onClick={() => toggleCard(index)}
            className={`flex items-center justify-between w-full px-6 py-4 text-lg font-semibold text-blue-700 focus:outline-none transition-colors duration-200 ${
              openIndexes[index] ? 'bg-blue-50' : ''
            }`}
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndexes[index] ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndexes[index] && (
            <div className="px-6 pb-4 text-gray-700 text-base border-t border-gray-100 animate-fadeIn">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App
