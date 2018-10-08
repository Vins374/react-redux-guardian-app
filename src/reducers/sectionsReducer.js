import { GET_SECTION,BEFORE_GET_SECTION,ERROR_GET_SECTION,GET_SECTION_DETAIL } from '../actions/types';

const initialState = {
    sectionData: {},
    sectionDetailData: {},
    loader: false,
    error: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SECTION:
            return {
                ...state,
                sectionData: action.payload,
                loader: false,
                error: "Section details fetched successfully"
            };
        case BEFORE_GET_SECTION:
            return {
                ...state,
                loader: true,
                error: "Loading"
            };
        case ERROR_GET_SECTION:
            return {
                ...state,
                loader: false,
                error: 'Something went wrong'
            }
        case GET_SECTION_DETAIL:
            return {
                ...state,
                sectionDetailData: action.payload,
                loader: false,
                error: "Section details fetched successfully"
            }
        default:
            return state;
    }
}