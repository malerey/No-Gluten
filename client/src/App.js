import React, { Component } from 'react';
import Header from './Header/Header'
import Search from './Search/Search'
import HomeCategories from './HomeCategories/HomeCategories'
import Footer from './Footer/Footer'



class App extends Component {

  render() {
    return (

    <div>
      <Header />
      <Search />
      <HomeCategories />
      <Footer />
    </div>
    );
  }
}

export default App;

