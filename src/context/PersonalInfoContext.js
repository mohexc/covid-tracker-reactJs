import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext()

const PersonalInfoContext = ({ children }) => {
  const [peopleInfoList, setPeopleInfoList] = useState(JSON.parse(localStorage.getItem('peopleInfoList')) || [])

  const getPersonalInfo = (id) => {

  }

  const getPeoplelInfo = (name) => {

    const result = peopleInfoList.map(personal => {
      return {
        _id: personal._id,
        name: `${personal.titleName} ${personal.firstName} ${personal.lastName}`,
        gender: personal.gender,
        phone: `+${personal.prefixPhone}${personal.phone}`,
        nationlity: personal.nationlity
      }
    })
    return result
  }

  const createPersonalInfo = (data) => {
    data._id = uuidv4()
    const temp = [...peopleInfoList, data]
    setPeopleInfoList(temp)
    localStorage.setItem('peopleInfoList', JSON.stringify(temp))
  }

  const editPersonalInfo = (id) => {

  }

  const deletePersonalInfo = (id) => {

  }

  return (
    <Context.Provider value={{
      peopleInfoList,
      getPeoplelInfo,
      getPersonalInfo,
      createPersonalInfo,
      editPersonalInfo,
      deletePersonalInfo
    }}>
      {children}
    </Context.Provider>
  )
}

export const usePersonalInfoContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use usePersanalInfoContext outside PersonalInfoContext provider')
  }
  return context
}

export default PersonalInfoContext



