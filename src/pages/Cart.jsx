import React from 'react';
import Total from '../components/Total';
import { FaRupeeSign } from "react-icons/fa";

const Cart = ({ cartProducts, setcartProducts, cartCount, setcartCount, totalPrice, settotalPrice, totalP, settotalP, totalpD, settotalpD }) => {

  const Discount = 10 / 100;

  const Sum = totalP.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

    
  const Dec = totalpD.reduce((accumulatord, currentValued) => {
    return accumulatord + currentValued
  }, 0);

  cartCount === 0 ?
    settotalPrice(0)
    :
    settotalPrice(Sum - Dec);

  return (
    <>
      <div className='mt-3'>
        <h1 className="mb-4 mt-5 text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl dark:text-white">Cart Page</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cartProducts.map((itemc, indexc) => {
                return (
                  <>
                    <Total Key={indexc} itemc={itemc} cartCount={cartCount} setcartCount={setcartCount}
                      Discount={Discount} totalP={totalP} cartProducts={cartProducts} setcartProducts={setcartProducts}
                      totalPrice={totalPrice} settotalP={settotalP} settotalPrice={settotalPrice} totalpD={totalpD} settotalpD={settotalpD} />
                  </>
                )
              })
            }
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              </td>
              <td className="px-6 py-4">
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                <FaRupeeSign className="inline-block text-sm" />{cartCount >= 1 ? (totalPrice - (totalPrice * Discount)).toFixed(2) : 0}
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Total</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;