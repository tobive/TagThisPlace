import { ADD_NEW_TAG } from '../actions/types';

const initialState = [];

function mainHome(state=initialState, action) {
    switch(action.type) {
        case ADD_NEW_TAG:
            return {
                ...state,                
            };
        default:
            return state;
    }
}

export default mainHome;
