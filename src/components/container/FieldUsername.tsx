import React from 'react'
import InputUi from '../ui/Input'
import LabelUi from '../ui/Label'
import { FormField, Input, Label } from '@/utils/interface/interfaces'

const FieldUsername = ({ theme, rest, error, txtError }: FormField & Label & Input) => {

    return (
        <div>
            <div className='flex flex-col gap-y-2'>
                <LabelUi id='username' label='Username' theme={theme} />
                <InputUi id='username' type='text' placeholder='Enter your username'
                    rest={{ ...rest?.username }} />
            </div>
            {error?.username && <p className='mt-1 text-xs text-red-500 font-semibold'>
                {txtError?.username}
            </p>}
        </div>
    )
}

export default FieldUsername