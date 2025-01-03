import { ArticleType } from '@/model/article.type'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'


const StatsCard: FC<ArticleType> = ({ image, title, description, id }) => {
    return (
        <div className=" overflow-hidden rounded-[20px] group">
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
            </Link>

        </div>
    )
}

export default StatsCard