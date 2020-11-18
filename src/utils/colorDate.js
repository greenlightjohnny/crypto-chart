const colorDate = (info, price) => {
  if (info == "price_change_24") {
    if (price > 0) {
      return <span style={{ color: "red" }}>{price}</span>
    } else {
      return <span style={{ color: "green" }}>{price}</span>
    }
  } else {
    return { price }
  }
}
