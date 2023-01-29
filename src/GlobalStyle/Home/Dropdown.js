import React from 'react'
import { FlexBoxSelect } from '../../Components/Footer/style'
import { Option, Select } from '../AuthStyle'

function Dropdown({ borderAll, text, children, border, background, width, borderRight }) {
    return (
        <FlexBoxSelect
            background={background}
            border={border}>
            {children}
            <Select borderAll={borderAll} borderRight={borderRight} width={width}
                background={background}
            >
          <Option>{text}</Option>
            </Select>
        </FlexBoxSelect>
    )
}

export default Dropdown
