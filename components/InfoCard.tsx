import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { locationActions } from '../store/location-slice';
import { RootState } from '../store';
import { useRouter } from 'next/router';

interface IInfoCard {
  id: number
	img: string;
	location: string;
	title: string;
	description: string;
	star: number;
	price: string;
	total: string;
	long: number;
	lat: number;
}

const InfoCard: FC<IInfoCard> = (props) => {
	const { id, img, location, title, description, star, price, total, long, lat } =
		props;
  
	const cardRef = useRef<HTMLDivElement>(null);

	const [isMouseOn, setIsMouseOn] = useState(false);

	const router = useRouter();
  const { startDate, endDate, noOfGuests } = router.query;

	const dispatch = useDispatch();

	const selectedLocation = useSelector(
		(state: RootState) => state.location.location
	);

	const selectLocation = (long: number | null, lat: number | null) => {
		dispatch(
			locationActions.selectLocation({
				location: {
					lat,
					long,
				},
			})
		);
	};

	const room = () => {
		router.push({
			pathname: 'room',
      query: {
        id,
        noOfGuests
      }
		});
	};

	useEffect(() => {
		!isMouseOn &&
			cardRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
	}, [selectedLocation]);

	return (
		<div
			ref={
				selectedLocation.lat === lat && selectedLocation.long === long
					? cardRef
					: undefined
			}
			onMouseEnter={() => {
				selectLocation(long, lat);
				setIsMouseOn(true);
			}}
			onMouseLeave={() => {
				setIsMouseOn(false);
				selectLocation(null, null);
			}}
			onClick={room}
			className={
				selectedLocation.long === long && selectedLocation.lat === lat
					? 'active_infoCard'
					: 'infoCard'
			}
		>
			<div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
				<Image
					className='rounded-2xl'
					src={img}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='flex flex-col flex-grow pl-5'>
				<div className='flex justify-between'>
					<p>{location}</p>
					<HeartIcon className='h-7 cursor-pointer' />
				</div>
				<h4 className='text-xl'>{title}</h4>

				<div className='border-b w-10 pt-2' />
				<p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

				<div className='flex justify-between items-end pt-5'>
					<p className='flex items-center'>
						<StarIcon className='h-5 text-red-400 ' />
						{star}
					</p>

					<div>
						<p className='text-lg font-semibold pb-2'>{price}</p>
						<p className='text-right font-extralight'>{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
