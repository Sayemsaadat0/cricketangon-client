import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className=''>
            <Image
                className="w-[180px] md:w-[220px]"
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
