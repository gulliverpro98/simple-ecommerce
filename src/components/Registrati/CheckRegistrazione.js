import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";


const CheckRegistrazione = () => {

    return (
        <>
            <div className="alert alert-success" role="alert">
                Complimenti la registrazione è andata a buon fine
            </div>
            <Link to="catalogo"><button type="button">Clicca qui per tornare alla home</button></Link>
        </>
    )
}
export default CheckRegistrazione;