import React, { useEffect, useState, useContext } from "react"

import geckoapi from "../apis/gecko"
import { CurrencyContext } from "../context/currencyContext"
import { useTable } from "react-table"

const Table = () => {
  const { coinList, deleteCoin } = useContext(CurrencyContext)
  const [isLoading, setIsLoading] = useState(false)
  const [coins, setCoins] = useState()

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const reply = await geckoapi.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: coinList.join(","),
          },
        })

        console.log(reply.data)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setCoins(reply.data)
      } catch (err) {
        console.log(err)
        //setIsLoading(false)
      }
    }
    if (coinList.length > 0) {
      fetchData()
    } else {
      setCoins([])
    }
  }, [coinList])

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "current_price",
    },
  ]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    coins,
  })

  return (
    <>
      {isLoading ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <p>Ummmm</p>
      )}
    </>
  )
}

export default Table
