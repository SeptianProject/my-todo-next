import { Input } from '@/utils/interface/interfaces'
import React from 'react'

const InputUi = ({ placeholder, type, id, rest }: Input) => {
    return (
        <input autoComplete='true' id={id} name={id}
            placeholder={placeholder} type={type}
            className='border-2 box-border border-slate-400 rounded-md py-2 px-4 
            text-start text-sm font-medium focus:border-primary 
            outline-none select-none transition-all duration-300'
            {...rest}
        />
    )
}

export default InputUi