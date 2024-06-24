import { Outlet, Navigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
const PrivateRouter = () => {
  const {signed, setSigned} = useContext(LoginContext)
  return signed ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
