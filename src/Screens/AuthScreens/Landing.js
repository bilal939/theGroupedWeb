import React, { useState } from "react";
import logo from "../../assets/logo.png";
// import GroupedImage from "./assets/GroupedImage1.png";
// import GroupedImage2 from "./assets/GroupedImag2.png";
import Dubai from "../../assets/dubai.jpg";
import Singapore from "../../assets/singapore.jpg";
import HongKong from "../../assets/hongkong.3ef5c934532bdea394bb.jpg";
// import Singapore from "./assets/singapore.jpg";
import {
  FaApple,
  FaGooglePlay,
  FaWifi,
  FaHouseUser,
  FaPersonBooth,
  FaMoneyBill,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (name, value) => {
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const { username, email, subject, message } = details;
  return (
    <div>
      <header className="flex w-screen h-20 bg-[#0fa79e]">
        <div className="container mx-auto flex items-center justify-between">
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
              <button className="border-2 border-white text-white text-md font-normal  py-2 px-7 hover:bg-white hover:text-[#0fa79e] rounded duration-300">
                Login
              </button>
            </a>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="lg:hidden relative z-50">
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
          </div>
        </div>
      )}
      <section className="bg-[#0fa79e] w-screen min-h-[880px] relative  flex  justify-center">
        <div className="absolute bottom-[-15px] w-screen">
          <svg width="100%" height="100%" viewBox="0 0 1920 355" version="1.1">
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
        {/* <div className="container">
          <div className="grid  lg:grid-cols-[5fr_5fr] p-5 md:p-0 pt-[200px] md:pt-[100px] lg:pt-[150px] md:gap-y-10">
            <div className="text-center lg:text-left">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-medium">
                Connect, Discover, Share:
              </h2>
              <h1 className="text-white text-5xl lg:text-7xl xxl:text-7xl font-bold mt-2">
                Your Journey Start's Here
              </h1>

              <button className="border-2 border-white text-white font-normal text-md  py-1 hover:bg-white hover:text-[#0fa79e] rounded duration-300 h-[50px] w-[130px] mt-5">
                Get Started
              </button>
            </div>
            {/* <div className="md:relative">
              <img
                src={GroupedImage2}
                className="object-contain w-[250px] md:h-[300px] md:w-[200px]  h-[450px] absolute lg:left-[180px] lg:top-[-150px]"
              />
              <img
                src={GroupedImage}
                className="object-contain w-[250px] md:h-[300px] md:w-[200px]    h-[450px] absolute   lg:top-[-100px] md:left-[280px]"
              />
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </section>
      <main>
        {/* <section className="pt-5 	 flex items-center justify-center" id="about">
          <div className="container lg:grid lg:grid-cols-12  md:ml-5 gap-x-5 p-4">
            <div className="lg:col-span-5  flex flex-col gap-4">
              <p className="font-semibold	text-black text-xl md:text-3xl">
                About The Grouped
              </p>
              <p className="text-[#9fa1a4] md:text-lg">
                Going somewhere with friends or family? We've got you covered!
              </p>
              <p className="text-[#9fa1a4] md:text-lg">
                With Grouped, you can get connected and avail the best deals on
                flights, hotels, and car rentals as a group, even when you start
                from different locations. The app syncs your itineraries,
                organizes your trip, and gives you access to a tourist community
                where you can share and compare. It even tracks your budget and
                allows local businesses to offer unique, exclusive deals on
                their specialities.
              </p>
              <p className="text-[#9fa1a4] text-md">
                Plan your adventure with Grouped today!
              </p>
              <div className="flex items-center gap-5 justify-center md:justify-start ">
                <a
                  href="https://apps.apple.com/pk/app/thegrouped/id6476620322"
                  className="bg-[#0fa79e] flex items-center gap-1 p-2 md:h-[60px] md:w-[120px] shadow-xl shadow-[#00000026]"
                >
                  <FaApple color="white" />
                  <span className="text-white text-xs md:text-md">
                    App store
                  </span>
                </a>
                <a
                  href="https://apps.apple.com/pk/app/thegrouped/id6476620322"
                  className="bg-[#0fa79e] flex items-center gap-2 p-2 md:h-[60px] md:w-[120px] shadow-xl shadow-[#00000026]"
                >
                  <FaGooglePlay color="white" />
                  <span className="text-white text-xs md:text-md">
                    Google Play
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-4 mb-4 lg:col-span-6 ml-auto">
              <iframe
                width="400"
                height="400"
                src="https://www.youtube.com/embed/KJn-IZPtBOE?si=hI9__o1DvaFjBKKJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </section> */}
        <section className="pt-4" id="features">
          <p className="text-center text-[#0fa79e] text-5xl font-bold mb-5">
            Our Features
          </p>
          <div className="flex items-center justify-center">
            <div className="container  grid lg:grid-cols-3 md:grid-cols-2  gap-x-5 gap-y-10 mt-5 justify-center bg-red-500 ">
              <div className="flex flex-col gap-5 p-5">
                <div className="bg-[#0fa79e] h-24 w-24 rounded-full shadow-xl shadow-[#00000026] self-center flex items-center justify-center">
                  <FaWifi color="white" size={40} />
                </div>
                <p className="text-center text-lg font-semibold">
                  Booking priority, faster check-ins, access to better lounges,
                  first-class seating, extra baggage.
                </p>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="bg-[#0fa79e] h-24 w-24 rounded-full shadow-xl shadow-[#00000026] self-center flex items-center justify-center">
                  <FaWifi color="white" size={40} />
                </div>
                <p className="text-center text-lg font-semibold">
                  Free wi-fi, room upgrade.
                </p>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="bg-[#0fa79e] h-24 w-24 rounded-full shadow-xl shadow-[#00000026] self-center flex items-center justify-center">
                  <FaHouseUser color="white" size={40} />
                </div>
                <p className="text-center text-lg font-semibold">
                  Miles redeemed for hotel stays, car rentals & upgrades.
                </p>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="bg-[#0fa79e] h-24 w-24 rounded-full shadow-xl shadow-[#00000026] self-center flex items-center justify-center">
                  <FaMoneyBill color="white" size={40} />
                </div>
                <p className="text-center text-lg font-semibold">
                  Priority customer support, early access to promotions and
                  discounts.
                </p>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="bg-[#0fa79e] h-24 w-24 rounded-full shadow-xl shadow-[#00000026] self-center flex items-center justify-center">
                  <FaPersonBooth color="white" size={40} />
                </div>
                <p className="text-center text-lg font-semibold">
                  Paying for bookings with loyalty points instead of fiat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4" id="popularDestination">
          <div className="flex flex-col gap-5 p-5">
            <p className="text-center text-[#0fa79e] text-5xl font-bold leading-1 g:max-w-xs  self-center	">
              Popular Destinations
            </p>
            <p className="text-center text-base text-sm  md:text-lg text-[#9fa1a4] lg:max-w-sm  self-center">
              Popular Destination will appear as per locations. for expample
              people from karachi frequently visit
            </p>
          </div>
          <div className="flex justify-center">
            <div className="container grid lg:grid-cols-3 md:grid-cols-2">
              <div className="flex flex-col gap-5 p-5">
                <div className="relative">
                  <img
                    src={HongKong}
                    className="h-[300px] w-full object-cover rounded-md	"
                  />
                  <div className="relative flex items-center h-[180px] w-full justify-center self-center  ">
                    <div className="relative top-[-50px] justify-center items-center flex flex-col bg-white opacity-80		 h-[170px] w-4/5 shadow-xl shadow-[#00000026]	 bg-white p-5 rounded-md">
                      <div className="absolute w-20 h-20  top-[-30px] rounded-full flex items-center justify-center  bg-white ">
                        <div className="bg-[#0fa79e] rounded-full h-4/5	w-4/5 	flex items-center justify-center">
                          <FaMapLocation color="white" size={40} />
                        </div>
                      </div>
                      <p className="text-center text-xl font-bold text-[#0fa79e] mt-5 mb-5">
                        HongKong
                      </p>
                      <p className="text-center text-base">
                        Burj khalifa , Atlantis & lavish Malls
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="relative">
                  <img
                    src={Singapore}
                    className="h-[300px] w-full object-cover rounded-md	"
                  />
                  <div className="relative flex items-center h-[180px] w-full justify-center self-center  ">
                    <div className="relative top-[-50px] justify-center items-center flex flex-col bg-transparent h-[170px] w-4/5 shadow-xl shadow-[#00000026]	 bg-white p-5 rounded-md">
                      <div className="absolute w-20 h-20  top-[-30px] rounded-full flex items-center justify-center  bg-white ">
                        <div className="bg-[#0fa79e] rounded-full h-4/5	w-4/5 	flex items-center justify-center">
                          <FaMapLocation color="white" size={40} />
                        </div>
                      </div>
                      <p className="text-center text-xl font-bold text-[#0fa79e] mt-5 mb-5">
                        HongKong
                      </p>
                      <p className="text-center text-base">
                        Burj khalifa , Atlantis & lavish Malls
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="relative">
                  <img
                    src={Dubai}
                    className="h-[300px] w-full object-cover rounded-md	"
                  />
                  <div className="relative flex items-center h-[180px] w-full justify-center self-center  ">
                    <div className="relative top-[-50px] justify-center items-center flex flex-col bg-transparent h-[170px] w-4/5 shadow-xl shadow-[#00000026]	 bg-white p-5 rounded-md">
                      <div className="absolute w-20 h-20  top-[-30px] rounded-full flex items-center justify-center  bg-white ">
                        <div className="bg-[#0fa79e] rounded-full h-4/5	w-4/5 	flex items-center justify-center">
                          <FaMapLocation color="white" size={40} />
                        </div>
                      </div>
                      <p className="text-center text-xl font-bold text-[#0fa79e] mt-5 mb-5">
                        HongKong
                      </p>
                      <p className="text-center text-base">
                        Burj khalifa , Atlantis & lavish Malls
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4" id="plans">
          <div className="flex flex-col gap-5 ">
            <p className="text-center text-[#0fa79e] text-5xl font-bold leading-1 g:max-w-xs  self-center	">
              Choose A Plan
            </p>
            <p className="text-center text-base text-sm  md:text-lg text-[#9fa1a4] lg:max-w-xl  self-center">
              Learn about the history, usage and variations of Lorem Ipsum, the
              industry's standard dummy text for printing and typesenary of over
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-5 p-5">
              <div className="h-[450px] w-full flex flex-col gap-5 items-center justify-center  p-5 shadow-xl shadow-[#00000026]">
                <p className=" text-base text-sm">FOR STARTUP</p>
                <p className="text-xl font-semibold  text-[#0fa79e]">
                  Basic Subscription
                </p>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-base text-sm">Upto 3 Groups</p>
                  <p className="text-base text-sm">Upto 20 Users</p>
                  <p className="text-base text-sm">Unlimited Destinations</p>
                  <p className="text-base text-sm">24/7 Support</p>
                </div>
                <p className="mt-5 mb-5  font-bold text-3xl">$19/month</p>
                <div className="flex items-center justify-center h-12 p-2  shadow-xl shadow-[#00000026]">
                  Choose Plan
                </div>
              </div>
              <div className="h-[450px] w-full flex flex-col gap-5 items-center justify-center  p-5 bg-[#0fa79e]">
                <p className=" text-base text-sm text-white">
                  PROFESSIONAL SUBSCRIPTION
                </p>
                <p className="text-xl font-semibold  text-white">
                  Pro Businesses
                </p>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-base text-sm text-white">Upto 3 Groups</p>
                  <p className="text-base text-sm text-white">Upto 20 Users</p>
                  <p className="text-base text-sm text-white">
                    Unlimited Destinations
                  </p>
                  <p className="text-base text-sm text-white">24/7 Support</p>
                </div>
                <p className="mt-5 mb-5  font-bold text-3xl text-white">
                  $29/month
                </p>
                <div className="flex items-center justify-center h-10 p-4 bg-white  shadow-xl shadow-[#0fa79e] text-black">
                  Choose Plan
                </div>
              </div>
              <div className="h-[450px] w-full flex flex-col gap-5 items-center justify-center  p-5 shadow-xl shadow-[#00000026]">
                <p className=" text-base text-sm">ENTERPRISE BUSINESS</p>
                <p className="text-xl font-semibold  text-[#0fa79e]">
                  Platinium Subscription
                </p>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-base text-sm">Upto 50 Groups</p>
                  <p className="text-base text-sm">Upto 200 Users</p>
                  <p className="text-base text-sm">Unlimited Destinations</p>
                  <p className="text-base text-sm">24/7 Support</p>
                </div>
                <p className="mt-5 mb-5  font-bold text-3xl">$39/month</p>
                <div className="flex items-center justify-center h-12 p-2  shadow-xl shadow-[#00000026]">
                  Choose Plan
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4" id="contact">
          <div className="flex flex-col gap-5 ">
            <p className="text-center text-[#0fa79e] text-5xl font-bold leading-1 g:max-w-xs  self-center	">
              Contact Us
            </p>
            <p className="text-center text-base text-sm  md:text-lg text-[#9fa1a4] lg:max-w-xl  self-center">
              Learn about the history, usage and variations of Lorem Ipsum, the
              industry's standard dummy text for printing and typesenary of over
            </p>
          </div>
          <div className="flex  justify-center">
            <div className="container grid lg:grid-cols-[3fr_5fr] gap-10 mt-5 p-5">
              <div className="p-5 shadow-xl shadow-[#00000026] border-t-2 flex flex-col	gap-y-7 border-b-2	 border-t-[#0fa79e] border-b-[#0fa79e] bg-white h-[520px] w-full">
                <div className="flex gap-2">
                  <div className="bg-[#e7f5fb] hover:bg-[#0fa79e] w-12 h-12 rounded-full flex items-center justify-center">
                    <GrLocation
                      className="text-[#0fa79e] hover:text-white "
                      size={25}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#0fa79e] font-bold md:text-2xl text-xl">
                      Location
                    </p>
                    <p className="text-base md:text-md text-sm">
                      A108 Adam Street , NewYork ,<br /> Ny 522002
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#e7f5fb] hover:bg-[#0fa79e] w-12 h-12 rounded-full flex items-center justify-center">
                    <CiMail
                      className="text-[#0fa79e] hover:text-white"
                      size={25}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#0fa79e] font-bold md:text-2xl text-xl">
                      Email
                    </p>
                    <p className="text-base md:text-md text-sm">
                      bh471059@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#e7f5fb] hover:bg-[#0fa79e] w-12 h-12 rounded-full flex items-center justify-center">
                    <IoIosCall
                      className="text-[#0fa79e] hover:text-white"
                      size={25}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#0fa79e] font-bold md:text-2xl text-xl">
                      Call:
                    </p>
                    <p className="text-base md:text-md text-sm">
                      +923112388411
                    </p>
                  </div>
                </div>
                <iframe
                  width="100%"
                  height="700"
                  src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
              <form className="p-5 shadow-xl shadow-[#00000026] border-t-2 flex flex-col	gap-y-7 border-b-2	 border-t-[#0fa79e] border-b-[#0fa79e] bg-white  w-full">
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-sm text-[#9fa1a4]">
                      Your Name
                    </p>
                    <input
                      className="border w-full p-5 h-10 focus:outline-0 focus:border-[#0fa79e]"
                      required
                      value={username}
                      onChange={(event) => {
                        const value = event.target.value;
                        onChangeHandler("username", value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-5 md:mt-0">
                    <p className="text-base text-sm text-[#9fa1a4]">
                      Your Email
                    </p>
                    <input
                      className="border w-full p-5 h-10 focus:outline-0 focus:border-[#0fa79e]"
                      required
                      type="email"
                      value={email}
                      onChange={(event) => {
                        const value = event.target.value;
                        onChangeHandler("email", value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base text-sm text-[#9fa1a4]">Subject</p>
                  <input
                    className="border w-full p-5 h-10 focus:outline-0 focus:border-[#0fa79e]"
                    required
                    value={subject}
                    onChange={(event) => {
                      const value = event.target.value;
                      onChangeHandler("subject", value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base text-sm text-[#9fa1a4]">Message</p>
                  <textarea
                    className="border w-full p-5 h-44 focus:outline-0 focus:border-[#0fa79e]"
                    required
                    wrap="physical"
                    multiple={true}
                    value={message}
                    onChange={(event) => {
                      const value = event.target.value;
                      onChangeHandler("message", value);
                    }}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="text-[#FFFFFF] bg-[#0fa79e] h-12 px-5 rounded-full"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="pt-4" id="publish">
          <div className="flex items-center justify-center bg-[#0fa79e] h-[250px]">
            <div className="container grid md:grid-cols-[4fr_5fr] gap-y-8">
              <div className="flex flex-col ml-5">
                <p className="text-white text-2xl text-center  md:text-start md:text-5xl font-bold">
                  Starts Publishing Your Apps
                </p>
              </div>
              <div className="flex items-center gap-5 justify-center ">
                <a
                  href="https://apps.apple.com/pk/app/thegrouped/id6476620322"
                  className="bg-black flex items-center gap-1 rounded-md p-2 md:h-[60px] md:w-[160px] shadow-xl shadow-[#00000026]"
                >
                  <FaApple color="white" size={30} />
                  <span className="text-white text-xs md:text-xl">
                    App store
                  </span>
                </a>
                <a
                  href="https://apps.apple.com/pk/app/thegrouped/id6476620322"
                  className="bg-[#000000] flex items-center gap-1 p-2 rounded-md md:h-[60px] md:w-[160px] shadow-xl shadow-[#00000026]"
                >
                  <FaGooglePlay color="white" size={25} />
                  <span className="text-white text-xs md:text-xl">
                    Google Play
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="pt-5 mt-5" id="footer">
          <div className="flex items-center justify-center">
            <div className="container grid p-5 md:grid-cols-[3fr_6fr]  gap-x-10 gap-y-5">
              <div className="flex flex-col gap-5 ">
                <p className="text-2xl font-semibold ">About the Grouped</p>
                <p className="text-[#9fa1a4] leading-normal	">
                  With Grouped, you can get connected and avail the best deals
                  on flights, hotels, and car rentals as a group, even when you
                  start from different locations. The app syncs your
                  itineraries, organizes your trip, and gives you access to a
                  tourist community where you can share and compare. It even
                  tracks your budget and allows local businesses to offer
                  unique, exclusive deals on their specialities.
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#f8f9fa] rounded-full">
                    <FaFacebook />
                  </div>
                  <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#f8f9fa] rounded-full">
                    <FaInstagram />
                  </div>
                  <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#f8f9fa] rounded-full">
                    <BsTwitter />
                  </div>
                  <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#f8f9fa] rounded-full">
                    <BsLinkedin />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_3fr] gap-5">
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold">Navigation</p>
                  <ul className="flex flex-col gap-2 mt-5">
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold ">Downloads</p>
                  <ul className="flex flex-col gap-2 mt-5">
                    <li>
                      <a href="#">Get from App Store</a>
                    </li>
                    <li>
                      <a href="#">Get From the PlayStore</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex flex-col items-center justify-center  mb-5 pt-5 pb-5">
          <p className="text-[#9fa1a4]">© Copyright All Rights Reserved</p>
          <p className="text-[#9fa1a4]">
            Designed by{" "}
            <strong className="text-black hover:text-[#0fa79e] cursor-pointer	">
              CodexNow
            </strong>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Landing;
