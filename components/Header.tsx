import Image from 'next/image';
import React, { FC, useState } from 'react';

import {
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
	SearchIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

interface IHeader {
  placeholder?: string,
}

const Header: FC<IHeader> = (props) => {
	const [searchInput, setSearchInput] = useState('');
	const [noOfGuests, setNoOfGuests] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const router = useRouter();

	const delectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};

	const changeSearchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const changeGuestsInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNoOfGuests(+e.target.value);
	};

	const cancelDatePicker = () => {
		setSearchInput('');
	};

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests
      }
    });
  };

	const handleSelect = (ranges: any) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white'>
			<div
				onClick={() => {router.push('/')}}
				className='relative flex items-center h-10 cursor-pointer my-auto'
			>
				<Image
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
				/>
			</div>
			<div className='flex items-center border-2 rounded-full py-2 md:shadow-sm'>
				<input
					value={searchInput}
					onChange={changeSearchInputHandler}
					className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
					type='text'
					placeholder={props.placeholder || 'Start your search'}
				/>
				<SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>
			<div className='flex items-center space-x-4 justify-end text-gray-500'>
				<p className='hidden md:inline cursor-pointer'>Become a host</p>
				<GlobeAltIcon className='h-6 cursor-pointer' />
				<div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
					<MenuIcon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>
			{searchInput && (
				<div className='flex flex-col col-span-3 mx-auto rounded-xl shadow-sm p-4'>
					<DateRangePicker
						ranges={[delectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5b62']}
						onChange={handleSelect}
					/>
					<div className='flex items-center border-b mb-4'>
						<h2 className='text-2xl flex-grow font-semibold'>
							Number of Guests
						</h2>
						<UsersIcon className='h-5' />
						<input
							value={noOfGuests}
							onChange={changeGuestsInputHandler}
							type='number'
							className='w-12 pl-2 text-lg outline-none text-red-500'
							min={1}
						/>
					</div>
					<div className='flex'>
						<button onClick={cancelDatePicker} className='flex-grow text-gray-500 hover:bg-red-400 rounded-md hover:text-white py-1 transition duration-100 ease-out'>
							Cancel
						</button>
						<button onClick={search} className='flex-grow text-red-400 hover:bg-red-400 rounded-md hover:text-white py-1 transition duration-100 ease-out'>Search</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
