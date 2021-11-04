import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carrello from '../Carrello/Carrello';
import carrello from './carrello.svg';
import styles from '../RiepilogoCart/RiepilogoCart.css';  //styles di header non funziona, lo prendo da riepilogoCart
import logo from './logo.png';
import Login from '../Login/Login';
import userLogo from './logo-user.svg';
import Logout from '../Logout/Logout';
import {Link} from "react-router-dom";


const Header = () => {

    const counter = useSelector( (state) => state.carrelloReducer.counter)
    const isLogged = useSelector( state => state.loginReducer.isLogged);
    const currentUsername = useSelector( state => state.loginReducer.currentUser.username);
    console.log(currentUsername);


    return (
        <React.Fragment>
            <nav id="color-nav" className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-nav">
            
                <Link to="/welcomePage"><img src={logo} className="custom-logo"/></Link>
                <div className="cont-ul w-100  d-flex justify-content-end mr-2">
                    <ul className="navbar-nav d-flex align-items-center">
                        {isLogged ? 
                            (<li className="nav-item mr-4">
                                <Logout />
                            </li>)
                            :
                            (<li className="nav-item mr-4">
                                <Login />
                            </li>)
                        }
                        {isLogged ?
                            (<li className="nav-item mr-2">
                                <div className="user-details">
                                <span>Benvenuto {currentUsername.username}! </span>
                                <img src={userLogo} className="user-logo" />
                                </div>
                            </li>)
                            :
                            <></>
                            }
                        
                        <li className="nav-item">
                            <div className="">
                                <Link to="/carrello"><img className="logoNav" src={carrello} /></Link>
                                <span className="counter-nav"><sup>{counter}</sup></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )   
}

export default Header;