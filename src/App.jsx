import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";



function App() {
  return (

    <>
      <Header />
      <Routes>
            <Route path="/" element={<Products />}>Products</Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        
      </Routes>




    </>
  )
}

export default App;