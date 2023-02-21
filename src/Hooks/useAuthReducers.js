import axios from 'axios';
import ActionAuthConstant from '../Reduce/ActionAuthConstant';
import API_URL from './API';
import { useHistory } from 'react-router-dom'

import { useReducer, useState } from 'react'
import { initialState } from '../Reduce/AuthReduce';
import { toast } from 'react-toastify';


const UseAuthReducers = () => {
    const history = useHistory()
    const [state, dispatch] = useReducer(useReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const loginAction = async (userData) => {
        console.log(state)
        try {
            setIsLoading(true);
            const response = await axios.post(`${API_URL}/users/login`, userData);
            setIsLoading(false);
            toast.success('تم تسجيل الدخول بنجاح ', {
                icon: "👏",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token)

            dispatch({
                payload: response.data,
                type: ActionAuthConstant.USER_LOGIN_SUCCESS,
            })
            history.push('/')

        }
        catch (e) {
            // dispatch({
            //     payload: e?.response?.data?.message,
            //     type: ActionAuthConstant.USER_LOGIN_FEILD,
            // })
            setIsLoading(false);
            toast.error('البريد الالكتروني او كلمة المرور غير صحيحة', {
                icon: "😔",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true,
            })
            setError(e.message);
            history.push('/login')

        }
    }
    const RegisterAction = async (userData) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${API_URL}/users/signup`, userData);
            setIsLoading(false);
            toast.success('تم انشاء الحساب بنجاح ', {
                icon: "👏",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true
            })
            history.push('/')
            dispatch({
                payload: response.data,
                type: ActionAuthConstant.USER_REGISTER_SUCCESS,
            })
        }
        catch (e) {
            // dispatch({
            //     payload: e?.response?.data?.message,
            //     type: ActionAuthConstant.USER_REGISTER_FEILD,
            // });
            setIsLoading(false);
            toast.error('تم استخدام هذا الايميل مسبقا حاول مرة أخرى ', {
                icon: "😔",
                disableTimeOut: false,
                titleClass: 'toaster_title',
                messageClass: 'toaster_messge',
                timeOut: 5000,
                closeButton: true,

            })
            setError(e.message);
            history.push('/register')
        }
    }
    return { loginAction, isLoading, RegisterAction, error }
}
export default UseAuthReducers

