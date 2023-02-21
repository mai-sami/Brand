import React, { useState } from 'react'
import { Buttons, ContinueButtons } from '../../Components/AuthComponents/Buttons'
import TITLE from '../../Components/TitleComponent'
import { Divider, FLEXCOULOM, Forms, HR, INPUT, Labels, Paragrph } from '../../GlobalStyle/AuthStyle'
import FaceBook from '../../Assets/icon (1).png'
import google from '../../Assets/icon.png'
import NoteTextForm from '../../Components/AuthComponents/NoteTextForm'
import { FlexBETWEEN } from '../../Components/Footer/style'
import { AnckorTest } from '../../GlobalStyle/Global'
import { RememberCheckbox } from '../../Components/AuthComponents/RememberCheckbox'
import Vector from '../../Assets/Vector.svg'
import eyeSlash from '../../Assets/eyeSlash.svg'
import { Image } from '../../GlobalStyle/Home/SubscribeStyle'
import UseAuthReducers from '../../Hooks/useAuthReducers'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './Valedation'
import ErrorMessages from '../../Components/ErrorMessage/ErrorMessages'
import { ToastContainer } from 'react-toastify'
import Spinner from '../../Components/Spinners/Spinner'
import { DivSpinner } from '../../GlobalStyle/ErrorsStyle'
import INPUTFIELS from '../../Components/InputComponent/INPUTFIELS'

function Login() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const [isPassShow, setPassShow] = useState(false);
    const { loginAction, isLoading } = UseAuthReducers()
    // const context = useAuthtContext()
    const passwordVisibility = () => {
        setPassShow(!isPassShow)
    };
    const onSubmit = () => {
        const email = getValues("email")
        const password = getValues("password")
        const userData = {
            email,
            password,
        }
        loginAction(userData)
    }
    return (
        <>
            <ToastContainer />
            {isLoading ? <DivSpinner> <Spinner /></DivSpinner> :
                <Forms width={"24%"} onSubmit={handleSubmit(onSubmit)} margin={"5rem auto 3.4rem auto"}>
                    <TITLE title={"Sign in"} />
                    <ToastContainer />

                    <FLEXCOULOM>
                        <Labels>Email or phone</Labels>
                        <INPUTFIELS
                            // onChange={() => register("email")}
                            // {...register("email")}
                            register={register}
                            placeholder='Email or phone'
                            border={errors?.email ? " red" : "green"}
                            name="email"
                            type="email"
                        />
                        <ErrorMessages>
                            {errors.email && <ErrorMessages>{errors.email.message}</ErrorMessages>}
                        </ErrorMessages>
                    </FLEXCOULOM>
                    <FLEXCOULOM>
                        <FlexBETWEEN>
                            <Labels>Password</Labels>
                            <AnckorTest color="#0D6EFD"> Forgot Password </AnckorTest>
                        </FlexBETWEEN>
                        <INPUT placeholder='Type here'
                            {...register("password")}
                            type={isPassShow ? "text" : "password"}
                            border={errors?.password ? "red" : "green"}

                        />  <ErrorMessages>
                            {errors.password && <ErrorMessages>{errors.password.message}</ErrorMessages>}
                        </ErrorMessages>
                        <Image
                            position={"absolute"}
                            right={"42%"}
                            width={"30"}
                            height={"28px"}
                            top={"39%"}
                            src={isPassShow ? eyeSlash : Vector}
                            alt=" " onClick={passwordVisibility} />
                    </FLEXCOULOM>
                    <RememberCheckbox>
                        <Labels>Remember me</Labels>
                    </RememberCheckbox>
                    <Buttons
                        color="#FFFFFF"
                        name={"Login"}
                    />
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
            }
        </>
    )
}

export default Login


