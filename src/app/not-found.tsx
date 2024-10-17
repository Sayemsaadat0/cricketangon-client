
import AuthBgIcon from '@/components/core/icons/all_Icons/AuthBgIcon';
import NotFoundContainer from '@/components/NotFoundContainer';
import React from 'react';

const NotFound = () => {
    return (
        // <div className='auth_bg max-h-[calc(100vh-200px)] flex items-center justify-center '>
        //     <NotFoundContainer />
        // </div>
        <div className='relative'>
            <div>
                <AuthBgIcon size={'full'} />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <NotFoundContainer />
            </div>
        </div>
    );
};

export default NotFound;
