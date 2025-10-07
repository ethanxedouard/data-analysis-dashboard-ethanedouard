import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded text-center">
      <p className="text-xl mb-2">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
      >
        +1
      </button>
      <button 
        onClick={() => setCount(count + 5)} 
        className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
      >
        +5
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        className="px-3 py-1 bg-red-500 text-white rounded mr-2"
      >
        -1
      </button>
      <button 
        onClick={() => setCount(count - 5)} 
        className="px-3 py-1 bg-red-500 text-white rounded mr-2"
      >
        -5
      </button>
      <button 
        onClick={() => setCount(0)} 
        className="px-3 py-1 bg-gray-500 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
