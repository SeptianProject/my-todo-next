import React from "react"

export interface Button {
    type: 'button' | 'submit'
    onClick: () => void
}

export interface FormField {
    id?: string
    error?: {
        username: any | undefined
        password: any | undefined
    }
    txtError?: {
        username: any | undefined
        password: any | undefined
    } | undefined
    className?: any
}

export interface Input extends FormField {
    placeholder?: string | ''
    type?: React.HTMLInputTypeAttribute | undefined
    rest?: {
        username: any | undefined
        password: any | undefined
    }
}

export interface Label extends FormField {
    label?: string | ''
    theme?: any | undefined
}