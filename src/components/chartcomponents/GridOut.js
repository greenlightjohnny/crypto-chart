import React, { useState } from "react"
import Styles from "../../styles/chartinterface.module.scss"
import { DndProvider } from "react-dnd-multi-backend"
import { initialData } from "./DragData"
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch" // or any other pipeline

import MultiBackend from "react-dnd-multi-backend"
import Grid from "./Griddnd"
import DraggableGridItem from "./DragglableItem"
import styled from "styled-components"

const GridOut = () => {
  const [list, setList] = useState(initialData)

  const onDrop = (firstItemId, secondItemId) => {
    let newList = [...list]
    let firstItem = newList.find((i) => i.id === firstItemId)
    let secondItem = newList.find((i) => i.id === secondItemId)
    const firstIndex = firstItem.index
    firstItem = secondItem.index
    secondItem.index = firstIndex
    setList(newList)
  }
  return (
    <DndProvider options={HTML5toTouch}>
      <AppWrapper>
        <Grid>
          {list.sort(sortItems).map((item) => {
            return (
              <DraggableGridItem key={item.id} item={item} onDrop={onDrop}>
                <h4>{item.content.title}</h4>
                {item.content.fields.map((i) => {
                  return (
                    <div className={Styles.blurb}>
                      <p>{i.title}</p>
                      <p className={Styles.blurbHigh}>{i.value}</p>
                    </div>
                  )
                })}
              </DraggableGridItem>
            )
          })}
        </Grid>
      </AppWrapper>
    </DndProvider>
  )
}

export default GridOut

const sortItems = (a, b) => a.index - b.index

const AppWrapper = styled.div`
  padding: 10px 200px;
  @media (max-width: 800px) {
    padding: 10px;
  }
`
