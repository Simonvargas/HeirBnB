import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Home from './components/Home/Home';
import Listings from './components/Listings/listings';
import Details from './components/Details/Details';
import Bookingss from './components/Listings/bookingss';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      <Switch>
      
        <Route path='/' exact={true}>
          <Home />
        </Route>
        
       <Route path='/profile' exact={true}>
        <Bookingss />
       </Route>

        <ProtectedRoute path='/listing/:id' exact={true}>
        <Details />
        </ProtectedRoute>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
