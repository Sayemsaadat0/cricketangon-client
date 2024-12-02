import { ArticleType } from '@/model/article.type'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'


const StatsCard: FC<ArticleType> = ({ image, title, description, id }) => {
    return (
        <div className="relative overflow-hidden rounded-[20px] group">
            <Link href={`/stats/${id}`}>
                <div className='relative overflow-hidden'>
                    <Image
                        src={image || 'https://i.pinimg.com/564x/cd/a8/3c/cda83c0eee224d460c926479f224ec3e.jpg'}
                        alt={`Placeholder`}
                        width={390}
                        height={400}
                        layout="responsive"
                        className="rounded-[20px] object-cover"
                    />
                </div>
                <div className='text-white transition-all duration-500 p-3 absolute w-full -bottom-96 group-hover:bottom-0 bg-gradient-to-t from-black/50 space-y-5 to-transparent'>
                    <p className='truncate text-2xl font-bold'>{title}</p>
                    <p className='text-c-white-700'>{description}</p>
                </div>
            </Link>

        </div>
    )
}

export default StatsCard