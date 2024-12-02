import React from 'react'
import AllStats from './AllStats'
import StatsSidebar from './StatsSidebar'
import Link from 'next/link'

const StatsPageContainer = () => {
  return (
    <div className='space-y-5 relative overflow-hidden'>
      <div>
        <div className='flex items-center gap-1'>
          <div>
            <Link className='text-gray-500' href={'/'}>
              Home
            </Link> /
          </div>
          <div>
            <Link className='font-bold' href={'/article'}>
              Stats
            </Link>
          </div>
        </div>
        <div className='text-xl text-c-violet-600 font-semibold'>
          Stats Corner
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row gap-5 xl:gap-10'>
        <div className='w-full xl:w-2/3'>
          <AllStats />
        </div>
        <div className='w-full lg:w-1/3 lg:flex  lg:justify-end'>
          <StatsSidebar />
        </div>
      </div>
    </div>
  )
}

export default StatsPageContainer