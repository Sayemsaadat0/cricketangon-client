// 'use client'
// import Button from '@/components/core/button/Button';
// import Image from 'next/image';
// import React, { useEffect } from 'react';

// const HomeContainer = () => {

//     useEffect(() => {
//         const div1 = document.querySelector('.div1') as HTMLElement;
//         const div2 = document.querySelector('.div2') as HTMLElement;
//         const image1 = div1.querySelector('img') as HTMLElement; // Select the image in div1
//         const image2 = div2.querySelector('img') as HTMLElement; // Select the image in div2

//         const increaseSize = (element: HTMLElement, otherElement: HTMLElement, otherImage: HTMLElement) => {
//             element.style.height = '55%';
//             otherElement.style.height = '15%';
//             otherImage.style.display = 'none'; // Hide the other image
//         };

//         const resetSize = () => {
//             div1.style.height = '35%';
//             div2.style.height = '35%';
//             image1.style.display = 'block'; // Show image in div1
//             image2.style.display = 'block'; // Show image in div2
//         };

//         div1.addEventListener('mouseenter', () => increaseSize(div1, div2, image2));
//         div1.addEventListener('mouseleave', resetSize);

//         div2.addEventListener('mouseenter', () => increaseSize(div2, div1, image1));
//         div2.addEventListener('mouseleave', resetSize);

//         // Cleanup event listeners on component unmount
//         return () => {
//             div1.removeEventListener('mouseenter', () => increaseSize(div1, div2, image2));
//             div1.removeEventListener('mouseleave', resetSize);
//             div2.removeEventListener('mouseenter', () => increaseSize(div2, div1, image1));
//             div2.removeEventListener('mouseleave', resetSize);
//         };
//     }, []);

//     return (
//         <div className="crick-Container overflow-y-hidden flex items-center justify-center  w-full mt-20">
//             <section className="flex justify-between gap-10 w-full">
//                 <div className="space-y-10 ">
//                     {/* First Card */}
//                     <div className="w-60 group rounded-[10px] row-span-2 bg-amber-400 div1 transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden">
//                         <div className="text-center p-5">
//                             {/* Title and Description */}
//                             <p className="text-3xl whitespace-nowrap">Fantasy Cricket</p>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor nesciunt incidunt.</p>
//                         </div>
//                         <div className="group-hover:block hidden mb-4">
//                             <Button label="Create team" />
//                         </div>
//                         {/* Image Container */}
//                         <div className="w-full h-60 relative  group-hover:h-72 overflow-hidden aspect-[1/1]  p-4 group-hover:p-0 transition-all duration-300">
//                             <Image
//                                 className="object-cover w-full h-full rounded-[10px]"
//                                 src={'https://placehold.co/150x150/000000/FFFFFF/png'}
//                                 alt="fantasy"
//                                 width={150}
//                                 height={150}
//                             />
//                             {/* group-hover:aspect-[2/3]  */}
//                         </div>
//                     </div>

//                     {/* Second Card */}
//                     <div className="w-60 group rounded-[10px] row-span-2 bg-amber-400 div2 transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden">
//                         <div className="text-center p-5">
//                             <p className="text-3xl whitespace-nowrap">Fantasy Cricket</p>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor nesciunt incidunt. !</p>
//                         </div>
//                         <div className="group-hover:block hidden mb-4">
//                             <Button label="Create team" />
//                         </div>
//                         {/* Image Container */}
//                         <div className="w-full h-60 group-hover:h-72 relative overflow-hidden aspect-[1/1] p-4 group-hover:p-0  transition-all duration-300">
//                             <Image
//                                 className="object-cover w-full h-full rounded-[10px]"
//                                 src={'https://placehold.co/150x150/000000/FFFFFF/png'}
//                                 alt="fantasy"
//                                 width={150}
//                                 height={150}
//                             />
//                             {/* group-hover:aspect-[2/3] */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default HomeContainer;





'use client'
import Button from '@/components/core/button/Button';
import Image from 'next/image';
import React, { useEffect } from 'react';

const HomeContainer = () => {

    useEffect(() => {
        const div1 = document.querySelector('.div1') as HTMLElement;
        const div2 = document.querySelector('.div2') as HTMLElement;
        const image1 = div1.querySelector('img') as HTMLElement; 
        const image2 = div2.querySelector('img') as HTMLElement; 

        const increaseSize = (element: HTMLElement, otherElement: HTMLElement, otherImage: HTMLElement) => {
            element.style.height = '60%'; // Increase the height of the hovered element
            otherElement.style.height = '20%'; // Decrease the height of the other element
            otherImage.style.display = 'none'; // Hide the other image
        };

        const resetSize = () => {
            div1.style.height = '45%'; // Reset to default height
            div2.style.height = '45%'; // Reset to default height
            image1.style.display = 'block'; // Show image in div1
            image2.style.display = 'block'; // Show image in div2
        };

        div1.addEventListener('mouseenter', () => increaseSize(div1, div2, image2));
        div1.addEventListener('mouseleave', resetSize);

        div2.addEventListener('mouseenter', () => increaseSize(div2, div1, image1));
        div2.addEventListener('mouseleave', resetSize);

        // Cleanup event listeners on component unmount
        return () => {
            div1.removeEventListener('mouseenter', () => increaseSize(div1, div2, image2));
            div1.removeEventListener('mouseleave', resetSize);
            div2.removeEventListener('mouseenter', () => increaseSize(div2, div1, image1));
            div2.removeEventListener('mouseleave', resetSize);
        };
    }, []);

    return (
        <div className="crick-Container  flex items-center justify-center w-full ">
            <section className="flex justify-between gap-10 w-full">
                <div className="mt-20">
                    {/* First Card */}
                    <div className="w-60 relative group rounded-[10px] bg-amber-400 div1 transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden ">
                        <div className="text-center p-5">
                            <p className="text-3xl whitespace-nowrap">Fantasy Cricket</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor nesciunt incidunt.</p>
                        </div>
                        {/* <div className="group-hover:block hidden mb-4">
                            <Button label="Create team" />
                        </div> */}
                        {/* Image Container */}
                        <div className="w-full h-60 relative overflow-hidden aspect-[1/1] group-hover:h-72 transition-all duration-300">
                            <Image
                                className="object-cover w-full h-full rounded-[10px]"
                                src={'https://placehold.co/150x150/000000/FFFFFF/png'}
                                alt="fantasy"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="w-60 relative mt-10 group rounded-[10px] bg-amber-400 div2 transition-all duration-300 bounce-effect flex flex-col justify-between items-center overflow-hidden">
                        <div className="text-center p-5">
                            <p className="text-3xl whitespace-nowrap">Fantasy Cricket</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor nesciunt incidunt. !</p>
                        </div>
                        {/* <div className="group-hover:block hidden mb-4">
                            <Button label="Create team" />
                        </div> */}
                        {/* Image Container */}
                        <div className="w-full h-60 relative overflow-hidden aspect-[1/1] group-hover:h-72 transition-all duration-300">
                            <Image
                                className="object-cover w-full h-full rounded-[10px]"
                                src={'https://placehold.co/150x150/000000/FFFFFF/png'}
                                alt="fantasy"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeContainer;





{/* <div className="w-60 h-72  bg-cyan-400 div2 transition-all duration-300 bounce-effect"></div> */ }


/*
                {/* <div className="space-y-10">
                    <div className="w-60 h-96 row-span-2 bg-purple-400"></div>
                    <div className="w-60 h-48 bg-yellow-400"></div>
                </div>
                <div className="space-y-10">
                    <div className="w-60 h-44 bg-cyan-500"></div>
                    <div className="w-60 h-44 bg-blue-600"></div>
                    <div className="w-60 h-44 bg-rose-500"></div>
                </div>
*/


// useEffect(() => {
//     const div1 = document.querySelector('.div1') as HTMLElement;
//     const div2 = document.querySelector('.div2') as HTMLElement;

//     div1.addEventListener('mouseenter', () => {
//         div1.style.height = '384px ';
//         div2.style.height = '192px';
//     });

//     div1.addEventListener('mouseleave', () => {
//         div1.style.height = '288px';
//         div2.style.height = '288px ';
//     });


//     div2.addEventListener('mouseenter', () => {
//         div2.style.height = '384px ';
//         div1.style.height = '192px';
//     });

//     div2.addEventListener('mouseleave', () => {
//         div2.style.height = '288px';
//         div1.style.height = '288px';
//     });
//     return () => {
//         div1.removeEventListener('mouseenter', () => { });
//         div1.removeEventListener('mouseleave', () => { });
//         div2.removeEventListener('mouseenter', () => { });
//         div2.removeEventListener('mouseleave', () => { });
//     };
// }, []);
