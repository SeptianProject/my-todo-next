'use client'
import FormLogin from '@/components/pages/FormLogin'
import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const page = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <section className={`relative container max-w-full min-h-screen
    transition-all duration-500 flex flex-col gap-y-10 items-center justify-center 
    selection:bg-primary selection:text-white`}>
      <div className={`${isDark ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} bg-dark
      w-full h-full absolute top-0 left-0 transition-all duration-700 -z-50`} />
      <div className="flex items-center gap-x-3">
        <h1 className='font-bold text-xl text-primary'>Choose You&apos;re Mode</h1>
        <div className='flex items-center bg-primary mx-auto w-[70px] h-9 border-primary border-2 rounded-full'>
          <div className={`${isDark
            ? 'translate-x-9 -rotate-180 bg-dark text-white'
            : 'translate-x-1 rotate-180 bg-white text-dark'}
            transition-all duration-1000 rounded-full p-1`}>
            {
              isDark ? <BiMoon
                onClick={toggleTheme}
                className='cursor-pointer text-xl rotate-180' />
                : <BiSun
                  onClick={toggleTheme}
                  className='cursor-pointer text-xl' />
            }
          </div>
        </div>
      </div>
      {/* Form Login */}
      <FormLogin />
    </section >
  )
}

export default page