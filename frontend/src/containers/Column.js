import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import TaskCardCover from '../components/TaskCardCover'

const ColumnContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: ${props => props.width || '24'}%;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

const CardContainer = styled.div`
  margin: 0px 2px 10px 2px;
`

const Title = styled.h3`
  padding: 8px;
  color: ${props => props.color || 'black'}
`

const Column = ({
  title,
  color,
  tasks,
  width
}) => (
  <ColumnContainer
    width={width}
  >
    <Title color={color}>{title}</Title>
    <Droppable droppableId={title}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, i) => (
            <TaskCardCover
              key={i}
              task={task}
              i={i}
            />
          ))}
          {provided.placeholder} 
        </CardContainer>
      )}
    </Droppable>
  </ColumnContainer>
)

export default Column