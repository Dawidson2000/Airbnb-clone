import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

interface IHome {
	exploreData: {
		img: string;
		location: string;
		distance: string;
	}[];

	cardsData: {
		img: string;
		title: string;
	}[];
}

const Home: NextPage<IHome> = (props) => {
	const { exploreData, cardsData } = props;

	return (
		<div className=''>
			<Head>
				<title>Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Banner />

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{exploreData?.map((item) => (
							<SmallCard key={item.img} {...item} />
						))}
					</div>
				</section>

				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
					<div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
						{cardsData?.map((item) => (
							<MediumCard key={item.img} {...item} />
						))}
					</div>
				</section>

				<LargeCard
					img='https://links.papareact.com/4cj'
					title='The Greatest Outdoors'
					description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
				/>
			</main>
      <Footer/>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://links.papareact.com/pyp');
	const exploreData = await response.json();

	const response2 = await fetch('https://links.papareact.com/zp1');
	const cardsData = await response2.json();

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
};
