import React, { Component } from 'react';
import Search from './Search/Search'
import HomeCategories from './HomeCategories/HomeCategories'


class App extends Component {

  render() {
    return (

    <div>
      <Search />
      <HomeCategories />
    </div>
    );
  }
}

export default App;

