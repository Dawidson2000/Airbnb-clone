import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import ReactMapGL, { Marker, Popup, MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';
import { ISearch } from '../pages/search';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { locationActions } from '../store/location-slice';

const Map: FC<ISearch> = (props) => {
	const [selectedLocation, setSelectedLocation] = useState<any>({});
	const location = useSelector((state: RootState) => state.location.location);
	const mapRef = useRef<MapRef>(null);

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

	const snapToLocation = useCallback((long, lat) => {
		mapRef.current?.flyTo({ center: [long, lat]});
	}, []);

	const dispatch = useDispatch();

	const selectLocation = (long: number | null, lat: number | null) => {
		dispatch(
			locationActions.selectLocation({
				location: {
					long,
					lat,
				},
			})
		);
	};

	useEffect(() => {
		location.long && snapToLocation(location.long, location.lat);
	}, [location]);

	return (
		<ReactMapGL
			ref={mapRef}
			mapStyle='mapbox://styles/dawiddev/cl0jucjg4006414qbs0coo643'
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMove={(evt) => setViewport(evt.viewState as any)}
		>
			{props.searchResults.map((result) => (
				<div key={result.long} className='cursor-pointer'>
					<Marker longitude={result.long} latitude={result.lat}>
						<LocationMarkerIcon
							className={
								location.long == result.long && location.lat === result.lat
									? 'active_marker'
									: 'marker'
							}
							onClick={() => {
								setSelectedLocation(result);
								selectLocation(result.long, result.lat);
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
