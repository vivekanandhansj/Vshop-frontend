import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
const App = () => {
  return(    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/productList" element={<ProductList/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
     
    
    </Routes>
  </BrowserRouter>)
};

export default App;