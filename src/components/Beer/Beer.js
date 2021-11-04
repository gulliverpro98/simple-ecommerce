import styles from './Beer.css';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

const Beer = ({id, name, img, alcohol, price, description, quantity}) => {

    let idBeer = name.replace(name.charAt(0), name.charAt(0).toLowerCase()).replace(/\s+/g, '');
    console.log(idBeer);
    
    const dispatch = useDispatch();

    const addCart = () => {

        dispatch({
            'type':'INCREMENTA',
            'value': 1,
            'payload': {
                name,
                img,
                alcohol,
                price: price*quantita,
                description,
                id,
                quantity: quantita
                
            } 
        });
    }

//selezionare quantita
    let [quantita, setQuantita] = useState(0);
    let bool = false;
    const upQuantity = () => {
        bool=true;
        if(bool) {
            setQuantita(quantita => quantita+1);
            bool=false;
            setAlert(false);
        }
    }

    const downQuantity = () => {
        bool=true;
        if(bool && quantita>=1){
            setQuantita(quantita => quantita-1);
        }
    }

    const [alert, setAlert] = useState(false);
    
    const showAlert = () => {
        setAlert(true);
    }

    

    
   
    return ( 
        <div className="card-deck col-sm-3 margin-top">
            <div className="card">
                <h3>{name}</h3>
                <img src={img} alt='Beer' />
                <p>Percentuale alcolica: {alcohol}%</p>
                <p>Prezzo: {price} €</p>
                <a id="showDetails" data-toggle="collapse" href={"#"+idBeer} role="button" aria-expanded="false" aria-controls={idBeer}>Mostra dettagli...</a>
                <div id={idBeer} className="collapse">{description}</div>
                <div className="quantityBeer">
                    {alert}
                <div id="alertQuantity" style={{backgroundColor: alert? '#F8D7DB' : 'white', borderRadius: alert ? '0.2em' : '0', border: alert ? '1px solid #F5C6CB' : 'none'}}>
                    <span>Quantità  </span>
                    <button className="btn btn-light buttom-custom" onClick={downQuantity}>-</button>
                    {quantita}
                    <button className="btn btn-light buttom-custom" onClick={upQuantity}>+</button>
                </div>
            </div>
            <button className="btn btn-light buttom-custom" onClick={quantita>0 ? addCart : showAlert}>
                Aggiungi al carrello
            </button>
            </div>
        </div>
    )
}

export default Beer;