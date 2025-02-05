
import './App.css';

import Loader from './2025-Components/Loader/Loader';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed import statement
import Navbar from './Components/Navbar/Navbar';

import HeroParallax from "./pages/Gallery/hero-parallax"
import Main from "./Components/Main/Main";
import TeamSection from "./Components/shubhansh files/TeamSection"
import Subh from "./Components/Subhanshpage/Subh";

import React, { useState, useEffect } from 'react';
import Buy from './Components/Buynow/Buy';
import Layout from './Components/Buynow/Layout';
import ScrollToTop from './ScrollToTop';

function App() {

  const productsData = [
    { title: '', link: '', thumbnail: "https://imgur.com/QrWLjTB.png" },  
    { title: '', link: '', thumbnail: "https://imgur.com/QEeDovI.png" },
    { title: '',  link: '',thumbnail: "https://imgur.com/kRVZARb.png"},
    { title: '', link: '', thumbnail: "https://imgur.com/d25Kuyo.png" }, 
    { title: '', link: '', thumbnail: "https://imgur.com/2ynO99M.png" },

    { title: '', link: '', thumbnail: "https://imgur.com/ngDuRXT.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/Ayedsgw.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/uXrqoiW.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/y3Ubqhd.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/BVndh4I.png" },

    { title: '', link: '', thumbnail: "https://imgur.com/0ThBbnS.png" },
    {title:  '', link:'',  thumbnail: "https://imgur.com/vYuW7YU.png"},
    { title: '', link: '', thumbnail: "https://imgur.com/c6hDt12.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/a8OJfU3.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/ba4Qw2V.png" },

    { title: '', link: '', thumbnail: "https://imgur.com/pBe9EFx.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/uPjVrt5.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/7rLLq7o.png" },
    { title: '',  link: '',thumbnail: "https://imgur.com/huU1heA.png"}, 
    { title: '', link: '', thumbnail: "https://imgur.com/ena3CxK.png" },

    { title: '', link: '', thumbnail: "https://imgur.com/XFAP3FN.png" }, 
    { title: '', link: '', thumbnail: "https://imgur.com/dCvMOYS.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/4Ly1ZeB.png" }, 
    { title: '',  link: '',thumbnail: "https://imgur.com/Dz0uIL2.png"},
    { title: '',  link: '',thumbnail: "https://imgur.com/1CaQccl.png"},

    { title: 'Aryan Vijayvargiya', link: '', thumbnail: "https://imgur.com/Qebc43j.png" },
    { title: 'Dr. Ragini Makkhar', link: '', thumbnail: "https://imgur.com/azvGCcl.png" },
    { title: 'Abhishek Mishra', link: '', thumbnail: "https://imgur.com/VB6xoI2.png" },
    { title: 'Bhaskar Indrakanti', link: '', thumbnail: "https://imgur.com/iV9tnue.png" },
    { title: 'Akshay Singh', link: '', thumbnail: "https://imgur.com/L2tS0Cz.png" },
    

    // Add more product data as needed
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  


  return (
    <div className="App">
       <Loader/>
        <div className='hey'>
          <Router>
          <ScrollToTop/>
            <Navbar />
            <Layout>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/gallery' element={<HeroParallax products={productsData} />} />
              <Route path='/sponsors' element={<Subh />} />
              <Route path='/teams-2024' element={<TeamSection />} />
              <Route path='/teams-2023' element={<TeamSection />} />
              <Route path='/teams-2025' element={<TeamSection />} />
            </Routes>
            </Layout>
            <Footer />
          </Router>
        </div>
      
    </div>
  );
}

export default App;