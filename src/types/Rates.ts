
export interface Rates {
    time: Time,
    disclaimer: string,
    chartName: string,
    bpi: Bpi
}

interface Time {
    updated: string,
    updatedISO: string,
    updateduk: string,
}

export interface CurrencyDetails {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: number
}

interface Bpi {
    USD: CurrencyDetails,
    GBP: CurrencyDetails,
    EUR: CurrencyDetails,
    CNY: CurrencyDetails
}
