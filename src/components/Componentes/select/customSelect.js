import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { CustomInputSelect, menuItemStyle, menuProps } from './styledSelect'

export const CustomSelect = (props) => {
    return (
        <Select
            //value corresponde al indice del elemento que se mostrara en el input
            value={0}
            sx={{ width: '100%' }}
            input={<CustomInputSelect />}
            MenuProps={menuProps}
            
        >
            <MenuItem disabled key={0} value={0} sx={menuItemStyle}> {props.title} </MenuItem>
            {props.data.map((elem, idx) => (
                <MenuItem
                    key={idx + 1}
                    value={idx + 1}
                    sx={menuItemStyle}
                >
                    {elem}
                </MenuItem>
            ))}
        </Select >
    )
}
