
import { useState } from 'react';
import { useCurrencyInfo, InputBox } from './index'
import './App.css'



function App() {
  // currencyInfo('pkr');
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("inr");
  let [to, setTo] = useState("USD");

  let [converted, setConverted] = useState(0);

  let currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  let convert = () => {
    setConverted(amount * currencyInfo[to]);
  }


  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}>
        <InputBox
          label="from"
          selectedCurrency={from}
          currencyOptions={options}
          amount={amount}
          onAmountChange={(amount) => { setAmount(amount) }}
          onCurrencyChange={(currency) => { setFrom(currency) }}
        ></InputBox>

        <InputBox
          label="To"
          selectedCurrency={to}
          currencyOptions={options}
          amount={converted}
          onAmountChange={(amount) => { setAmount(amount) }}
          onCurrencyChange={(currency) => { setTo(currency) }}
        ></InputBox>
        <br />
        <button type='submit' className='bg-slate-600 p-1'><p className='text-zinc-300'>Convert {from} to {to}</p></button>
      </form>
    </>
  )
}

export default App
