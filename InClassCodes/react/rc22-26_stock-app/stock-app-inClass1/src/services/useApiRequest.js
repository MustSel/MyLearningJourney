import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (userData) => {
    // const BASE_URL ="https://10148.fullstack.clarusway.com"
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Giriş Başarılı");
      navigate("/stock")
      console.log(data);
      
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Giriş Başarısız");
      console.log(error);
    }
  };
  const register = async (userData)=> {
    dispatch(fetchStart())
    try {
      const {data} = await axios.post( `${process.env.REACT_APP_BASE_URL}/users/`,
      userData)
      dispatch(registerSuccess(data))
      toastSuccessNotify("Kayıt Başarılı")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Kayıt Başarısız");
      console.log(error);
    }
  }
  const logout = async ()=> {
    dispatch(fetchStart())
    try {
      const res = await axios( `${process.env.REACT_APP_BASE_URL}/auth/logout`
      )
      console.log(res)
      dispatch(logoutSuccess())
      toastSuccessNotify("Çıkış Başarılı")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Çıkış Başarısız");
      console.log(error);
    }
  }
  return { login, register, logout };
};

export default useApiRequest;
