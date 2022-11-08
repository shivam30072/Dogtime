import { Route, Routes, Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import Navbar from "./files/Navbar"
import './main.css'
import Content from "./files/Content";
import Dog1 from "./files/Dog1";
// 

function App() {
const [hamburgur, sethamburgur] = useState(false);

const handleClick =  () => {
    sethamburgur(!hamburgur);
}



  return (
    
    <div className="App">
         <Navbar handleclick = {handleClick} burgur = {hamburgur}/>
         
   
      <Routes>
         <Route path="/" element = {<Content />} />
         <Route path="/afrador" element = {<Dog1 />} />
      </Routes>
    </div>
  );
}

export default App;
