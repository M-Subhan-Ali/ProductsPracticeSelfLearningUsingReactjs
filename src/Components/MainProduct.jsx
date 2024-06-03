import React, { useState } from 'react'
import NavHome from './NavHome'
import { Link } from 'react-router-dom'; 
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
  const [sidebar,setSideBar]=useState(false);
  const plus=()=>{
    setStock(stock+1)
  }
  const minus=()=>{

    setStock(stock-1)
  }
  return (
    <>
      <div className='relative '>
        <h1 className='text-5xl bg-orange-500 text-center mx-auto lg:my-3 rounded-lg hover:bg-orange-600 cursor-pointer text-white lg:py-3 lg:w-96'>Selected Product</h1>
        <div className='w-full'>
            <div className='w-1/2 border mx-auto border-gray-400 rounded-lg '>
             <div className=' flex px-4 py-2 '>
             <div className='w-3/4 '><img src={checkFilter[0].image} className='w-auto lg:pt-4 lg:ps-2 h-[260px]' alt="image" /></div>
             <div className='text-center '>
                <h1 className='text-3xl border border-gray-400  w-56 hover:bg-orange-500 hover:text-white lg:py-2 lg:px-3 rounded cursor-pointer mb-3 font-semibold'>Name ={checkFilter[0].name}</h1>
                <h1 className='text-3xl border border-gray-400 w-56 hover:bg-orange-500 hover:text-white lg:py-2 lg:px-3 rounded cursor-pointer mb-3 font-semibold'>Color ={checkFilter[0].color}</h1>
                <h1 className='text-3xl border border-gray-400 w-56 hover:bg-green-500 hover:text-orange-600 lg:py-2 lg:px-3 rounded cursor-pointer mb-3  font-semibold'>Price = ${checkFilter[0].price}</h1>
                <h1 className='text-3xl border border-gray-400 w-56 hover:bg-green-500 hover:text-orange-600 lg:py-2 lg:px-3 rounded cursor-pointer mb-3  font-semibold'><button onClick={minus}>-</button> Stock {stock} <button onClick={plus}>+</button></h1>
                <button onClick={()=>setSideBar(true)} className='text-2xl border border-gray-400 w-56 hover:bg-white-500 hover:text-orange-600 lg:py-2 lg:px-3 rounded cursor-pointer mb-3  font-semibold'> Add to Cart </button>
             </div>
             </div>
             <div className='lg:ps-3'>
             <h1 className='text-xl border  border-gray-400  w-56 hover:bg-orange-500 hover:text-white lg:py-2 lg:px-3 rounded cursor-pointer mb-7 font-semibold'>Detail of {checkFilter[0].name}</h1>
             <p>{checkFilter[0].description}</p>
             </div>
             <div className='btn-div flex justify-center'>
             <button className='text-xl border text-center  border-gray-400 w-56 hover:bg-green-500 hover:text-orange-600 lg:py-2 lg:px-3 rounded cursor-pointer mb-3  font-semibold'>
              <Link to='/'>🔙 Back To Product</Link>
              </button> 
             </div>
            </div>
        </div>
        <div className={`${sidebar ? "block":'hidden'}  sidebar  absolute top-0 bg-white right-0  w-32 border h-full border-t-0 border-gray-400`}>
          <div className='text-center'>
            <p>subtotal</p>
            <p className='font-semibold text-red-500'>{stock*checkFilter[0].price}</p> 
            <button className='border border-gray-400 py-1 text-xs px-4 rounded font-semibold'>
               <Link to="/">
               Go to cart
               </Link>
               </button>
            <img src={checkFilter[0].image} alt="imageofproduct" />
            <p>${checkFilter[0].price}</p>
            <p className='text-red-700 text-xs'>only 4 left in stock-order soon</p>
            <button className='bg-red-600 rounded' onClick={()=>setSideBar(false)}>🗑️</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainProduct
