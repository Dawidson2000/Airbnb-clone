import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import Calendar from '../components/Calendar';
import Header from '../components/Header';
import Map from '../components/Map';
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
	const { id, noOfGuests } = router.query;

	const [checkInDate, setCheckInDate] = useState(new Date());
	const [checkOutDate, setChekcOutDate] = useState(new Date());

	const setDates = (checkIn: Date, checkOut: Date) => {
		setCheckInDate(checkIn);
		setChekcOutDate(checkOut);
	};

	const { img, location, title, description, star, price, total, long, lat } =
		props.rooms[id as unknown as number];

	const calender = (
		<div className='flex justify-center mx-auto rounded-xl'>
			<Calendar onReservationTime={setDates} />
		</div>
	);

	return (
		<>
			<Header />
			<main className='max-w-7xl mx-auto px-8 sm:px-16 bg-white rounded-2xl my-5 shadow-md min-h-fit'>
				<Info location={location} title={title} star={star} img={img} />
				<div className='flex flex-col lg:flex-row'>
					<Details
						title={title}
						description={description}
						calender={calender}
					/>
					<Reservation
						star={star}
						price={price}
						total={total}
						startDate={checkInDate.toISOString()}
						endDate={checkOutDate.toISOString()}
						noOfGuests={noOfGuests as string}
					/>
				</div>
				<section className='w-full h-96 hidden lg:block pb-32'>
					<h2 className='text-3xl font-semibold'>Where will you stay</h2>
					<span className='block my-5'>{location}</span>
					<Map coordinates={[{ longitude: long, latitude: lat }]} />
				</section>
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
