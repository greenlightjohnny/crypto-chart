import getSymbol from "currency-symbol-map"

export const currencySymbol = (item, currency) => {
  if (
    item === "price_change_24h" ||
    item == "ath" ||
    item === "atl" ||
    item === "current_price" ||
    item === "high_24h" ||
    item === "low_24h"
  ) {
    return getSymbol(currency)
  } else {
    return null
  }
}
