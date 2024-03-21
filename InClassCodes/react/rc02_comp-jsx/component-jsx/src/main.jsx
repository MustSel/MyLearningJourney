import "./Main.css"

const Main = () => {
  const hedaerStyle={
    color:"darkred",
    backgroundColor:"lightgray",
    fontSize: "1.2rem",
    fontWeight:"bolder"
  }


  return (
   <main>
    {/* JSX */}
    {/* inline css, key-value, camelCase */}
    <h2 style={{color:"red", backgroundColor:"gray"}}>MAIN SECTION</h2>
    <h3 style={hedaerStyle}>Diğer Başlık</h3>
    <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque deserunt sunt odio, earum itaque sit vero? Et, quos recusandae.</p>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum doloremque distinctio accusamus alias, deleniti tempore?</p>
    <div>
      <img className="img" src="https://cdn.pixabay.com/photo/2018/02/03/15/40/landscape-3127859_1280.jpg" alt="" />

      <img className="img" src="./img/027.jpg" alt="" />
    </div>
   </main>
  )
}

export default Main