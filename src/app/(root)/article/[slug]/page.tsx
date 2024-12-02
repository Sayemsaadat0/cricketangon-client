
import RandomShapeGenerator from '@/components/core/RandomShapeGenerator'
import React from 'react'
import ArticleDetailsContainer from './_components/ArticleDetailsContainer'

const page = () => {
  return (
    <div className="crick-Container relative">
      <div className='mt-10 max-w-7xl w-full  mx-auto fixed top-0 left-1/2 -translate-x-1/2'>
        <RandomShapeGenerator />
      </div>
      <div className='relative mx-auto w-[80%] mt-24'>
        <ArticleDetailsContainer />
      </div>
    </div>
  )
}

export default page