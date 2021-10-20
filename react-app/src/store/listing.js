// action verbs
const ADD_LISTING= 'listings/ADD_LISTING';
const LOAD_LISTING = 'listings/LOAD_LISTING';
const UPDATE_LISTING = 'listings/UPDATE_LISTING';
const DELETE_LISTING = 'listings/DELETE_LISTING';
const LOAD_ONE = 'projects/LOAD_ONE'

// action creators

const addListing = (Listing) => ({
    type: ADD_LISTING,
    Listing
});


const loadListing = (Listing) => ({
    type: LOAD_LISTING,
    Listing
});

const loadOne = (Listing) => ({
    type: LOAD_ONE,
    Listing
})

const updateListing = (Listing) => ({
    type: UPDATE_LISTING,
    Listing
});

const deleteListing = (ListingId) => ({
    type: DELETE_LISTING,
    ListingId
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

// export const getProjects = () => async (dispatch) => {
//     const res = await fetch(`/api/auth/projects`)
//     const allProjects = await res.json();
//     dispatch(loadProject(allProjects));
//     return allProjects
//   }

// export const getOneProject = (id) => async (dispatch) => {
//     // console.log('id', id)
//     const res = await fetch(`/api/projects/${id}`)

//     if (res.ok) {
//         const oneProject = await res.json()
//         dispatch(loadOne(oneProject))
//         return oneProject
//     }
// }


// export const editProject = (user_id, category_id, name, image, details, funding_goal, id) => async (dispatch) => {
//     const response = await fetch(`/api/projects/edit/${id}`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user_id, category_id, name, image, details, funding_goal}),
//     });
//     if(!response.ok) throw response
//     const editedProject = await response.json();
//     dispatch(updateProject(editedProject));
//     return editedProject;
// }


// export const editProjectFunding = (funding_raised, backers, id) => async (dispatch) => {
//     console.log('backers', backers)
//     const response = await fetch(`/api/projects/editfunds/${id}`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({funding_raised, backers}),
//     });
//     if(!response.ok) throw response
//     const editedProject = await response.json();
//     dispatch(updateProject(editedProject));
//     return editedProject;
// }

// export const removeProject = (id) => async (dispatch) => {
//     const res = await fetch(`/api/projects/delete/${id}`, {
//         method : 'DELETE',
//     });
//     dispatch(deleteProject(id))
//     return res
// }


const initialState = {

};

const ListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LISTING:
            return {
                ...state,
                [action.Listing.id]: action.listing
            }
        case LOAD_LISTING:
            // console.log('projectjh', action.project)
            const all = {...state};
            action.project.Projects.forEach((oneProject) => {
                all[oneProject.id] = oneProject;
            });
            return all;
        case LOAD_ONE:
                return {
                    ...action.project
                }
        case UPDATE_LISTING:
            return {
                ...state,
                [action.project.id]: action.project
            }
        case DELETE_LISTING:{
           const newState = {...state}
           console.log('deleted12', newState[action.ProjectId] )
           delete newState[action.projectId];
           return newState
        }

        default:
            return state;
    }
}

export default ListingReducer;