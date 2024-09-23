import React from 'react'
import FieldUsername from '../container/FieldUsername'
import FieldPassword from '../container/FieldPassword'
import { FormField, Input, Label } from '@/utils/interface/interfaces'

const FormFieldLayout = (
    { className, rest, error, txtError, theme }: FormField & Label & Input) => {
    return (
        <div className={`flex flex-col ${className} gap-y-5`}>
            <FieldUsername
                theme={theme}
                rest={rest}
                error={error}
                txtError={txtError} />
            <FieldPassword
                theme={theme}
                rest={rest}
                error={error}
                txtError={txtError} />
        </div>
    )
}

export default FormFieldLayout