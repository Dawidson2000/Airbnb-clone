import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';
import Details from '../components/Room/Details';
import Info from '../components/Room/Info';

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
  const {id} = router.query;

	const { img, location, title, description, star, price, total, long, lat } = props.rooms[id as unknown as number];

	return (
		<>
			<Header />
			<main className='max-w-7xl mx-auto px-8 sm:px-16 bg-white rounded-2xl my-5 shadow-md'>
				<Info location={location} title={title} star={star} img={img} />
        <Details title={title} description={description}/>
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