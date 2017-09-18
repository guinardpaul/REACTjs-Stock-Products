import React, { Component } from 'react';
import { ProductRow } from './ProductRow';
import { ProductCategoryRow } from './ProductCategoryRow';

export class ProductTable extends Component {
  render() {
    const rows = this.props.products.map((product, index) => {
      return (
        <ProductRow product={product} key={index} />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}