import React from "react"
import { useTable } from "react-table"
//import "react-table/react-table.css"
import Styles from "../styles/boring.module.scss"
import { useHistory } from "react-router-dom"
const defaultPropGetter = () => ({})

const Yuck = ({
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
  data,
  columns,
}) => {
  //const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,

    headerGroups,
    rows,

    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps([
                  getColumnProps(column),
                  getHeaderProps(column),
                ])}
                // style={{
                //   borderBottom: "solid 3px red",
                //   background: "aliceblue",
                //   color: "black",
                //   fontWeight: "bold",
                // }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps([getRowProps(row)])}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps([getCellProps(cell)])}
                    // style={{
                    //   background:
                    // }}
                  >
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function Two({ coins }) {
  const history = useHistory()
  const columns = React.useMemo(
    () => [
      {
        Header: "Coin",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Price",
        accessor: "current_price",
      },
      {
        Header: "24H",
        accessor: "price_change_24h",
      },
      {
        Header: "24H High",
        accessor: "high_24h",
      },
      {
        Header: "24H Low",
        accessor: "low_24h",
      },
    ],
    []
  )

  const data = React.useMemo(() => coins, [])

  return (
    <Yuck
      columns={columns}
      data={data}
      getHeaderProps={(column) => ({
        onClick: () => alert("Header!"),
      })}
      getColumnProps={(column) => ({
        onClick: () => alert(column),
      })}
      getRowProps={(rowInfo) => ({
        onClick: (e) => history.push(`/coins/${rowInfo.original.id}`),
        // onClick: (e) => console.log(rowInfo.original.id),
      })}
      getCellProps={(cellInfo, columnInfo) => ({
        style: {
          color: `${
            cellInfo.value < 0 ? "rgb(211, 90, 90)" : "rgba(0, 0, 0, 0.7)"
          }`,
        },
      })}
    />
  )
}

export default Two
