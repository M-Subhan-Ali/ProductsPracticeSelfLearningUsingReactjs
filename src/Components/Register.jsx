import React from "react";
import Amazon from "../images/Amazon-Logo-png.png";
import { useNavigate } from 'react-router-dom';


const Register = ({data,setData,store,setStore}) => {
    const navigate=useNavigate();
    const Handler=(e)=>{
        const {name,value}=e.target;
        setData((val)=>{
            return {...val,[name]:value}
        })
    }
  const HandlerSubmit=(e)=>{
    e.preventDefault();
   setStore((val)=>{return [...val,data]})
   setData({Name:"",Username:"",Password:""})
   navigate('/signin')
  }
  return (
    <>
      <div className="main">
        <div className="sub-Main">
          <img className="lg:w-32 lg:mx-auto" src={Amazon} alt="Amazon-Image" />
          <div className="lg:w-96 lg:px-4  lg:h-[400px] lg:border lg:border-gray-300 lg:rounded lg:mx-auto  ">
            <h1 className="lg:text-3xl lg:pb-2 lg:pt-3">Register</h1>
            <p className="font-semibold lg:py-3">Name</p>
            <form onSubmit={HandlerSubmit}>
              <input
               value={data.Name}
               onChange={Handler}
               name='Name'
               required
                type="text"
                placeholder="Name"
                className="w-full lg:py-2 lg:px-2 border border-gray-400 rounded hover:border-blue-500 outline-blue-400"
              />
              <p className="font-semibold lg:py-3">Username</p>
              <input
               value={data.Username}
               onChange={Handler}
               name='Username'
               required
                type="email"
                placeholder="Email"
                className="w-full lg:py-2 lg:px-2 border border-gray-400 rounded hover:border-blue-500 outline-blue-400"
              />
              <p className="font-semibold lg:py-3">Password</p>
              <input
               value={data.Password}
               onChange={Handler}
               name='Password'
               required
                type="password"
                placeholder="Passowrd"
                className="w-full lg:py-2 lg:px-2 border border-gray-400 rounded hover:border-blue-500 outline-blue-400"
              />
              <button
                className="block w-full  mx-auto lg:mt-5 lg:py-2 rounded text-black bg-yellow-400 lg:hover:bg-yellow-500"
                type="submit"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
