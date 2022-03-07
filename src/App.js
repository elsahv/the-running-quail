import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

 
//COMPONENTS
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import AllPosts from "./components/AllPosts.jsx";
// import OnePost from "./components/OnePost.jsx";


//PAGE 
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import JtLife from './pages/JtLife'
import ArtStudio from './pages/ArtStudio'



// import Archive from './pages/Archive'
// import FilteredPosts from './pages/FilteredPosts'
  

export default function App() {
  return <>
    <BrowserRouter>
      

    <Header />
        <> 
        <Routes>
          {/* <Route path="/blog" element={<AllPosts />} />
          <Route path="/:slug" element={<OnePost />} />
        
          <Route path="/archive" element={<Archive />} />  
          <Route path="/blog/:slug/*" element={<FilteredPosts />} />   */}

         <Route path="/" element={<Home />} /> 
         <Route path="/about" element={<About />} /> 
         <Route path="/Shop" element={<Shop />} /> 
         <Route path="/JtLife" element={<JtLife />} /> 
         <Route path="/ArtStudio" element={<ArtStudio />} /> 
        </Routes>
        </>
        
        <Footer />
      </BrowserRouter>

  </>;
}
