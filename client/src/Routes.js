import React, { Component } from "react";
import App from "./App";
import Product from "./Product/Product";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={App} />
            {/* <Route exact path="/producto/:id" component={Product} /> */}
            {/* <Route exact path="/busqueda" component={Results} /> */}
            {/* <Route exact path="/categorias" component={Categorias} />
            <Route exact path="/categoria/:id" component={Categoria} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
