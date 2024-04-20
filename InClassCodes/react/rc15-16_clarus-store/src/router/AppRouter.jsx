import Login from "../pages/Login";
import {Route, Routes} from "react-router-dom"
import Products from "../pages/Products";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    
    <Routes>
      <Route path="/" element={ <Login/>} />
      <Route path="/home" element={ <Home/>} />
      <Route path="/products" element={ <Products/>} />
      <Route path="/about" element={ <About/>} />
      <Route path="*" element={ <NotFound/>} />
    </Routes>
    
  )
}

export default AppRouter