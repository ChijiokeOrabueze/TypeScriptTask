const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "NGN",
    style: "decimal",
    currencyDisplay: "symbol"
})


export const formatCurrency = (number: number) => {
    return CURRENCY_FORMATTER.format(number);

}