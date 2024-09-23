'use client'
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userStorage = localStorage.getItem('users')
            if (userStorage) {
                try {
                    setUsers(JSON.parse(userStorage))
                } catch (error) {
                    console.error('Error parsing user data', error)
                    setUsers([])
                }
            }
        }
    }, [])

    const createUser = (username: string, password: string) => {
        if (!username || !password) return

        const newUser = {
            id: Date.now(),
            username: username,
            password: password
        }

        setUsers((users: any) => [...users, newUser])
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('users', JSON.stringify(users))
        }
    }, [users])

    return (
        <AuthContext.Provider value={{ users, createUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}