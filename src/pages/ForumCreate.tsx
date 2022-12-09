import React, { SyntheticEvent, useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { User } from "../models/user";
import { useNavigate } from "react-router-dom";

function ForumCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(new User());
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("user", { withCredentials: true });

      setUser(data);
    })();
  }, []);

  const onSelect = (event: any) => {
    event.preventDefault();
    setCategory(event?.target.value)
  }

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.post(
      "forums",
      {
        title,
        content,
        category,
        comments,
        user_id: user?.id,
        username: user?.name,
      },
      { withCredentials: true }
    ); //to get the cookies to login properly

    console.log(response.data);
    navigate(`/forum`);
  };
  return (
    <Wrapper>
      <div className="bg-blue-100 text-left fill-blue-100 min-h-screen w-screen px-10 pt-10">
        <div className="container text-cyan-900 text-5xl font-extrabold font-mono ">Forum Create</div>
        <main className="form-signin">
          <form onSubmit={onSubmit}>
            <h1 className="container text-cyan-800 text-2xl font-bold font-mono my-4">Great! It's time for you to make your own thread</h1>
            <div className="flex flex-col gap-8 mt-5">
            <input
              type="text"
              className="enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg "
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              value={content}
              aria-multiline
              className="enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg "
              placeholder="Content"
              required
              onChange={(e) => setContent(e.target.value)}
            />

            <select value={category} onChange={onSelect} className="enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg ">
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
                <option selected value="politics">Politics</option>
                <option value="education">Education</option>
            </select>

            <button className="shadow-md shadow-cyan-900/50 px-4 py-2 w-100 btn btn-lg bg-cyan-900 rounded-lg" type="submit">
              Submit
            </button>
            </div>
            
          </form>
        </main>
      </div>
    </Wrapper>
  );
}

export default ForumCreate;
