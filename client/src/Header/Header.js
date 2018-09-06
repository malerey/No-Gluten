import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

  render() {
    return (
      <div className="nav-menu">
        <div className="bg transition">
          <div className="container-fluid fixed">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-menu"></span>
                  </button>
                  <ul className="navbar-nav">
                  <li className="nav-item">
                        <a className="nav-link" href="/">Sin Gluten!</a>
                      </li>
                      </ul>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="/categorias">Categorías</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://www.anmat.gov.ar/Alimentos/libres_gluten/Alimentos_Libres_de_Gluten.asp">ANMAT</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="mailto:reymalena@gmail.com">Contactanos</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;