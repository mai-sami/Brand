import React from 'react'
import { ButoonLogin, ContinueBUTTON, DivButton } from '../../GlobalStyle/ButtonsStyles'

export function Buttons({ onClick, margin, border, background, name, color, width, marginTop, padding, borderRuidus }) {
    return (

        <ButoonLogin
            padding={padding}
            borderRuidus={borderRuidus}
            marginTop={marginTop}
            width={width}
            color={color}
            background={background}
            border={border}
            margin={margin}
            onClick={onClick}
            type="submit"
        >{name}</ButoonLogin>
    )
}
export function ContinueButtons({ name, image, color, background }) {
    return (
        <DivButton background={background} >
            <img src={image} alt="ImagesProps" />
            <ContinueBUTTON color={color}>{name}</ContinueBUTTON>
        </DivButton>

    )
}

