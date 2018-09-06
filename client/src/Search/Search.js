import React, { Component } from 'react';
import '../scss/Search.css';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  handleChange(e) {
    const value = e.target.value;
    console.log(value)

    this.setState({
      url: value
    });
  }

  render() {
    const url = '/busqueda/' + this.state.url;
    return (

    <div className="slider d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="slider-title_box">
              <div className="row">
                <div className="col-md-12">
                  <div className="slider-content_wrap">
                    <h1>Sin gluten!</h1>
                    <h5>Una manera fácil y rápida de buscar los alimentos listados por ANMAT</h5>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                  <form className="form-wrap mt-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <input type="text" placeholder="¿Qué estás buscando?" className="btn-group1" value={this.state.url} onChange={this.handleChange.bind(this)}></input>
                      <Link to={url}>
                      <button type="submit" className="btn-form"><span className="icon-magnifier search-icon"></span>BUSCAR<i className="pe-7s-angle-right"></i></button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Search;


