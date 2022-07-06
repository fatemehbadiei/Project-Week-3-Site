// import styled from "styled-components";

// export const StyledH1 = styled.h1`
//     color : ${({primary}) => (primary ? "red" : "blue")};
//     margin-top : ${({margin100}) => (margin100 ? "100px" : "20px")};
// `


import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav) ? "#000" : "transparent"};
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`


export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    position: absolute;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
  }
`


export const FaBars = styled.div`

`


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  
  &.active{
    border-bottom: 3px solid #fab209;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #fab209;
  text-decoration: none;
  color: #010606;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  &:hover{
    transition: all .2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`