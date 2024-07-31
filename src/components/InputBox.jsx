import { useId } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency,
  selectDisable,
  amountDisable,
  currencyOptions = []
}) {
  const inputId = useId();

  return (
    <>
      <div className="bg-white p-3 rounded-lg text-sm flex text-black">
        <div className="w-1/2">
          <label htmlFor={inputId} className="font-semibold">{label}</label>
          <input
            id={inputId}
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
            placeholder="Amount"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black mb-2 w-full"> Currency</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={selectDisable}
          >
            {currencyOptions.map((val) => {
              return (
                <option key={val} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
