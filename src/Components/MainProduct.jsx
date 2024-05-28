import React, { useState } from 'react'
import NavHome from './NavHome'
import { useParams } from 'react-router-dom';
import {Data} from '../Components/DummyData.jsx'; 
const MainProduct = ({store2,setStore2}) => {
  const params =useParams();
  // console.log(params);
  const paramId=params.id;
  // console.log(paramId)
  const checkFilter=Data.filter((x)=>x.id===Number(paramId));
  // console.log(checkFilter)
  const [stock,setStock]=useState(checkFilter[0].stock)
  
  const plus=()=>{
    setStock(stock+1)
  }
  const minus=()=>{

    setStock(stock-1)
  }
  return (
    <>
      <div>
        <h1 className='text-5xl bg-orange-500 text-center mx-auto lg:my-3 rounded-lg hover:bg-orange-600 cursor-pointer text-white lg:py-3 lg:w-96'>Selected Product</h1>
        <div className='w-full'>
            <div className='w-1/2 border mx-auto border-gray-400 rounded-lg lg:h-[450px]'>
             <div className=' flex px-4 py-2 '>
             <div className='w-3/4 '><img src={checkFilter[0].image} className='w-auto lg:pt-4 lg:ps-2 h-[260px]' alt="image" /></div>
             <div className='text-center '>
                <h1 className='text-3xl border border-gray-400  w-56 hover:bg-orange-500 hover:text-white lg:py-2 lg:px-3 rounded cursor-pointer mb-3 font-semibold'>Name ={checkFilter[0].name}</h1>
                <h1 className='text-3xl border border-gray-400 w-56 hover:bg-orange-500 hover:text-white lg:py-2 lg:px-3 rounded cursor-pointer mb-3 font-semibold'>Color ={checkFilter[0].color}</h1>
                <h1 className='text-3xl border border-gray-400 w-56 hover:bg-green-500 hover:text-orange-600 lg:py-2 lg:px-3 rounded cursor-pointer mb-3  font-semibold'>Price = ${checkFilter[0].price}</h1>
                <h1 className='text-3xl border border-gray-400 w-56 hover:bg-green-500 hover:text-orange-600 lg:py-2 lg:px-3 rounded cursor-pointer mb-3  font-semibold'><button onClick={minus}>-</button> Stock {stock} <button onClick={plus}>+</button></h1>
             </div>
             </div>
             <div className='lg:ps-3'>
             <h1 className='text-xl border  border-gray-400  w-56 hover:bg-orange-500 hover:text-white lg:py-2 lg:px-3 rounded cursor-pointer mb-7 font-semibold'>Detail of {checkFilter[0].name}</h1>
             <p>{checkFilter[0].description}</p>
             </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainProduct
