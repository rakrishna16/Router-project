import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => {
  const [cartProducts, setcartProducts] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalP, settotalP] = useState([]);
  const [totalpD, settotalpD] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar cartCount={cartCount} setcartCount={setcartCount} />
        </div>
        <Routes>
          <Route path='/' element={
            <Product cartCount={cartCount} setcartCount={setcartCount}
              cartProducts={cartProducts} setcartProducts={setcartProducts} totalP={totalP} settotalP={settotalP} />
          } />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/Cart' element={
          <Cart cartCount={cartCount} totalPrice={totalPrice} totalP={totalP} 
          settotalP={settotalP} settotalPrice={settotalPrice} 
          setcartCount={setcartCount} cartProducts={cartProducts} 
          setcartProducts={setcartProducts} totalpD={totalpD}
           settotalpD={settotalpD} />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;