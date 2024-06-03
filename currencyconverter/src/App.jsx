import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const useCurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap 
    justify-center items-center bg-gray-800 bg-no-repeat'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectdCurrency={from}
              />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default App
