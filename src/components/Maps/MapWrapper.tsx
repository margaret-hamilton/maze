import { ReactElement } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapView from './MapView'

const render = (status: Status): ReactElement => {
	if (status === Status.LOADING) return <h3>{status} ..</h3>;
	if (status === Status.FAILURE) return <h3>{status} ...</h3>;
	return <></>;
};

function MapWrapper() {
	console.log(import.meta.env)
	if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
		return <h2>Add google key</h2>
	}


	return (
		<Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} render={render}>
			<MapView center={{ lat: 55.753559, lng: 37.609218 }} zoom={11} />
		</Wrapper>
	);
}

export default MapWrapper;
