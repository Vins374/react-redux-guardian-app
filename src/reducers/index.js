import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import sectionReducer from './sectionsReducer';

export default combineReducers({
    posts: postReducer,
    user: userReducer,
    section: sectionReducer
});