import React from "react";
import {SidebarContainer ,Icon ,CloseIcon ,SidebarMenu ,SidebarLink ,SideBtnWrap ,SidebarRoute ,SidebarWrapper} from "./SidebarElements";

const Sidebar = ({isOpen , toggle}) =>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink onClick={toggle} to="/">Home</SidebarLink>
                   <SidebarLink onClick={toggle} to="courses">Courses</SidebarLink>
                   <SidebarLink onClick={toggle} to="blog">Blog</SidebarLink>
                   <SidebarLink onClick={toggle} to="roadmap">Road Map</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/signin">Sign in</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;