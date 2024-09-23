import { useTheme } from '@/context/ThemeContext'
import React from 'react'

type TextTitle = {
    text: string
    txtSpan?: string
    theme?: any
}

const TextTitle = ({ text, theme, txtSpan }: TextTitle) => {

    return (
        <h1 className={`${theme ? 'text-white' : 'text-dark'}
            transition-all duration-700 text-lg md:text-xl 
            font-semibold tracking-wide text-center`}>
            {text}
            <span className='text-primary'>
                {txtSpan}
            </span>
        </h1>
    )
}

export default TextTitle