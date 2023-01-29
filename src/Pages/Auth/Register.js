import React from 'react'
import { Buttons } from '../../Components/AuthComponents/Buttons'
import NoteTextForm from '../../Components/AuthComponents/NoteTextForm'
import {RememberCheckbox} from '../../Components/AuthComponents/RememberCheckbox'
import { FlexBETWEEN, FlexBoxSelect } from '../../Components/Footer/style'
import { FLEXCOULOM, Forms, HR, INPUT, INPUTBorder, INPUTTwo, Labels, Option, Select } from '../../GlobalStyle/AuthStyle'
import TITLE from '../../Components/TitleComponent'

function Register() {
    return (
        <Forms >
            <TITLE title={"Register"} />
            <FlexBETWEEN>
                <FLEXCOULOM>
                    <Labels>Name </Labels>
                    <INPUTTwo margin ={"15px"}placeholder='Type here' />
                </FLEXCOULOM>
                <FLEXCOULOM>
                    <Labels>Surname </Labels>
                    <INPUTTwo placeholder='Type here' />
                </FLEXCOULOM>
            </FlexBETWEEN>
            <FLEXCOULOM>
                <Labels>Your e-mail </Labels>
                <INPUT placeholder='example@mail.com' />
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
                <INPUT placeholder='At least 6 characters.' />
            </FLEXCOULOM>
            <FLEXCOULOM>
                <Labels>Repeat password</Labels>
                <INPUT placeholder='Type here' />
            </FLEXCOULOM>
            <Buttons
                color="#FFFF"
                name={"Register now"} />
           
            <RememberCheckbox margin={"1"}>
                <NoteTextForm text={"I agree with "} color="#0D6EFD"
                    name={"Terms and Conditions "} />
            </RememberCheckbox>
            <hr></hr>
            <NoteTextForm link={"/login"} fontSizes ={"17px"} fontSize ={"19px"} fontWeight={"600"} marginRight={".3"} margin={"1"} text={"Already have an accaunt? "} colors={"#606060"} color="#0D6EFD"
                name={"Logn in "} />
        </Forms>
    )
}

export default Register
