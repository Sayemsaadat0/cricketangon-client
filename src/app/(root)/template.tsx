
import DefaultNavbar from '@/components/core/navbar/DefaultNavbar';
import { Toaster } from '@/components/ui/toaster';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <NextTopLoader color="#5a4eae" showSpinner={false} />
            <DefaultNavbar />
            {children}
            <Toaster />
        </div>
    );
};

export default template;
