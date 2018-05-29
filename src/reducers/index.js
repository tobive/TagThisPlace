import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import NavigationReducer from './navigation';

const rootReducer = asyncInitialState.outerReducer(combineReducers({
    asyncInitialState: asyncInitialState.innerReducer,
    nav: NavigationReducer,
}));

export default rootReducer;
