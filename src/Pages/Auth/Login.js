import React, { useState } from 'react'
import { Buttons, ContinueButtons } from '../../Components/AuthComponents/Buttons'
import TITLE from '../../Components/TitleComponent'
import { Divider, FLEXCOULOM, Forms, HR, INPUT, INPUTEys, Labels, Paragrph } from '../../GlobalStyle/AuthStyle'
import FaceBook from '../../Assets/icon (1).png'
import google from '../../Assets/icon.png'
import NoteTextForm from '../../Components/AuthComponents/NoteTextForm'
import { FlexBETWEEN } from '../../Components/Footer/style'
import { AnckorTest } from '../../GlobalStyle/Global'
import {Remember, RememberCheckbox} from '../../Components/AuthComponents/RememberCheckbox'
import Vector from '../../Assets/Vector.svg'
import eyeSlash from '../../Assets/eyeSlash.svg'
import { Image } from '../../GlobalStyle/Home/SubscribeStyle'
import SubFooter from '../../Components/Footer/SubFooter'

function Login() {
    const [isPassShow, setPassShow] = useState(false);
    const passwordVisibility = () => {
        setPassShow({ isPassShow: !isPassShow })
    };

    return (
        <>
        <Forms margin={"5rem auto 3.4rem auto"}>
            <TITLE title={"Sign in"} />
            <FLEXCOULOM>
                <Labels>Email or phone</Labels>
                <INPUT placeholder='Email or phone' />
            </FLEXCOULOM>
            <FLEXCOULOM>
                <FlexBETWEEN>
                    <Labels>Password</Labels>
                    <AnckorTest color="#0D6EFD"> Forgot Password </AnckorTest>
                </FlexBETWEEN>
                <INPUTEys placeholder='Type here'
                    type={(isPassShow) ? "text" : "password"}

                />
                <Image
                position={"absolute"}
                right={"40%"}
                top={"39%"}
                src={Vector} alt=" " onClick={passwordVisibility}   />
 {/* src={isPassShow ? eyeSlash : Vector} */}
            </FLEXCOULOM>
            <RememberCheckbox>
                <Labels>Remember me</Labels>
            </RememberCheckbox>
            <Buttons
                color="#FFFFFF"
                name={"Login"} />
            <Divider >
                <HR />
                <Paragrph>Or</Paragrph>
                <HR />
            </Divider>
            <ContinueButtons
                name={"Continue with Google"}
                background="#FFFFFF"
                color="#606060"
                image={google} />
            <ContinueButtons
                name={"Continue with Facebook"}
                color="#FFFFFF"
                background="#4267B2"
                image={FaceBook} />
            <br></br>
            <NoteTextForm link={'/register'} text={"Don’t have an account?"} color="#0D6EFD"
                name={"Register now "} />
        </Forms>
 
        </>
    )
}

export default Login
