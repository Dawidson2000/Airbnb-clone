import { StarIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface IReservation {
	star: number;
	price: string;
	total: string;
  startDate: string; 
  endDate: string; 
  noOfGuests: string;
}

const Reservation: FC<IReservation> = (props) => {
	const { star, price, total, startDate, endDate, noOfGuests } = props;

	const formattedStartDate = format( new Date(startDate), 'dd.MM.yyyy');
	const formattedEndDate = format(new Date(endDate), 'dd.MM.yyyy');

	return (
		<div className='shadow-2xl rounded-xl p-5 m-5 min-w-fit border h-fit'>
			<div className='flex gap-36'>
				<span>{price}</span>
				<span className='flex items-center gap-1'>
					<StarIcon className='h-5 text-red-400 ' />
					{star}
				</span>
			</div>
			<table className='border border-gray-400 rounded-xl border-separate min-w-full my-5'>
				<tbody>
					<tr>
						<td className='border-r border-gray-400'>
							<div className='flex flex-col gap-1  p-2'>
								<span className='font-semibold text-xs'>CHECK-IN</span>
								<span className='text-sm'>
									{formattedStartDate}
								</span>
							</div>
						</td>
						<td className=''>
							<div className='flex flex-col gap-1  p-2'>
								<span className='font-semibold text-xs'>CHECK-OUT</span>
								<span className='text-sm'>{formattedEndDate}</span>
							</div>
						</td>
					</tr>
					<tr>
						<td className='border-t border-gray-400' colSpan={2}>
							<div className='flex flex-col gap-1 p-2'>
								<span className='font-semibold text-xs'>QUESTS</span>
								<span className='text-sm'>{noOfGuests}</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<button className='bg-[#e61e4d] w-full text-white rounded-xl py-3 font-semibold text-lg'>
				Book
			</button>
			<span className='block mx-auto w-full text-center mt-5 font-bold text-lg border-t p-3 pb-0'>
				{total}
			</span>
		</div>
	);
};

export default Reservation;