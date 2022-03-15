import React, { FC } from 'react';
import { StarIcon, ShareIcon, HeartIcon } from '@heroicons/react/solid';
import Image from 'next/image';

interface IInfo {
	title: string;
	location: string;
	star: number;
	img: string;
}

const Info: FC<IInfo> = (props) => {
	const { location, title, star, img } = props;

	return (
		<section>
			<h2 className='text-3xl font-semibold pb-3'>{title}</h2>
			<div className='flex gap-3 items-scenter'>
				<span className='flex items-center gap-1'>
					<StarIcon className='h-5 text-red-400 ' />
					{star}
				</span>
				<p className='flex flex-grow items-center underline text-gray-500'>{location}</p>
				<button className='flex items-center gap-2 rounded-md py-1 px-2 hover:bg-gray-100 transition duration-100 ease-in'>
					<ShareIcon className='h-4' />
					Share
				</button>
				<button className='flex items-center gap-2 rounded-md py-1 px-2 hover:bg-gray-100 transition duration-100 ease-in'>
					<HeartIcon className='h-4' />
					Save
				</button>
			</div>
			<div className=' relative h-[450px] mt-5'>
				<Image src={img} layout='fill' objectFit='cover' className='rounded-xl'/>
			</div>
		</section>
	);
};

export default Info;
