import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonsOnProducts = ({product,i,setStore2}) => {
  const navigate=useNavigate();
  function MoreDetail(){
    setStore2(product)
    navigate(`/MainProduct/${product.id}`)
  }

  const Delete=(i)=>{
    setStore2((val)=>(val.filter((x)=>x.id===i)))
  }
  return (
    <>
     <div className='flex gap-2'>
         <button onClick={()=>Delete(i)} className='lg:py-1 lg:px-3 rounded border border-gray-500 hover:bg-red-600 hover:text-white'  >Delete</button>
         <button className='lg:py-1 lg:px-3 rounded border border-gray-500 hover:bg-red-600 hover:text-white'>Edit</button>
         <button onClick={MoreDetail} className='lg:py-1 lg:px-3 rounded border border-gray-500 hover:bg-red-600 hover:text-white'>Product Details</button>
    </div> 
    </>
  )
}

export default ButtonsOnProducts
