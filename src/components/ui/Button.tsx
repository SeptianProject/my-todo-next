import { Button } from '@/utils/interface/interfaces'
import React from 'react'

const ButtonUi = ({ type, onClick }: Button) => {
    return (
        <button className='bg-primary text-white text-base font-medium 
            border border-transparent box-border 
            hover:rounded-none hover:bg-white hover:text-primary
            hover:border-primary hover:shadow-custom2 hover:shadow-primary 
            transition-all duration-300 hover:translate-y-2
            py-1 px-4' type={type} onClick={onClick}>
            Login
        </button>
    )
}

export default ButtonUi