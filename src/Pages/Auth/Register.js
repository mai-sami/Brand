import React from 'react'
import { Buttons } from '../../Components/AuthComponents/Buttons'
import NoteTextForm from '../../Components/AuthComponents/NoteTextForm'
import { RememberCheckbox } from '../../Components/AuthComponents/RememberCheckbox'
import { FlexBETWEEN, FlexBoxSelect } from '../../Components/Footer/style'
import { FLEXCOULOM, Forms, INPUT, INPUTBorder, Labels, Option, Select } from '../../GlobalStyle/AuthStyle'
import TITLE from '../../Components/TitleComponent'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import ErrorMessages from '../../Components/ErrorMessage/ErrorMessages'
import { registerSchema } from './Valedation'
import Spinner from '../../Components/Spinners/Spinner'
import UseAuthReducers from '../../Hooks/useAuthReducers'
import { ToastContainer } from 'react-toastify'
import { DivSpinner } from '../../GlobalStyle/ErrorsStyle'
 
function Register() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const { RegisterAction, isLoading } = UseAuthReducers()

    const onSubmit = (e) => {
        const name = getValues("name")
        const email = getValues("email")
        const password = getValues("password")
        const userData = {
            name,
            email,
            password,
        }
         RegisterAction(userData)
    }
    return (
        <>
        <ToastContainer />

            {isLoading ? <DivSpinner> <Spinner /></DivSpinner> :

                <Forms onSubmit={handleSubmit(onSubmit)} width={"24%"}>
                    <TITLE title={"Register"} />
                    <FlexBETWEEN>
                        <FLEXCOULOM>
                            <Labels>Name </Labels>
                            <INPUT
                                width={"90%"}
                                {...register("name")}
                                placeholder='Type here'
                                border={errors?.name ? "red" : "#bababaa0"}

                            />
                            <ErrorMessages>
                                {errors.name && <ErrorMessages>{errors.name.message}</ErrorMessages>}
                            </ErrorMessages>
                        </FLEXCOULOM>
                        <FLEXCOULOM>
                            <Labels>Surname </Labels>
                            <INPUT
                                {...register("Surname")}
                                border={errors?.Surname ? " red" : "#bababaa0"}
                                placeholder='Type here' />
                            <ErrorMessages>
                                {errors.Surname && <ErrorMessages>{errors.Surname.message}</ErrorMessages>}
                            </ErrorMessages>
                        </FLEXCOULOM>
                    </FlexBETWEEN>
                    <FLEXCOULOM>

                        <Labels>Your e-mail </Labels>
                        <INPUT
                            placeholder='example@mail.com'
                            {...register("email")}
                            border={errors?.email ? " red" : "#bababaa0"}

                        />
                        <ErrorMessages>
                            {errors.email && <ErrorMessages>{errors.email.message}</ErrorMessages>}
                        </ErrorMessages>
                    </FLEXCOULOM>
                    <FLEXCOULOM>
                        <Labels>Phone </Labels>
                        <FlexBoxSelect>
                            <Select borderRight={"1px solid #E0E0E0"}
                            >
                                <Option>UZ +998</Option>
                            </Select>
                            <INPUTBorder placeholder='00-000-00-00' />
                        </FlexBoxSelect>
                    </FLEXCOULOM>
                    <FLEXCOULOM>
                        <Labels>Password</Labels>
                        <INPUT placeholder='At least 6 characters.'
                            {...register("password")}
                            border={errors?.password ? "red" : "#bababaa0"}

                        />
                        <ErrorMessages>
                            {errors.password && <ErrorMessages>{errors.password.message}</ErrorMessages>}
                        </ErrorMessages>
                    </FLEXCOULOM>
                    <FLEXCOULOM>
                        <Labels>Repeat password</Labels>
                        <INPUT placeholder='Type here'
                            {...register("confirmPassword")}
                            border={errors?.confirmPassword ? "red" : "#bababaa0"}

                        />
                        <ErrorMessages>
                            {errors.confirmPassword && <ErrorMessages>{errors.confirmPassword.message}</ErrorMessages>}
                        </ErrorMessages>
                    </FLEXCOULOM>
                    <Buttons
                        color="#FFFF"
                        name={"Register now"}
                    />

                    <RememberCheckbox margin={"1"}>
                        <NoteTextForm text={"I agree with "}
                            color="#0D6EFD"
                            checked={true}
                            name={"Terms and Conditions "} />
                    </RememberCheckbox>
                    <hr></hr>
                    <NoteTextForm link={"/login"} fontSizes={"17px"} fontSize={"19px"} fontWeight={"600"} marginRight={".3"} margin={"1"} text={"Already have an accaunt? "} colors={"#606060"} color="#0D6EFD"
                        name={"Logn in "} />
                </Forms>
              }  
          
        </>
    )
}

export default Register
