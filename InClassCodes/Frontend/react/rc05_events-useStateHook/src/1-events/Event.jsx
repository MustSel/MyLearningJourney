const Event = () => {

  let message = "Güle Güle"

  const handleTikla = (e) => {
    console.log(e)
    console.log(e.target.id)
    console.log(e.target.name)
    alert("Tıklandı")
  }

function handleCikis(msg) {
  alert(msg)
}

const handleMessageDegistir = function () {
  message= "G G 16"
  console.log(message)
}

  return (
    <div>
      <h1>Events</h1>

      <button onClick={handleTikla} id="btn" name="my-button">Tikla</button>

      <button onClick={() => alert("silindi")}>Sil</button>
      <button onClick={() => handleCikis(message)}>cikis</button>
      <button onClick={handleMessageDegistir}>degistir</button>

      <p>{message}</p>
    </div>
  )
}

export default Event
