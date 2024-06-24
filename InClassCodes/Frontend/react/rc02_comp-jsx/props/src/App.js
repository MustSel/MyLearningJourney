import Cat from "./components/Cat";


function App() {
  return (
    <div className="App">
      <Cat 
      name= "Miyyav"
      img= "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
      color="Gray"
      isBlueEyed
      />
      <Cat 
      name= "Yawn"
      img= "https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_1280.jpg"
      color="Blue"
      />
      <Cat 
      name= "Miyyav"
      img= "https://cdn.pixabay.com/photo/2018/06/28/14/12/cat-3504008_1280.jpg"
      isBlueEyed
      />
    </div>
  );
}

export default App;
