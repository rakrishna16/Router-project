import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Product = ({ cartProducts, setcartProducts, cartCount, setcartCount, totalP, settotalP }) => {
    const [fetchDatas, setFetchdatas] = useState([]);
    useEffect(() => {
        const addPrice = () => {
            cartProducts.map((itemg) => {
                cartCount === 0 ?
                    settotalP([]) :
                    settotalP([...totalP, itemg.price]);
            })
        }
        fetchData()
        addPrice()
    }, [cartProducts])

    const fetchData = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => setFetchdatas(res.data))
            .catch(error => console.log(error))
    }

    return (

        <div>

            <div className=''>
                <h1 className="mb-4 mt-5 text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl dark:text-white">Shop Products</h1>
            </div>
            <div className="grid grid-cols-1 sm:flex-row md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto m-12 hp_c">
                {
                    fetchDatas.map((item, index) => (
                        <Card key={item.id} cartCount={cartCount}
                            setcartCount={setcartCount} item={item} index={index} cartProducts={cartProducts} setcartProducts={setcartProducts} totalP={totalP} settotalP={settotalP} />
                    ))

                }
            </div>
        </div>
    );
};

export default Product;