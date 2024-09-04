import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addValues = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const removeValues = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
      <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
        <div className="text-5xl font-extrabold text-gray-800 mb-4">Count:</div>
        <div className="text-6xl font-bold text-blue-600 bg-gradient-to-r from-blue-200 to-blue-500 text-transparent bg-clip-text">
          {count}
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button
          onClick={addValues}
          disabled={count === 20}
          className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
            count === 20
              ? 'bg-gray-400 cursor-not-allowed shadow-none'
              : 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/50'
          }`}
        >
          Increase
        </button>
        <button
          onClick={removeValues}
          disabled={count === 0}
          className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
            count === 0
              ? 'bg-gray-400 cursor-not-allowed shadow-none'
              : 'bg-red-500 hover:bg-red-600 shadow-red-500/50'
          }`}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
