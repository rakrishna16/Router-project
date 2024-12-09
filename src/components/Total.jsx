import React, { useEffect, useRef, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";

const Total = ({ cartCount, setcartCount, totalP, settotalP, itemc, indexc, totalPrice, settotalPrice, cartProducts, setcartProducts, Discount, totalpD, settotalpD }) => {
  const [prodCounts, setprodCount] = useState(1);
  const ref = useRef(null);

  useEffect(() => {

    const totalProductPrice = () => {
      const elementd = ref.current;
      const setTotPri = prodCounts * itemc.price;
      settotalPrice(elementd.id);
      
    
      cartProducts.map((itemofCart) => {
        prodCounts < 1 ? settotalP([]) :
          settotalP(totalP);
      })
      if(cartCount === 0){
      settotalP([])
      settotalpD([])
      }
    }
    totalProductPrice();
  }, [itemc])

  const prodIncrement = (price) => {
    prodCounts >= 1 ? setprodCount(prodCounts + 1) : "";
    const setTotPri = price.price * (prodCounts + 1);
    settotalPrice((setTotPri - (setTotPri * Discount)).toFixed(2))
    prodCounts === 1 ?
      settotalP([...totalP, price.price]) : settotalP([...totalP, price.price]);
  }

  const removeCartProd = (itemr) => {
    const elementd = ref.current;
    cartCount > 0 ? setcartCount((val) => val - 1) : "";
    setcartProducts(cartProducts.filter((cartProd) => cartProd.id !== itemr.id))
   cartCount >=1?
   settotalpD([...totalpD, parseInt(elementd.id)]):settotalpD([]);
  }

  const prodDecrement = (val) => {
    prodCounts <= 1 ? "" :
      setprodCount((vale) => vale - 1);
    const setTotPri = prodCounts * val.price;
    settotalPrice((setTotPri - (setTotPri * Discount)).toFixed(2))
    prodCounts > 1 ?
      settotalpD([...totalpD, val.price]) : "";
  }

  return (
    <tr key={itemc.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={itemc.image} className="w-10 md:w-12 max-w-full max-h-full" alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {itemc.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button onClick={(e) => prodDecrement(itemc)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <div>
            <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{prodCounts}</span>
          </div>
          <button onClick={() => prodIncrement(itemc)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </td>
      <td ref={ref} className="px-6 py-4 font-semibold text-gray-900 dark:text-white" id={prodCounts > 1 ? (itemc.price * prodCounts).toFixed(2) : (itemc.price).toFixed(2)}>
      <FaRupeeSign className="inline-block text-sm"/>{prodCounts > 1 ?(itemc.price * prodCounts).toFixed(2):(itemc.price).toFixed(2)}
      </td>
      <td className="px-6 py-4">
        <a onClick={() => removeCartProd(itemc)} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Remove</a>
      </td>
    </tr>
  )
};

export default Total;