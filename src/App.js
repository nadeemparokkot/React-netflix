import './App.css';
import React from "react"
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
