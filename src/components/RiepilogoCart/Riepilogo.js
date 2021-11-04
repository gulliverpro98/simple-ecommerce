import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './RiepilogoCart.css';
import {Link} from "react-router-dom";


const Riepilogo = ({sommaBirre, beersList}) => {


    const dispatch = useDispatch();

    const svuotaCarrello = () => {
        dispatch({
            'type':'SVUOTA'
        })
    }

    const [res, setRes] = useState('');



    const invia = async () => {
        console.log(beersList);
        const response = await fetch('https://adm2021.azurewebsites.net/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({beersList})
        });
        if(response.ok){
            const data = await response.json();
            setRes(data);
            // dispatch({
            //     'type':'CODICE ORDINE',
            //     'payload': {
            //         codiceAvviso: res.id
            //     }
            // });
            console.log(data);
            svuotaCarrello();
            dispatch({
                'type':'MOSTRA_SUCCESS'
            });
        }
    }

    const svuota = () => {
        dispatch({
            'type':'SVUOTA'
        });
    }


    return (
        <>
            <h3>Riepilogo Ordine</h3>
            <div className="riepilogo">
                <div className="description">
                    <p>Descrizione:</p>
                    <p>{beersList.map( (beer) => <span className="custom-names">{beer.quantity} {beer.name} </span>)}</p>
                    <p><b>Prezzo Totale:</b><span className="custom-price">{sommaBirre} €</span></p>
                </div>
            </div>
            <div className="delete-cart">
                <button type="button" className="btn btn-outline-danger" onClick={svuota}>SVUOTA CARRELLO</button>
            </div>
            <div className="buy-more">
                    <div><Link to="/catalogo"><button type="button" className="btn btn-outline-dark blob">COMPRA ANCORA</button></Link></div>
                    <p>OPPURE</p>
                    <div><Link to="/carrello"><button type="submit" className="btn btn-outline-dark blob" onClick={invia}>COMPLETA ACQUISTO</button></Link></div>
            </div>
        </>
    )

}

export default Riepilogo;