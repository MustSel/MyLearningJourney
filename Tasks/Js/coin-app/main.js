import "./scss/style.scss"
import { getCoins } from "./src/getCoins"
import Swal from 'sweetalert2'
//* Selectors

const form = document.querySelector("header form")

form.addEventListener("submit", (e)=> {
  e.preventDefault()

  getCoinData()

  
  e.target.reset()
  
  document.querySelector("form input").focus()
})

const getCoinData = ()=>{
  const input=document.querySelector("form input").value
 if(!input.trim()){
  
  Swal.fire({
    title: 'Error!',
    text: 'Input must be entered!',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

  const SwalRemove = ()=>{
    Swal.close()
    
  }
  setTimeout(SwalRemove,2000)

setTimeout(()=>{
  document.querySelector("form input").focus()
},2500)
 }else{
  //? get coin
  getCoins(input)
 }
}