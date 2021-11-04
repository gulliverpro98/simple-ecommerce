import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {Link} from "react-router-dom";
import styles from './Login.css';

const Login = () => {

    const dispatch = useDispatch();
    
    const login = () => {
        dispatch({
            'type': 'MOSTRA_LOGIN',
        });

    }
   
    


    return (
        <>
 
        <Link to="/loginInterface"><button type="button" className="btn btn-warning button-login" onClick={login}>Accedi</button></Link>
        
        </>
    )
}

export default Login;