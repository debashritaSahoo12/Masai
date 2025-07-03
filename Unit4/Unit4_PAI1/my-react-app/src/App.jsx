import React from "react";
import {Routes,Route, BrowserRouter} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home'
import Tasks from './pages/Tasks';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
