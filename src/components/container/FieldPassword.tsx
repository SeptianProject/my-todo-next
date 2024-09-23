import React from 'react'
import LabelUi from '../ui/Label'
import InputUi from '../ui/Input'
import { FormField, Input, Label } from '@/utils/interface/interfaces'

const FieldPassword = ({ theme, rest, error, txtError }: FormField & Label & Input) => {
    return (
        <div >
            <div className='flex flex-col gap-y-2'>
                <LabelUi id='password' label='Password' theme={theme} />
                <InputUi id='password' type='password' placeholder='Enter your password'
                    rest={{ ...rest?.password }} />
            </div>
            {error?.password && <p className='mt-1 text-xs text-red-500 font-semibold'>
                {txtError?.password}
            </p>}
        </div>
    )
}

export default FieldPassword