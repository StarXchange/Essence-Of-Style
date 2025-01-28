import React from "react";
import "../App.css";
import Hero from "../components/Hero"; 
import LatestCollection from '../components/LatestCollection';
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from '../components/NewsletterBox';

function Home() {
    return (
      <div className="App">
        
        <Hero /> 
        <LatestCollection  />
        <BestSeller/>
        <OurPolicy />
        <NewsletterBox />
      </div>
    );
  }
  
  export default Home;