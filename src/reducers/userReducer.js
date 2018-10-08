import { USER_LOGIN } from '../actions/types';
import { USER_LOGIN_BEGIN } from '../actions/types';
import { USER_LOGIN_ERROR } from '../actions/types';
import { USER_REGISTER } from '../actions/types';
import { USER_REGISTER_BEGIN } from '../actions/types';
import { USER_REGISTER_ERROR } from '../actions/types';

const initialState = {
    registerData: {},
    loginData: {},
    loader: false,
    error: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loginData: action.payload,
                loader: false,
                error: action.payload.message
            };
        case USER_REGISTER:
            return {
                ...state,
                loader: false,
                registerData: action.payload,
                error: action.payload.message
            };
        case USER_LOGIN_BEGIN:
            return {
                ...state,
                loader: true,
                error: ''
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                loader: false,
                error: 'Something went wrong'
            }
        case USER_REGISTER_BEGIN:
            return {
                ...state,
                loader: true,
                error: ''
            }
        case USER_REGISTER_ERROR:
            return {
                ...state,
                loader: false,
                error: 'Something went wrong'
            }
        default:
            return state;
    }
}