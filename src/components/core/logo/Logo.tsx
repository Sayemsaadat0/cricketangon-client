import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className=''>
            <Image
                className=""
                src="/Logo.png"
                alt="Logo"
                width={220}
                height={200}
                priority
            />
        </div>
    );
};

export default Logo;