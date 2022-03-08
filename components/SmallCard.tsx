import Image from 'next/image';
import React, { FC } from 'react'

interface ISmallCard {
  img: string,
  location: string,
  distance: string
}

const SmallCard: FC<ISmallCard> = (props) => {
  const {img, location, distance} = props;

  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'> 
      <div className='relative h-16 w-16'>
        <Image src={img} layout='fill' className='rounded-lg'/>
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard;
