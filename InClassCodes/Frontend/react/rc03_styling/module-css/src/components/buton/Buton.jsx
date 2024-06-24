import React from 'react'
// import "./Buton.css"
import ButonStyle from "./Buton.module.css"
const Buton = () => {
  return (
    <div className={ButonStyle.wrapper}>
        <button className={`${ButonStyle.btn} ${ButonStyle["btn-blue"]}`}>Info</button>
        <button className={`${ButonStyle.btn} ${ButonStyle["btn-red"]}`}>Back</button>
    </div>
  )
}

export default Buton