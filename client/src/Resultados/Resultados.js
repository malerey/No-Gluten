import React, { Component } from 'react';
import Loader from '../Spinners/Loader';
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
      ajaxCompleted: false,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    const offset = (this.state.page - 1) * 8;
    let query = this.props.match.params.query
    fetch('https://server-ehygnedhic.now.sh/busqueda/' + query + '?limit=8&offset=' + offset)
      .then(data => {
        return data.json();
      })
      .then(result => {
        console.log(result.length)
        console.log(result)
        this.setState({
          data: result,
          total: result[0]['full_count'],
          received: true,
          query: query,
          ajaxCompleted: true
        });
      });
  }

  changePage(page) {
    let prods = [...this.state.data]
    const offset = (page - 1) * 8;

    fetch('https://server-ehygnedhic.now.sh/busqueda/' + this.state.query + '?limit=8&offset=' + offset)
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          data: result,
          page: page
        });
      });
  }

  nextPage() {
    if (this.state.page >= this.state.total / 8) {
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
    let length = this.state.total
    let prodslength = ''
    let page = this.state.page

    { this.state.received ? (prodslength = this.state.data.length) : ('') }

    return (
      
      <div className='Main'>

        <Header />

        { !this.state.ajaxCompleted ? (
          <Loader
              type="ThreeDots"
              color="#0d98ba"
              height="200"	
              width="200"
              
            />
        ) : (
        
        <div>
        <div className="container">
          <div>
            <br />
            <br />
            <h2 className="my-4">Resultados para "{query}"</h2>
          </div>

          <div className='quantity'>Página {page} | Mostrando {8 * (page - 1)} - {(8 * (page -1)) + prodslength} de {length} productos</div>

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
                {this.state.data.map((result, index) => {
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
        </div>
        )}
        
        <Footer />
      </div>
   
    );
  }
}

export default Resultados;