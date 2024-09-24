import AuthBgIcon from '@/components/core/icons/all_Icons/AuthBgIcon'
import ForgetPasswordContainer from '@/components/page/forget-password-container/ForgetPasswordContainer'
import React from 'react'

const ForgetPassword = () => {
    return (
        // auth_bg
        <div className='relative'>
            <div>
                <AuthBgIcon size={'full'} />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  border-black w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-5'>
                <ForgetPasswordContainer />
            </div>
        </div>
    )
}

export default ForgetPassword