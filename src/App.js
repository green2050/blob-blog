import React from 'react'
import './App.css';
import Home from './routes/Home/Home';
import Blog from './routes/Blog/Blog';
import { Routes, Route } from 'react-router-dom';

const App = () => (
    
    <div className='container'>
     <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/blog/:id" element={< Blog />}/>
      </Routes>
    </div>
  
)

export default App;
