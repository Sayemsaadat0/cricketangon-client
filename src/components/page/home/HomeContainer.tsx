import React from 'react'
import HomeLeftCards from './HomeLeftCards'
import HomeMiddleCard from './HomeMiddleCard'

const HomeContainer = () => {
    return (
        <div className='grid grid-cols-3 w-full crick-Container'>
            <div >
                <HomeLeftCards />
            </div>
            <div>
                <HomeMiddleCard />
            </div>
         
        </div>
    )
}

export default HomeContainer