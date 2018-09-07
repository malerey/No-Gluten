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

  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(name)
    console.log(email)
    console.log(message)
    
    axios({
        method: "POST", 
        url:"http://localhost:3001/mail", 
        body: {
            name: name,   
            email: email,  
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
          console.log(name, email, message)
            alert("Mensaje enviado! Te responderé lo antes posible"); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Algo falló al enviar tu mensaje")
        }
    })
}
resetForm(){
  document.getElementById('contact-form').reset();
}

  render() {
    return (
      <div className='Main'>
        <Header />
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

            </div>
          </div>
        </div>
        <br />

        <Footer />
      </div>
    );
  }
}

export default Contacto;