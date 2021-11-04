import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeerCart from "../Beer/BeerCart";
import Riepilogo from "../RiepilogoCart/Riepilogo";
import styles from './Carrello.css';
import {Link} from 'react-router-dom';



const Carrello = () => {
  
const beersList = useSelector ( (state) => state.carrelloReducer.beers);
const success = useSelector( state => state.carrelloReducer.success);


const checkCart = () => {
    if(beersList.length==0){
        return true;
    }else return false; 
}



// const idOrdine = useSelector( (state) => state.carrelloReducer.codiceAvviso);
// console.log(idOrdine);

let sommaBirre = 0;
beersList.map((beer) => sommaBirre+=beer.price );

    return (
        <React.Fragment>
            { checkCart() ?  
                (<>
                    <div className="alert alert-warning badge-alert" role="alert">CARRELLO VUOTO</div>
                    <div><Link to="/catalogo"><button type="button" className="btn btn-outline-dark blob">PLACE A ORDER</button></Link></div>
                    {success ?
                    (<div className='container-success'>
                        <h1 className='success'>COMPLIMENTI ORDINE EFFETTUATO!</h1>
                        <p>Numero ordine: ---</p>
                    </div>) 
                    : 
                    <></>}
                </>) 
                : 
                (<div className="container-fluid">
                <div className="row ">
                    <div className="col-sm-8 top split-page">{beersList.map( (beer) => <BeerCart key={beer.id} name={beer.name} image={beer.img} alcohol={beer.alcohol} price={beer.price} description={beer.description} quantity={beer.quantity}/>)}</div>                   
                    <div className="col-sm-4 top"><Riepilogo sommaBirre={sommaBirre} beersList={beersList} /></div>
                </div>
            </div>) }
        </React.Fragment>
    )
}

export default Carrello;