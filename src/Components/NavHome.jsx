import React, { useState } from "react";
import Amazon from "../images/Amazon-Logo-png.png";
import { FaSearch } from "react-icons/fa";
import Products from "./Products";
import { Link } from "react-router-dom";

const NavHome = ({ store, Data, data3, setData3, store2, setStore2,stock,setStock }) => {
  const [matchdata, setMatchData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [sign, setSign] = useState(true);
  const [selctedProduct, setSelectedProduct] = useState(null);
  const Handler = (e) => {
    const value = e.target.value;
    setData3(value);
    const MacthingData = Data.filter((val) =>
      val.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setMatchData(MacthingData);
    setIsSearch(true);
  };
  const HandleProduct = (val) => {
    setSelectedProduct(val);
    setIsSearch(false);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const Sign = () => {
    setSign(false);
  };
  return (
    <>
      <div className="main h-[100vh]" onClick={() => setIsSearch(false)}>
        <div className="nav w-full bg-gray-900 lg:h-12 fixed top-0">
          <div className="flex justify-between">
            <div>
              <img
                src={Amazon}
                className="lg:w-24 cursor-pointer"
                alt="AmaznImage"
              />
            </div>
            <div className="flex relative">
              <input
                onChange={Handler}
                onSubmit={HandleSubmit}
                value={data3}
                type="text"
                placeholder="Search"
                className="lg:w-96 lg:h-10 lg:mt-1 lg:px-2 outline-none rounded-tl rounded-bl"
              />
              <FaSearch className="text-white lg:w-14 lg:h-10 lg:text-xs lg:px-1 lg:mt-1 bg-orange-400 rounded-tr rounded-br cursor-pointer" />
            </div>
            {sign && store.length === 0 ? (
              <div className="text-white border lg:px-2 lg:py-2.5 rounded lg:mt-1 lg:h-10 cursor-pointer hover:bg-orange-500 hover:text-white border-orange-500 font-serif">
                <Link onClick={Sign} to="/signin">
                  Sign-in
                </Link>
              </div>
            ) : (
              store.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="text-white border lg:px-2 lg:py-2.5 rounded lg:mt-1 lg:h-10 cursor-pointer hover:bg-orange-500 hover:text-white border-orange-500 font-serif"
                  >
                    {x.Name}
                  </div>
                );
              })
            )}
            {/* {store.map((x, i) => {
              return (
                <div
                  key={i}
                  className="text-white border lg:px-2 lg:py-2.5 rounded lg:mt-1 lg:h-10 cursor-pointer hover:bg-orange-500 hover:text-white border-orange-500 font-serif"
                >
                   {x.Name} 
                </div>
              );
            })  } */}
          </div>
        </div>
        <Products Data={Data} store2={store2} setStore2={setStore2} />
      </div>
      {isSearch ? (
        <SearchContent matchdata={matchdata} HandleProduct={HandleProduct} />
      ) : null}
    </>
  );
};

export default NavHome;

const SearchContent = ({ matchdata, HandleProduct }) => {
  return (
    <div className="fixed top-11 border border-black lg:w-[442px] lg:absolute lg:top-12 lg:left-[34.8%]">
      {matchdata.length > 0 ? (
        matchdata.map((val, i) => {
          return (
            <div
              key={i}
              onClick={() => HandleProduct(val)}
              className="bg-gray-400 text-orange-600 px-2 py-1 cursor-pointer hover:bg-orange-500 hover:text-white"
            >
             <Link to={`/MainProduct/${val.id}`}>{val.name} </Link> 
            </div>
          );
        })
      ) : (
        <div className="bg-white text-black px-2 py-1 cursor-pointer hover:bg-red-500 hover:text-white">
          no content Found
        </div>
      )}
    </div>
  );
};
