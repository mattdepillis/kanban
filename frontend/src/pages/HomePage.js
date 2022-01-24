import React, { useEffect, useState } from 'react'

import { AddButton, PropertiesButton } from '../components/Buttons'
import PageContent from '../containers/PageContent'
import BoardContainer from '../containers/BoardContainer'
import TaskModal from '../components/modals/TaskModal'
import FormQuestions from '../components/FormQuestions/FormQuestions'
import TaskCard from '../components/TaskCard'
import {
  MenuWrapper, ButtonWrapper, ToastWrapper, BoardContainerWrapper, PropertyToast
} from '../styles/HomePage'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [loading, setLoading] = useState(true)

  const [showTask, setShowTask] = useState(false)
  const [taskToDisplay, setTaskToDisplay] = useState({})

  const setModalDisplay = () => setShowModal(!showModal)
  const setToastDisplay = () => setShowToast(!showToast)

  const initialProperties = JSON.parse(sessionStorage.getItem('showProperties')) || ['Status', 'Tags']
  const [showProperties, setShowProperties] = useState(initialProperties)

  const allTaskProperties = Object.values(FormQuestions).map(q => {
    return { id: q.id, label: q.label }
  })

  useEffect(() => {
    sessionStorage.setItem('showProperties', JSON.stringify(showProperties))
  }, [showProperties])

  useEffect(() => {
    console.log('t', showTask)
  }, [showTask])

  return (
    <PageContent>
      <BoardContainerWrapper>
        <MenuWrapper>
          <ButtonWrapper>
            <AddButton
              onClick={setModalDisplay}
            />
            <PropertiesButton
              onClick={setToastDisplay}
            />
          </ButtonWrapper>
          <ToastWrapper>
            <PropertyToast
              show={showToast}
              onHide={setToastDisplay}
              properties={allTaskProperties}
              showProperties={showProperties}
              setShowProperties={setShowProperties}
            />
          </ToastWrapper>
        </MenuWrapper>
        <BoardContainer
          showProperties={showProperties}
          loading={loading}
          setLoading={setLoading}
          setShowTask={setShowTask}
          setTaskToDisplay={setTaskToDisplay}
        />
      </BoardContainerWrapper>
      <TaskModal
        show={showModal}
        loading={loading}
        setLoading={setLoading}
        onHide={setModalDisplay}
      />
      <TaskCard
        show={showTask}
        onHide={() => {
          setShowTask(false)
          setTaskToDisplay({})
        }}
        task={taskToDisplay}
      />
    </PageContent>
  )
}

export default HomePage
