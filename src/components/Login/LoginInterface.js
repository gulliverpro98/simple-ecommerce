import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styles from './LoginInterface.css';




const LoginInterface = () => {

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');
    const [pswInput, setPswInput] = useState('');
    const history = useHistory();


    const accedi = () => {
        const body = {
            username: userInput,
            password: pswInput
        };
        console.log(body);

        axios.post('http://localhost:5000/users/signin', body)
        .then( res => {
            console.log(res);
            console.log(res.data);
        })
        .then( () => {
            dispatch({
                'type': 'ACCEDI',
                payload: {
                    username:body.username,
                }
            })
            history.push('/catalogo');
        });
    };


    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="d-block form-login">
            <h3 className="mb-4">Effettua il login</h3>
            <div className="mb-3">
                <label htmlFor="user">Username:</label>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" onChange={event => setUserInput(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input type="text" class="form-control" placeholder="Password" aria-label="Password" onChange={event => setPswInput(event.target.value)} />
            </div>
            <div className="mb-3">
            <button type="submit" class="btn btn-secondary" onClick={accedi}>Accedi</button>
            </div>
            <Link to="/registrati"><div className="link-registration">Non sei ancora registrato? Fallo ora!</div></Link>
            </div>
        </div>
        
    )
}

export default LoginInterface;