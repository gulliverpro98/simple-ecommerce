import styles from './Beer.css';


const BeerCart = ({id, name, image, alcohol, price, description, quantity}) => {



    return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={image} alt={name} />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Percentuale alcolica: {alcohol}%</p>
                        <p className="card-text">Quantità: {quantity}</p>
                        <p className="card-text">Prezzo Totale: {price} €</p>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default BeerCart;