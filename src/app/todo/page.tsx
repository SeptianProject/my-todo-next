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
                users.map((user: any) => {
                    <div>
                        <h1>Username {user.username}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default page