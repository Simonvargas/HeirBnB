import React from 'react';
import { useSelector} from 'react-redux'

const Details = () => {
    const user = useSelector(state => state.session.user)

  return (
      <div>
     <p>hello!!!!</p>
       </div>
  )
};

export default Details;
