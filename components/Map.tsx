import React, { FC, useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map: FC = () => {
	const [viewport, setViewport] = useState({
		width: '100%',
		heigth: '100%',
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/dawiddev/cl0jucjg4006414qbs0coo643'
			mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={evt => setViewport(evt.viewState as any)}
		>
    </ReactMapGL>
	);
};

export default Map;
