// action verbs
const ADD_BOOKING= 'bookings/ADD_BOOKING';
const LOAD_BOOKING = 'bookings/LOAD_BOOKING';
const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING';
const DELETE_BOOKING = 'bookings/DELETE_BOOKING';
// const LOAD_ONE = 'projects/LOAD_ONE'

// action creators

const addBooking = (booking) => ({
    type: ADD_BOOKING,
    booking
});


const loadBookings = (bookings) => ({
    type: LOAD_BOOKING,
    bookings
});

// const loadOne = (listing) => ({
//     type: LOAD_ONE,
//     listing
// })

const updateBooking = (bookingId) => ({
    type: UPDATE_BOOKING,
    bookingId
});

const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    bookingId
});



// thunk

export const createBooking = (listingId, userId, startTime, endTime) => async (dispatch) => {
    const res = await fetch(`/api/bookings/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({listingId, userId, startTime, endTime }),
    });
    if(!res.ok) throw res
    const new_booking = await res.json();
    dispatch(addBooking(new_booking));
    return new_booking;
}

export const getBookings = () => async (dispatch) => {
    const res = await fetch(`/api/auth/bookings`)
    const allBookings = await res.json();
    dispatch(loadBookings(allBookings));
    return allBookings
  }



// export const updateOneListing = (user_id, title, price, address, city, state, country, image, description, id) => async (dispatch) => {
//     const response = await fetch(`/api/listings/edit/${id}`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user_id, title, price, address, city, state, country, image, description}),
//     });
//     if(!response.ok) throw response
//     const editedListing = await response.json();
//     dispatch(updateListing(editedListing));
//     return editedListing;
// }


export const deleteOneBooking = (id) => async (dispatch) => {
    const res = await fetch(`/api/bookings/delete/${id}`, {
        method : 'DELETE',
    });
    dispatch(deleteBooking(id))
    return res
}


const initialState = {

};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                [action.booking.id]: action.booking
            }
        case LOAD_BOOKING:
            const all = {...state};
            action.bookings.Bookings.forEach((oneBooking) => {
                all[oneBooking.id] = oneBooking;
            });
            return all;
            // return {...state, ...action.listings}
        // case LOAD_ONE:
        //         return {
        //             ...action.project
        //         }
        case UPDATE_BOOKING:
            return {
                ...state,
                [action.listing.id]: action.listing
            }
        case DELETE_BOOKING:{
           const newState = {...state}
        //    console.log('deleted12', newState[action.ProjectId] )
           delete newState[action.bookingId];
           return newState
        }

        default:
            return state;
    }
}

export default bookingReducer;