import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("login", {
        email,
        password,
      }); //to get the cookies to login properly

      console.log(response.data);
      setRedirect(true);
    } catch (e) {
      setErrorMessage(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const Toast = () => {
    return (
      <div className="z-10 flex space-x-2 justify-center">
      {errorMessage ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Oops!
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
                    Hmm.. seems like you input the wrong password and email.
                    Please try again
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
                    Try Again
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
    <div className="bg-blue-100  fill-blue-100 items-stretch grid grid-cols-1 overflow-auto shrink-0 min-w-screen min-h-screen   px-10 pt-10">
      <div className="bg-blue-100 resize-none   text-center  place-self-center self-center w-full max-w-2xl">
        {errorMessage && <Toast />}
        <main className=" mt-10 ">
          <form onSubmit={onSubmit}>
            <h1 className="container text-cyan-900 text-5xl font-extrabold font-mono ">
              Sign In
            </h1>
            <div className="flex flex-col  gap-8 mt-20">
              <input
                type="email"
                className="enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg "
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className=" enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg "
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                className="text-left font-mono hover:opacity-40"
                to={"/register"}
              >
                No account? Register now
              </Link>
              <button
                className="font-mono text-white shadow-md hover:opacity-70 shadow-cyan-900/50 px-4 py-3 w-100 btn btn-lg bg-cyan-900 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
