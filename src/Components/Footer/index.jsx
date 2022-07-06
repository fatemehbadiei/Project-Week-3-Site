import React from "react";
import {FooterContainer ,FooterWrap ,FooterLinksContainer ,FooterLinksWrapper ,FooterLinksItem ,FooterLinkTitle ,FooterLink ,SocialMediaContainer ,SocialMediaWrap ,SocialLogo ,WebsiteRights ,SocialIcons ,SocialIconsLink} from "./FooterElements";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }


    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="home">Home</FooterLink>
                            <FooterLink to="courses">Courses</FooterLink>
                            <FooterLink to="blog">Blog</FooterLink>
                            <FooterLink to="roadmap">Road Map</FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="home">Home</FooterLink>
                            <FooterLink to="courses">Courses</FooterLink>
                            <FooterLink to="blog">Blog</FooterLink>
                            <FooterLink to="roadmap">Road Map</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="home">Home</FooterLink>
                            <FooterLink to="courses">Courses</FooterLink>
                            <FooterLink to="blog">Blog</FooterLink>
                            <FooterLink to="roadmap">Road Map</FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="home">Home</FooterLink>
                            <FooterLink to="courses">Courses</FooterLink>
                            <FooterLink to="blog">Blog</FooterLink>
                            <FooterLink to="roadmap">Road Map</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>MEGAJS</SocialLogo>
                        <WebsiteRights>MEGAJS copy rights 2022</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href="/">
                                <FaFacebook/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/">
                                <FaYoutube/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/">
                                <FaInstagram/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/">
                                <FaTwitter/>
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;