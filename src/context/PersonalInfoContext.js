import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext()

const PersonalInfoContext = ({ children }) => {
  const [peopleInfoList, setPeopleInfoList] = useState(JSON.parse(localStorage.getItem('peopleInfoList')) || [])

  const saveData = (data) => {
    setPeopleInfoList(data)
    localStorage.setItem('peopleInfoList', JSON.stringify(data))
  }

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
    saveData(temp)
  }

  const editPersonalInfo = (id) => {

  }

  const deletePersonalInfo = (id) => {
    const temps = [...peopleInfoList]
    const filterPeopleInfoList = temps.filter(tem => tem._id !== id)
    saveData(filterPeopleInfoList)
  }

  const deleteAllPeoPlelInfo = (values) => {
    const listId = values.map(element => element._id)
    const temps = [...peopleInfoList]
    const filterPeopleInfoList = temps.filter(temp => !listId.includes(temp._id))
    saveData(filterPeopleInfoList)

  }


  return (
    <Context.Provider value={{
      peopleInfoList,
      getPeoplelInfo,
      getPersonalInfo,
      createPersonalInfo,
      editPersonalInfo,
      deletePersonalInfo,
      deleteAllPeoPlelInfo
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



