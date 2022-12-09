import React, { Component, useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState({
        name: ""
    });
    useEffect(() => {
        (
             async() => {
                try {
                    const {data} = await axios.get('user', {withCredentials: true});
                    console.log(data);
                    setUser(data);
                } catch(e) {
                    setRedirect(true);
                }
        }
        )();
        console.log(user);
        
    }, [])
    if(redirect) {
        return <Navigate to={"/onboard"} />
    }
    return (
      <div className="bg-blue-100 min-h-screen h-fit">
        <Navbar />
        <div className='container-fluid'>
          <main className="App-header">
            {props.children}
          </main>
        </div>
      </div>
    )
  
}

export default Wrapper;
