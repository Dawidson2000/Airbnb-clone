import React, { FC, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';
import { ISearch } from '../pages/search';
import { LocationMarkerIcon } from '@heroicons/react/solid';

const Map: FC<ISearch> = (props) => {
	const [selectedLocation, setSelectedLocation] = useState<any>({});

	const coordinates = props.searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	const center = getCenter(coordinates) as {
		longitude: number;
		latitude: number;
	};

	const [viewport, setViewport] = useState({
		width: '100%',
		heigth: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/dawiddev/cl0jucjg4006414qbs0coo643'
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMove={(evt) => setViewport(evt.viewState as any)}
		>
			{props.searchResults.map((result) => (
				<div key={result.long} className='cursor-pointer'>
					<Marker longitude={result.long} latitude={result.lat}>
						<LocationMarkerIcon
							className='h-7 cursor-pointer text-red-600'
							onClick={() => {
								setSelectedLocation(result);
							}}
							aria-label='location-marker'
						/>
					</Marker>
					{selectedLocation.lat === result.lat && (
						<Popup
							longitude={result.long}
							latitude={result.lat}
							closeOnClick={true}
              closeButton={false}
              offset={[0, -15]}
						>
							{result.title}
						</Popup>
					)}
				</div>
			))}
		</ReactMapGL>
	);
};

export default Map;
