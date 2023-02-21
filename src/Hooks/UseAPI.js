import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Reduce } from '../User/userTypesConstants';
const initialState = {
    user: {
        _id: "",
        name: "",
        email: "",
        token: "",
      },
      success: false,
      isLoading: false,
      error: "",
  };
const useApi = (url) => {
    const [data, setData] = useState([]);
    const [postedData, setPostedData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [state, dispatch] = useReducer(Reduce, initialState);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(url);
                console.log(res.data);
                setData(res.data);
            } catch (e) {
                console.log(e.message);
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url]);

    const CreateIiem = async (body) => {
        try {
            setIsLoading(true);
            const res = await axios.post(url, body);
            console.log(res.data);
            setPostedData(res.data);
            // dispatch({type: 'FETCH_PROJECTS', payload: {data: res.data}})

        } catch (e) {
            console.log(e.message);
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    const EditIiem = async (id) => {
        try {
            setIsLoading(true);
            const res = await axios.post(url, id);
            console.log(res.data);
            setPostedData(res.data);
        } catch (e) {
            console.log(e.message);
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };


    const func = () => { };

    return { data, isLoading, error, postedData, func, CreateIiem, EditIiem };
};

export default useApi;
