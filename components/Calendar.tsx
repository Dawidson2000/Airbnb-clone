import React, { FC, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

interface ICalendar {
  onReservationTime: any
}

const Calendar: FC<ICalendar> = (props) => {
  const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	
  const delectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};

	const handleSelect = (ranges: any) => {
    const startDate = ranges.selection.startDate;
    const endDate = ranges.selection.endDate;
		setStartDate(startDate);
		setEndDate(endDate);

    props.onReservationTime(startDate, endDate);
	};

	return (
		<>
			<DateRangePicker
				ranges={[delectionRange]}
				minDate={new Date()}
				rangeColors={['#FD5b62']}
				onChange={handleSelect}
			/>
		</>
	);
};

export default Calendar;
