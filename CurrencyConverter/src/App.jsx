// Import necessary modules
import React, { useState, useEffect } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

// Define the main App component
function App() {
  // Define state variables
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency information based on 'from' currency
  const currencyInfo = useCurrencyInfo(from);

  // Function to handle currency swap
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  // Function to handle conversion
  const convert = () => {
    const conversionRate = currencyInfo[to];
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={convert}>
            <div className="w-full mb-1">
              <InputBox label="From" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
