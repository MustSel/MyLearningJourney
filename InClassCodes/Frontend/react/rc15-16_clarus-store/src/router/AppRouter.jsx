import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRouter />}>
        <Route path="" element={<Home />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/products/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
