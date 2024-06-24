import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import People from "./pages/People"
import Paths from "./pages/Paths"
import PersonDetail from "./pages/PersonDetail"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FS from "./pages/FS"
import AWS from "./pages/AWS"
import Azure from "./pages/Azure"
import Google from "./pages/Google"
import Login from "./pages/Login"
import PrivateRouter from "./pages/PrivateRouter"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* People ve PersonDetail sayfalarının ikisi de Private Router'ın arkasında */}
        {/* <Route path="/people" element={<PrivateRouter />}>
          <Route path="" element={<People />} />
          <Route path=":id" element={<PersonDetail />} />
        </Route> */}

        {/* People sayfası public olsun ancak PersonDetail sayfası protected olsun  */}
        <Route path="/people" element={<People />} />
        
        <Route path="/people/:id" element={<PrivateRouter />}>
          <Route path="" element={<PersonDetail />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        {/* Path route'nun içersinde başka alt route'lar olabilir */}
        <Route path="/paths" element={<Paths />}>
          <Route path="" element={<FS />} />
          
          <Route path="aws" element={<AWS />}>
            <Route path="azure" element={<Azure />} />
            <Route path="google" element={<Google />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
