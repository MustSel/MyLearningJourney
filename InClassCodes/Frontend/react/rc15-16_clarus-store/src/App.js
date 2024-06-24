import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AppRouter from "./router/AppRouter";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
