import React from "react"
import Styles from "../styles/listmap.module.scss"
import Loader from "react-loader-spinner"
import { Link } from "react-router-dom"
import { ReactComponent as Minus } from "../images/minus.svg"
export const Loading = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  )
}

export const sortCoins = () => {}

function ListMap({ coins, isLoading, deleteCoin }) {
  //console.log(isLoading)
  return (
    <div className={Styles.main}>
      <div className={Styles.topFlex}>
        <div>
          <p>Name:</p>
        </div>
        <div>
          <p>Price:</p>
        </div>
        <div>
          <p>24H:</p>
        </div>
      </div>
      {isLoading ? (
        <Loader
          className={Styles.loader}
          type="Grid"
          color="#00BFFF"
          height="200"
          width="200"
          timeout={3000} //3 secs
        />
      ) : (
        <>
          {coins ? (
            <>
              {" "}
              {coins.map((coin) => {
                let shortenNumber = coin.price_change_percentage_24h
                shortenNumber = shortenNumber.toFixed(2)

                let colors = ""
                if (coin.price_change_percentage_24h > 0) {
                  colors = { color: "green" }
                } else {
                  colors = { color: "red" }
                }
                return (
                  <div className={Styles.item} key={coin.id}>
                    <Link to="/stats">
                      <div className={Styles.flex}>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            deleteCoin(coin.id)
                          }}
                          className={Styles.delete}
                        >
                          <Minus className={Styles.deleteIcon} />
                        </button>
                        <h4>{coin.name}</h4>{" "}
                        <img src={coin.image} alt={coin.name} />
                      </div>
                      <div className={Styles.flex}>${coin.current_price}</div>
                      <div className={Styles.flex}>
                        <span style={colors}> {shortenNumber}%</span>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </>
          ) : (
            <p>please wait</p>
          )}
        </>
      )}
    </div>
  )
}

export default ListMap
