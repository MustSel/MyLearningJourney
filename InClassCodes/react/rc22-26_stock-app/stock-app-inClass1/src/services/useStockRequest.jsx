import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { fetchFail, fetchStart, getDataSuccess } from "../features/getSlice"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockRequest = () => {
  const { axiosToken, axiosPublic } = useAxios()
  const dispatch = useDispatch()

  const getDatas = async (endpoint) => {
     dispatch(fetchStart())
    try {
      const { data } = await axiosToken(`/${endpoint}`)
      
         dispatch(getDataSuccess({endpoint, data}))
    } catch (error) {
         dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteDatas = async (endpoint, id) => {
    dispatch(fetchStart())
    
    try {
      await axiosToken.delete(`/${endpoint}/${id}`)
      getDatas(endpoint)
      toastSuccessNotify("Silme İşlemi Başarılı");
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Silme işlemi başarısız oldu");
      console.log(error)
    }
  }

  const postDatas = async (endpoint, firmData) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${endpoint}`, firmData);
      getDatas(endpoint)
      toastSuccessNotify("Ekleme İşlemi Başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Ekleme işlemi başarısız oldu");
      console.log(error);
    }
  };

  const editDatas = async (endpoint, firmData, id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.patch(`/${endpoint}/${id}`, firmData);
      getDatas(endpoint)
      toastSuccessNotify("Düzenleme işlemi başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Düzenleme işlemi başarısız oldu");
      console.log(error);
    }
  };
  return { getDatas, deleteDatas, postDatas, editDatas }
}

export default useStockRequest
