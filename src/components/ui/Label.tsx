import { Label } from '@/utils/interface/interfaces'
import React from 'react'

const LabelUi = ({ id, theme, label }: Label) => {
    return (
        <label htmlFor={id}
            className={`${theme ? 'text-white' : 'text-dark'}
            text-sm font-medium transition-all duration-300 transform w-20`}>
            {label}
        </label>
    )
}

export default LabelUi