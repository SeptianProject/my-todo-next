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
import { withSwal } from 'react-sweetalert2'

const FormLogin = withSwal((props: any) => {
    const { isDark } = useTheme()
    const router = useRouter()
    const { loginUser } = useAuth()
    const { swal } = props;

    const { register, handleSubmit, formState } = useForm<LoginValidator>({
        resolver: zodResolver(loginValidator)
    })

    const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
        },
    })

    const handleLogin = handleSubmit((values) => {
        try {
            loginUser(values.username, values.password)
            Toast.fire({
                icon: 'success',
                title: `Login Success ${values.username}`,
                didClose: () => {
                    router.push('/todo')
                }
            })
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: `Invalid credentials`,
                didClose: () => {
                    router.push('/')
                }
            })
        }
    })

    return (
        <form onSubmit={handleLogin} method='post'>
            <Card>
                <TextTitle text='Hello👋 Welcome' txtSpan=' Back!!' theme={isDark} />
                <FormFieldLayout
                    theme={isDark}
                    rest={{
                        username: { ...register('username') },
                        password: { ...register('password') }
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
})

export default FormLogin