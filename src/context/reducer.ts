import { GET_CURRENT_USER_BEGIN, LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGOUT_USER, } from './action';
import { State } from "./appContext";

export type Action = { type: any, payload?: any; };


const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case GET_CURRENT_USER_BEGIN:
            // Handle GET_CURRENT_USER_BEGIN action
            return { ...state, };
        case LOGIN_USER_START:
            return { ...state, userLoading: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload.user, userLoading: false, token: action.payload.token! };
        case LOGOUT_USER:
            return { ...state, user: null, token: "" }
        default:
            return state;
    }
};

export default reducer;
