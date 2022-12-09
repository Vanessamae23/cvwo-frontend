import React, { SyntheticEvent, useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'
import axios from 'axios'
import { User } from '../models/user';
import { useNavigate, useParams } from 'react-router-dom';

function ForumEdit(props: any) {
    const {id} = useParams();
    const [content, setContent] = useState('');
    const [user, setUser] = useState(new User());
    const navigate = useNavigate();
    const [forum, setForum] = useState({
        id: id,
        title: '',
        content: '',
        comments: [],
        category: '',
        user_id: 0,
        username: ''
    });
   
    useEffect(() => {
        (
             async() => {
            const {data} = await axios.get(`forum/${id}`);
            const response = await axios.get('user', {withCredentials: true});
           //console.log(data)
           setUser(response.data);
            setForum(data); // arrays of forums
        }
        )();
        
        
    }, [])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.put(`forums/${id}`, {
            title: forum.title,
            content,
            category: forum.category,
            comments: forum.comments,
            user_id: user?.id,
            username: user?.name
        }, {withCredentials: true}) //to get the cookies to login properly

        console.log(response.data);
        navigate(`/forum`);
    }
  return (
    <Wrapper>
          <div className="bg-blue-100 text-left fill-blue-100 min-h-screen w-screen px-10 pt-10">
        <div className="container text-cyan-900 text-5xl font-extrabold font-mono ">Forum Edit</div>
        
        <main className="form-signin">
        <form onSubmit={onSubmit}>
        <h1 className="container text-cyan-800 text-2xl font-bold font-mono my-4">Don't worry! Editing is Possible. Only content tho</h1>
        <div className="flex flex-col gap-8 mt-5">
        <input readOnly disabled type="text" className="read-only:bg-gray-100 enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg " placeholder="Title"
            value={forum.title}
        />

        <textarea value={content} aria-multiline className="enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg " placeholder="Content" required
            onChange={e => setContent(e.target.value)}
        />

<input readOnly disabled type="text" className="read-only:bg-gray-100 enabled:hover:border-cyan-900 textfield py-4 px-3 rounded-lg " placeholder="Category" 
            value={forum.category}
        />

        <button className="shadow-md shadow-cyan-900/50 px-4 py-2 w-100 btn btn-lg bg-cyan-900 rounded-lg" type="submit">Confirm edit</button>
        </div>
    </form>
    </main>
    </div>
    </Wrapper>
    
  )
}

export default ForumEdit