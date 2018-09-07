import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import '../App.css'

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      page: 1,
      received: false,
      query: '',
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    const offset = (this.state.page - 1) * 8;
    let query = this.props.match.params.query
    fetch('https://server-uqoftcoieo.now.sh/busqueda/' + query)
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          data: result,
          renderedData: result.slice(offset, offset + 8),
          received: true,
          query: query,
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
    let query = this.state.query
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
            <h2 className="my-4">Resultados para "{query}"</h2>
          </div>

          <div className='quantity'>Página {page} | Mostrando {prodslength * (page - 1)} - {prodslength * page} de {length} productos</div>

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

export default Resultados;