import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import NavigationReducer from './navigationReducer';
import MainHomeReducer from './mainHomeReducer';
import GroupsReducer from './groupsReducer';
import TagsReducer from './tagsReducer';

const rootReducer = asyncInitialState.outerReducer(combineReducers({
    asyncInitialState: asyncInitialState.innerReducer,
    nav: NavigationReducer,
    mainHome: MainHomeReducer,
    listGroups: GroupsReducer,
    listTags: TagsReducer,
}));

export default rootReducer;
