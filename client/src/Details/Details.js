// import React, { Component } from 'react';
// import '../scss/Details.css';

// class Product extends Component {

//   render() {
//     const received = this.props.details.received;
//     const props = this.props.details.data.item
//     return (
//       <div className='product-container'>
//         <div className='img-container'>
//           <img alt={received ? props.title : ''} src={received ? props.picture : ''} />
//         </div>

//         <div className='title-container'>
//           <span className='condition'>{received ? props.condition : ''}</span>{' '}
//           <span>
//             - {received ? props.sold_quantity : ''}{' '}
//             vendidos
//           </span>
//           <h1>{received ? props.title : ''}</h1>

//           <div className='price-container'>
//             <span>
//               {received ? props.price.currency  : ' '}{' '}
//               {received
//                 ? props.price.amount.toLocaleString('es')
//                 : ''}
//             </span>
//             <span className='decimals'>
//               {' '}
//               {received ? props.price.decimals : ''}
//             </span>
//           </div>

//           <button className='buybtn'>Comprar</button>
//         </div>

//         <div className='description-container'>
//           <p className='description-title'>Descripción del producto</p>
//           <p className='description'>
//             {received ? props.description : ''}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Product;

