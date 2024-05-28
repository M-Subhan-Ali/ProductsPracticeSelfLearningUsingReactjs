import { useState } from 'react';
import './App.css';
import Register from './Components/Register';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Signin from './Components/Sign-in';
import NavHome from './Components/NavHome';
import {Data} from './Components/DummyData'
import MainProduct from './Components/MainProduct';

function App() {
  const [data,setData]=useState({Name:"",Username:"",Password:""})
  const [data1,setData1]=useState({Name:"",Username:"",Password:""})
  const [data3,setData3]=useState("")
  const [store,setStore]=useState([]);
  const [store1,setStore1]=useState([]);
  const [store2,setStore2]=useState([]);
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavHome store={store} Data={Data} data3={data3} setData3={setData3} store2={store2} setStore2={setStore2}/>} />
    <Route path='/register' element={ <Register data={data} setData={setData} store={store} setStore={setStore}/>} />
    <Route path='/signin' element={<Signin data1={data1} setData1={setData1} store={store} store1={store1} setStore1={setStore1} />}/>
    <Route path='/MainProduct/:id'  element={<MainProduct store2={store2} setStore2={setStore2} />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
