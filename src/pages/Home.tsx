import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Avatar from "../assets/images/avatar.png";

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div className="bg-blue-100 min-h-screen w-screen px-2 md:px-10 pt-10 text-left md:flex  flex-row sm:flex-none ">
          <div className="slide md:w-2/3 sm:w-3/3 mr-10">
            <h1 className="text-4xl lg:text-6xl  font-bold font-mono mt-10 ml-10 text-cyan-600">
              Welcome to<span className="text-6xl lg:text-8xl  font-extrabold font-mono mt-10 ml-10 text-cyan-900">CVWO</span> Forum
            </h1>
            <h1 className="text-4xl  lg:text-3xl  font-mono mt-10 ml-10 text-cyan-600">
              A place for you to voice out your opinions
            </h1>
            <h1 className="text-4xl  lg:text-3xl  font-mono mt-2 ml-10 mb-40 text-cyan-600">
              Sign up and start now!
            </h1>
            <Link
              className="text-4xl  lg:text-3xl  fade-in font-mono mt-50 ml-10 lg:p-10 p-5 rounded-lg bg-cyan-800 text-white  "
              to={"/forum"}
            >
              Forum page
            </Link>
          </div>
          <div className="md:w-1/3 max-sm:mt-10 align-bottom flex  ">
            <img
              className="  "
              src={Avatar}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}
