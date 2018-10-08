import { GET_SECTION, BEFORE_GET_SECTION, ERROR_GET_SECTION } from './types';
import { GET_SECTION_DETAIL } from './types';

export const getSections = () => dispatch => {
    dispatch(beginGetSections());
    fetch('https://content.guardianapis.com/sections?api-key=a9e4a1ff-4993-4309-96c3-0b9a6823d380', { 
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(data=>dispatch({
            type: GET_SECTION,
            payload: data
        }))
        .catch(function() {
            dispatch(errorGetSections());
        });
}

export const beginGetSections = () => dispatch => {
    dispatch({type: BEFORE_GET_SECTION});
}

export const errorGetSections = () => dispatch => {
    dispatch({type: ERROR_GET_SECTION});
}

export const getSectionDetails = (url) => dispatch => {
    dispatch(beginGetSections());
    fetch(url+'?api-key=a9e4a1ff-4993-4309-96c3-0b9a6823d380', { 
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(data=>dispatch({
            type: GET_SECTION_DETAIL,
            payload: data
        }))
        .catch(function() {
            dispatch(errorGetSections());
        });
}

