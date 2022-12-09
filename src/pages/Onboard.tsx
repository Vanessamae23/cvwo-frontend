import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Avatar from "../assets/images/home.png";

const Onboard =()=> {

  const [errorMessage, setErrorMessage] = useState(true);
  
  const Toast = () => {
    return (
      <div className="z-10 flex space-x-2 justify-center">
      {errorMessage ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Welcome to the bestest forum
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setErrorMessage(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Unfortunately, this forum only saves cookies in non-IOS devices so if you 
                    have trouble signing in and registering, please change the browser or device
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setErrorMessage(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setErrorMessage(false)}
                  >
                    START
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
    );
  };

    return (
        <div className="bg-blue-100 min-h-screen max-w-screen px-2 md:px-10 pt-10 text-left md:flex  flex-row sm:flex-none">
          <div className="md:w-2/3 sm:w-3/3 mr-10">
          {errorMessage && <Toast />}
            <h1 className="slide text-4xl lg:text-6xl  font-bold font-mono mt-10 ml-10 text-cyan-600">
              Welcome to <span className="text:6xl lg:text-8xl font-extrabold font-mono mt-10 lg:ml-10 text-cyan-900">CVWO</span> Forum
            </h1>
            <h1 className="text-3xl lg:text-4xl font-mono mt-10 ml-10 text-cyan-600">
              A place for you to voice out your opinions
            </h1>
            <h1 className="text-3xl lg:text-4xl font-mono mt-2 ml-10 mb-40 text-cyan-600">
              Sign up and start now!
            </h1>
            <Link
              className="text-3xl lg:text-4xl fade-in font-mono mt-50 ml-10 lg:p-10 p-5 rounded-lg bg-cyan-800 text-white  "
              to={"/login"}
            >
              Login
            </Link>
          </div>
          <div className="align-bottom flex md:w-1/3">
            <img
            
              className="scale-100 "
              src={Avatar}
            />
          </div>
        </div>
    );
  
}

export default Onboard;