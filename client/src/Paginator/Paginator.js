import React, { Component } from 'react'
import Product from '../Product/Product'
import '../App.css'


class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            url: this.props.url,
            total: this.props.total,
            query: this.props.query,
            data: this.props.data

        }

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }
    

    changePage(page) {

        const offset = (page - 1) * 8;
        const url = this.state.url + this.state.query + '?limit=8&offset=' + offset
    
        fetch(url)
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

        let query = this.state.query
        let page = this.state.page
        let prodslength = this.state.data.length
        let length = this.state.total

        return (
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
                  <div className="row">
                    {this.state.data.map((result, index) => {
                      return <Product key={index} result={result} />;
                    })}
                  </div>
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
        );
    }
}

export default Paginator;