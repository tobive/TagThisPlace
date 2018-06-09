import { 
    ADD_NEW_TAG
} from './types';

export function addNewTag(data) {
    alert('saving' + JSON.stringify(data));
    return {
        type: ADD_NEW_TAG,
        tag: data
    };
}
