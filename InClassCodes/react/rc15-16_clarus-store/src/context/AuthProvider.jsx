import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext()

const AuthProvider = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = useState()

    const login = (info) => {
        setUser(info)
        navigate("/home")
    }
    
  return (
    <AuthContext.Provider value={{user, login}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider