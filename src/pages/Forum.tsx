import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { FcKindle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Forum = () => {
  const [forums, setForums] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("forums");
      console.log(data);
      setForums(data); // arrays of forums
    })();
    console.log(forums);
  }, []);

  const onPress = (id: number) => {
    navigate(`/forums/${id}`);
  };

  return (
    <Wrapper>
      <div className="bg-blue-100 fill-blue-100 w-screen   min-h-screen px-10 pt-10">
        <div className="fade-in flex flex-row flex-wrap gap-1">
          <Link
            className="text-white hover:opacity-70 w-100 px-2 mx-2 py-1 rounded-md bg-cyan-800"
            to={`/forum`}
          >
            All
          </Link>
          <Link
            className="text-white hover:opacity-70 w-100 px-2 mx-2 py-1 rounded-md bg-cyan-800"
            to={`/forumsCategory/lifestyle`}
          >
            Lifestyle
          </Link>
          <Link
            className="text-white hover:opacity-70 w-100 px-2 mx-2 py-1 rounded-md bg-cyan-800"
            to={`/forumsCategory/business`}
          >
            Business
          </Link>
          <Link
            className="text-white hover:opacity-70 w-100 px-2 mx-2 py-1 rounded-md bg-cyan-800"
            to={`/forumsCategory/politics`}
          >
            Politics
          </Link>
          <Link
            className="text-white hover:opacity-70 w-100 px-2 mx-2 py-1 rounded-md bg-cyan-800"
            to={`/forumsCategory/education`}
          >
            Education
          </Link>
        </div>
        {forums.map((res: any) => {
          return (
            <>
              <div className="bg-blue-100 slide h-fit p-10 mt-5 rounded-lg border-4 border-cyan-800">
                <div className="flex">
                  <FcKindle size={80} />
                  <div className="">
                    <div className="container break-all text-cyan-600 md:text-3xl sm:text-2xl mb-2 px-4 text-left font-bold  justify-between">
                      {res.title}
                    </div>
                    <div className="container text-cyan-700 md:text-lg sm:text-md px-4 text-left opacity-50  pb-5 mb-3 justify-between">
                      Created by: {res.username ? res.username : "Anonymous"}
                    </div>
                  </div>
                </div>
                <div className="container text-cyan-900 text-lg px-4 text-left opacity-50 hover:opacity-100   justify-between">
                  <a onClick={() => onPress(res.id)}>
                    Click here for more details
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};
