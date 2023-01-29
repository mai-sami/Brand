import React from 'react'
import { DIVFLEX, Spans } from '../../GlobalStyle/Global'
import { DivOffer } from './style'

const TimeOfferData = [
    { time: 47, name: "Days" },
    { time: 14, name: "Hour" },
    { time: 34, name: "Min" },
    { time: 56, name: "Sec" },

]
function TimeOffer() {
    return (
        <DIVFLEX justifyContent={"start-flex"}>
            {TimeOfferData.map((item) => (
                <DivOffer>
                    <Spans>{item.time}</Spans>
                    <Spans>{item.name}</Spans>
                </DivOffer>
            ))}

        </DIVFLEX>
    )
}

export default TimeOffer
