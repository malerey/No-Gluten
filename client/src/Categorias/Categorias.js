import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import '../App.css'

class CategoryResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [
        { 'url' : '1', 'name': 'Aceites' }, { 'url' : '2', 'name': 'Adivitivos y materias primas' }, { 'url' : '3', 'name': 'Aguas y aguas gasificadas' }, { 'url' : '4', 'name': 'Alfajores' },
        { 'url' : '5', 'name': 'Algas' }, { 'url' : '6', 'name': 'Alimentos para lactantes (0-12 meses)' }, { 'url' : '7', 'name': 'Alimentos para niños en primera infancia (1-3 años)' },
        { 'url' : '8', 'name': 'Alimentos para propósitos médicos específicos' }, { 'url' : '9', 'name': 'Azúcares y mieles' }, { 'url' : '10', 'name': 'Barritas de cereal' },
        { 'url' : '11', 'name': 'Bebidas a base de leche' }, { 'url' : '12', 'name': 'Bebidas alcohólicas' }, { 'url' : '13', 'name': 'Bebidas sin alcohol y productos para prepararlas' },
        { 'url' : '14', 'name': 'Bombones y chocolates' }, { 'url' : '15', 'name': 'Cacaos' }, { 'url' : '16', 'name': 'Cafés y sustitutos' }, { 'url' : '17', 'name': 'Caldos y sopas' },
        { 'url' : '18', 'name': 'Caramelos, chicles, confites y pastillas' }, { 'url' : '19', 'name': 'Carnes' }, { 'url' : '20', 'name': 'Cereales para desayuno' },
        { 'url' : '21', 'name': 'Cereales, harinas, premezclas y semillas' }, { 'url' : '22', 'name': 'Coberturas, rellenos y salsas dulces' }, { 'url' : '23', 'name': 'Comidas preparadas y semielaboradas' },
        { 'url' : '24', 'name': 'Condimentos' }, { 'url' : '25', 'name': 'Conservas de carnes' }, { 'url' : '26', 'name': 'Conservas de frutas' }, { 'url' : '27', 'name': 'Conservas de hortalizas, verduras y legumbres' },
        { 'url' : '28', 'name': 'Cremas' }, { 'url' : '29', 'name': 'Dulces de leche ' }, { 'url' : '30', 'name': 'Edulcorantes de mesa' }, { 'url' : '31', 'name': 'Fiambres y embutidos' },
        { 'url' : '32', 'name': 'Frutas secas y desecadas' }, { 'url' : '33', 'name': 'Galletas y galletitas' }, { 'url' : '34', 'name': 'Golosinas' }, { 'url' : '35', 'name': 'Hortalizas, verduras y hongos ' },
        { 'url' : '36', 'name': 'Leches' }, { 'url' : '37', 'name': 'Leches fermentadas' }, { 'url' : '38', 'name': 'Legumbres' }, { 'url' : '39', 'name': 'Leudantes' },
        { 'url' : '40', 'name': 'Mantecas' }, { 'url' : '41', 'name': 'Margarinas' }, { 'url' : '42', 'name': 'Mermeladas, confituras y dulces' },
        { 'url' : '43', 'name': 'Panes y productos de panadería' }, { 'url' : '44', 'name': 'Pastas'}, { 'url' : '45', 'name':  'Postres, flanes y helados listos para consumir'},
        { 'url' : '46', 'name': 'Productos de confitería' }, { 'url' : '47', 'name': 'Productos de repostería' }, { 'url' : '48', 'name': 'Productos para preparar postres, flanes, gelatinas y helados' },
        { 'url' : '49', 'name': 'Quesos' }, { 'url' : '50', 'name': 'Sales' }, { 'url' : '51', 'name': 'Salsas y aderezos' },
        { 'url' : '52', 'name': 'Snacks' }, { 'url' : '53', 'name': 'Suplementos dietarios ' }, { 'url' : '54', 'name': 'Tés e infusiones ' }, { 'url' : '55', 'name': 'Yerba mate '}, {'url': '56', 'name': 'Yogures' }
      ],
      renderedData: '',
      received: false,
      page: 1
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    const offset = (this.state.page - 1) * 8;
        this.setState({
          renderedData: this.state.result.slice(offset, offset + 8),
          received: true,
      });
  }

  changePage(page) {
    let prods = [...this.state.result]
    const offset = (page - 1) * 8;
    this.setState({
      page: page,
      renderedData: prods.slice(offset, offset + 8),
    });
  }

  nextPage() {
    if (this.state.page >= this.state.result.length / 8) {
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
    let length = ''
    let prodslength = ''
    let page = ''

    { this.state.received ? (length = this.state.result.length, prodslength = this.state.renderedData.length, page = this.state.page) : ('') }

    return (
      <div className='Main'>

        <Header />

        <div className="container">
          <div>
            <br />
            <br />
            <h2 className="my-4">Categorías</h2>
          </div>

          <div className='quantity'>Página {page} | Mostrando {prodslength * (page - 1)} - {prodslength * page} de {length} categorías</div>

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
                  return <CategoryListItem key={index} result={result} received={this.state.received} />;
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