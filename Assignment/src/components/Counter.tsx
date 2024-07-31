import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="bg-gray-700 p-5 mt-9 rounded-md mx-96">
        <p className="text-lg font-semibold text-white">count is {count}</p>
        <div className="space-x-4 mt-6">
          <button
            onClick={increment}
            className="px-2 py-1 bg-black text-white rounded hover:bg-red-600"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-black py-1 px-2 text-white rounded-lg hover:bg-green-700"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
