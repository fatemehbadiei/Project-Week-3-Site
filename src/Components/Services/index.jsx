import React from "react";
import {ServicesContainer ,ServicesH1 ,ServicesWrapper ,ServicesCard ,ServicesIcon ,ServicesIH2 ,ServicesP} from "./ServicesElements";
import Icon1 from "../../Images/svg-1.svg";
import Icon2 from "../../Images/svg-3.svg";
import Icon3 from "../../Images/svg-4.svg";

const Services = () =>{
    return(
        <ServicesContainer id="services">
            <ServicesH1>Our courses Feature</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesIH2>Project Oriented</ServicesIH2>
                    <ServicesP>Use many projects for learning better programming</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesIH2>Free Courses</ServicesIH2>
                    <ServicesP>Free courses for learning free without stress to pay</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesIH2>VIP Account</ServicesIH2>
                    <ServicesP>Access all courses with paying 10$ per month</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;