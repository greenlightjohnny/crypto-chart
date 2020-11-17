import React, { useRef } from "react"
import { useDragAndDrop } from "./DragAndDrop"
import styled from "styled-components"

const DraggableItem = (props) => {
  const { item, onDrop, children, ...p } = props
  const ref = useRef(null)
  const { isDragging } = useDragAndDrop(ref, {
    ...item,
    hover: createDragHoverCallback(ref, item, onDrop),
  })
  const opacity = isDragging ? 0 : 1

  return (
    <GridItemWrapper {...p} ref={ref} style={{ opacity }}>
      <div>{children}</div>
    </GridItemWrapper>
  )
}

const createDragHoverCallback = (ref, currentItem, onDrop) => {
  return (otherItem, monitor) => {
    const dragIndex = otherItem.index
    const hoverIndex = currentItem.index

    if (dragIndex === hoverIndex) {
      return
    }

    const hoverBoundingRect = ref.current.getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = clientOffset.y - hoverBoundingRect.top
    const hoverClientX = clientOffset.x - hoverBoundingRect.right

    if (
      dragIndex < hoverIndex &&
      hoverClientY < hoverMiddleY &&
      hoverClientX < hoverMiddleX
    ) {
      return
    }

    if (
      dragIndex > hoverIndex &&
      hoverClientY > hoverMiddleY &&
      hoverClientX > hoverMiddleX
    ) {
      return
    }

    onDrop(otherItem.id, currentItem.id)

    otherItem.index = currentItem.index
  }
}

const GridItemWrapper = styled.div`
  width: auto;
  min-width: 240px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  line-height: 1.2em;
  word-wrap: break-word;
  user-select: none;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 1px 3px 1px rgba(60, 64, 67, 0.149);
  }
`

export default DraggableItem
