import Login from '../Login/Login';
import background from './wallpaperbetter.jpg';
import styles from './WelcomePage.css';
import {Link} from "react-router-dom";

const WelcomePage = () => {

    return (

        <div className="container-fluid p-0 size">
            <h1 className="welcome-title">Benvenuto nello store più buono di tutti!</h1>
            <div className="action-to">
                <p>Clicca su 'Accedi'</p>
                <div className="login-home">
                    <Login />
                </div>
                <p>oppure</p>
                <Link to="/catalogo">Prosegui come ospite...</Link>
            </div>
        </div>
    )
}

export default WelcomePage;