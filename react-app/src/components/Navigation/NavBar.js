import React from 'react';
import { useSelector} from 'react-redux'
import NavBarSplash from './NavBarSplash'
import NavBarLog from './NavBarLog'

const Home = () => {
    const user = useSelector(state => state.session.user)

  return (
      <>
       {(user) ? <NavBarLog /> : <NavBarSplash />}
       </>
  )
};

export default Home;
