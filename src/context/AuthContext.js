import React, { useState, useContext, useEffect } from 'react'

const Context = React.createContext()
const AuthContext = ({ children }) => {

  const [user, setuser] = useState()

  useEffect(() => {

  }, [])

  const signin = ({ email, password }) => {

  }


  return (
    <Context.Provider value={{ user }}>
      {children}
    </Context.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use useAuth outside auth provider')
  }
  return context
}

export default AuthContext
