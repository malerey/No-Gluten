import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

  render() {
    return (
      <div className="main-block dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>Usá la información de este sitio sólo a título orientativo. La elaboración del listado es responsabilidad de ANMAT.</p>
                <p className="criollo">Hecho con ☕ y ❤️ por <a href="https://malerey.now.sh" id="link" target="_blank">Male Rey</a></p>
                <ul>
                  <li><a href="https://github.com/malerey/"><span className="icon-social-github"></span></a></li>
                  <li><a href="https://twitter.com/malerey_/"><span className="icon-social-twitter"></span></a></li>
                  <li><a href="mailto:reymalena@gmail.com"><span className="icon-envelope"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;