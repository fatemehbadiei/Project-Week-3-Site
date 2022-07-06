import React ,{useState} from "react";
import Video from "../../Videos/video.mp4"
import {HeroContainer ,HeroBg , VideoBg ,HeroContent ,HeroH1 ,HeroP ,HeroBtnWrapper ,ArrowForward ,ArrowRight} from "./HeroElements";
import {Button} from "../ButtonElements";


const HeroSection = () =>{

    const [hover , setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }
    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay muted loop src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Js Is The King</HeroH1>
                <HeroP>Learning Js And Frameworks</HeroP>
                <HeroBtnWrapper>
                    <Button to="/" primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover}>Get Started {hover ?<ArrowForward/> :<ArrowRight/>} </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;