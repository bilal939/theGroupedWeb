import React, { useState } from "react";
import logo from "./assets/logo.png";
import GroupedImage from "./assets/GroupedImage1.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex w-screen h-20 bg-[#0fa79e]">
        <div className="container mx-auto flex items-center justify-between px-2">
          <div className="p-2">
            <img className="object-contain max-h-10" src={logo} alt="Logo" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-10 w-10`}
                fill="#FFF"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#fff"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-10 w-10`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#fff"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            <a href="#" className="text-md font-normal text-white">
              Home
            </a>
            <a href="#" className="text-md font-normal text-white ">
              About
            </a>
            <a href="#" className="text-md font-normal text-white">
              Features
            </a>
            <a href="#" className="text-md font-normal text-white">
              Pricing
            </a>
            <a href="#" className="text-md font-normal text-white">
              Contact Us
            </a>
            <a className="px-1 hidden lg:flex">
              <button className="border-2 border-white text-white font-normal text-xs py-2 px-5 hover:bg-white hover:text-[#0fa79e] rounded duration-300">
                Login
              </button>
            </a>
          </div>
        </div>

       
      </header>
       {isMenuOpen && (
          <div className="lg:hidden relative z-50" >
            <div className="absolute flex flex-col bg-[#FFFFFF] w-full p-[20px] rounded-lg">
              <a href="#" className="text-md font-normal text-[#0fa79e] py-2 m-2">
                Home
              </a>
              <a href="#" className="text-md font-normal text-[#0fa79e] py-2 m-2">
                About
              </a>
              <a href="#" className="text-md font-normal text-[#0fa79e] py-2 m-2">
                Features
              </a>
              <a href="#" className="text-md font-normal text-[#0fa79e] py-2 m-2">
                Pricing
              </a>
              <a href="#" className="text-md font-normal text-[#0fa79e] py-2 m-2">
                Contact Us
              </a>
              <button className="border-2 border-white text-white font-normal text-xs py-2 px-5 hover:bg-white hover:text-[#0fa79e] rounded duration-300 mt-2">
                Login
              </button>
            </div>
          </div>
        )}


      <section className="bg-[#0fa79e] min-h-[580px] relative w-screen flex items-center justify-center">
        <div className="absolute bottom-[-148px] lg:bottom-[-250px]">
          <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Apple-TV"
                transform="translate(0.000000, -402.000000)"
                fill="#FFFFFF"
              >
                <path
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="container">
          <div className="grid  lg:grid-cols-2">
            <div className="col-8">
              <div className="text-center md:text-left">
                <h2 className="text-white text-3xl lg:text-5xl font-semibold">
                  Connect, Discover, Share:
                </h2>
                <h1 className="text-white text-5xl lg:text-7xl font-bold mt-2">
                  Your Journey Start's Here
                </h1>
                
                <button className="border-2 border-white text-white font-normal text-xs  py-1 hover:bg-white hover:text-[#0fa79e] rounded duration-300 h-[50px] w-[130px] mt-5">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="lg:relative lg:flex hidden">
                <div>
   <img
                  src={GroupedImage}
                  className=" object-contain w-[250px] h-[450px] absolute top-[-150px]"
                />
                <img
                  src={GroupedImage}
                  className="object-contain w-[250px] h-[450px] absolute left-[50px] top-[-100px]"
                />
                </div>
             
              </div>
            </div>
          </div>
        </div> 
      </section> 
    </>
  );
}

export default App;
