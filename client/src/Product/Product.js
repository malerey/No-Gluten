// import React, { Component } from 'react';
// import Search from '../Search/Search';
// import Details from '../Details/Details';


// class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       received: false,
//       data: {}
//     };
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     fetch('http://localhost:3001/api/items/' + id)
//       .then(result => {
//         return result.json();
//       })
//       .then(data => {
//         this.setState({
//           data: data,
//           received: true
//         });
//       });
//   }

//   render() {
//     return (
//       <div className='Main'>
//         <Search />

//         <Details details={this.state} />
//       </div>
//     );
//   }
// }

// export default Product;
