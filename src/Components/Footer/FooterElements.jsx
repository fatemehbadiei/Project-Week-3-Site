import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
`


export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 48px 24px;
  max-width: 1100px;
`


export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`


export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`


export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  width: 160px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`


export const FooterLinkTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
`


export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
    color: #fab209;
    transition: 0.3s ease-out;
  }
`


export const SocialMediaContainer = styled.div`
  max-width: 100%;
  width: 1000px;
`


export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;


  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  justify-self: start;
  align-items: center;
  display: flex;
  margin-bottom: 16px;
  font-weight: bold;
`


export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`


export const SocialIconsLink = styled.a`
  font-size: 24px;
  color: #fff;
`