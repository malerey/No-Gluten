import React, { Component } from "react";
import App from "./App";
import Resultados from "./Resultados/Resultados";
import Categorias from "./Categorias/Categorias";
import CategoryResults from './CategoryResults/CategoryResults'
import Contacto from './Contacto/Contacto'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import { BrowserRouter as Router, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/busqueda/:query" component={Resultados} />
            <Route exact path="/categorias" component={Categorias} />
            <Route exact path="/categoria/:id" component={CategoryResults} />
            <Route exact path="/contacto/" component={Contacto} />
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default Routes;
