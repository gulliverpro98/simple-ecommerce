import { useEffect, useState } from "react";
import Beer from "../Beer/Beer";
import styles from './beer-list.css';
import axios from "axios";


const BeersList = (props) => {

    useEffect( () => {
        let isMounted = true;
        if(isMounted){
            getBeers();
        }
        return () => {isMounted = false};
    },[]);

    const [beers, setBeers] = useState([]);

    
    const getBeers = () => {

        axios.get('http://localhost:5000/beers/')
            .then(response => {
                setBeers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-around">
                {beers.map( (beer) => <Beer key={beer._id} name={beer.name} img={beer.img} alcohol={beer.alcohol} price={beer.price} description={beer.description} quantity={0} />)}
            
            </div>
           
        </div>
    )
}

export default BeersList;