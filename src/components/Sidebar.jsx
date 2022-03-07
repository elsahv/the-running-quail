import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import styled from 'styled-components'



const Styles = styled.div`
 position: fixed;
.nav-menu {
  background-color: #fff;
  width: 100%;
  height: 60vh; 
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 100%;
  transition: 850ms;
  border-bottom: solid 2px green;
}

.nav-menu.active {
  right: 0;
  transition: 350ms;
}

.nav-text {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
}

.nav-text a {
  text-decoration: none;
  color: #2d6a4f;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
} 

.nav-text a:hover {
  background-color: #1a83ff;
}

.nav-menu-items {
  width: 100%;
}

.navbar-toggle {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
}

span {  
  margin-left: 16px;
}
`



//START STYLES

const Header = styled.div`
display: flex;

`


const MenuBarsOpen = styled.div`
font-size: 1.5rem;
background: #fff;
display: none;
color: maroon;
cursor: pointer;

@media only screen and (max-width: 768px) {
  display: flex;  
  justify-content: flex-end;
  padding: 5px;
}
` 

const MenuBarsClose = styled.div`
color: maroon;
font-size: 2rem;
 width: 100%;
 display: flex;
 justify-content: flex-end;
 padding: 10px;
 cursor: pointer;
`

const Logo = styled.h1`
display: none;
font-size: 18px;
text-align: left;
padding: 10px;
z-index: 10000;
a {
  color: #2d6a4f;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
display: block;
}

`

//END STYLES


 



const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <Styles>
     <Header>

     <Logo>
        <Link to="/">
        The Indoor Jungle Project
        </Link>
        </Logo>

      <MenuBarsOpen>
     <FaBars onClick={showSidebar} /> 
     </MenuBarsOpen>
   
        </Header>

     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">

          <MenuBarsClose>
              <AiOutlineClose />
          </MenuBarsClose>

          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
       
     </nav>
     </Styles>
     

     </>

  )
}

export default Navbar