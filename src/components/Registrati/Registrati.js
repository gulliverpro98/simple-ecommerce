import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import styles from './Registrati.css';

const Registrati = () => {

  const dispatch = useDispatch();
  const idUser = useSelector(state => state.loginReducer.counterUser);
  const history = useHistory();

  const signin = () => {
    axios.post("http://localhost:5000/users/signin", body)
      .then(res => {
        console.log(res.data);
        dispatch({
          'type': 'ACCEDI',
          payload: {
            username: username
          }
        });
      })
      .then( () => {
        history.push('/catalogo');
      });
  }

    const addUser = () => {
      dispatch({
        'type':'REGISTRA'
      });
      setId(idUser);
      axios.post("http://localhost:5000/users/signup", user)
          .then(res => console.log(res.data))
          .then( () => {
            signin();
          });
    }

    const [id, setId] = useState(0)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstAddress, setFirstAddress] = useState('');
    const [secondAddress, setSecondAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cap, setCap] = useState('');
    const body = {username, password};

    const user = {
      firstName,
      lastName,
      email,
      username,
      password,
      firstAddress,
      secondAddress,
      city,
      state,
      cap
    }

    const onChangeNome = (e) => {
      setFirstName(e.target.value);
    }
    const onChangeCognome = (e) => {
      setLastName(e.target.value);
    }
    const onChangeUsername = (e) => {
      setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    }
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    }
    const onChangeFirstIndirizzo = (e) => {
      setFirstAddress(e.target.value);
    }
    const onChangeSecondIndirizzo = (e) => {
      setSecondAddress(e.target.value);
    }
    const onChangeCitta = (e) => {
      setCity(e.target.value);
    }
    const onChangeCap = (e) => {
      setCap(e.target.value);
    }
    const onChangeStato = (e) => {
      setState(e.target.value);
    }
    

    return (
      <div className="container">
        <h3>Inserisci i tuoi dati</h3>
        <form>
            <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Nome<sup>*</sup></label>
            <input type="text" className="form-control" id="inputName" onChange={onChangeNome}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCognome">Cognome<sup>*</sup></label>
            <input type="text" className="form-control" id="inputCognome" onChange={onChangeCognome} />
          </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4">Email<sup>*</sup></label>
              <input type="email" className="form-control" id="inputEmail4" onChange={onChangeEmail} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputUser">Username<sup>*</sup></label>
              <input type="text" className="form-control" id="inputUser" onChange={onChangeUsername} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputPassword4">Password<sup>*</sup></label>
              <input type="password" className="form-control" id="inputPassword4" onChange={onChangePassword} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Indirizzo</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={onChangeFirstIndirizzo} />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Indirizzo 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={onChangeSecondIndirizzo} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Città</label>
              <input type="text" className="form-control" id="inputCity" onChange={onChangeCitta} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Stato</label>
              <select id="inputState" className="form-control" onChange={onChangeStato}>
                <option value="Scegli">Scegli</option>
                <option value="Italia">Italia</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">CAP</label>
              <input type="text" className="form-control" id="inputZip" onChange={onChangeCap}/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Acconsento alla normativa sulla privacy policy<sup>*</sup>
              </label>
            </div>
            <Link to="/checkRegistrazione"><button type="submit" className="btn btn-primary" onClick={addUser}>REGISTRATI</button></Link>

          </div>
        </form>
      </div>
    )
}
export default Registrati;