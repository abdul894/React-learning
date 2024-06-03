import React from "react";

function InputBox({
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectdCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false,
        ClassName = "",
    }
) {
    return (
        <div className={'bg-white p-3 rounded-lg text-sm flex ${ClassName}'}>
            <div className="w-1-2">
                <label htmlFor="" ClassName='text-black/40 mb-2 inline-block'></label>
                <input 
                type="number" 
                className='outline-none w-full bg-transparent py-1.5'
                placeholder="Amount"
                disabled={amountDisabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            {/* <div className="w-1/2 flex flex-wrap justify-end text-right">
                

            </div> */}

        </div>
    )
}

export default InputBox