import { useState } from "react"

const MouseEvent = () => {
  const [visible, setVisible] = useState(false)

  // mouse koordinatları tutan state'ler
  const [coordX, setCoordX] = useState()
  const [coordY, setCoordY] = useState()
  const [coordXX, setCoordXX] = useState()
  const [coordYY, setCoordYY] = useState()
  
  //? doubleClick event
  const handleDoubleClick = (e) => {
    e.target.classList.toggle("bg-danger")
    
  }

  //? mouseMove event
  const handleMouseMove = (e) => {
    //? Mutlak koordinatlar
    console.log("X:", e)
    console.log("Y:", e.pageY)
    setCoordX(e.pageX)
    setCoordY(e.pageY)

    //? Göreceli koordinatlar
    console.log("RX:", e.nativeEvent.offsetX)
    console.log("RY:", e.nativeEvent.offsetY)

    setCoordXX(e.nativeEvent.offsetX)
    setCoordYY(e.nativeEvent.offsetY)
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        todo item 1
      </div>
      {/* Conditional Rendering */}
      <p>{visible && <span>For detail ....</span>}</p>
      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2
      </div>
      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        todo item 3
      </div>
      X: {coordX} and Y:{coordY}
      <div>
      X: {coordXX} and Y: {coordYY}
    </div>
    </div>
    
  )
}

export default MouseEvent
