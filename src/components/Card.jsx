import React, { useState,useEffect } from 'react';
import { FaRupeeSign } from "react-icons/fa";

const Card = ({item, index,cartProducts,setcartProducts, cartCount, setcartCount,totalP,settotalP} ) => {
    const [status, setStatus] = useState(true);

     //console.log(item)
      useEffect(()=>{
        const checkProdid = () => {
          cartProducts.map((itemg, indexg) => {
            itemg.id === item.id ? setStatus(false) :"";
//             settotalP([...totalP,itemg.price]);
// console.log(itemg.price)
          })
        }
        checkProdid()
       },[])
    const addCart = (indexof) => {
        
        setStatus(false);
         setcartCount((val) => val + 1);
         setcartProducts([...cartProducts, indexof])
         cartProducts.map((item, indexc) => {
             if (item.id === indexof.id) {
                 setcartCount((val) => val - 1);
                 setcartProducts(
                     cartProducts.filter((item) => item.id !== indexof.id)
                 );
                 setcartProducts([...cartProducts])
                 settotalP([...totalP,indexof.price]);
                 console.log(totalP)
             }
         })
     }
     const removeCart = (indexofr) => {
         setcartProducts(
             cartProducts.filter((item) => item.id !== indexofr.id)
         )
         setStatus(true)
         cartCount > 0 ? setcartCount((val) => val - 1) : "";
     }

    return (
      
            <div>
  <div className="w-64 max-w-64 h-48 px-5 pb-5 mx-auto">
    <img className="p-5 w-64 h-48 rounded-t-lg mx-auto" src={item.image} alt="product image" />
  </div>
  <div className=" items-center mt-5 px-5 pb-5">
    <h5 className="text-xl truncate font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
    <div className="flex items-center mt-2.5 mb-5">
      <p className="truncate">{item.description}</p>
    </div>
    <div className="flex relative mx-auto items-center">
    <FaRupeeSign/><span className="text-xl font-bold text-gray-900 dark:text-white"> {item.price}</span>
     </div>
    <div className="flex relative items-center justify-between mt-2">
      {/* <a onclick="{(e)=">addCart(item){'}'} id={'{'}item.id{'}'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"&gt;Add to cart</a> */}
      {status ?
      (<a onClick={()=>addCart(item)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Add to cart</a>)
      :
      (<a onClick={()=>removeCart(item)} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 cursor-pointer">Remove from cart</a>) }
    </div>
  </div>
</div>

    );
};

export default Card;