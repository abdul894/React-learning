import React, {useId} from "react";

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
    const id = useId()
    return (
        <div className={'bg-white p-3 rounded-lg text-sm flex ${ClassName}'}>
            <div className="w-1-2">
                <label htmlFor={id} ClassName='text-black/40 mb-2 inline-block'></label>
                <input
                    id={id}
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <Select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectdCurrency}
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </Select>

            </div>
        </div>
    )
}

export default InputBox