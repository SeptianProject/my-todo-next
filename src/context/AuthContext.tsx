'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<any[]>([])
    const [loggedInUser, setLoggedInUser] = useState<any | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userStorage = localStorage.getItem('users')
            const loggedInStorage = localStorage.getItem('loggedInUser')

            if (userStorage) {
                try {
                    setUsers(JSON.parse(userStorage))
                } catch (error) {
                    console.error('Invalid', error)
                    setUsers([])
                }
            }

            if (loggedInStorage) {
                try {
                    setLoggedInUser(JSON.parse(loggedInStorage))
                } catch (error) {
                    console.error('Invalid', error)
                    setLoggedInUser(null)
                }
            } else {
                setLoggedInUser(null)
            }
        }
    }, [])

    const createUser = (username: string, password: string) => {
        if (!username || !password) return
        const existingUser = users.find(u => u.username === username)

        if (existingUser) return

        const newUser = {
            id: Date.now(),
            username: username,
            password: password
        }

        setUsers((users) => [...users, newUser])
    }

    const loginUser = (username: string, password: string) => {
        const user = users.find(u => u.username === username && u.password === password)
        if (!user) {
            createUser(username, password)
            const newUser = users.find(u => u.username === username && u.password === password)

            setLoggedInUser(newUser)
            localStorage.setItem('loggedInUser', JSON.stringify(newUser))
        } else {
            setLoggedInUser(user)
            localStorage.setItem('loggedInUser', JSON.stringify(user))
        }
    }

    const logoutUser = () => {
        setLoggedInUser(null)
        localStorage.removeItem('loggedInUser')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('users', JSON.stringify(users))
        }
    }, [users])

    return (
        <AuthContext.Provider value={{
            users,
            createUser,
            loginUser,
            loggedInUser,
            logoutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}