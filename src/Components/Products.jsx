import React, { useState } from "react";
import ButtonsOnProducts from "./ButtonsOnProducts";

const Products = ({ Data,store2,setStore2 }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const itemPerPage = 2;
  const indexOfLastItem = currentpage * itemPerPage;
  const indexofFirstItem = indexOfLastItem - itemPerPage;
  const currentProduct = Data.slice(indexofFirstItem, indexOfLastItem);
  const [selectedButton,setSelectedButton]=useState(null);
  const [hover,setHover]=useState(null);

  const HandleButton=(index)=>{
    setCurrentPage(index + 1)
    setSelectedButton(index);
  }
  const handlePrev=()=>{
    setCurrentPage(currentpage-1)
    setSelectedButton(null)
  }
  const handleNext=()=>{
    setCurrentPage(currentpage+1)
    setSelectedButton(null)
  }
  const MouseEnter=(i)=>{
    setHover(i)
    
  }
  const MouseLeave=()=>{
  setHover(null)
  }
  return (
    <>
      <div className="main w-full lg:mt-24 ">
        <h1 className="mx-auto text-center rounded text-white hover:bg-orange-600 cursor-pointer lg:text-4xl lg:my-7 lg:font-semibold bg-orange-500 lg:py-2 lg:w-96 ">
          List of Our Products
        </h1>
        <div className="lg:mt-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:mx-7">
          {currentProduct.map((product, i) => {
            return (
              <div 
               onMouseEnter={()=>MouseEnter(i)}
               onMouseLeave={()=>MouseLeave()}
                key={i}
                className="lg:flex rounded  lg:px-2 border hover:bg-slate-300 cursor-pointer border-gray-400 "
              >
                <div className=" lg:w-[60%]">
                  <img
                    src={product.image}
                    className=" lg:h-[280px] lg:px-4 lg:mt-20  rounded "
                    alt={product.image}
                  />
                </div>
                <div className="lg:h-[500px] lg:w-[40%]">
                  <p className="font-bold text-3xl text-orange-500 lg:py-2">
                    Product Name
                  </p>
                  <p className="font-bold text-2xl text-red-600 lg:py-2">
                    {product.name}
                  </p>
                  <p className="font-bold lg:py-2 text-2xl text-gray-800">
                    Color
                  </p>
                  <p className="font-semibold lg:py-2 text-xl text-purple-800">
                    {product.color}
                  </p>
                  <p className="lg:py-2 text-2xl font-bold text-green-600">
                    Price
                  </p>
                  <p className="lg:py-2 text-xl font-bold text-green-600">
                    ${product.price}
                  </p>
                  <p className="lg:py-2 text-3xl font-bold text-red-600">
                  Stock  {product.stock} 
                  </p>
                 
                  <p className="lg:py-2 font-bold">Product Description </p>
                  <p className="lg:py-2">{product.description}</p>
                  {hover===i?<ButtonsOnProducts product={product} i={i} setStore2={setStore2} />:null}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center lg:mt-7">
          <button
            onClick={() => handlePrev()}
            disabled={currentpage === 1}
            className="lg:py-2 lg:px-3 bg-orange-600 text-white rounded-tl rounded-bl hover:bg-purple-500 hover:font-semibold "
          >
            previous
          </button>
          {Array.from(
            { length: Math.ceil(Data.length / itemPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={()=>HandleButton(index)}
                className={`lg:py-2 lg:px-3 bg-orange-600 text-white  hover:bg-purple-500 hover:font-semibold 
                ${selectedButton===index ? 'bg-purple-500':'bg-orange-600'}`}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() => handleNext()}
            disabled={indexOfLastItem >= Data.length}
            className="lg:py-2 lg:px-3 bg-orange-600 text-white rounded-tr  hover:bg-purple-500 hover:font-semibold rounded-br"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
