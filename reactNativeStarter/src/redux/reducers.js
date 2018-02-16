import {combineReducers} from 'redux'

// All the new reducers go up here
const homeHeadBkg = (state = 'transparent', action) => {
    switch (action.type) {
        case 'HOME_HEAD_BKG':
            return action.color;    
        default:
            return state;
    }
}

export default combineReducers({
    // name all the reducers you have defined here
    homeHeadBkg
})