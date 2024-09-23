import React, { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className='container flex flex-col items-center border-2 border-primary
            shadow-custom shadow-primary h-[380px] w-80 py-5'>
            {children}
        </div>
    )
}

export default Card