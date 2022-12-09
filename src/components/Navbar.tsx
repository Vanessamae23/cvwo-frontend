import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { User } from "../models/user";
import {FcGraduationCap} from 'react-icons/fc'

const Navbar = () => {
    const [user, setUser] = useState(new User());
    useEffect(() => {
        (
             async() => {
            
            const {data} = await axios.get('user', {withCredentials: true});
            console.log(data);
            setUser(data);
        }
        )();
        console.log(user);
        
    }, [])

    const logout =  async () => {
        await axios.post('logout', {
        })
    }


        return (
            <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-100 ">
              <div className="container  px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full lg:flex-row relative align-middle flex flex-wrap    lg:w-auto  lg:justify-start">
                <FcGraduationCap size={80} />  
                  <a
                    className="ml-3 md:ml-6  font-sans self-center lg:text-4xl sm:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-cyan-700"
                  >
                    CVWO Forum | {user?.name}
                  </a>
                  
                </div>
                <div className="sm:max-md:mt-5">
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                      <Link
                        className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-cyan-700 hover:opacity-75"
                        to={"/"}
                      >
                        <i className="fab fa-twitter text-lg  leading-lg text-cyan-700 opacity-75"></i><span className="ml-2">Home</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-cyan-700 hover:opacity-75"
                        to={"/forum/create"}
                      >
                        <i className="fab fa-twitter text-lg leading-lg text-cyan-700 opacity-75"></i><span className="ml-2">Create Forum</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/login'}
                        className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-cyan-700 hover:opacity-75"
                         onClick={logout}
                      >
                        <i className="fab fa-pinterest text-lg leading-lg text-cyan-700 opacity-75"></i><span className="ml-2">Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
                 
        )
    }


export default Navbar;