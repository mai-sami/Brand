import ActionAuthConstant from './ActionAuthConstant';

export const initialState = {
    user: {
        _id: "",
        name: "",
        email: "",
        password: "",
        isAdmin:false,
        token: "",
    },
     isLoading: false,
    error: "",
}

const AuthReduce = (state, action) => {

    switch (action.type) {
        case ActionAuthConstant.USER_LOGIN_START:
            return {
                ...initialState,
                isLoading: true,
            };

        case ActionAuthConstant.USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                user: action.payload,
             };
        // return {...state,user:[...state.user,action.payload]}
        case ActionAuthConstant.USER_LOGIN_FEILD:
            return {
                ...initialState,
                error: action.payload,
                isLoading: false,
            };

        case ActionAuthConstant.USER_REGISTER_SUCCESS:
            return {
                user: action.payload,
                isLoading: false,
                success: true,
            };
        case ActionAuthConstant.USER_REGISTER_FEILD:
            return {
                ...initialState,
                error: action.payload,
                isLoading: false,
            };
        case ActionAuthConstant.LOADING_STATR:
            return {
                ...initialState,
                isLoading: true,
            };
        case ActionAuthConstant.LOADIN_GEND:
            return {
                ...initialState,
                isLoading: false,
            };
        default:
            return state
    }
}
export default AuthReduce
