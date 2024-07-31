import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";

function App() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(fromCurrency);

  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  }


  return (
    <>
      <div className="bg-slate-800 text-white w-full h-screen flex flex-wrap justify-center items-center">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <h1 className="text-2xl py-3 text-center font-bold">Currency Convertor</h1>
              <div className="w-full mb-1">
                <InputBox
                label="From"
                  amount={amount}
                  currencyOptions={options}
                  selectedCurrency={fromCurrency}
                  onCurrencyChange={(currency)=> setAmount(amount)}
                  onAmountChange={(amount)=> setAmount(amount)}
                  amountDisable={false}
                 />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  amountDisable
                  onCurrencyChange={(currency)=>setToCurrency(currency)}
                  selectedCurrency={toCurrency}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:scale-95 duration-300 ease-in-out"
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
