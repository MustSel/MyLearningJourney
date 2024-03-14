import displayCoins from "./displayCoins";
import axios from "axios";
import Swal from 'sweetalert2'
//?named export


export const getCoins = async (keyword) => {
  
  
  const URL = `https://api.coinranking.com/v2/coins?search=${keyword}`;
  const options = {
    headers: {
      "x-access-token": import.meta.env.API_KEY,
      
    },
  };

  try{
    const res = await axios(URL, options);
    // const json = await res.json()
    

    if(!res.data.data.coins[0]){
        Swal.fire({
            title: 'Error!',
            text: 'Not Found',
            icon: 'error',
            confirmButtonText: 'Cool'
          })

          const SwalRemove = ()=>{
            Swal.close()
            
          }
          setTimeout(SwalRemove,1000)
        
    
    }else{
        displayCoins(res.data.data.coins[0])
        
    }


  } catch (error){
    console.error(error)
  }

  
};
