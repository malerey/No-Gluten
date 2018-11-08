import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm'
import '../App.css'
import axios from 'axios';

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div className='Main'>
        <div className="container">
          <div>
            <br />
            <br />
            <h2 className="my-4">Acerca de "Sin Gluten!"</h2>
          </div>
          <div className='quantity'>Comencé este proyecto al notar lo dificultoso que era buscar productos aptos para celíacos en la web de ANMAT.
         No esperaba la cantidad de visitas que está recibiendo, ni los innumerables mensajes de apoyo y sugerencias.</div><br />
          <div className='quantity'>Soy una principiante. Estoy aprendiendo cada día. Sin embargo, la cantidad de personas que me dicen 
          que necesitaban una herramienta como esta me obliga a comprometerme a mejorar
          la página para que brinde la mejor experiencia posible: hacer que sea más rápida, mejorar el buscador, agregar imágenes y lugares de venta. </div> <br />
          <div className='quantity'>Para todo eso, me serviría mucho contar con la ayuda de todos ustedes, por lo que les pido que me contacten si les interesa el proyecto. 
          El código se puede ver en <a href="https://github.com/malerey/no-gluten">Github </a>
            y tambien pueden enviarme cualquier comentario desde esta misma página. </div>
          <div className="col-md-12">
            <div className="form-area">

              <br />
              <h3>Formulario de contacto</h3>
              <ContactForm />

            </div><br />
            <div className='quantity'>Muchas gracias a <a href="https://github.com/stormwatch"> Ezequiel Birman</a>, <a href="https://about.me/lais.macaria"> Lais Macaria</a>, <a href="https://github.com/seppo0010"> Sebastian Waisbrot</a>, <a href="https://github.com/LeandroLuque"> Leandro Luque </a> y
        <a href="https://github.com/jtruzzi"> Julio Truzzi </a> por la invalorable ayuda para mejorar el sitio.</div><br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Contacto;