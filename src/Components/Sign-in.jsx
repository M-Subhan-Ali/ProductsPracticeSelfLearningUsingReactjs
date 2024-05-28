import React from 'react'
import Amazon from  '../images/Amazon-Logo-png.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signin = ({data1,setData1,store1,setStore1,store}) => {
    const navigate=useNavigate();
    const Handler=(e)=>{
     const {name,value}=e.target;
     setData1((val)=>{
        return {...val,[name]:value}
     })
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const MatchData=store.filter((ele)=>ele.Username === data1.Username && ele.Password === data1.Password)
        if(MatchData.length>0){
            setStore1((val)=>{return [...val,MatchData[0]]})
            navigate('/')
        }else{
            alert("Account Not Found")
        }
        setData1({Name:"",Username:"",Password:""})
    }
  return (
    <>
     <div className="main">
        <div className="sub-Main">
          <img className="lg:w-32 lg:mx-auto" src={Amazon} alt="Amazon-Image" />
          <div className="lg:w-96 lg:mt-7 lg:px-4  lg:h-auto lg:pb-7 lg:border lg:border-gray-300 lg:rounded lg:mx-auto  ">
            <h1 className="lg:text-3xl lg:pb-2 lg:pt-3">Sign-In</h1>
          
            <form onSubmit={HandleSubmit}>
             
              <p className="font-semibold lg:py-3">Username</p>
              <input
               value={data1.Username}
               onChange={Handler}
               name='Username'
               required
                type="email"
                placeholder="Email"
                className="w-full lg:py-2 lg:px-2 border border-gray-400 rounded hover:border-blue-500 outline-blue-400"
              />
              <p className="font-semibold lg:py-3">Password</p>
              <input
              value={data1.Password}
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
               Submit
              </button>
            </form>
            CREATE NEW <Link to="/register"><u>Account</u>?</Link>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Signin
