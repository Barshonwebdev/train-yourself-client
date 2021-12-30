import {useContext} from 'react';
import {AuthContext} from '../context/AuthProvider';

// creating custom hook
const useAuth =() =>{
    return useContext(AuthContext);
};

export default useAuth;