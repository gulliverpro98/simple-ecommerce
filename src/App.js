import { useSelector } from 'react-redux';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import Carrello from './components/Carrello/Carrello';
import Header from './components/header/Header';
import './index.css';
import Footer from './Footer/Footer';
import LoginInterface from './components/Login/LoginInterface';
import { useEffect, useState } from 'react';
import Beer from './components/Beer/Beer';
import Registrati from './components/Registrati/Registrati';
import CheckRegistrazione from './components/Registrati/CheckRegistrazione';
import {BrowserRouter as Router, Redirect, Route, useHistory} from "react-router-dom";
import WelcomePage from './components/Welcome/WelcomePage';


function App() {

  return (
    <Router>
      <div className="App mb-2 bg-light text-dark">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Route path="/welcomePage" exact>
            <WelcomePage />
          </Route>
          <Route path="/catalogo">
            <BeersList />
          </Route>
          <Route path="/carrello">
            <Carrello />
          </Route>
          <Route path="/loginInterface">
            <LoginInterface />
          </Route>
          <Route path="/registrati">
            <Registrati />
          </Route>
          <Route path="/checkRegistrazione">
            <CheckRegistrazione />
          </Route>   
        </main>

      </div>
    </Router>
  );
}

export default App;
