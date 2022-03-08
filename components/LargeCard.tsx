import Image from 'next/image';
import React, { FC } from 'react'

interface ILargeCard {
  img: string,
  title: string,
  description: string,
  buttonText: string,
}

const LargeCard: FC<ILargeCard> = (props) => {
  const {img, title, description, buttonText} = props;
  
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative min-w-[300px] h-96'> 
        <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
      </div>
      <div className='absolute top-36 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p>{description}</p>
        <button className='text-white bg-black py-2 px-4 rounded-lg mt-5'>{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard;
 