import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import '../App.css'

class CategoryResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      page: 1,
      received: false,
      id: '',
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    const offset = (this.state.page - 1) * 8;
    let id = this.props.match.params.id
    fetch('http://localhost:3001/categoria/' + id)
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          data: result,
          renderedData: result.slice(offset, offset + 8),
          received: true,
          id: id,
        });
      });
  }

  changePage(page) {
    let prods = [...this.state.data]
    const offset = (page - 1) * 8;
    this.setState({
      page: page,
      renderedData: prods.slice(offset, offset + 8),
    });
  }

  nextPage() {
    if (this.state.page >= this.state.data.length / 8) {
      this.setState({
        page: this.state.page,
      });
    } else {
      this.changePage(this.state.page + 1)
    }
  }

  previousPage() {
    if (this.state.page <= 1) {
      this.setState({
        page: 1,
      });

    } else {
      this.changePage(this.state.page - 1)
    }
  }

  render() {
    let { received } = this.state;
    let id = this.state.id
      if (id == "1") { id = "Aceites"}
      else if ( id == "2") { id = "Adivitivos y materias primas"}
      else if ( id == "3") { id = "Aguas y aguas gasificadas"}
      else if ( id == "4") { id = "Alfajores"}
      else if ( id == "5") { id = "Algas"}
      else if ( id == "6") { id = "Alimentos para lactantes (0-12 meses)"}
      else if ( id == "7") { id = "Alimentos para niños en primera infancia (1-3 años)"}
      else if ( id == "8") { id = "Alimentos para propósitos médicos específicos"}
      else if ( id == "9") { id = "Azúcares y mieles"}
      else if ( id == "10") { id = "Barritas de cereal "}
      else if ( id == "11") { id = "Bebidas a base de leche"}
      else if ( id == "12") { id = "Bebidas alcohólicas"}
      else if ( id == "13") { id = "Bebidas sin alcohol y productos para prepararlas"}
      else if ( id == "14") { id = "Bombones y chocolates"}
      else if ( id == "15") { id = "Cacaos"}
      else if ( id == "16") { id = "Cafés y sustitutos"}
      else if ( id == "17") { id = "Caldos y sopas"}
      else if ( id == "18") { id = "Caramelos, chicles, confites y pastillas"}
      else if ( id == "19") { id = "Carnes"}
      else if ( id == "20") { id = "Cereales para desayuno"}
      else if ( id == "21") { id = "Cereales, harinas, premezclas y semillas"}
      else if ( id == "22") { id = "Coberturas, rellenos y salsas dulces"}
      else if ( id == "23") { id = "Comidas preparadas y semielaboradas"}
      else if ( id == "24") { id = "Condimentos"}
      else if ( id == "25") { id = "Conservas de carnes"}
      else if ( id == "26") { id = "Conservas de frutas"}
      else if ( id == "27") { id = "Conservas de hortalizas, verduras y legumbres"}
      else if ( id == "28") { id = "Cremas"}
      else if ( id == "29") { id = "Dulces de leche "}
      else if ( id == "30") { id = "Edulcorantes de mesa"}
      else if ( id == "31") { id = "Fiambres y embutidos"}
      else if ( id == "32") { id = "Frutas secas y desecadas"}
      else if ( id == "33") { id = "Galletas y galletitas"}
      else if ( id == "34") { id = "Golosinas"}
      else if ( id == "35") { id = "Hortalizas, verduras y hongos "}
      else if ( id == "36") { id = "Leches"}
      else if ( id == "37") { id = "Leches fermentadas"}
      else if ( id == "38") { id = "Legumbres"}
      else if ( id == "39") { id = "Leudantes"}
      else if ( id == "40") { id = "Mantecas"}
      else if ( id == "41") { id = "Margarinas"}
      else if ( id == "42") { id = "Mermeladas, confituras y dulces"}
      else if ( id == "43") { id = "Panes y productos de panaderia"}
      else if ( id == "44") { id = "Pastas"}
      else if ( id == "45") { id = "Postres, flanes y helados listos para consumir"}
      else if ( id == "46") { id = "Productos de confiteria"}
      else if ( id == "47") { id = "Productos de reposteria"}
      else if ( id == "48") { id = "Productos para preparar postres, flanes, gelatinas y helados"}
      else if ( id == "48") { id = "Quesos"}
      else if ( id == "50") { id = "Sales"}
      else if ( id == "51") { id = "Salsas y aderezos"}
      else if ( id == "52") { id = "Snacks"}
      else if ( id == "53") { id = "Suplementos dietarios"}
      else if ( id == "54") { id = "Tés e infusiones"}
      else if ( id == "55") { id = "Yerba mate"}
      else if ( id == "56") { id = "Yogures "}

    let length = ''
    let prodslength = ''
    let page = ''

    { this.state.received ? (length = this.state.data.length, prodslength = this.state.renderedData.length, page = this.state.page) : ('') }

    return (
      <div className='Main'>

        <Header />

        <div className="container">
          <div>
            <br />
            <br />
            <h2 className="my-4">{id}</h2>
          </div>

          <div className='quantity'>Pagina {page} | Mostrando {prodslength * (page - 1)} - {prodslength * page} de {length} productos</div>

          <ul className="pagination justify-content-center">
            <li className="page-item">
              <div className="page-link" onClick={this.previousPage}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={this.nextPage}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </div>
            </li>
          </ul>

          <div>
            {received ? (
              <div className="row">
                {this.state.renderedData.map((result, index) => {
                  return <Product key={index} result={result} received={this.state.received} />;
                })}
              </div>
            ) : (
                ''
              )}
          </div>


        </div>

        <ul className="pagination justify-content-center">
          <li className="page-item">
            <div className="page-link" onClick={this.previousPage}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" onClick={this.nextPage}>
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
        </ul>

        <Footer />
      </div>
    );
  }
}

export default CategoryResults;