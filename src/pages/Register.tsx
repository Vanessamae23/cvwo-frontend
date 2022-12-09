import axios from 'axios';
import React, { Component, SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate, redirect } from 'react-router-dom';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.post('register', {
            name,
            email,
            password
        });
        console.log(response.data);
        setRedirect(true);
    };

    

    if(redirect) {
        return <Navigate to={"/login"} />
    }

        return (
            <div className="bg-blue-100 text-center flex justify-center fill-blue-100  min-h-screen   px-10 pt-10">
            <main className="form-signin mt-10 max-w-xl">
            <form onSubmit={onSubmit}>
                <h1 className="container text-cyan-900 text-5xl font-extrabold font-mono ">Register</h1>
                <div className="flex flex-col  gap-8 mt-20">
                <input type="text" className=" enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg " placeholder="Name" required
                    onChange={e => setName(e.target.value)}
                />
                <input type="email" className=" enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg " placeholder="Email" required
                    onChange={e => setEmail(e.target.value)}
                />
        
                <input type="password" className=" enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg " placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <Link className='text-left font-mono hover:opacity-40' to={'/login'}>Already have an account? Login now</Link>
                <button className="font-mono text-white shadow-md hover:opacity-70 shadow-cyan-900/50 px-4 py-3 w-100 btn btn-lg bg-cyan-900 rounded-lg" type="submit">Submit</button>
                </div>
            </form>
        </main>
        </div>
        );
    
}
