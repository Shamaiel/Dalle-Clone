import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    
    <header className="w-full flex justify-between items-center bg-purple-500 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] shadow-md">
      <Link to="/">
        <img src="https://envisage.nz/wp-content/uploads/2023/02/coNTrolAi_cyborg_holding_a_magic_flower_romantic_pose_neon.jpg" alt="logo" className="w-12 h-auto rounded" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#000000] text-white px-4 py-2 rounded-md">Create</Link>
    </header>



    <main className="sm:p-8 px-4 py-8 w-full bg-black min-h-[calc(100vh-73px)]"> 
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>

  </BrowserRouter>
);

export default App;
