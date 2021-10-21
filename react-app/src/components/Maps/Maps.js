import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

import { getListings } from '../../store/listing';
import './Map.css'



const Maps = ()  => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const allListings = Object.values(useSelector(state => state.listing))
  
  useEffect(() => {
    dispatch(getListings())
}, [dispatch])

  
  const newYork = {
    center: {
      lat: 40.730610,
      lng: -73.935242
    },
    zoom: 9
  };
  

  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log('LAT', lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
    
    const Marker = ({ lat, lng }) => (
      <div className="mapMarker">
          <img  className='pin' src="https://i.imgur.com/ot6w0Py.png" alt =""></img>
        </div>
      )
     
    return (
      <div className='googleMap'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_MAP }}
          defaultCenter={newYork.center}
          defaultZoom={newYork.zoom}
        >
                {allListings?.map(home =>(
                    <Link key={home.id} to={`/listing/${home.id}`} lat={home.latitude} lng={home.longitude}>
                        <Marker/>
                    </Link>
                ))}
        </GoogleMapReact>
      </div>
    );
  
}

export default Maps;