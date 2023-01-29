import React from 'react'
import { Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { RememberCheckbox, RaidioButton } from '../AuthComponents/RememberCheckbox'

const CheckData = [
    { name: "Samsung" },
    { name: "Apple" },
    { name: "Huawei" },
    { name: "Pocco" },
    { name: "Lenovo" },
    { name: "Samsung" },
    { name: "Pocco" },
]
const Features = [
    { name: "Metallic" },
    { name: "Plastic cover" },
    { name: "8GB Ram" },
    { name: "Super power" },
    { name: "Large Memory" },
    { name: "Metallic" },
    { name: "Super power" },
]

export function FilterComponent() {
    return (
        <>
            {CheckData.map((item) => (
                <RememberCheckbox >
                    <Pargraph fontWeight={"400"} cursor={"pointer"} line={"2.2"} color={"#1C1C1C"} width={"133px"}>   {item.name} </Pargraph>
                </RememberCheckbox>
            ))}

        </>
    )
}
export function FilterFeatuer() {
    return (
        <>
            {Features.map((item) => (
                <RememberCheckbox >
                    <Pargraph fontWeight={"400"} cursor={"pointer"} line={"2.2"} color={"#1C1C1C"} width={"133px"}>   {item.name} </Pargraph>
                </RememberCheckbox>
            ))}

        </>
    )
}
export function FilterCondition() {
    return (
        <>
            {Features.map((item) => (
                <RaidioButton >
                    <Pargraph fontWeight={"400"} cursor={"pointer"} line={"2.2"} color={"#1C1C1C"} width={"133px"}>   {item.name} </Pargraph>
                </RaidioButton>
            ))}

        </>
    )
}


