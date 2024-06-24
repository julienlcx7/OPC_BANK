import React from 'react';
import './Main.css';  // Optional: include if you have specific styles for this component
import Banner from '../../component/Banner/Banner';
import Features from '../../component/Features/Features';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
function Main() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <Features/>
      <Footer/>
    </main>
  );
}

export default Main;
