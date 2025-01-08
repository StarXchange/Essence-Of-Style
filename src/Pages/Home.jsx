import React from "react";
// import Hero from "../components/Hero/Hero"; 
import Products from "../components/Products/Products";
import Register from "../components/Register/Register";


function Home() {
    return (
      <div className="App">
        
        {/* <Hero /> */}
        <Products />
        <Register />
      </div>
    );
  }
  
  export default Home;