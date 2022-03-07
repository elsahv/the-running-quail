import React from 'react'
import styled from 'styled-components'


//STYLES

const Wrapper = styled.footer`
position: fixed;
bottom: 0;
width: 100%;

`


const FooterSection = styled.section`
height: 110px;
border-top: solid 3px black;
display: flex;
justify-content: space-around;
align-items: center;
background: gray;
@media only screen and (max-width: 768px) {
  height: 200px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
}
`


const FooterMenu1 = styled.ul`
`
const FooterMenu2 = styled.ul`
@media only screen and (max-width: 768px) {
padding-left: 13px;
}
`
const FooterMenuTitle = styled.h4`
@media only screen and (max-width: 768px) {
font-size: 13px;
}
`
const FooterMenuItem = styled.li`
list-style: none;
color: black;
a{
}

@media only screen and (max-width: 768px) {
  padding: 3px;
}
`


//END STYLES



const Footer = () => {
  return (
  <Wrapper>
    <FooterSection>


    <FooterMenu1>
    <FooterMenuTitle>The Indoor Jungle Project- Copyright @2022</FooterMenuTitle>
      <a href="/about">
    <FooterMenuItem>Contact Link</FooterMenuItem> 
    </a>
    <a href="/archive">
    <FooterMenuItem>Archive</FooterMenuItem> 
    </a>
    </FooterMenu1>




    <FooterMenu2>
    <FooterMenuTitle>
      External Links
      </FooterMenuTitle>
        <a href="http://elsahovey.com">
      <FooterMenuItem>Elsa Hovey- Development/ Design- copyright@ 2022</FooterMenuItem> 
      </a>

      <a href="/#">
      <FooterMenuItem>The Running Quail- Copyright @2022</FooterMenuItem> 
      </a>
      </FooterMenu2>



  </FooterSection>
  </Wrapper>
  )
}

export default Footer