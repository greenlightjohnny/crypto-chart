import React from "react"
import axios from "axios"

export default axios.create({
  mainUrl: "https://api.coingecko.com/api/v3",
})
