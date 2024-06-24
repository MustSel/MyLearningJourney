import Header from "./components/Header";
import "../src/sass/app.scss"
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <>
      <Header />
      {data.map(({id, name, job, img, comment}) =>(
        <Card key={id} name= {name} job= {job} img={img} comment={comment}
        />
      ))}
    </>
  );
}

export default App;
