import { format } from 'date-fns';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

interface ISearch {
	searchResults: {
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

const Search: NextPage<ISearch> = (props) => {
	const router = useRouter();

	const { location, startDate, endDate, noOfGuests } = router.query;

	const formattedStartDate = format(
		new Date(startDate as string),
		'dd MMMM yy'
	);
	const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy');
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	return (
		<>
			<Header placeholder={`${location} | ${range} | ${noOfGuests} quests`} />
			<main className='flex max-w-7xl mx-auto'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'>
						300+ Stays - {range} - for {noOfGuests} quests
					</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in {location}
					</h1>
					<div className='hidden lg:flex flex-wrap gap-5 whitespace-nowrap mb-6'>
						<p className='button'>Cancellation Flexibility</p>
						<p className='button'>Type of Place</p>
						<p className='button'>Price</p>
						<p className='button'>Rooms and Beds</p>
						<p className='button'>More filters</p>
					</div>
					<div className='flex flex-col'>
						{props.searchResults?.map((item) => (
							<InfoCard key={item.img} {...item} />
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('https://links.papareact.com/isz');
	const searchResults = await response.json();

	return {
		props: {
			searchResults,
		},
	};
};
