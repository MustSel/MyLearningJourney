import { useState } from "react"

const KeyboardClipboard = () => {

const [inputData, setInputData] = useState("")

const handleChange = (e) => {
  setInputData(e.target.value)
}

const handleCopy = () => {
  navigator.clipboard.writeText(inputData)
}
  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>

      <input type="text" 
      className="form-control" 
      onChange={(e)=> setInputData(e.target.value.toLocaleUpperCase()) } 
      value={inputData} 
      onKeyDown={(e)=>{
        if(e.keyCode>47 & e.keyCode<58){
          alert("a nubmer pressed")
          e.preventDefault()
        }
      }}
      />

      <div className="mt-3">
        <p>{inputData.toLocaleLowerCase()}</p>
      </div>

      <div>
        <textarea
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
          onCopy={(e)=> {
            alert("kopyalama yassah")
            e.preventDefault()
          }}
          onCut={(e)=> alert("kestik")}
          onPaste={(e)=>{
            e.target.style.fontFamily = "tahoma"
            e.target.style.fontSize = "1.5rem"
            e.target.style.color = "blue"
          }}
        ></textarea>
      </div>
    </div>
  )
}

export default KeyboardClipboard
