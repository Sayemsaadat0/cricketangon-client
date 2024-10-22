import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Logo = ({ isAdmin }: { isAdmin?: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This ensures that the component only renders after it has mounted on the client side.
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render nothing or a placeholder during SSR to prevent mismatch
    return null;
  }

  return (
    <div>
      <Link href={isAdmin ? '/admin/overview' : '/'}>
        <Image
          className="w-[180px] md:w-[220px]"
          src={isAdmin ? '/logo_purple.png' : '/Logo.png'}
          alt="Logo"
          width={220}
          height={200}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;



// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Logo = ({ isAdmin }: { isAdmin?: boolean }) => {

//     return (
//         <div className=''>
//             {
//                 isAdmin ?  : <Link href={'/'}>
//                     <Image
//                         className="w-[180px] md:w-[220px]"
//                         src="/Logo.png"
//                         alt="Logo"
//                         width={220}
//                         height={200}
//                         priority
//                     />
//                 </Link>
//             }

//         </div>
//     );
// };

// export default Logo;
