import React from 'react';
import { useSelector} from 'react-redux'
import ListingNavBar from '../Navigation/ListingNavBar';

const Listings = () => {
    const user = useSelector(state => state.session.user)

  return (
      <>
      <ListingNavBar />
       </>
  )
};

export default Listings;
