import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StatsSidebar = () => {
  return (
    <div>
      {/* Large Device */}
      <div className='space-y-5 hidden lg:block'>
        <div className="relative overflow-hidden rounded-[20px] group max-w-[300px] max-h-[420px]">
          <Link href={`/stats/pitch-map`}>
            <div className='relative overflow-hidden'>
              <Image
                src={'https://i.pinimg.com/736x/d8/17/e5/d817e55f8d9a0f8757d1e2033b199a0a.jpg'}
                alt={`Placeholder`}
                width={390}
                height={400}
                layout="responsive"
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className='text-white transition-all duration-500 p-3 absolute w-full h-full  bottom-0 bg-gradient-to-t from-black/60 space-y-5 to-black/10 group-hover:bg-gradient-to-t group-hover:from-c-violet-900/80 group-hover:to-transparent'>
              <p className='truncate text-2xl font-bold h-full flex items-end'>Pitch Map</p>
            </div>
          </Link>

        </div>

        <div className="relative overflow-hidden rounded-[20px] group max-w-[300px] max-h-[420px]">
          <Link href={`/stats/pitch-map`}>
            <div className='relative overflow-hidden'>
              <Image
                src={'https://i.pinimg.com/736x/d8/17/e5/d817e55f8d9a0f8757d1e2033b199a0a.jpg'}
                alt={`Placeholder`}
                width={390}
                height={400}
                layout="responsive"
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className='text-white transition-all duration-500 p-3 absolute w-full h-full  bottom-0 bg-gradient-to-t from-black/60 space-y-5 to-black/10 group-hover:bg-gradient-to-t group-hover:from-c-violet-900/80 group-hover:to-transparent'>
              <p className='truncate text-2xl font-bold h-full flex items-end'>Pitch Map</p>
            </div>
          </Link>

        </div>
      </div>

      {/* Small Device */}
      <div className='block lg:hidden'>
        <div className='flex gap-5 items-center '>
          <div className='relative min-w-[100px] rounded-[20px] group overflow-hidden'>
            <Link href={'/stats/pitch-map'}
              className={` `}
            >
              <div
                className='relative overflow-hidden w-40 h-16 rounded-[20px] bg-cover blur-[2px] bg-center'
                style={{
                  backgroundImage: `url('https://i.pinimg.com/564x/cf/52/14/cf52147e41add37ea5854733cb095fd8.jpg')`
                }}
              ></div>

              <div className='absolute inset-0 flex items-center justify-center duration-500 bg-c-white-900/50'>
                <p className='font-bold text-sm text-white'>Category</p>
              </div>
            </Link>
          </div>
          <div className='relative min-w-[100px] rounded-[20px] group overflow-hidden'>
            <Link href={'/stats/pitch-map'}
              className={` `}
            >
              <div
                className='relative overflow-hidden w-40 h-16 rounded-[20px] bg-cover blur-[2px] bg-center'
                style={{
                  backgroundImage: `url('https://i.pinimg.com/564x/cf/52/14/cf52147e41add37ea5854733cb095fd8.jpg')`
                }}
              ></div>

              <div className='absolute inset-0 flex items-center justify-center duration-500 bg-c-white-900/50'>
                <p className='font-bold text-sm text-white'>Category</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StatsSidebar