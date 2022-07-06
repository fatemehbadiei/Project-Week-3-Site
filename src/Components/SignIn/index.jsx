import React from "react";
import {Container ,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text} from "./SignInElements";

const SignInForm = () =>{
    return(
        <Container>
            <FormWrap>
                <Icon to="/"/>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in your account</FormH1>
                            <FormLabel htmlfor="for">Email</FormLabel>
                            <FormInput type="email" reqiured/>
                            <FormLabel htmlfor="for">Password</FormLabel>
                            <FormInput type="password" reqiured/>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forget Password</Text>
                        </Form>
                    </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignInForm;