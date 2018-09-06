import React, { Component } from 'react';

class SingleCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let url = this.props.result.url
    let link = './categoria/' + url

    return (
      <div className="col-md-3 category-responsive">
                <a href={link} className="category-wrap">
                  <div className="category-block">
                  {this.props.result.svg}
                    <h6>{this.props.result.categorias}</h6>
                  </div>
                </a>
              </div>
    );
  }
}

export default SingleCategory;