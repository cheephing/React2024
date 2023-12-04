// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState("EUR");
  const [convertTo, setConvertTo] = useState("USD");
  const [converted, setConverted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convertCurrency() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${convertFrom}&to=${convertTo}`
        );
        const data = await res.json();

        setConverted(data.rates[convertTo]);
        setIsLoading(false);
      }
      if (convertFrom === convertTo) {
        setConverted(amount);
        return;
      }
      convertCurrency();
    },
    [amount, convertFrom, convertTo]
  );
  return (
    <div>
      <input
        //disabled={isLoading}
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        disabled={isLoading}
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={convertTo}
        onChange={(e) => setConvertTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
      {!isLoading && (
        <div>
          {converted} {convertTo}
        </div>
      )}
    </div>
  );
}
