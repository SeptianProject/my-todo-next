import React from 'react'
import Card from '../layouts/Card'
import TextTitle from '../ui/TextTitle'
import { useTheme } from '@/context/ThemeContext'
import FormFieldLayout from '../layouts/FormField'
import ButtonUi from '../ui/Button'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useForm } from 'react-hook-form'
import { loginValidator, LoginValidator } from '@/utils/validator/loginValidator'
import { zodResolver } from '@hookform/resolvers/zod'

const FormLogin = () => {
    const { isDark } = useTheme()
    const router = useRouter()
    const { createUser } = useAuth()

    const { register, handleSubmit, formState } = useForm<LoginValidator>({
        resolver: zodResolver(loginValidator)
    })

    const handleLogin = handleSubmit((values) => {
        createUser(values.username, values.password)
        router.push('/todo')
        alert('username : ' + values.username + ' password : ' + values.password)
    })

    return (
        <form onSubmit={handleLogin} method='post'>
            <Card>
                <TextTitle text='Hello👋 Welcome' txtSpan=' Back!!' theme={isDark} />
                <FormFieldLayout
                    theme={isDark}
                    rest={{
                        username: register('username'),
                        password: register('password')
                    }}
                    error={{
                        username: formState.errors.username,
                        password: formState.errors.password
                    }}
                    txtError={{
                        username: formState.errors.username?.message,
                        password: formState.errors.password?.message
                    }}
                    className='mt-10' />
                <div className='mt-10'>
                    <ButtonUi type='submit' onClick={handleLogin} />
                </div>
            </Card>
        </form>
    )
}

export default FormLogin