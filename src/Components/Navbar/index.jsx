// import React from "react"
// import styled from "styled-components";
//
// const StyledH1 = styled.h1 `
//     color : red;
//     margin-top : 20px;
// `
//
// const Navbar = () =>{
//     return(
//         <StyledH1>
//             Navbar
//         </StyledH1>
//     )
// }
// export default Navbar;


// import React from "react"
// import styled from "styled-components";
//
// const StyledH1 = styled.h1`
//     color : ${({primary}) => (primary ? "red" : "blue")};
//     margin-top : ${({margin100}) => (margin100 ? "100px" : "20px")};
// `
//
// const Navbar = () => {
//     return (
//         <>
//             <StyledH1 primary margin100>Navbar</StyledH1>
//             <StyledH1>Navbar</StyledH1>
//         </>
//     )
// }
// export default Navbar;


// import React from "react"
// import {StyledH1} from "./NavbarElements";
//
// const Navbar = () => {
//     return (
//         <>
//             <StyledH1 primary margin100>Navbar</StyledH1>
//             <StyledH1>Navbar</StyledH1>
//         </>
//     )
// }
// export default Navbar;


import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from "react-scroll";
import {FaBars} from "react-icons/fa";
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" onClick={toggleHome}>MEGAJS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" onClick={toggleHome} smooth={true} duration={500} spy={true}
                                      offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="courses" smooth={true} duration={500} spy={true}
                                      offset={-80}>Courses</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog" smooth={true} duration={500} spy={true} offset={-80}>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" smooth={true} duration={500} spy={true} offset={-80}>Road
                                Map</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true}
                                      offset={-80}>Feature</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signin">Sign in</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}
export default Navbar;