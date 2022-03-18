import React, { FC } from 'react';
import {
	KeyIcon,
	LockClosedIcon,
	CheckCircleIcon,
} from '@heroicons/react/outline';

interface IDetail {
	title: string;
	description: string;
  calender: JSX.Element;
}

const Details: FC<IDetail> = (props) => {
	const { title, description } = props;

	return (
		<section className='py-5'>
			<div className='border-b border-gray-300 pb-5'>
				<h2 className='font-semibold text-2xl'>{title}</h2>
				<span className='text-md'>{description}</span>
			</div>
			<div className='flex flex-col gap-4 py-5 border-b border-gray-300'>
				<div className='flex items-center'>
					<LockClosedIcon className='h-8 pr-5' />
					<div>
						<h4 className='font-semibold text-lg'>Self check in</h4>
						<p className='text-sm text-gray-600'>
							Check yourself in with the lockbox
						</p>
					</div>
				</div>

				<div className='flex items-center'>
					<KeyIcon className='h-8 pr-5' />
					<div>
						<h4 className='font-semibold text-lg'>Great check-in-experience</h4>
						<p className='text-sm text-gray-600'>
							100% od recent guests gave the check-in process a 5-star rating
						</p>
					</div>
				</div>

				<div className='flex items-center'>
					<CheckCircleIcon className='h-8 pr-5' />
					<div>
						<h4 className='font-semibold text-lg'>Pets Allowed</h4>
						<p className='text-sm text-gray-600'>
							Guestsnoften search for this popular amenity
						</p>
					</div>
				</div>
			</div>
			<div className='border-b border-gray-300 py-5 mb-5'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a risus
					et arcu rhoncus efficitur. Aenean finibus elit et nulla ultrices, vel
					ornare ligula ultricies. Donec vulputate nisi et purus tristique, at
					ullamcorper velit vestibulum. Aenean molestie molestie urna ut cursus.
					Phasellus posuere eget nisi eu vulputate. Phasellus vitae sapien id
					quam finibus viverra. Nulla ut lacus luctus, dictum tortor non,
					rhoncus ante. Nulla nec congue ipsum. Cras pretium risus a orci
					feugiat, quis iaculis metus suscipit. In hac habitasse platea
					dictumst. In eget sodales nisi, in venenatis orci. Proin convallis nec
					leo sed pulvinar.
				</p>
			</div>
      {props.calender}
		</section>
	);
};

export default Details;
