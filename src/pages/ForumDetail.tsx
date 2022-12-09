import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { User } from "../models/user";
import Wrapper from "../components/Wrapper";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";

const ForumDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(new User());
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [change, setChange] = useState(false);
  const [forum, setForum] = useState({
    id: id,
    title: "",
    content: "",
    comments: [],
    category: "",
    user_id: 0,
    username: "",
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`forum/${id}`);
      const response = await axios.get("user", { withCredentials: true });
      const commentData = await axios.get(`comment/${id}`, {
        withCredentials: true,
      });

      setComments(commentData.data);
      setUser(response.data);
      setForum(data); // arrays of forums
    })();

    console.log(forum.comments);
  }, [change]);

  const remove = async () => {
    if (window.confirm("Confirm deletion")) {
      await axios.delete(`forums/${id}`);
      navigate("/forum");
    }
  };

  const edit = async () => {
    navigate(`/forums/edit/${id}`);
  };

  const addComment = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.post(
      `comment/${id}`,
      {
        comment: text,
      },
      { withCredentials: true }
    ); //to get the cookies to login properly

    setChange(!change);
    setText("");
  };

  return (
    <Wrapper>
      <div className="bg-blue-100 fill-blue-100 min-h-screen text-left w-screen py-10 px-7 md:px-20 pt-10">
        <div className="border-b-4 mb-5 border-cyan-800">
          <div className="flex flex-wrap  md:flex-nowrap  w-full justify-between">
            <div className="container text-cyan-900 sm:text-2xl md:text-4xl  font-bold">
              {forum?.title}
            </div>
            <div className="container align-middle mt-5 md:mt-0 text-right text-cyan-900 sm:text-xl md:text-3xl flex flex-row justify-end">
              <FcBusinessman className="scale-50 md:scale-100" size={50} />
              <p className="ml-4 self-center sm:text-2xl md:text-4xl">By {forum?.username}</p>
            </div>
          </div>

          <div className="container text-left py-10 text-cyan-900 sm:text-lg md:text-2xl break-all">
            {forum?.content}
          </div>
        </div>
        <div className="h3 mb-3 bg-cyan-900 rounded-lg py-2 px-3 flex flex-row">
          <AiOutlineComment size={40} />
          <h1 className="h3 ml-3 mb-3 fw-normal text-white font-bold">
            Comment section
          </h1>
        </div>
        <div>
          {comments.map((res: any) => {
            return (
              <div className="text-cyan-900 flex my-2 ml-2">
                <h1 className="font-bold pr-3"> {res.username}: </h1>
                <h1 key={res.id} className="break-all sm:text-lg md:text-2xl">
                  {" "}
                  {res.comment}
                </h1>
              </div>
            );
          })}
        </div>

        <main className="form-signin my-5 flex w-full flex-row">
          <form onSubmit={addComment} className="flex flex-row w-full">
            <input
              type="text"
              value={text}
              className="form-control textfield pr-10 bg-white-100 w-5/6 rounded-lg pl-2"
              placeholder="Comment Here"
              required
              onChange={(e) => setText(e.target.value)}
            />

            <button
              className="ml-10  px-4 py-2 w-1/10 w-100 btn btn-lg bg-cyan-900 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </main>
        <div className="w-full flex flex-row">
          {forum?.user_id === user.id ? (
            <button
              className="shadow-md w-1/3 shadow-red-900/50 px-4 py-2 w-100 btn btn-lg bg-red-500 rounded-lg"
              onClick={remove}
            >
              Delete Forum
            </button>
          ) : (
            <button
              disabled
              className="shadow-md  w-1/3 opacity-25 shadow-red-900/50 px-4 py-2 w-100 btn btn-lg bg-red-500 rounded-lg"
              onClick={remove}
            >
              Delete Forum
            </button>
          )}
          {forum?.user_id === user.id ? (
            <button
              className="shadow-md ml-4  w-1/3 shadow-yellow-900/50 px-4 py-2 w-100 btn btn-lg bg-yellow-500 rounded-lg"
              onClick={edit}
            >
              Edit forum
            </button>
          ) : (
            <button
              disabled
              className="shadow-md ml-4  w-1/3 shadow-yellow-900/50 opacity-25 px-4 py-2 w-100 btn btn-lg bg-yellow-500 rounded-lg"
              onClick={edit}
            >
              Edit Forum
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ForumDetail;
