import React, { Component } from 'react';
import Loader from '../Spinners/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Paginator from '../Paginator/Paginator'


class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      query: '',
      ajaxCompleted: false,
    };

  }

  componentDidMount() {
    let query = this.props.match.params.query
    let limit  = 8
    let offset = 0
    fetch('https://server-ehygnedhic.now.sh/busqueda/' + query + '?limit=' + limit +'&offset=' + offset)
      .then(data => {
        return data.json();
      })
      .then(result => {
        console.log(result.length)
        console.log(result)
        this.setState({
          data: result,
          total: (result.length ? result[0]['full_count'] : 0),
          query: query,
          ajaxCompleted: true
        });
      });
  }

  render() {

    let query = this.state.query
    let length = this.state.total

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
          
          <Paginator
            url="'https://server-ehygnedhic.now.sh/busqueda/"
            total={length}
            query={query}
            data={this.state.data}
          />
        
        )}
        
        <Footer />
      </div>
   
    );
  }
}

export default Resultados;