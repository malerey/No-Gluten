import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

  render() {
    return (
      <div class="main-block dark-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright">
                <p>Usá la información de este sitio sólo a título orientativo. La elaboración del listado es responsabilidad de ANMAT.</p>
                <p id="criollo">En criollo, eso significa que no me hago responsable si alguno de estos productos tiene gluten y te causa una reaccion adversa. ¡Pero te ayudo a quejarte con ANMAT!</p>
                <p>Hecho con ❤️ por <a href="https://malerey.github.io/Personal-website/Personal.html" id="link" target="_blank">Male Rey</a></p>
                <ul>
                  <li><a href="https://github.com/malerey/"><span class="icon-social-github"></span></a></li>
                  <li><a href="http://twitter.com/malerey_/"><span class="icon-social-twitter"></span></a></li>
                  <li><a href="mailto:reymalena@gmail.com"><span class="icon-envelope"></span></a></li>
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