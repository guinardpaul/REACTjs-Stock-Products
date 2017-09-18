import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { ProductTable } from './components/ProductTable';

class App extends Component {
  render() {
    return (
      <div className="marge-top marge-left border row">
        <SearchBar />
        <div className="marge-top">
          <ProductTable products={this.props.products} />
        </div>
      </div>
    );
  }
}

export default App;
