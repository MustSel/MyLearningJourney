import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext()

const AuthProvider = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null)

    const login = (info) => {
        setUser(info)
        navigate("/dashboard")
    }

    const logout = () => setUser(null)

    useEffect(() => {
      sessionStorage.setItem("user", JSON.stringify(user))
      
    }, [user])
    
    
  return (
    <AuthContext.Provider value={{user, login,logout}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider