import AuthBgIcon from '@/components/core/icons/all_Icons/AuthBgIcon'
import SignupPage from '@/components/page/signup/SignupPage'
import React from 'react'

const Signup = () => {
  return (
    // auth_bg
    <div className='relative'>
      <div>
        <AuthBgIcon size={'full'} />
      </div>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  border-black w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-5'>
        <SignupPage />
      </div>
    </div>
  )
}

export default Signup