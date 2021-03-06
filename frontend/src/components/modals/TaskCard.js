import React from 'react'
import TaskModal from './TaskModal'

const TaskCard = ({
  show,
  onHide,
  task,
  setLoading
}) => (
  <TaskModal
    show={show}
    setLoading={setLoading}
    onHide={onHide}
    task={task}
  />
)

export default TaskCard
