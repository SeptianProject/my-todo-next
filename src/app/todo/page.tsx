'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const page = () => {
    const { users } = useAuth()
    console.log(users)

    return (
        <div>
            <h1>Todo Page</h1>
            {
                users.map((user: any, index: number) => {
                    return (
                        <div key={index}>
                            <h3>{user.username}</h3>
                            <p>{user.password}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default page