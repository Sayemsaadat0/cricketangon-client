
import DefaultNavbar from '@/components/core/navbar/DefaultNavbar';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <NextTopLoader color="#5a4eae" showSpinner={false} />
            <DefaultNavbar />
            {children}
        </div>
    );
};

export default template;
