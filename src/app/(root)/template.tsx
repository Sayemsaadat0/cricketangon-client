
import DefaultNavbar from '@/components/core/navbar/DefaultNavbar';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <DefaultNavbar />
            {children}
        </div>
    );
};

export default template;
