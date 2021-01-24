import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../config/firebase'

const Context = React.createContext()

const AuthContext = ({ children }) => {

  // eslint-disable-next-line
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      const user = authUser ? setuser(authUser.user) : setuser(null)
      return user
    })
    unsubscribe()
  }, [])

  const signin = async (email, password) => {
    try {
      const authUser = await auth.signInWithEmailAndPassword(email, password)
      setuser(authUser.user)
      localStorage.setItem('user', JSON.stringify(authUser.user))
      debugger
    } catch (error) {
      const err = error.res
        ? error.response.data.message
        : error.message
      console.error(err)
      debugger
    }

  }

  const register = async (username, email, password) => {
    try {

      const authUser = await auth.createUserWithEmailAndPassword(email, password)
      const createDisplayname = await authUser.user.updateProfile({ displayName: username })
      console.log(createDisplayname)
      debugger
    } catch (error) {
      const err = error.res
        ? error.response.data.message
        : error.message
      console.error(err)
      debugger
    }

  }


  return (
    <Context.Provider value={{
      user,
      signin,
      register,
    }}>
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
