import styles from './Footer.css';
import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BeerCart from '../components/Beer/BeerCart';
import home from './home-white.png';

const Footer = () => {


    const beersList = useSelector( (state) => state.carrelloReducer.beers);
    

    const dispatch = useDispatch();
    let mostraAvviso = false;

    const svuotaCarrello = () => {
        dispatch({
            'type':'SVUOTA'
        })
    }

    const indietro = () => {
        dispatch({
            'type': 'NASCONDI'
        });

    }

  
    let sommaBirre = 0;
    beersList.map((beer) => sommaBirre+=beer.price );
    
  
    
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bottom">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto position">
            <li className="nav-item active home">
                <img src={home} onClick={indietro}/>
            </li>
            <li className="nav-item active">
                <button type="button" className="btn btn-outline-light" disabled={beersList.length==0} onClick={svuotaCarrello}>SVUOTA CARRELLO</button>
            </li>
            </ul>
        </div>
        </nav>
            
    )
}

export default Footer;