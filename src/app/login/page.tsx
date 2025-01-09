import AuthBgIcon from '@/components/core/icons/all_Icons/AuthBgIcon'
import LoginPage from '@/components/page/login/LoginPage'
import React, { Suspense } from 'react'


const Login = () => {
  return (
    // auth_bg
    <div className='relative'>
      <div>
        <AuthBgIcon size={'full'} />
      </div>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  border-black w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-5'>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPage />
        </Suspense>
      </div>
    </div>
  )
}

export default Login