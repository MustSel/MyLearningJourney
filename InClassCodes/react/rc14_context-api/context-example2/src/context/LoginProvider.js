import {createContext,useState} from "react"

export const LoginContext = createContext()


const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false)
  return (
    <LoginContext.Provider value={{signed, setSigned}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider