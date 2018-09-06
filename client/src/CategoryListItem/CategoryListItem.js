import React, { Component } from 'react';
import '../App.css'


class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      received: false,
      data: {}
    };
  }


  render() {
    console.log(this.props.result)
    let props = this.props.result 
    let url = './categoria/' + this.props.result.url

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <a href={url}><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href={url}>{this.props.result.name}</a>
          </h4>
          <p className="card-text">Listado de todos los productos bajo la categoria "{this.props.result.name}" de ANMAT</p>
        </div>
      </div>
    </div>
    );
  }
}

export default CategoryListItem;