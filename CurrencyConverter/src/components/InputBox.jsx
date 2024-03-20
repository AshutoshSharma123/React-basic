import React, { useId } from "react"; // Import React from "react" since JSX is used

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,

  className = "", // Added missing comma after label prop
}) {
  const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> {/* Added ${className} to include custom className */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black mb-2 inline-block"> {/* Removed /40 after text-black */}
          {label} {/* Used curly braces to render the dynamic label */}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p> {/* Removed /40 after text-black */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}


        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>usd</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
