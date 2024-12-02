
import RandomShapeGenerator from '@/components/core/RandomShapeGenerator'
import React from 'react'
import ArticleDetailsContainer from './_components/ArticleDetailsContainer'

const page = () => {
  return (
    <div className="crick-Container relative  ">
      <div className='mt-10 max-w-7xl overflow-hidden mx-auto fixed  w-full top-0 left-1/2 -translate-x-1/2'>
        <RandomShapeGenerator />
      </div>
      <div className='relative mx-auto mt-24  w-[80%]'>
        <ArticleDetailsContainer />
      </div>
    </div>
  )
}

export default page