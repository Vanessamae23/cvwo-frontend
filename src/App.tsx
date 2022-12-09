import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {Forum }from './pages/Forum';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import ForumDetail from './pages/ForumDetail';
import ForumCreate from './pages/ForumCreate';
import ForumEdit from './pages/ForumEdit';
import Onboard from './pages/Onboard';
import { ForumCategory } from './pages/ForumCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
                  <Route path="/onboard" element={<Onboard />}></Route>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/forum" element={<Forum />}></Route>
                  <Route path="/forums/:id" element={<ForumDetail />}></Route>
                  <Route path="/forumsCategory/:category" element={<ForumCategory />}></Route>
                  <Route path="/forums/edit/:id" element={<ForumEdit />}></Route>
                  <Route path="/forum/create" element={<ForumCreate />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/login" element={<Login />}></Route>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
