import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import Header from '../components/Header';
import Details from '../components/Room/Details';
import Info from '../components/Room/Info';
import Reservation from '../components/Room/Reservation';

interface IRoom {
	rooms: {
		img: string;
		location: string;
		title: string;
		description: string;
		star: number;
		price: string;
		total: string;
		long: number;
		lat: number;
	}[];
}

const Room: NextPage<IRoom> = (props) => {
	const router = useRouter();
	const { id, startDate, endDate, noOfGuests } = router.query;

	const [checkInDate, setCheckInDate] = useState(new Date(startDate as string));
	const [checkOutDate, setChekcOutDate] = useState(new Date(endDate as string));

	const delectionRange = {
		startDate: checkInDate,
		endDate: checkOutDate,
		key: 'selection',
	};

	const handleSelect = (ranges: any) => {
		setCheckInDate(ranges.selection.startDate);
		setChekcOutDate(ranges.selection.endDate);
	};

	const { img, location, title, description, star, price, total, long, lat } =
		props.rooms[id as unknown as number];

	return (
		<>
			<Header />
			<main className='max-w-7xl mx-auto px-8 sm:px-16 bg-white rounded-2xl my-5 shadow-md'>
				<Info location={location} title={title} star={star} img={img} />
				<div className='flex flex-col lg:flex-row'>
					<Details title={title} description={description} />
					<Reservation
						star={star}
						price={price}
						total={total}
						startDate={checkInDate.toISOString()}
						endDate={checkOutDate.toISOString()}
						noOfGuests={noOfGuests as string}
					/>
				</div>
				<div className='flex justify-center mx-auto rounded-xl'>
					<DateRangePicker
						ranges={[delectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5b62']}
						onChange={handleSelect}
					/>
				</div>
			</main>
		</>
	);
};

export default Room;

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('https://links.papareact.com/isz');
	const rooms = await response.json();

	return {
		props: {
			rooms,
		},
	};
};
