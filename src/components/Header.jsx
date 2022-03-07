import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF,
    FaInstagram,
    FaPinterestP } from "react-icons/fa";
import styled from 'styled-components'
import Sidebar from './Sidebar';



//STYLES
const NavSection = styled.header`
width: 100%;
height: 155px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: fixed;
border-bottom: solid 2px #6a040f;
background: #fff;
z-index: 5000;
`

const NavLinks = styled.section`

backgound: red;
padding-top: 15px;
margin-left: 15px;
font-size: 18px;
a {
  margin:0 10px;
  text-decoration: none;  
  color: #6a040f;
  &:hover{
    color: green;
    transition: 1s;
  }
}

@media only screen and (max-width: 768px) {
  display: none;
}
`


const Logo = styled.section`
font-size: 40px;
 a{
   color: #2d6a4f;
   text-decoration: none;
}

@media only screen and (max-width: 768px) {
display: none;
}
`

const SmIcons = styled.section`
font-size: 20px;
width: 100px;
margin-left: 15px;
margin-top: 10px;
 a {
   margin: 2px;
   color: #6c757d;
   &:hover{
    color: green;
    transition: 1s;
  }
 }
 @media only screen and (max-width: 768px) {
  display: none;
}
`
//END STYLES





const Header = () => {
   
  return (
    <NavSection>

 <Logo>
 <Link to="/">
   The Running Quail 
   </Link>
   </Logo> 
<Sidebar />
     <NavLinks>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/Shop">Shop</Link>
       <Link to="/JtLife">Jt Life</Link>
       <Link to="/ArtStudio">Art Studio</Link>
   
     </NavLinks>

          <SmIcons> 
          <a href="http://pinterest.com"> 
        <FaPinterestP />
        </a>
        <a href="http://facebook.com"> 
        <FaFacebookF />
        </a>
      <a href="https://www.instagram.com"> 
        <FaInstagram />
        </a>
        </SmIcons>
     </NavSection>
  )
}

export default Header