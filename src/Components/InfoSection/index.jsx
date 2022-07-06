import React from "react";
import {Button} from "../ButtonElements";
import {InfoContainer ,InfoWrapper ,InfoRow ,Column1 ,TextWrapper ,TopLine ,Heading ,Subtitle ,BtnWrapper ,Column2 ,ImgWrap ,Img} from "./InfoElements";



const InfoSection = ({id ,lightBg,topLine,heading,description,buttonLabel,imgStart,img,alt,primary,dark}) =>{
    return(
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightBg={lightBg}>{heading}</Heading>
                            <Subtitle lightBg={lightBg}>{description}</Subtitle>
                            <BtnWrapper>
                                <Button primary={primary} dark={dark} to="home">{buttonLabel}</Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;