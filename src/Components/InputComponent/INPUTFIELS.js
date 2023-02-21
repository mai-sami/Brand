import React from 'react'
import { INPUT } from '../../GlobalStyle/AuthStyle'

function INPUTFIELS({ name, onChange, value, placeholder, type, margin, rest = () => { }, register }) {
    return (
        <>
            <INPUT
                name={name}
                // onChange={onChange}
                // value={value}
                placeholder={placeholder}
                type={type}
                margin={margin}
                // {...rest(name)}
                {...register(name)}
            />
        </>
    )
}

export default INPUTFIELS
