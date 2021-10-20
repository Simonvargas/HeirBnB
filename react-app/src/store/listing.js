// action verbs
const ADD_LISTING= 'listings/ADD_LISTING';
const LOAD_LISTING = 'listings/LOAD_LISTING';
const UPDATE_LISTING = 'listings/UPDATE_LISTING';
const DELETE_LISTING = 'listings/DELETE_LISTING';
const LOAD_ONE = 'projects/LOAD_ONE'

// action creators

const addListing = (listing) => ({
    type: ADD_LISTING,
    listing
});


const loadListing = (listings) => ({
    type: LOAD_LISTING,
    listings
});

const loadOne = (listing) => ({
    type: LOAD_ONE,
    listing
})

const updateListing = (listing) => ({
    type: UPDATE_LISTING,
    listing
});

const deleteListing = (listingId) => ({
    type: DELETE_LISTING,
    listingId
});



// thunk

export const createListing = (user_id, title, price, address, city, state, country, image, description) => async (dispatch) => {
    const res = await fetch(`/api/listings/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user_id, title, price, address, city, state, country, image, description }),
    });
    if(!res.ok) throw res
    const new_listing = await res.json();
    dispatch(addListing(new_listing));
    return new_listing;
}

export const getListings = () => async (dispatch) => {
    const res = await fetch(`/api/listings`)
    const allListings = await res.json();
    dispatch(loadListing(allListings));
    return allListings
  }



export const updateOneListing = (user_id, title, price, address, city, state, country, image, description, id) => async (dispatch) => {
    const response = await fetch(`/api/listings/edit/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user_id, title, price, address, city, state, country, image, description}),
    });
    if(!response.ok) throw response
    const editedListing = await response.json();
    dispatch(updateListing(editedListing));
    return editedListing;
}


export const deleteOneListing = (id) => async (dispatch) => {
    const res = await fetch(`/api/listings/delete/${id}`, {
        method : 'DELETE',
    });
    dispatch(deleteListing(id))
    return res
}


const initialState = {

};

const ListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LISTING:
            return {
                ...state,
                [action.listing.id]: action.listing
            }
        case LOAD_LISTING:
            console.log('hello', action.listing)
            const all = {...state};
            action.listings.Listings.forEach((oneListing) => {
                all[oneListing.id] = oneListing;
            });
            return all;
            // return {...state, ...action.listings}
        case LOAD_ONE:
                return {
                    ...action.project
                }
        case UPDATE_LISTING:
            return {
                ...state,
                [action.listing.id]: action.listing
            }
        case DELETE_LISTING:{
           const newState = {...state}
        //    console.log('deleted12', newState[action.ProjectId] )
           delete newState[action.listingId];
           return newState
        }

        default:
            return state;
    }
}

export default ListingReducer;