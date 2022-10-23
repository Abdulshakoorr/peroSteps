import React,{useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const Header = () => {
  const [pageState, setPageState] = useState("Sign In")
  const navigate = useNavigate();
  const location = useLocation();
 const auth = getAuth();

    useEffect(()=>{
    
      onAuthStateChanged(auth,(user)=>{
        if(user){
          setPageState("Profile")
        }else{
          setPageState("Sign In")
        }
      })



    },[auth])

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="shadow border-b bg-white h-16 sticky top-0 z-50">
      <header className="flex justify-between items-center px-4 max-w-6xl mx-auto sm:px-8">
        <div className="logo-container">
          <img
            src="../../images/PS2.png"
            alt="logo"
            className="w-full h-20 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="menu-container">
          <ul className="flex gap-4">
            <li
              className={` cursor-pointer py-3 text-sm font-semibold hover:text-[#0C999F] text-gray-400 border-b-[2px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-[#0C999F]"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold hover:text-[#0C999F] text-gray-400 border-b-[2px] border-b-transparent ${
                pathMatchRoute("/about") && "text-black border-b-[#0C999F]"
              }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold hover:text-[#0C999F] text-gray-400 border-b-[2px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-[#0C999F]"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold hover:text-[#0C999F] text-gray-400 border-b-[2px] border-b-transparent ${
                ( pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-[#0C999F]"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              {pageState}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
